import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const devEmail = process.env.DEV_EMAIL;

export async function POST(req, res) {
  const { firstName,lastName, email, subject, message } = await req.json();
 console.log(firstName,lastName,devEmail,email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "Akila<akilasrikantha2000@gmail.com>",
      to: [email],
      subject: "Your message sent successfully",
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    },{
      from: [firstName],
      to: [devEmail],
      subject: "You have received a new message",
      react: (
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    }
  
  
  );
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}