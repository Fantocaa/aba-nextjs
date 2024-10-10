import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: any) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  // console.log("dealing with request");
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // create transporter object
  const transporter = nodemailer.createTransport({
    // host: "srv1.kotakemail.com",
    // service: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    // port: 465,
    // secure: false,
    secure: true,
    // logger: true,
    // debug: true,

    // secureConnection: false,

    auth: {
      user: username,
      pass: password,
    },

    tls: {
      // ciphers: "SSLv3",
      rejectUnauthorized: true,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email} about "${subject}"`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    // console.log(error);
    // return NextResponse.json({ message: "COULD NOT SEND MESSAGE" });
    // Kirim respons error dengan status 500
    return NextResponse.json(
      { message: "Error: email could not be sent" },
      { status: 500 }
    );
  }
}
