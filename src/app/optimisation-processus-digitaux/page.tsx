'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Footer from '@/components/Footer'

export default function OptimisationProcessusDigitaux() {
  return (
    <div>
      <AnimatedNavbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              OPTIMISATION DES PROCESSUS DIGITAUX
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Pôle ingénierie & conseil pour maximiser l'efficacité opérationnelle
            </h2>
          </div>

          {/* Section: Ce que nous faisons */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-indigo-500 pb-4">
              Notre approche
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Ce service intervient sur votre écosystème existant ou permet de créer des solutions logicielles spécifiques pour structurer, automatiser et piloter vos opérations.
            </p>

            <div className="space-y-8">
              {/* Optimisation existant */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Optimisation et amélioration de l'existant</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Audit et mise à niveau :</strong> analyse des axes d'amélioration d'un site déjà en ligne (vitesse, design, parcours utilisateur) sans refonte totale.</p>
                  <p><strong>Modernisation technique :</strong> ajout de fonctionnalités ciblées sur vos plateformes existantes pour les rendre plus performantes et actuelles.</p>
                </div>
              </div>

              {/* SaaS IA */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Développement de SaaS IA sur mesure</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Conception de logiciels spécifiques :</strong> développement de solutions SaaS intégrant l'IA pour répondre à des besoins métiers non couverts par les outils standards.</p>
                  <p><strong>Intelligence métier :</strong> création d'algorithmes personnalisés capables de traiter vos flux de données pour automatiser des décisions ou des tâches complexes.</p>
                </div>
              </div>

              {/* ERP CRM */}
              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Écosystème ERP & CRM propriétaire</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Business Intelligence :</strong> tableau de bord centralisé pour analyser en temps réel les statistiques du site web et les performances de l'Agent IA.</p>
                  <p><strong>Gestion administrative automatisée :</strong> génération automatique de factures et de devis pour supprimer les ressaisies manuelles.</p>
                  <p><strong>Gestion de la relation client (CRM) :</strong> centralisation et structuration de toutes les demandes entrantes avec suivi rigoureux et horodaté de chaque prospect.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Ce que ça change */}
          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
              Ce que ce service apporte
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Personnalisation totale</h3>
                <p className="text-gray-700">Une approche qui s'adapte à vos systèmes existants ou qui crée une solution neuve selon votre besoin.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Gain de productivité</h3>
                <p className="text-gray-700">Réduction drastique du temps passé sur l'administratif et la gestion manuelle des données.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Vision stratégique</h3>
                <p className="text-gray-700">Visibilité claire sur les performances réelles de l'entreprise grâce à la centralisation des statistiques.</p>
              </div>
            </div>
          </section>

          {/* Section: Équivalent fonctionnel */}
          <section className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 text-white">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-purple-400 pb-4">
              Résultat opérationnel
            </h2>
            <p className="text-2xl font-semibold leading-relaxed">
              Une infrastructure digitale sur mesure qui connecte vos opérations, automatise l'administratif et transforme la donnée en décisions concrètes.
            </p>
          </section>

          {/* CTA Section */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prêt à optimiser vos processus digitaux ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour auditer votre existant ou concevoir une solution SaaS IA adaptée à votre activité.
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
