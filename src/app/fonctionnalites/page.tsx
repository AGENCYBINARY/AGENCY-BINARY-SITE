'use client'

import React from 'react'
import Link from 'next/link'

export default function Fonctionnalites() {
  const services = [
    {
      title: "Agent IA personnalisé pour votre entreprise",
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "Création sur mesure d'un assistant virtuel intelligent adapté à votre secteur d'activité et votre identité de marque.",
      details: [
        "Conception personnalisée selon vos besoins spécifiques",
        "Adaptation au ton et à la personnalité de votre marque",
        "Configuration des scénarios de conversation",
        "Intégration de votre charte graphique",
        "Test et validation avant mise en production"
      ]
    },
    {
      title: "Intégration complète sur votre site web",
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      description: "Installation transparente de l'agent IA sur votre site internet avec une intégration technique complète.",
      details: [
        "Widget personnalisable et responsive",
        "Compatible avec tous les CMS (WordPress, Shopify, etc.)",
        "Intégration en quelques lignes de code",
        "Configuration de l'apparence et du positionnement",
        "Support technique pour l'installation"
      ]
    },
    {
      title: "Formation IA à partir de vos documents",
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: "Entraînement de votre agent à partir de vos documents, catalogues et bases de connaissances.",
      details: [
        "Import de PDF, Word, Excel et autres formats",
        "Extraction et analyse du contenu",
        "Apprentissage continu des informations",
        "Mise à jour facilitée des connaissances",
        "Support multi-langues si nécessaire"
      ]
    },
    {
      title: "Conseil client intelligent et personnalisé",
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: "Assistance intelligente capable de conseiller vos clients selon leurs besoins spécifiques et leur historique.",
      details: [
        "Recommandations personnalisées basées sur l'IA",
        "Compréhension du contexte et des besoins",
        "Réponses adaptées au profil du client",
        "Gestion des questions complexes",
        "Escalade vers un humain si nécessaire"
      ]
    },
    {
      title: "Prise de rendez-vous automatisée",
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      description: "Système de réservation intelligent qui gère automatiquement les prises de rendez-vous avec synchronisation de calendrier.",
      details: [
        "Gestion des disponibilités en temps réel",
        "Confirmation automatique par email/SMS",
        "Rappels automatiques avant le rendez-vous",
        "Gestion des annulations et reports"
      ],
      badge: "Optionnel"
    },
    {
      title: "Génération automatique de devis clients",
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: "Création instantanée de devis personnalisés basés sur les besoins exprimés par le client durant la conversation.",
      details: [
        "Collecte automatique des besoins",
        "Calcul intelligent des tarifs",
        "Génération de PDF professionnels",
        "Envoi automatique par email",
        "Suivi des devis en attente"
      ],
      badge: "Optionnel"
    },
    {
      title: "Solutions de financement personnalisées",
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      description: "Proposition de plans de financement adaptés en fonction du budget et des capacités de paiement du client.",
      details: [
        "Calcul de mensualités personnalisées",
        "Présentation de plusieurs options de financement",
        "Simulation en temps réel",
        "Intégration avec vos partenaires financiers",
        "Génération de dossiers de financement"
      ],
      badge: "Optionnel"
    },
    {
      title: "Optimisation continue et mises à jour automatiques",
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      description: "Amélioration continue des performances de votre agent avec des mises à jour régulières et optimisations basées sur l'IA.",
      details: [
        "Analyse des conversations pour améliorer les réponses",
        "Mises à jour automatiques des modèles IA",
        "Optimisation des temps de réponse",
        "Ajout de nouvelles fonctionnalités",
        "Rapport mensuel des améliorations apportées"
      ],
      badge: "Optionnel"
    },
    {
      title: "Dashboard d'analyse et gestion client",
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: "Tableau de bord complet pour suivre les performances, analyser les conversations et gérer la relation client.",
      details: [
        "Statistiques détaillées des conversations",
        "Analyse des questions fréquentes",
        "Suivi des leads générés",
        "Gestion des demandes clients",
        "Export des données en CSV/Excel",
        "Rapports personnalisables"
      ]
    },
    {
      title: "Rapports mensuels détaillés et analyse des performances",
      icon: (
        <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      description: "Rapports complets mensuels avec analyse approfondie des performances, des leads et recommandations d'optimisation.",
      details: [
        "Analyse détaillée du taux de conversion",
        "Identification des points d'amélioration",
        "Benchmarking avec votre secteur",
        "Recommandations personnalisées",
        "Prévisions et tendances",
        "Support dédié pour interpréter les données"
      ],
      badge: "Optionnel"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec retour */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/#services"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Retour</span>
            </Link>
            <div className="text-sm text-gray-600">
              <span className="text-gray-900 font-semibold">{services.length} fonctionnalités</span> disponibles
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text safe-bg-clip-text" style={{ color: '#4f46e5' }}>
              Fonctionnalités détaillées
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez en détail tout ce que nos agents IA peuvent faire pour transformer votre relation client
          </p>
        </div>

        {/* Grid des fonctionnalités */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl border border-gray-300 shadow-lg p-8 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                {/* Icône */}
                <div className="flex-shrink-0 bg-gray-200 rounded-xl p-4 border border-gray-300 hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Contenu */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h2>
                    {service.badge && (
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Liste des détails */}
                  <div className="bg-gray-200 rounded-xl p-6 border border-gray-300">
                    <h3 className="text-base font-semibold text-indigo-600 mb-4">Ce qui est inclus :</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-green-400 mr-3 mt-0.5 text-lg">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-300 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à passer aux agents virtuels ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé adapté à vos besoins et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Nous Contacter
              </a>
              <Link
                href="/"
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-gray-300 hover:border-gray-400"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
