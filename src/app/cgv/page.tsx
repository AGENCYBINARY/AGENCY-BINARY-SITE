import Link from 'next/link'

export default function CGV() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conditions Générales de Vente
          </h1>
          <p className="text-gray-600 text-lg">
            Conditions de prestation - AGENCY BINARY
          </p>
        </div>

        {/* Contenu */}
        <div className="bg-gray-50 rounded-3xl border border-gray-200 shadow-lg p-8 md:p-12">
          
          {/* Préambule */}
          <section className="mb-8">
            <div className="text-gray-700 space-y-3">
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles 
                entre AGENCY BINARY et ses clients dans le cadre de la fourniture de services de création 
                de sites web, d'automatisation de processus et de développement d'assistants IA pour les entreprises.
              </p>
            </div>
          </section>

          {/* 1. Définitions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              1. Définitions
            </h2>
            <div className="text-gray-700 space-y-3">
              <p><strong className="text-gray-900">Prestataire :</strong> AGENCY BINARY</p>
              <p><strong className="text-gray-900">Client :</strong> Toute personne physique ou morale ayant recours aux services de AGENCY BINARY</p>
              <p><strong className="text-gray-900">Services :</strong> Création de sites web, automatisation de processus métier, développement et déploiement d'assistants IA conversationnels pour tous secteurs d'activité</p>
              <p><strong className="text-gray-900">Agent IA :</strong> Solution d'intelligence artificielle conversationnelle personnalisée pour les besoins spécifiques des entreprises</p>
            </div>
          </section>

          {/* 2. Objet */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              2. Objet des services
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>AGENCY BINARY propose les services suivants :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-gray-900 font-semibold mb-2">Création de sites web</h3>
                  <p className="text-sm">Design et développement de sites web professionnels sur mesure</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-gray-900 font-semibold mb-2">Automatisation de processus</h3>
                  <p className="text-sm">Optimisation et automatisation des flux de travail métier</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-gray-900 font-semibold mb-2">Développement d'assistants IA</h3>
                  <p className="text-sm">Création sur mesure d'assistants virtuels intelligents</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                  <h3 className="text-gray-900 font-semibold mb-2">Formation et support</h3>
                  <p className="text-sm">Accompagnement et maintenance des solutions déployées</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Commandes */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              3. Commandes et devis
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                <strong className="text-gray-900">Devis :</strong> Tout projet fait l'objet d'un devis personnalisé 
                établi après analyse des besoins spécifiques du client.
              </p>
              <p>
                <strong className="text-gray-900">Validité :</strong> Les devis sont valables 30 jours à compter de leur émission.
              </p>
              <p>
                <strong className="text-gray-900">Acceptation :</strong> La signature du devis ou le versement d'un acompte 
                vaut acceptation des présentes CGV.
              </p>
            </div>
          </section>

          {/* 4. Prix et facturation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              4. Prix et modalités de facturation
            </h2>
            <div className="text-gray-700 space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Tarification</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Les prix sont exprimés en euros hors taxes</li>
                  <li>TVA applicable au taux en vigueur (20%)</li>
                  <li>Prix fermes et définitifs sauf mention contraire</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Modalités de paiement</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Acompte de 50% à la commande</li>
                  <li>Solde à la livraison ou selon échéancier convenu</li>
                  <li>Paiement par virement bancaire ou chèque</li>
                  <li>Délai de paiement : 30 jours net</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Délais */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              5. Délais d'exécution
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Les délais d'exécution sont indicatifs et courent à compter de la réception 
                de l'acompte et de tous les éléments nécessaires à la réalisation.
              </p>
              <p>
                <strong className="text-gray-900">Retard :</strong> En cas de retard imputable au prestataire, 
                une pénalité de 1% du montant HT par semaine de retard pourra être appliquée.
              </p>
            </div>
          </section>

          {/* 6. Livraison */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              6. Livraison et réception
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                <strong className="text-gray-900">Livraison :</strong> La livraison s'effectue par mise à disposition 
                de l'agent IA sur les serveurs du client ou via plateforme cloud sécurisée.
              </p>
              <p>
                <strong className="text-gray-900">Réception :</strong> Le client dispose de 15 jours pour formuler 
                ses observations. Passé ce délai, la livraison est réputée acceptée.
              </p>
            </div>
          </section>

          {/* 7. Garanties */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              7. Garanties et support
            </h2>
            <div className="text-gray-700 space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Garantie de fonctionnement</h3>
                <p className="text-sm">6 mois à compter de la livraison pour les défauts de conformité</p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <h3 className="text-gray-900 font-semibold mb-2">Support technique</h3>
                <p className="text-sm">Assistance par email sous 48h ouvrées (hors week-end et jours fériés)</p>
              </div>
            </div>
          </section>

          {/* 8. Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              8. Propriété intellectuelle
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                <strong className="text-gray-900">Code source :</strong> AGENCY BINARY conserve tous les droits 
                sur les développements génériques. Seuls les éléments spécifiques au client lui sont cédés.
              </p>
              <p>
                <strong className="text-gray-900">Licence d'utilisation :</strong> Le client bénéficie d'une licence 
                d'utilisation non exclusive et non cessible de l'agent IA livré.
              </p>
            </div>
          </section>

          {/* 9. Responsabilité */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              9. Limitation de responsabilité
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                La responsabilité de AGENCY BINARY est limitée au montant du contrat. 
                Elle ne saurait être engagée pour les dommages indirects ou l'usage fait par le client.
              </p>
              <p>
                <strong className="text-gray-900">Force majeure :</strong> AGENCY BINARY ne saurait être tenue 
                responsable en cas d'événement de force majeure.
              </p>
            </div>
          </section>

          {/* 10. Résiliation */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              10. Résiliation
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                En cas de manquement grave de l'une des parties, l'autre partie peut résilier 
                le contrat après mise en demeure restée sans effet pendant 15 jours.
              </p>
            </div>
          </section>

          {/* 11. Données personnelles */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              11. Protection des données
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                AGENCY BINARY s'engage à respecter la réglementation en vigueur concernant 
                la protection des données personnelles (RGPD).
              </p>
              <p>
                Pour plus d'informations, consultez notre 
                <Link href="/politique-confidentialite" className="text-indigo-600 hover:text-indigo-500 ml-1">
                  politique de confidentialité
                </Link>.
              </p>
            </div>
          </section>

          {/* 12. Droit applicable */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              12. Droit applicable et litiges
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Les présentes CGV sont soumises au droit français. 
                En cas de litige, les tribunaux de [À compléter - ville du siège social] seront seuls compétents.
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
            href="/politique-confidentialite" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </div>
  )
}
