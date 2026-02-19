import Link from 'next/link'

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-600 text-lg">
            Protection de vos données personnelles - AGENCY BINARY
          </p>
        </div>

        {/* Contenu */}
        <div className="bg-gray-50 rounded-3xl border border-gray-200 shadow-lg p-8 md:p-12">
          
          {/* Introduction */}
          <section className="mb-8">
            <div className="text-gray-700 space-y-3">
              <p>
                AGENCY BINARY, spécialisée dans la création de sites web, l'automatisation de processus et le développement d'assistants IA, 
                s'engage à protéger la confidentialité de vos données personnelles. 
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations 
                conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </div>
          </section>

          {/* 1. Responsable du traitement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              1. Responsable du traitement des données
            </h2>
            <div className="text-gray-700 space-y-2">
              <p><strong className="text-gray-900">Responsable :</strong> AGENCY BINARY</p>
              <p><strong className="text-gray-900">Adresse :</strong> 8 rue du Val de Grâce, 75005 Paris</p>
              <p><strong className="text-gray-900">Téléphone :</strong> 06 80 85 17 68</p>
              <p><strong className="text-gray-900">Email :</strong> contact@agencybinary.fr</p>
              <p><strong className="text-gray-900">Représentant légal :</strong> Tristan Massarelli</p>
            </div>
          </section>

          {/* 2. Données collectées */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              2. Données personnelles collectées
            </h2>
            <div className="text-gray-700 space-y-4">
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Formulaire de contact</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Nom de l'entreprise</li>
                  <li>Message et demande spécifique</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Données techniques</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Cookies techniques nécessaires au fonctionnement</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Finalités du traitement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              3. Finalités du traitement
            </h2>
            <div className="text-gray-700 space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Traitement des demandes commerciales</h3>
                <p><strong>Base juridique :</strong> Intérêt légitime / Consentement</p>
                <p><strong>Durée :</strong> 3 ans à compter du dernier contact</p>
                <p><strong>Finalité :</strong> Répondre à vos demandes d'information sur nos agents IA pour entreprises</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Amélioration de nos services</h3>
                <p><strong>Base juridique :</strong> Intérêt légitime</p>
                <p><strong>Durée :</strong> 2 ans</p>
                <p><strong>Finalité :</strong> Analyser l'utilisation du site pour améliorer nos solutions d'IA</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Fonctionnement technique du site</h3>
                <p><strong>Base juridique :</strong> Intérêt légitime</p>
                <p><strong>Durée :</strong> Session de navigation</p>
                <p><strong>Finalité :</strong> Assurer le bon fonctionnement et la sécurité du site</p>
              </div>
            </div>
          </section>

          {/* 4. Destinataires */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              4. Destinataires de vos données
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>Vos données personnelles sont destinées à :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-gray-900">L'équipe AGENCY BINARY</strong> - Pour traiter vos demandes</li>
                <li><strong className="text-gray-900">Hébergeur web</strong> - Squarespace pour l'hébergement sécurisé</li>
                <li><strong className="text-gray-900">Service email</strong> - Pour l'envoi et la réception des messages</li>
              </ul>
              <p className="mt-4">
                <strong className="text-gray-900">Transferts internationaux :</strong> Certains de nos prestataires peuvent être situés hors Union Européenne. 
                Dans ce cas, nous nous assurons qu'ils offrent un niveau de protection adéquat.
              </p>
            </div>
          </section>

          {/* 5. Vos droits */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              5. Vos droits sur vos données
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-gray-900 font-semibold mb-2">Droit d'accès</h3>
                  <p className="text-sm">Connaître les données que nous détenons sur vous</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-gray-900 font-semibold mb-2">Droit de rectification</h3>
                  <p className="text-sm">Corriger des données inexactes ou incomplètes</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-gray-900 font-semibold mb-2">Droit d'effacement</h3>
                  <p className="text-sm">Demander la suppression de vos données</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-gray-900 font-semibold mb-2">Droit de limitation</h3>
                  <p className="text-sm">Suspendre le traitement de vos données</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-gray-900 font-semibold mb-2">Droit à la portabilité</h3>
                  <p className="text-sm">Récupérer vos données dans un format structuré</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-gray-900 font-semibold mb-2">Droit d'opposition</h3>
                  <p className="text-sm">Vous opposer au traitement de vos données</p>
                </div>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6">
                <h3 className="text-gray-900 font-semibold mb-2">Comment exercer vos droits ?</h3>
                <p>Envoyez votre demande à : <strong className="text-indigo-600">contact@agencybinary.fr</strong></p>
                <p className="text-sm mt-2">Joignez une copie de votre pièce d'identité. Nous répondrons dans un délai maximum de 30 jours.</p>
              </div>
            </div>
          </section>

          {/* 6. Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              6. Cookies et traceurs
            </h2>
            <div className="text-gray-700 space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Cookies techniques</h3>
                <p><strong>Finalité :</strong> Fonctionnement du site (navigation, préférences)</p>
                <p><strong>Durée :</strong> Session de navigation</p>
                <p><strong>Consentement :</strong> Non requis (nécessaires au service)</p>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Cookies analytiques (si applicable)</h3>
                <p><strong>Finalité :</strong> Mesurer l'audience et améliorer le site</p>
                <p><strong>Durée :</strong> 13 mois maximum</p>
                <p><strong>Consentement :</strong> Requis - Vous pouvez les refuser</p>
              </div>

              <p className="text-sm">
                <strong className="text-gray-900">Gestion des cookies :</strong> Vous pouvez configurer votre navigateur pour refuser les cookies. 
                Cela peut affecter certaines fonctionnalités du site.
              </p>
            </div>
          </section>

          {/* 7. Sécurité */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              7. Sécurité de vos données
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chiffrement des communications (HTTPS)</li>
                <li>Hébergement sécurisé avec sauvegardes régulières</li>
                <li>Accès limité aux données aux seules personnes habilitées</li>
                <li>Mise à jour régulière des systèmes de sécurité</li>
                <li>Sensibilisation de notre équipe à la protection des données</li>
              </ul>
              <p className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-4">
                <strong className="text-orange-900">En cas de violation de données</strong>, nous vous informerons 
                dans les meilleurs délais si cela présente un risque élevé pour vos droits et libertés.
              </p>
            </div>
          </section>

          {/* 8. Contact DPO */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              8. Délégué à la Protection des Données
            </h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong className="text-gray-900">DPO :</strong> Maxime Neveu
              </p>
              <p>
                <strong className="text-gray-900">Contact :</strong> Pour toute question relative à la protection de vos données, 
                contactez-nous à contact@agencybinary.fr
              </p>
            </div>
          </section>

          {/* 9. Réclamations */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              9. Droit de réclamation
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, 
                vous avez le droit d'introduire une réclamation auprès de la CNIL :
              </p>
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <p><strong className="text-gray-900">CNIL</strong></p>
                <p>3 Place de Fontenoy - TSA 80715</p>
                <p>75334 PARIS CEDEX 07</p>
                <p>Téléphone : 01 53 73 22 22</p>
                <p>Site web : <a href="https://www.cnil.fr" className="text-indigo-600 hover:text-indigo-500">www.cnil.fr</a></p>
              </div>
            </div>
          </section>

          {/* 10. Modifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              10. Modifications de cette politique
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Cette politique de confidentialité peut être mise à jour pour refléter les changements 
                dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
              </p>
              <p>
                Nous vous encourageons à consulter régulièrement cette page. 
                Les modifications importantes vous seront notifiées par email si nous disposons de vos coordonnées.
              </p>
            </div>
          </section>

          {/* Date de mise à jour */}
          <div className="border-t border-gray-300 pt-6 mt-8">
            <p className="text-gray-600 text-sm">
              <strong>Dernière mise à jour :</strong> 20 novembre 2025
            </p>
            <p className="text-gray-500 text-xs mt-2">
              <strong>Version :</strong> 1.0
            </p>
          </div>

        </div>

        {/* Boutons navigation */}
        <div className="flex justify-center space-x-4 mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-xl font-semibold hover:from-gray-600 hover:to-gray-500 transition-all duration-300 shadow-lg"
          >
            ← Accueil
          </Link>
          <Link 
            href="/mentions-legales" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl font-semibold hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 shadow-lg"
          >
            Mentions légales
          </Link>
          <Link 
            href="/cgv" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg"
          >
            CGV →
          </Link>
        </div>
      </div>
    </div>
  )
}