// Test de l'API Resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  console.log('🔍 Test de Resend...');
  console.log('API Key:', process.env.RESEND_API_KEY ? 'Présente ✓' : 'MANQUANTE ✗');
  
  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['agency.binary@gmail.com'],
      subject: 'Test Email - Resend',
      html: '<h1>Email de test</h1><p>Si vous recevez ceci, Resend fonctionne !</p>',
    });

    console.log('✅ Email envoyé avec succès!');
    console.log('ID:', data.id);
    console.log('Vérifiez votre boîte agency.binary@gmail.com');
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

testEmail();
