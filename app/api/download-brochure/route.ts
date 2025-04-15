import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, company, jobTitle, phoneNumber, consent } = data

    // Validate required fields
    if (!name || !email || !phoneNumber || !jobTitle || !consent) {
      return NextResponse.json({ error: "Name, email, phone number, job title, and consent are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[0-9+\-\s()]{7,15}$/
    if (!phoneRegex.test(phoneNumber)) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 })
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com", // Your email address
        pass: 'zfie hmte iyxt wyto', // Your email password or app password
      },
    })

    // 📩 Email to Admin
    const adminMailOptions = {
      from: "chvamshi03@gmail.com",
      to: "tarannum.s@tasconmedia.com, info@tasconmedia.com, digital.maxpo@gmail.com",
      subject: "New Brochure Download Request",
      html: `
        <h2>New Brochure Download Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Consent Given:</strong> ${consent ? "Yes" : "No"}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    // 📩 Email to User (Brochure Download Link)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Brochure Download - Africa FinTech Fest & Awards",
      html: `
        <h2>Thank You for Your Interest</h2>
        <p>Dear ${name},</p>
        <p>Thank you for requesting the Africa FinTech Fest & Awards brochure. Click the link below to download your copy:</p>
        <p><a href="https://yourwebsite.com/brochure.pdf" target="_blank">Download Brochure</a></p>
        <p>We look forward to seeing you at the event!</p>
        <p>Best regards,<br>Africa FinTech Fest Team</p>
      `,
    }

    // Send Emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
