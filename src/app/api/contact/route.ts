import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    console.log('📩 Tentative d\'envoi d\'email...');
    console.log('De:', name, '(' + email + ')');

    // Validation des champs requis
    if (!name || !email || !message) {
      console.log('❌ Validation échouée');
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      );
    }

    // Configuration du transporteur SMTP Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // contact@agencybinary.fr
        pass: process.env.GMAIL_APP_PASSWORD, // Mot de passe d'application Gmail
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: `"Agency Binary - Formulaire Contact" <${process.env.GMAIL_USER}>`, // Envoyé depuis Gmail
      to: 'contact@agencybinary.fr', // Reçu sur contact@agencybinary.fr
      replyTo: email, // Répondre directement au client
      subject: `Nouveau message de ${name}${company ? ` (${company})` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
              <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
                Nouveau message depuis le formulaire de contact
              </h2>
              
              <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 10px 0;"><strong>Nom :</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
                ${company ? `<p style="margin: 10px 0;"><strong>Entreprise :</strong> ${company}</p>` : ''}
                
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 10px 0;"><strong>Message :</strong></p>
                  <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px;">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background-color: #e0e7ff; border-radius: 8px;">
                <p style="margin: 0; font-size: 14px; color: #4338ca;">
                  💡 <strong>Astuce :</strong> Cliquez sur "Répondre" pour répondre directement à ${name} (${email}).
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Envoi de l'email
    console.log('📧 Envoi via Gmail SMTP...');
    console.log('Gmail User:', process.env.GMAIL_USER);
    console.log('Mot de passe présent:', !!process.env.GMAIL_APP_PASSWORD);
    await transporter.sendMail(mailOptions);

    console.log('✅ Email envoyé avec succès depuis et vers contact@agencybinary.fr');

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message.' },
      { status: 500 }
    );
  }
}
