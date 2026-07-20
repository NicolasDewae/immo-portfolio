import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { firstname, lastname, email, phone, message } = await request.json();

  if (!email || !message) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `Nouveau message de ${firstname} ${lastname}`,
    text: [
      `Prénom : ${firstname}`,
      `Nom : ${lastname}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      '',
      message,
    ].join('\n'),
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: "Échec de l'envoi." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
