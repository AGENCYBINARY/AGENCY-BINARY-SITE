'use client'

import Link from 'next/link'

export default function Services() {
  return (
    <section id="services" className="py-12 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-purple-50/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-stagger-1">
            Transformez votre entreprise avec nos solutions digitales innovantes
          </p>
        </div>

        {/* Grille des trois nouveaux services */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Service 1: GAIN DE TEMPS */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 to-purple-500/40 rounded-2xl blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-300 -z-10"></div>
            <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-300/40 p-6 hover:border-indigo-400/60 transition-all duration-300 h-full hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 will-change-transform" style={{boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)'}}>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gain de Temps</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Traitement automatisé des demandes pour libérer votre équipe des tâches répétitives
              </p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span>
                  <span className="text-gray-600">Centralisation des demandes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span>
                  <span className="text-gray-600">Réponse automatique immédiate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span>
                  <span className="text-gray-600">Relances systématiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span>
                  <span className="text-gray-600">Détection des priorités</span>
                </li>
              </ul>
              <Link
                href="/gain-temps"
                className="inline-block text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                style={{backgroundColor: '#5170ff'}}
              >
                En savoir plus →
              </Link>
            </div>
          </div>

          {/* Service 2: ASSISTANT IA */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-2xl blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-300 -z-10"></div>
            <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-300/40 p-6 hover:border-purple-400/60 transition-all duration-300 h-full hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 will-change-transform" style={{boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)'}}>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assistant IA</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Assistant métier et administratif interne pour simplifier votre quotidien
              </p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span className="text-gray-600">Aide à la rédaction pro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span className="text-gray-600">Génération devis & factures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span className="text-gray-600">Suivi des documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3">✓</span>
                  <span className="text-gray-600">Portail client sécurisé</span>
                </li>
              </ul>
              <Link
                href="/assistant-ia"
                className="inline-block text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                style={{backgroundColor: '#5170ff'}}
              >
                En savoir plus →
              </Link>
            </div>
          </div>

          {/* Service 3: WEBDESIGN */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 to-rose-500/40 rounded-2xl blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-300 -z-10"></div>
            <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-300/40 p-6 hover:border-pink-400/60 transition-all duration-300 h-full hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 will-change-transform" style={{boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)'}}>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WebDesign</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Interfaces connectées au système pour une expérience utilisateur optimale
              </p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3">✓</span>
                  <span className="text-gray-600">Sites rapides & structurés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3">✓</span>
                  <span className="text-gray-600">Formulaires qualifiés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3">✓</span>
                  <span className="text-gray-600">Connexion aux automatisations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3">✓</span>
                  <span className="text-gray-600">Dashboard centralisé</span>
                </li>
              </ul>
              <Link
                href="/webdesign"
                className="inline-block text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                style={{backgroundColor: '#5170ff'}}
              >
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>

      </div>
      
      {/* Arrondi au bas de la section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-50 to-white rounded-t-3xl"></div>
    </section>
  )
}