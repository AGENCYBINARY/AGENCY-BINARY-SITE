'use client'
import { useState } from 'react'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('starter')
  const [showComparison, setShowComparison] = useState(false)
  const [withCommitment, setWithCommitment] = useState(false)

  const tabs = [
    { id: 'starter', label: 'Argent' },
    { id: 'professional', label: 'Or' },
    { id: 'enterprise', label: 'Platine' }
  ]

  return (
    <section id="offres" className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-purple-50/10 to-blue-50/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Nos Offres SaaS IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-stagger-1">
            Choisissez la solution d'agent IA adaptée à vos besoins
          </p>
        </div>

        {/* Onglets avec bouton Comparer */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 border border-gray-300/40">
            <div className="flex space-x-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 animate-swell ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:scale-110'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bouton de comparaison seul */}
          <button
            onClick={() => setShowComparison(true)}
            className="bg-white/80 hover:bg-white/90 text-gray-900 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 border border-gray-300/40 flex items-center space-x-2 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 animate-swell"
            style={{ animationDelay: '0.45s' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z" />
            </svg>
            <span>Comparer</span>
          </button>
        </div>

        {/* Contenu des onglets */}
        <div className="min-h-[400px] bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-300/40 p-8 md:p-12 relative animate-swell">
          {/* Toggle Engagement en haut à droite - seulement pour Argent et Or */}
          {(activeTab === 'starter' || activeTab === 'professional') && (
            <div className="absolute top-6 right-6 flex items-center gap-3">
              <span className="text-gray-600 text-sm font-medium">Engagement 6 mois</span>
              <button
                onClick={() => setWithCommitment(!withCommitment)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                  withCommitment ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gray-400'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                    withCommitment ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          )}

          {activeTab === 'starter' && (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offre Argent</h3>
              <div className="mb-8">
                <div className="text-4xl font-bold text-gray-600 mb-2">
                  <span className="text-5xl text-gray-900">{withCommitment ? '99€' : '129€'}</span>
                  <span className="text-xl">/mois HT</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-300/40">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Inclus dans l'offre :</h4>
                  <ul className="text-left space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Agent IA personnalisé pour votre entreprise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Intégration complète sur votre site web</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Formation IA automatique à partir de vos documents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Conseil client intelligent et personnalisé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Dashboard d'analyse et gestion client</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-900 mr-3 mt-1">•</span>
                      <span className="text-gray-600">500 conversations par mois</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-orange-100 border border-orange-300 rounded-xl p-4">
                  <p className="text-orange-800 text-sm font-medium">
                    <strong>Frais de mise en service :</strong> 199€ HT (paiement unique)
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'professional' && (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offre Or</h3>
              <div className="mb-8">
                <div className="text-4xl font-bold text-gray-600 mb-2">
                  <span className="text-5xl bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">{withCommitment ? '199€' : '229€'}</span>
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
                      <span className="text-gray-600">Agent IA personnalisé pour votre entreprise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Intégration complète sur votre site web</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Formation IA automatique à partir de vos documents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Conseil client intelligent et personnalisé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Prise de rendez-vous automatisée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Génération automatique de devis clients</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600">Dashboard d'analyse et gestion client</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-3 mt-1">•••</span>
                      <span className="text-gray-600">5 000 conversations par mois</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-orange-100 border border-orange-300 rounded-xl p-4">
                  <p className="text-orange-800 text-sm font-medium">
                    <strong>Frais de mise en service :</strong> 199€ HT (paiement unique)
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'enterprise' && (
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/10 via-gray-100/10 to-purple-100/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white via-white to-gray-50 border-2 border-purple-200 rounded-2xl p-8 backdrop-blur-md">
                
                <div className="absolute top-6 right-6 flex items-center gap-3 z-10">
                  <span className="text-gray-700 text-sm font-medium">Engagement 6 mois</span>
                  <button
                    onClick={() => setWithCommitment(!withCommitment)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
                      withCommitment ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-gray-400'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                        withCommitment ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Offre Platine
                </h3>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold text-gray-600 mb-2">
                    <span className="text-5xl bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent drop-shadow-lg">{withCommitment ? '399€' : '429€'}</span>
                    <span className="text-xl text-gray-900">/mois HT</span>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/25">
                    Premium
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-purple-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Inclus dans l'offre :</h4>
                    <ul className="text-left space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Agent IA personnalisé pour votre entreprise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Intégration complète sur votre site web</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Formation IA automatique à partir de vos documents</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Conseil client intelligent et personnalisé</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Prise de rendez-vous automatisée</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Génération automatique de devis clients</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Solutions de financement personnalisées</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Optimisation continue et mises à jour automatiques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Dashboard d'analyse et gestion client avancée</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">Rapports mensuels détaillés et analyse des performances</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3 mt-1">∞</span>
                        <span className="text-gray-700">Conversations illimitées</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-100 border border-green-300 rounded-xl p-4">
                    <p className="text-green-800 text-sm font-medium">
                      <strong>Frais de mise en service :</strong> <span className="line-through text-green-600">199€ HT</span> <span className="text-green-700 font-bold">OFFERTS</span>
                    </p>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
              </div>
            </div>
          )}
        </div>

        {/* Modal de comparaison */}
        {showComparison && (
          <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-gray-300 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">Comparatif des offres</h3>
                <button
                  onClick={() => setShowComparison(false)}
                  className="text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tableau comparatif */}
              <div className="p-6 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-gray-900 font-semibold">Fonctionnalités</th>
                      <th className="text-center py-4 px-4">
                        <div className="text-gray-900 font-semibold">Argent</div>
                        <div className="text-2xl font-bold text-gray-900 mt-1">{withCommitment ? '99€' : '129€'}</div>
                        <div className="text-sm text-gray-600">/mois HT</div>
                      </th>
                      <th className="text-center py-4 px-4">
                        <div className="text-gray-900 font-semibold">Or</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent mt-1">{withCommitment ? '199€' : '229€'}</div>
                        <div className="text-sm text-gray-600">/mois HT</div>
                        <div className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold mt-1">
                          Recommandé
                        </div>
                      </th>
                      <th className="text-center py-4 px-4">
                        <div className="text-gray-900 font-semibold">Platine</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mt-1">{withCommitment ? '399€' : '429€'}</div>
                        <div className="text-sm text-gray-600">/mois HT</div>
                        <div className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold mt-1">
                          Premium
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Agent IA personnalisé pour votre entreprise</td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Intégration complète sur votre site web</td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Formation IA automatique à partir de vos documents</td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Conseil client intelligent et personnalisé</td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Prise de rendez-vous automatisée</td>
                      <td className="py-3 px-4 text-center"><span className="text-red-500">✗</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Génération automatique de devis clients</td>
                      <td className="py-3 px-4 text-center"><span className="text-red-500">✗</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Solutions de financement personnalisées</td>
                      <td className="py-3 px-4 text-center"><span className="text-red-500">✗</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-red-500">✗</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Optimisation continue et mises à jour automatiques</td>
                      <td className="py-3 px-4 text-center"><span className="text-red-500">✗</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-red-500">✗</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Dashboard d'analyse et gestion client</td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓ Avancée</span></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">Rapports mensuels détaillés et analyse des performances</td>
                      <td className="py-3 px-4 text-center"><span className="text-red-500">✗</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-red-500">✗</span></td>
                      <td className="py-3 px-4 text-center"><span className="text-green-500">✓</span></td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700 font-semibold">Conversations par mois</td>
                      <td className="py-3 px-4 text-center text-gray-900 font-semibold">500</td>
                      <td className="py-3 px-4 text-center text-indigo-600 font-semibold">5 000</td>
                      <td className="py-3 px-4 text-center text-purple-600 font-semibold">Illimitées ∞</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700 font-semibold">Frais de mise en service</td>
                      <td className="py-3 px-4 text-center text-orange-700 font-semibold">199€ HT</td>
                      <td className="py-3 px-4 text-center text-orange-700 font-semibold">199€ HT</td>
                      <td className="py-3 px-4 text-center"><span className="line-through text-gray-400">199€ HT</span> <span className="text-green-700 font-bold">OFFERTS</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="flex justify-end p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowComparison(false)}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
