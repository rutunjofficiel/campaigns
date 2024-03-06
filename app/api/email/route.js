import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { emailMaker } from "@/app/utils/otpEmail";

export async function POST(req) {
  const reader = req.body.getReader();
  let data = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    data += new TextDecoder().decode(value);
    data = JSON.parse(data);
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.SMTP_HOST,
      port: 587,
      secureConnection: false,
      tls: { ciphers: "SSLv3", rejectUnauthorized: false },
      auth: {
        type: "login",
        user: process.env.SENDER_EMAIL,
        pass: process.env.APP_PASSWORD_GMAIL,
      },
    });
    const mailOptions = emailMaker(data.email);
    console.log("mailOptions", mailOptions);
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json(
      {
        success: true,
        message: "Your email has been sent",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server error" },
      { status: 500 }
    );
  }
}
