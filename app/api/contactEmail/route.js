import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {
  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });

  const mailOptions = {
    from: process.env.AUTH_EMAIL, // Use your email
    to: process.env.AUTH_EMAIL, // Your email to receive messages
    replyTo: email, // User's email
    subject: `Message from ${name}: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p>From: ${name} &lt;${email}&gt;</p><p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Email send successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error sending email", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
