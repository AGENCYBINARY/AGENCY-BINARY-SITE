'use client';

import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message envoyé avec succès ! Nous vous répondrons rapidement.',
        });
        // Réinitialiser le formulaire
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Une erreur est survenue lors de l\'envoi.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Erreur de connexion. Veuillez réessayer.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-purple-50/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-stagger-1">
            Prêt à vous lancer dans l'aventure Binary ? Parlons-en ensemble !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left animate-stagger-1">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transformez votre entreprise
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Notre équipe d'experts IA et web est là pour créer votre agent virtuel personnalisé et votre site internet sur mesure. 
                Découvrez comment améliorer votre présence en ligne, optimiser l'expérience client et développer votre activité, quel que soit votre secteur d'activité.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start bg-white/80 p-4 rounded-xl border border-gray-300/40 animate-slide-up animate-stagger-2 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="text-indigo-600 text-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Téléphone</h4>
                  <p className="text-gray-600">07 72 04 02 70</p>
                  <p className="text-gray-600">06 80 85 17 68</p>
                </div>
              </div>

              <div className="flex items-start bg-white/80 p-4 rounded-xl border border-gray-300/40 animate-slide-up animate-stagger-3 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="text-indigo-600 text-xl mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contact@agencybinary.fr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-300/40 animate-slide-in-right animate-stagger-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 bg-white/50 border border-gray-300/40 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 bg-white/50 border border-gray-300/40 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Nom de votre entreprise"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-300/40 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Décrivez votre projet pour votre entreprise..."
                  className="w-full px-4 py-3 bg-white/50 border border-gray-300/40 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
                />
              </div>

              {/* Messages de statut */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-slate-600 hover:to-slate-500 transition-all duration-300 shadow-xl hover:shadow-slate-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}