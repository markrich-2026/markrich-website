import { Resend } from "resend";

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ sent: false, message: "Method not allowed" });
  }

  const { fname, lname, email, number, message, a, b, answer, website } = req.body || {};
  if (website) {
    // honeypot filled: pretend success
    return res.status(200).json({ sent: true, message: "Thank you! Your message has been sent." });
  }
  if (!fname || !lname || !email || !number || !message) {
    return res.status(400).json({ sent: false, message: "Please fill in all fields." });
  }
  if (!Number.isInteger(+a) || !Number.isInteger(+b) || +a + +b !== +answer) {
    return res.status(400).json({ sent: false, message: "Wrong answer to the security question. Please try again." });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || "Markrich Website <onboarding@resend.dev>",
      to: (process.env.CONTACT_TO || "outreach.markrich@gmail.com").split(","),
      reply_to: email,
      subject: `New website enquiry from ${fname} ${lname}`,
      html: `<p><b>Name:</b> ${esc(fname)} ${esc(lname)}</p>
<p><b>Email:</b> ${esc(email)}</p>
<p><b>Phone:</b> ${esc(number)}</p>
<p><b>Message:</b><br>${esc(message).replace(/\n/g, "<br>")}</p>`,
    });
    if (error) throw new Error(error.message);

    return res.status(200).json({ sent: true, message: "Thank you! Your message has been sent." });
  } catch (e) {
    console.error("contact form error:", e);
    return res.status(500).json({ sent: false, message: "Something went wrong. Please try again later." });
  }
}
