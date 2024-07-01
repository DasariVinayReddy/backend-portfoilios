import nodemailer from "nodemailer";
import fs from "fs";

import { config } from "dotenv";
config(); // Load environment variables from .env file

const logToFile = (message) => {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFile("sendMail.log", logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
};

export const sendEmail = async (name, email, phone, subject, message) => {
  logToFile("Sending email...");
  // Define the email template
  const emailTemplate = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
`;
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `New message from ${name}`,
      text: emailTemplate.replace(
        /\${(\w+)}/g,
        (match, placeholder) => formData[placeholder] || ""
      ),
    };

    // Send email asynchronously
    await transporter.sendMail(mailOptions);
    logToFile("Email sent!");
    return true;
  } catch (error) {
    logToFile(`Error sending email: ${error.message}`);
    return false;
  }
};
