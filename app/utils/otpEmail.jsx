const message = "This is from nodemailer";
let otp = 0;
export function emailMaker(receiver_email) {
  console.log("receiver_email", receiver_email);
  const otp = generateOTP();
  return {
    from: process.env.SENDER_EMAIL,
    to: receiver_email,
    subject: "Sending through SMTP",
    text: `Message: ${message}.This is your OTP:${otp}`,
  };
}

function generateOTP() {
  return Math.floor(Math.random() * 9000) + 1000;
}
