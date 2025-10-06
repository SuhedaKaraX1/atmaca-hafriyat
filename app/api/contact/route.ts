import { PrismaClient } from "@/lib/generated/prisma"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const data = await req.json()
  const contact = await prisma.contact.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    },
  })

  // Dinamik import ile nodemailer
  const nodemailer = (await import("nodemailer")).default

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