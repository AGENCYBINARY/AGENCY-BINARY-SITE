'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Footer from '@/components/Footer'

export default function WebDesign() {
  return (
    <div>
      <AnimatedNavbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              WEBDESIGN
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Interfaces connectées au système
            </h2>
          </div>

          {/* Section: Ce que nous faisons */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-indigo-500 pb-4">
              Ce que nous faisons
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nous concevons des <strong>interfaces web opérationnelles</strong>, pensées comme des points d'entrée du système.
            </p>

            <div className="space-y-8">
              {/* Sites clairs */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sites clairs, rapides et structurés</h3>
                <p className="text-gray-700">
                  Les sites sont conçus avec une approche orientée lisibilité, performance et expérience utilisateur.
                </p>
              </div>

              {/* Formulaires */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Formulaires orientés qualification</h3>
                <p className="text-gray-700">
                  Les formulaires sont conçus pour capter des demandes exploitables (besoin, contexte, priorité), et non de simples messages.
                </p>
              </div>

              {/* Connexion */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Connexion directe aux automatisations</h3>
                <p className="text-gray-700">
                  Les formulaires et interactions du site sont directement connectés au système de gestion des demandes.
                </p>
              </div>

              {/* Intégration Agent IA */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intégration Native d'Agent IA</h3>
                <p className="text-gray-700">
                  Transformez votre vitrine en un outil de performance avec l’intégration directe de notre Agent IA, un collaborateur digital entraîné sur vos données pour automatiser votre service client et votre gestion administrative 24h/24.
                </p>
              </div>

              {/* Données centralisées */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Données centralisées dans le dashboard</h3>
                <p className="text-gray-700">
                  Toutes les interactions issues du site sont visibles et mesurables depuis le dashboard.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Ce que ça change */}
          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
              Ce que ça change
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Demandes mieux qualifiées</h3>
                <p className="text-gray-700">Collecte d'informations pertinentes et exploitables dès le premier contact</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Meilleure conversion</h3>
                <p className="text-gray-700">Optimisation du parcours utilisateur pour transformer davantage de visiteurs</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Cohérence entre site et opérations</h3>
                <p className="text-gray-700">Intégration transparente avec tous vos processus internes</p>
              </div>
            </div>
          </section>

          {/* Section: Équivalent fonctionnel */}
          <section className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 text-white">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-purple-400 pb-4">
              Votre vitrine numérique
            </h2>
            <p className="text-2xl font-semibold">
              Une interface professionnelle connectée à votre écosystème business
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Créons ensemble votre site performant
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Un site web qui ne se contente pas d'être beau, mais qui travaille pour vous 24/7
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contactez-nous
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}
