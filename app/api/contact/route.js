import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import {
  emailMaker,
  thankYouFunction,
  mailToCompany,
} from "@/app/utils/otpEmail";
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
    console.log("data here", data);
    const mailOptions = thankYouFunction(data.email);
    const mailtoUs = mailToCompany(data);

    console.log("mailOptions", mailOptions);
    console.log("mailToCompany", mailtoUs);
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailtoUs);
    return NextResponse.json(
      {
        success: true,
        message: "Your email has been sent",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal Server error" },
      { status: 500 },
    );
  }
}
