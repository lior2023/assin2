import { EMAIL_ADDRESS, EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT } from '@/constants';
import nodemailer, { TransportOptions } from 'nodemailer';

export async function sendEmail(data: Record<string, string>) {
  const transport = getEmailTransport();
  const message = {
    from: EMAIL_ADDRESS,
    to: data.email,
    subject: 'Digital Product Jam Contact Form Message',
    text: data.message,
    html: `<p>${data.message}</p>`,
  }
  // default to false and only set true if the email is sent successfully
  let success = false;
  try {
    await transport.sendMail(message);
    success = true;
  } catch (error) {
    console.log(error)
  }
  return success;
}

export function getEmailTransport() {
  const transport = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    // this doesnt mean it is not secure. see https://nodemailer.com/smtp/
    secure: false,
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD,
    },
  } as TransportOptions);
  return transport;
}
