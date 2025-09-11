import pool from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { uid } = req.query;

  try {
    const result = await pool.query(
      "SELECT * FROM certificates WHERE unique_id=$1",
      [uid]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No certificate found" });
    }

    return res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("DB error:", err);
    return res.status(500).json({ error: "Database error" });
  }
}
