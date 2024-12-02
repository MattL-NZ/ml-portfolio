import sendgrid from "@sendgrid/mail";
import { env } from "$env/dynamic/private";

// Send email via SendGrid when a user completes the contact form
export async function POST({ request }) {
  try {
    const { contactName, contactEmail, contactMessage } = await request.json();
    sendgrid.setApiKey(env.SENDGRID_API_KEY);
    const msg = {
      to: "mattylist@gmail.com",
      from: "matthewlist@outlook.com",
      subject: "Mattlist.dev - Contact Form Submission",
      text: `Name: ${contactName}\nEmail: ${contactEmail}\nMessage: ${contactMessage}`,
    };
    await sendgrid.send(msg);

    return new Response("Message sent", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
