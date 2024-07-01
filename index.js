import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sendEmail } from "./sendEmail.js";

const app = express();
const port = 8010;
app.use(cors());

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle email sending
app.post("/api/sendmail", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    // Assuming sendEmail function is correctly defined
    await sendEmail(name, email, phone, subject, message);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

// Default route
app.get("*", (req, res) => {
  res.send(
    'Server is working. Please POST at "/api/sendEmail" to submit a message.'
  );
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
