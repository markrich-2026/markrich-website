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
    const [fields, files] = await form.parse(req);

    const file = files.excel[0]; // formidable v3 returns array
    const workbook = XLSX.readFile(file.filepath);
    const sheetName = workbook.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Map Excel headers to DB columns
    const mappedRows = rows.map((row) => ({
      unique_id: row["Certificate ID"],        // Excel → DB
      full_name: row["Participant Name"],
      course_name: row["Training"],
      completion_date: row["Date of Completion"]
        ? new Date(row["Date of Completion"])
        : null,
    }));

    let inserted = 0;
    for (const cert of mappedRows) {
      if (!cert.unique_id) continue; // skip empty rows
      await pool.query(
        `INSERT INTO certificates (unique_id, full_name, course_name, completion_date)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (unique_id) DO UPDATE 
         SET full_name = EXCLUDED.full_name,
             course_name = EXCLUDED.course_name,
             completion_date = EXCLUDED.completion_date`,
        [cert.unique_id, cert.full_name, cert.course_name, cert.completion_date]
      );
      inserted++;
    }

    res.status(200).json({ inserted });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: err.message });
  }
}
