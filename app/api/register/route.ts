import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, company, job, phone, ticket } = data

    // Validate required fields
    if (!name || !email || !company || !job || !phone || !ticket) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^\+?[0-9\s\-$$$$]{8,20}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: "Please enter a valid phone number" }, { status: 400 })
    }

    // Get ticket price based on selection
    let ticketPrice = ""
    switch (ticket) {
      case "standard":
        ticketPrice = "$299"
        break
      case "premium":
        ticketPrice = "$599"
        break
      case "vip":
        ticketPrice = "$999"
        break
      default:
        ticketPrice = "Custom pricing"
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
      subject: `New Event Registration: ${ticket.charAt(0).toUpperCase() + ticket.slice(1)} Pass - ${name}`,
      html: `
        <h1>New Event Registration</h1>
        <p><strong>Ticket Type:</strong> ${ticket.charAt(0).toUpperCase() + ticket.slice(1)} Pass (${ticketPrice})</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${job}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Registration Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    // Email to attendee (confirmation)
    const attendeeMailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: email,
      subject: "Your Global FinTech Fest & Awards Registration Confirmation",
      html: `
        <h1>Registration Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Thank you for registering for the Global FinTech Fest & Awards. Your registration has been received and processed successfully.</p>
        <h2>Registration Details:</h2>
        <p><strong>Ticket Type:</strong> ${ticket.charAt(0).toUpperCase() + ticket.slice(1)} Pass</p>
        <p><strong>Price:</strong> ${ticketPrice}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Title:</strong> ${job}</p>
        
        <h2>Event Information:</h2>
        <p><strong>Date:</strong> [Event Date]</p>
        <p><strong>Location:</strong> Johannesburg, South Africa (Venue details to be announced)</p>
        
        <p>We'll send you more details about the event, including the agenda and venue information, as we get closer to the event date.</p>
        
        <p>If you have any questions or need to make changes to your registration, please contact us at info@africafintechfest.com.</p>
        
        <p>We look forward to seeing you at the event!</p>
        
        <p>Best regards,</p>
        <p>The Africa FinTech Fest & Awards Team</p>
      `,
    }

    // Send emails
    await transporter.sendMail(organizationMailOptions)
    await transporter.sendMail(attendeeMailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing registration:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}

