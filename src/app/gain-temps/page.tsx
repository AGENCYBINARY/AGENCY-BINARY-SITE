'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Footer from '@/components/Footer'

export default function GainTemps() {
  return (
    <div>
      <AnimatedNavbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              GAIN DE TEMPS
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Traitement automatisé des demandes
            </h2>
          </div>

          {/* Section: Ce que nous faisons */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-indigo-500 pb-4">
              Ce que nous faisons
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nous mettons en place un <strong>système opérationnel</strong> capable de gérer vos demandes entrantes <strong>en continu</strong>, sans dépendre d'une présence humaine constante.
            </p>

            <div className="space-y-8">
              {/* Centralisation */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Centralisation de toutes les demandes</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Toutes les demandes (site, formulaires, emails, téléphone) sont centralisées dans une base de données sécurisée.</p>
                  <p>Chaque demande est immédiatement structurée, horodatée et suivie.</p>
                </div>
              </div>

              {/* Réponse automatique */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Réponse automatique immédiate</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Dès qu'un contact arrive, le système répond automatiquement avec un message professionnel, cohérent et adapté à votre activité.</p>
                  <p>Vos prospects ne restent jamais sans réponse, même en dehors des horaires.</p>
                </div>
              </div>

              {/* Relances */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Relances systématiques sans suivi manuel</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Le système relance automatiquement les prospects qui n'ont pas répondu, selon des délais définis.</p>
                  <p>Aucun oubli, aucun suivi à la main.</p>
                </div>
              </div>

              {/* Détection prioritaire */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Détection des demandes prioritaires</h3>
                <p className="text-gray-700">
                  Les demandes sont analysées et classées afin d'identifier celles qui nécessitent une attention immédiate (urgence, budget, intention claire).
                </p>
              </div>

              {/* Intervention humaine */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Intervention humaine uniquement quand nécessaire</h3>
                <p className="text-gray-700">
                  Lorsqu'une opportunité importante est détectée, une alerte est déclenchée pour qu'un humain prenne le relais au bon moment.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Ce que ça change */}
          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
              Ce que ça change
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Aucune demande perdue</h3>
                <p className="text-gray-700">Toutes les demandes sont capturées et traitées sans exception</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Réponses rapides et constantes</h3>
                <p className="text-gray-700">Réponses instantanées 24/7 sans délai d'attente</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Suivi rigoureux sans charge mentale</h3>
                <p className="text-gray-700">Monitoring continu de toutes les interactions, sans effort manuel</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Meilleure conversion à volume égal</h3>
                <p className="text-gray-700">Optimisation du taux de conversion grâce à un traitement systématique</p>
              </div>
            </div>
          </section>

          {/* Section: Équivalent fonctionnel */}
          <section className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 text-white">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-purple-400 pb-4">
              Équivalent fonctionnel
            </h2>
            <p className="text-2xl font-semibold leading-relaxed">
              Un assistant commercial de premier niveau, disponible 24h/24, 7j/7, qui ne se fatigue pas et n'oublie rien.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prêt à automatiser votre gestion des demandes ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour découvrir comment notre solution peut transformer votre efficacité opérationnelle
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
