import pool from "../../lib/db";
import formidable from "formidable";
import * as XLSX from "xlsx";

export const config = {
  api: {
    bodyParser: false, // Required for formidable
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const form = formidable({});
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    const file = files.excel[0]; // formidable v3 returns array

    // ✅ Important: force Excel dates to become proper JS Dates/strings
    const workbook = XLSX.readFile(file.filepath, { cellDates: true });
    const sheetName = workbook.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
      raw: false,          // ensures conversion instead of raw serial numbers
      dateNF: "yyyy-mm-dd" // forces consistent output format
    });

    const mappedRows = rows.map((row) => {
      const unique_id =
        row["Certificate ID"] ||
        row["unique_id"] ||
        row["ID"] ||
        row["certificate_id"];
      const full_name =
        row["Participant Name"] ||
        row["full_name"] ||
        row["Name"] ||
        row["participant"];
      const course_name =
        row["Training"] || row["course_name"] || row["Course"];
      const completion_date_raw =
        row["Date of Completion"] || row["completion_date"];

      // If it's already a Date object, convert to yyyy-mm-dd
      let completion_date = null;
      if (completion_date_raw instanceof Date) {
        completion_date = completion_date_raw.toISOString().slice(0, 10);
      } else if (typeof completion_date_raw === "string") {
        completion_date = completion_date_raw.trim();
      }

      return { unique_id, full_name, course_name, completion_date };
    });

    let inserted = 0;
    let skipped = 0;

    for (const cert of mappedRows) {
      if (!cert.unique_id || !cert.full_name || !cert.course_name || !cert.completion_date) {
        skipped++;
        console.log(`Skipping row: Missing fields - ${JSON.stringify(cert)}`);
        continue;
      }

      try {
        await pool.query(
          `INSERT INTO certificates (unique_id, full_name, course_name, completion_date)
           VALUES ($1, $2, $3, $4::date)
           ON CONFLICT (unique_id) DO UPDATE 
           SET full_name = EXCLUDED.full_name,
               course_name = EXCLUDED.course_name,
               completion_date = EXCLUDED.completion_date`,
          [cert.unique_id, cert.full_name, cert.course_name, cert.completion_date]
        );
        inserted++;
      } catch (err) {
        skipped++;
        console.error(`Error inserting row: ${cert.unique_id} - ${err.message}`);
      }
    }

    res.status(200).json({ inserted, skipped });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: err.message });
  }
}
