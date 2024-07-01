// import twilio from "twilio";

// // Function to send WhatsApp message
// export const sendWhatsAppMessage = async (formData) => {
//   if (!formData || typeof formData !== "object") {
//     console.error("undefined");
//     return;
//   }

//   const {
//     name = "",
//     email = "",
//     phone = "",
//     subject = "",
//     message = "",
//   } = formData;

//   // Check if the properties exist and assign them to the respective variables
//   if (formData.name !== undefined) name = formData.name;
//   if (formData.email !== undefined) email = formData.email;
//   if (formData.phone !== undefined) phone = formData.phone;
//   if (formData.subject !== undefined) subject = formData.subject;
//   if (formData.message !== undefined) message = formData.message;

//   const body = `Name: ${name}\nEmail: ${email}\nphone: ${phone}\nMessage: ${message}\nsubject:${subject}`;
//   const to = "7799262831"; // Recipient's WhatsApp number

//   const accountSid = "AC8cfa501ab46f71f23f6b107bd4ef12e4";
//   const authToken = "0f8c4780dd9fd9bd2513868fb07ffdb9";
//   const twilioNumber = "+917799262831";

//   const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

//   const data = {
//     From: `whatsapp:${twilioNumber}`,
//     To: `whatsapp:${to}`,
//     Body: body,
//   };

//   const config = {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: `Basic ${Buffer.from(
//         `${accountSid}:${authToken}`
//       ).toString("base64")}`,
//     },
//   };

//   await axios.post(url, new URLSearchParams(data), config);
// };

// export default sendWhatsAppMessage;
