import { connectMongo } from "@/lib/mongodb"
import Contact from "@/lib/models/Contact"
const nodemailer = (await import("nodemailer")).default

export async function POST(req: Request) {
  await connectMongo()
  const data = await req.json()
  const contact = await Contact.create({
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
  })

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Teklif Talebi" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: "Yeni Teklif Talebi",
      html: `
        <h2>Yeni Teklif Talebi</h2>
        <p><strong>Ad Soyad:</strong> ${data.name}</p>
        <p><strong>E-posta:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Mesaj:</strong> ${data.message}</p>
      `,
    })
  } catch (err) {
    console.error("Mail gönderme hatası:", err)
  }

  return new Response(JSON.stringify(contact), {
    headers: { "Content-Type": "application/json" },
  })
}