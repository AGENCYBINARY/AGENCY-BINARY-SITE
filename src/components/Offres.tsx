'use client'

import { useState } from 'react'

export default function Offres() {
  const [activeTab, setActiveTab] = useState('argent')
  const [showModal, setShowModal] = useState(false)
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null)

  const tabs = [
    { id: 'argent', label: 'Argent' },
    { id: 'or', label: 'Or' },
    { id: 'platine', label: 'Platine' }
  ]

  const openModal = (offer: string) => {
    setSelectedOffer(offer)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedOffer(null)
  }

  return (
    <section id="offres" className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-purple-50/10 to-blue-50/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Nos Offres
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-stagger-1">
            Choisissez la solution adaptée à vos besoins
          </p>
        </div>

        {/* Onglets */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 border border-gray-300/40">
            <div className="flex space-x-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 animate-swell ${
                    activeTab === tab.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:scale-110'
                  }`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    ...(activeTab === tab.id ? { backgroundColor: '#5170ff' } : {})
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contenu des onglets */}
        <div className="min-h-[400px] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 backdrop-blur-xl rounded-3xl border border-gray-300/40 p-8 md:p-12 relative animate-swell shadow-2xl">
          {activeTab === 'argent' && (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offre Argent</h3>
              <div className="mb-8">
                <div className="text-4xl font-bold text-gray-600 mb-2">
                  <span className="text-5xl text-gray-900">99€</span>
                  <span className="text-xl">/mois HT</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-300/40">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Inclus dans l'offre :</h4>
                  <ul className="text-left space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Assistant IA de base pour votre entreprise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Réponses automatiques aux questions courantes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Formation IA à partir de vos documents (jusqu'à 10)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Intégration sur votre site web</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-3 mt-1">•</span>
                      <span className="text-gray-600">200 conversations par mois</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-3 mt-1">•</span>
                      <span className="text-gray-600">Support par email</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm font-medium">
                    <strong>Frais de mise en service :</strong> 199€ HT (paiement unique)
                  </p>
                </div>

                <button
                  onClick={() => openModal('argent')}
                  className="mt-6 text-indigo-600 hover:text-indigo-700 font-semibold text-sm underline transition-colors"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'or' && (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offre Or</h3>
              <div className="mb-8">
                <div className="text-4xl font-bold text-gray-600 mb-2">
                  <span className="text-5xl bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">199€</span>
                  <span className="text-xl">/mois HT</span>
                </div>
                <div className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Recommandé
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-300/40">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Inclus dans l'offre :</h4>
                  <ul className="text-left space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Assistant IA avancé personnalisé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Intégration complète sur votre site web</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Formation IA illimitée (documents, FAQ, procédures)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Génération de devis et factures PDF</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Dashboard d'analyse et gestion client</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Portail client sécurisé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-3 mt-1">•</span>
                      <span className="text-gray-600">1000 conversations par mois</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-3 mt-1">•</span>
                      <span className="text-gray-600">Support prioritaire (email + chat)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm font-medium">
                    <strong>Frais de mise en service :</strong> 199€ HT (paiement unique)
                  </p>
                </div>

                <button
                  onClick={() => openModal('or')}
                  className="mt-6 text-indigo-600 hover:text-indigo-700 font-semibold text-sm underline transition-colors"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'platine' && (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offre Platine</h3>
              <div className="mb-8">
                <div className="text-4xl font-bold text-gray-600 mb-2">
                  <span className="text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">399€</span>
                  <span className="text-xl">/mois HT</span>
                </div>
                <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-300/40">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Inclus dans l'offre :</h4>
                  <ul className="text-left space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Assistant IA sur mesure avec personnalité de marque</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Intégration multi-plateforme (site, WhatsApp, email)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Formation IA illimitée + mise à jour automatique</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Automatisation complète (devis, factures, relances)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Dashboard avancé avec analytics et reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Portail client personnalisé avec votre branding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">CRM intégré pour gestion de la relation client</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">API personnalisée pour intégration avec vos outils</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-3 mt-1">•</span>
                      <span className="text-gray-600">Conversations illimitées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-3 mt-1">•</span>
                      <span className="text-gray-600">Support dédié 24/7 (email, chat, téléphone)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-3 mt-1">•</span>
                      <span className="text-gray-600">Consultant dédié pour optimisation continue</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-gray-700 text-sm font-medium">
                    <strong>Frais de mise en service :</strong> <span className="line-through text-gray-500">199€</span> <strong>OFFERTS</strong>
                  </p>
                </div>

                <button
                  onClick={() => openModal('platine')}
                  className="mt-6 text-indigo-600 hover:text-indigo-700 font-semibold text-sm underline transition-colors"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Modale */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={closeModal}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  {selectedOffer === 'argent' && 'Offre Argent'}
                  {selectedOffer === 'or' && 'Offre Or'}
                  {selectedOffer === 'platine' && 'Offre Platine'}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {selectedOffer === 'argent' && (
                <div className="space-y-6">
                  <div className="text-4xl font-bold text-gray-900 mb-4">99€<span className="text-xl text-gray-600">/mois HT</span></div>
                  
                  <div className="text-lg font-semibold text-gray-900 mb-2">Mettre de l'ordre. Reprendre le contrôle.</div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    L'offre <strong>Argent</strong> est pensée pour les entreprises qui reçoivent des demandes de partout et qui ont besoin d'un système clair pour ne plus rien perdre.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    L'objectif est simple : <strong>centraliser, organiser et suivre</strong>, sans complexité inutile.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Cette offre ne cherche pas à automatiser à votre place. Elle pose une base solide et fiable, pour que vous sachiez toujours où vous en êtes.
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <h4 className="font-bold text-gray-900 text-lg">Ce que l'offre met en place</h4>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Centralisation des demandes</h5>
                      <p className="text-sm text-gray-600 mb-2">Toutes vos demandes arrivent au même endroit, quel que soit le canal utilisé.</p>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Connexion de 1 site ou 1 formulaire</li>
                        <li>• Connexion de 1 boîte email</li>
                        <li>• Ajout manuel des demandes reçues par téléphone</li>
                        <li>• Centralisation dans une base sécurisée, avec des données isolées par client</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Automatisation simple et maîtrisée</h5>
                      <p className="text-sm text-gray-600 mb-2">Juste ce qu'il faut pour éviter les oublis, sans déshumaniser la relation.</p>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Accusé de réception automatique envoyé au client</li>
                        <li>• 1 relance automatique si aucune réponse sous 2 jours (J+2)</li>
                        <li>• Classement clair des demandes : nouveau / en cours / traité</li>
                        <li>• Priorité : chaud / tiède / froid</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Intelligence en arrière-plan (non visible)</h5>
                      <p className="text-sm text-gray-600 mb-2">L'IA travaille pour vous, sans jamais s'adresser directement à vos clients.</p>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Analyse automatique des messages entrants</li>
                        <li>• Détection de l'intention (information, devis, urgence)</li>
                        <li>• Aucune interaction IA côté site ou côté client final</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Tableau de bord clair</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Liste complète des demandes</li>
                        <li>• Source de chaque demande</li>
                        <li>• Statut et priorité</li>
                        <li>• Temps de réponse</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Accès</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• 1 utilisateur</li>
                        <li>• Données strictement séparées par client</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h5 className="font-semibold text-red-900 mb-2">❌ Non inclus</h5>
                    <ul className="space-y-1 text-sm text-red-800 ml-4">
                      <li>• Agent IA visible sur le site</li>
                      <li>• Conversations automatisées avec les clients</li>
                      <li>• Devis et facturation</li>
                      <li>• Prise de rendez-vous</li>
                      <li>• Optimisation continue</li>
                    </ul>
                  </div>

                  <p className="text-gray-700 italic">
                    L'offre Argent ne "fait" pas à votre place. Elle vous aide à travailler proprement, sans stress ni perte d'information.
                  </p>

                  <p className="text-sm text-gray-600">
                    <strong>Frais de mise en service :</strong> 199€ HT (paiement unique pour la configuration initiale)
                  </p>
                </div>
              )}

              {selectedOffer === 'or' && (
                <div className="space-y-6">
                  <div className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">199€</span>
                    <span className="text-xl text-gray-600">/mois HT</span>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Recommandé
                  </div>
                  
                  <div className="text-lg font-semibold text-gray-900 mb-2">Un collaborateur digital qui exécute.</div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    L'offre <strong>Or</strong> s'adresse aux entreprises déjà structurées, mais qui veulent <strong>aller plus vite</strong> et <strong>réduire le temps passé sur les tâches répétitives</strong>.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Ici, l'intelligence artificielle devient visible et opérationnelle.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Vous ne vous contentez plus d'organiser les demandes : vous commencez à <strong>y répondre automatiquement</strong>.
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <h4 className="font-bold text-gray-900 text-lg">Ce que l'offre met en place</h4>
                    <p className="text-sm text-gray-600 italic">(Tout ce que contient l'offre Argent, plus les éléments ci-dessous)</p>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Agent IA intégré au site</h5>
                      <p className="text-sm text-gray-600 mb-2">Un véritable assistant digital, disponible en continu.</p>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Agent IA personnalisé pour votre entreprise</li>
                        <li>• Intégré directement à votre site web</li>
                        <li>• Disponible 24h/24 et 7j/7</li>
                        <li>• Formé à partir de votre site, vos offres, vos documents</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Réponses et qualification des demandes</h5>
                      <p className="text-sm text-gray-600 mb-2">L'IA filtre et oriente avant toute intervention humaine.</p>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Réponses immédiates aux questions courantes</li>
                        <li>• Orientation vers les bons services</li>
                        <li>• Pré-qualification des demandes clients</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Administratif automatisé</h5>
                      <p className="text-sm text-gray-600 mb-2">Les documents sont générés sans effort, de manière cohérente.</p>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Génération automatique de devis PDF (1 modèle)</li>
                        <li>• Génération automatique de factures PDF (1 modèle)</li>
                        <li>• Suivi des statuts : émis, envoyé, payé</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Tableau de bord</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Historique des conversations IA</li>
                        <li>• Sujets les plus fréquents</li>
                        <li>• Demandes qualifiées</li>
                        <li>• Devis et factures générés</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Accès</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• 1 à 3 utilisateurs</li>
                        <li>• Portail client final (accès aux factures)</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Capacité</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Quota de conversations mensuel défini</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h5 className="font-semibold text-red-900 mb-2">❌ Non inclus</h5>
                    <ul className="space-y-1 text-sm text-red-800 ml-4">
                      <li>• Optimisation continue de l'IA</li>
                      <li>• Reporting stratégique mensuel</li>
                      <li>• Scénarios complexes de financement</li>
                    </ul>
                  </div>

                  <p className="text-gray-700 italic">
                    Ce n'est pas un chatbot gadget. C'est un collaborateur digital qui fait gagner du temps au quotidien.
                  </p>

                  <p className="text-sm text-gray-600">
                    <strong>Frais de mise en service :</strong> 199€ HT (paiement unique pour la configuration et l'intégration complète)
                  </p>
                </div>
              )}

              {selectedOffer === 'platine' && (
                <div className="space-y-6">
                  <div className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">399€</span>
                    <span className="text-xl text-gray-600">/mois HT</span>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Premium
                  </div>
                  
                  <div className="text-lg font-semibold text-gray-900 mb-2">L'entreprise qui fonctionne comme une machine.</div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    L'offre <strong>Platine</strong> est destinée aux entreprises qui veulent <strong>industrialiser leur fonctionnement</strong> et piloter leur activité avec précision.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Ici, le système ne se contente plus d'exécuter : il <strong>s'améliore en continu</strong>.
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <h4 className="font-bold text-gray-900 text-lg">Ce que l'offre met en place</h4>
                    <p className="text-sm text-gray-600 italic">(Tout ce que contient l'offre Or, avec un niveau avancé de pilotage)</p>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Gestion complète des demandes</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Connexion du site, des formulaires et des emails</li>
                        <li>• Réponses automatiques avancées</li>
                        <li>• Relances multiples (J+2 / J+5)</li>
                        <li>• Priorisation intelligente</li>
                        <li>• Alertes humaines basées sur plusieurs critères</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Agent IA avancé</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Agent IA entraîné en continu</li>
                        <li>• Mise à jour automatique avec les nouveaux contenus</li>
                        <li>• Amélioration progressive des réponses</li>
                        <li>• Adaptation aux retours clients</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Conseil et orientation avancés</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Devis multi-scénarios</li>
                        <li>• Orientation vers des solutions de financement personnalisées</li>
                        <li>• Assistance IA dans la présentation des options</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Administratif avancé</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Facturation avancée</li>
                        <li>• Portail client final complet</li>
                        <li>• Historique détaillé et suivi global</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Tableau de bord avancé</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Vue globale de l'activité</li>
                        <li>• Suivi des conversions</li>
                        <li>• Analyse des performances</li>
                        <li>• Détection des points de friction</li>
                        <li>• Historique complet</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Pilotage et optimisation</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Rapports mensuels détaillés</li>
                        <li>• Recommandations concrètes</li>
                        <li>• Ajustements continus du système</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Accès et sécurité</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Multi-utilisateurs</li>
                        <li>• Rôles et permissions</li>
                        <li>• Données isolées</li>
                        <li>• Sécurité renforcée</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Capacité</h5>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Conversations illimitées</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 italic">
                    Ce n'est plus un outil. C'est une <strong>infrastructure digitale pilotée</strong>, pensée pour durer.
                  </p>

                  <p className="text-sm text-green-700 font-semibold bg-green-50 rounded-lg p-3">
                    <strong>Frais de mise en service OFFERTS</strong> (valeur 199€)
                  </p>
                </div>
              )}

              <div className="mt-8 flex gap-4">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                >
                  Fermer
                </button>
                <a
                  href="#contact"
                  onClick={closeModal}
                  className="flex-1 text-white px-6 py-3 rounded-xl font-semibold text-center hover:opacity-90 transition-all"
                  style={{ backgroundColor: '#5170ff' }}
                >
                  Choisir cette offre
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
