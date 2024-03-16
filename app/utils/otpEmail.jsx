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

export function thankYouFunction(receiver_email) {
  return {
    from: process.env.SENDER_EMAIL,
    to: receiver_email,
    subject: "Officiel CRM",
    text: `Message:Thank you for Contacting Officiel CRM. We'll get back to you!  `,
  };
}

export function mailToCompany(data) {
  return {
    from: process.env.SENDER_EMAIL,
    to: process.env.SENDER_EMAIL,
    subject: "NEW INQUIRY",
    text: `INQUIRY from :${data.fullName} (${data.email}) Message: ${data.message}. `,
  };
}
