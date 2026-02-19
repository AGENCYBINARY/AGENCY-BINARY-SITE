'use client'
import { useState } from 'react'

export default function ServicesDetail() {
  const [showModal, setShowModal] = useState(false)

  const services = [
    {
      title: "Agent IA personnalisé pour votre entreprise",
      icon: "🤖",
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
      icon: "🌐",
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
      title: "Formation IA automatique à partir de vos documents",
      icon: "📚",
      description: "Entraînement automatique de votre agent à partir de vos documents, catalogues et bases de connaissances.",
      details: [
        "Import de PDF, Word, Excel et autres formats",
        "Extraction et analyse automatique du contenu",
        "Apprentissage continu des informations",
        "Mise à jour facilitée des connaissances",
        "Support multi-langues si nécessaire"
      ]
    },
    {
      title: "Conseil client intelligent et personnalisé",
      icon: "💡",
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
      icon: "📅",
      description: "Système de réservation intelligent qui gère automatiquement les prises de rendez-vous avec synchronisation de calendrier.",
      details: [
        "Gestion des disponibilités en temps réel",
        "Confirmation automatique par email/SMS",
        "Rappels automatiques avant le rendez-vous",
        "Gestion des annulations et reports"
      ]
    },
    {
      title: "Génération automatique de devis clients",
      icon: "📄",
      description: "Création instantanée de devis personnalisés basés sur les besoins exprimés par le client durant la conversation.",
      details: [
        "Collecte automatique des besoins",
        "Calcul intelligent des tarifs",
        "Génération de PDF professionnels",
        "Envoi automatique par email",
        "Suivi des devis en attente"
      ],
      badge: "Or & Platine"
    },
    {
      title: "Solutions de financement personnalisées",
      icon: "💳",
      description: "Proposition de plans de financement adaptés en fonction du budget et des capacités de paiement du client.",
      details: [
        "Calcul de mensualités personnalisées",
        "Présentation de plusieurs options de financement",
        "Simulation en temps réel",
        "Intégration avec vos partenaires financiers",
        "Génération de dossiers de financement"
      ],
      badge: "Platine uniquement"
    },
    {
      title: "Optimisation continue et mises à jour automatiques",
      icon: "🔄",
      description: "Amélioration continue des performances de votre agent avec des mises à jour régulières et optimisations basées sur l'IA.",
      details: [
        "Analyse des conversations pour améliorer les réponses",
        "Mises à jour automatiques des modèles IA",
        "Optimisation des temps de réponse",
        "Ajout de nouvelles fonctionnalités",
        "Rapport mensuel des améliorations apportées"
      ],
      badge: "Platine uniquement"
    },
    {
      title: "Dashboard d'analyse et gestion client",
      icon: "📊",
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
      icon: "📈",
      description: "Rapports complets mensuels avec analyse approfondie des performances, des leads et recommandations d'optimisation.",
      details: [
        "Analyse détaillée du taux de conversion",
        "Identification des points d'amélioration",
        "Benchmarking avec votre secteur",
        "Recommandations personnalisées",
        "Prévisions et tendances",
        "Support dédié pour interpréter les données"
      ],
      badge: "Platine uniquement"
    }
  ]

  return (
    <>
      {/* Bouton dans la section Services */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 text-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Découvrir toutes les fonctionnalités en détail</span>
        </button>
      </div>

      {/* Modal détaillée */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-2xl border border-white/20 max-w-6xl w-full my-8 backdrop-blur-xl">
            {/* Header */}
            <div className="sticky top-0 bg-white/5 backdrop-blur-xl flex justify-between items-center p-6 border-b border-white/20 rounded-t-2xl z-10">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Fonctionnalités détaillées
                </h2>
                <p className="text-gray-400 mt-1">Découvrez tout ce que nos agents IA peuvent faire pour vous</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-lg p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenu */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-indigo-400/60 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Icône */}
                    <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    {/* Contenu */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Liste des détails */}
                      <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                        <h4 className="text-sm font-semibold text-indigo-400 mb-3">Inclut :</h4>
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-300">
                              <span className="text-green-400 mr-2 mt-0.5">✓</span>
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

            {/* Footer */}
            <div className="sticky bottom-0 bg-white/5 backdrop-blur-xl flex justify-between items-center p-6 border-t border-white/20 rounded-b-2xl">
              <p className="text-gray-400 text-sm">
                <span className="text-white font-semibold">{services.length} fonctionnalités</span> pour transformer votre relation client
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
