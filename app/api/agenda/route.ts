import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, interests, session_preference, networking_goals } = data

    // Validate required fields
    if (!name || !email || !interests || !session_preference) {
      return NextResponse.json({ error: "Required fields are missing" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    // Format interests and session preferences for email
    const formattedInterests = Array.isArray(interests) ? interests.join(", ") : interests
    const formattedSessions = Array.isArray(session_preference) ? session_preference.join(", ") : session_preference

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
      subject: `Agenda Preferences: ${name}`,
      html: `
        <h1>New Agenda Preferences Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interests:</strong> ${formattedInterests}</p>
        <p><strong>Preferred Session Types:</strong> ${formattedSessions}</p>
        <p><strong>Networking Goals:</strong></p>
        <p>${networking_goals ? networking_goals.replace(/\n/g, "<br>") : "None specified"}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    // Email to attendee (confirmation)
    const attendeeMailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: email,
      subject: "Your Global FinTech Fest & Awards Preferences Confirmed",
      html: `
        <h1>Thank You for Personalizing Your Experience</h1>
        <p>Dear ${name},</p>
        <p>Thank you for sharing your preferences for the Global FinTech Fest & Awards. We've recorded your interests and will use this information to enhance your event experience.</p>
        <p><strong>Your selected interests:</strong> ${formattedInterests}</p>
        <p><strong>Your preferred session types:</strong> ${formattedSessions}</p>
        ${networking_goals ? `<p><strong>Your networking goals:</strong> ${networking_goals.replace(/\n/g, "<br>")}</p>` : ""}
        <p>We'll be in touch with personalized recommendations based on your preferences.</p>
        <p>If you need to update your preferences or have any questions, please contact us at <a href="mailto:info@africafintechfest.com">info@africafintechfest.com</a>.</p>
        <p>Best regards,</p>
        <p>The Global FinTech Fest & Awards Team</p>
      `,
    }

    // Send emails
    await transporter.sendMail(organizationMailOptions)
    await transporter.sendMail(attendeeMailOptions)

    return NextResponse.json({
      success: true,
      message: "Preferences saved successfully",
    })
  } catch (error) {
    console.error("Error processing agenda preferences:", error)
    return NextResponse.json({ error: "Failed to save preferences" }, { status: 500 })
  }
}

