import EmailSender from "@/app/components/EmailSender";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
const nodemailer = require("nodemailer");
// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, naslov, text, ime } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "andrijadj96@gmail.com",
      pass: "jvylptuuooehcqpo",
    },
  });
  const mailOptions = {
    from: email,
    to: "andrijadj96@gmail.com",
    subject: naslov,
    html: `<h1>${ime}</h1> 
  
    <p>${text}</p>
    
    from <a href="mailto:${email}">${email}</a>
    `,
  };
  const mailOptionss = {
    from: "andrijadj96@gmail.com",
    to: email,
    subject: naslov,
    html: `<h1>Poštovani, primili smo vašu poruku</h1> 
  
    <p>Poštovani, želimo da Vas obavestimo da smo primili Vašu poruku i da ćemo u najkraćem 
    mogućem roku odgovoriti na nju</p>

    <h2>Srdačno, Vaš Pound </h2>
    `,
  };
  try {
    await transporter.sendMail({
      ...mailOptions,
    });
    await transporter.sendMail({
      ...mailOptionss,
    });
    return res.status(200).json({ success: "true" });
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
}
