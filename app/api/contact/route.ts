import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, subject, message } = data

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com", // Your email address
        pass: 'zfie hmte iyxt wyto', // Your email password or app password
      },
    })

    // Email to organization
    const organizationMailOptions = {
      from: "chvamshi03@gmail.com",
      to: "tarannum.s@tasconmedia.com, info@tasconmedia.com, digital.maxpo@gmail.com",
      subject: `Contact Form: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    // Email to sender (confirmation)
    const senderMailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: email,
      subject: "Thank You for Contacting Global FinTech Fest & Awards",
      html: `
        <h1>Thank You for Contacting Us</h1>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to the Global FinTech Fest & Awards team. We have received your message regarding "${subject}" and will respond as soon as possible.</p>
        <p>For urgent inquiries, please call us at +27 12 345 6789.</p>
        <p>Best regards,</p>
        <p>The Africa FinTech Fest & Awards Team</p>
      `,
    }

    // Send emails
    await transporter.sendMail(organizationMailOptions)
    await transporter.sendMail(senderMailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

