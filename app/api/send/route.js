import { Resend } from 'resend';

const resend = new Resend('re_EhF8aS5e_8XihMERR1c8dnXH8zSDD9x4Z');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'akilasrikantha2000@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});