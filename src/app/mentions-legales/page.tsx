import Link from 'next/link'

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mentions Légales
          </h1>
          <p className="text-gray-600 text-lg">
            Informations légales obligatoires - AGENCY BINARY
          </p>
        </div>

        {/* Contenu */}
        <div className="bg-gray-50 rounded-3xl border border-gray-200 shadow-lg p-8 md:p-12">
          
          {/* 1. Identification de l'entreprise */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              1. Identification de l'entreprise
            </h2>
            <div className="text-gray-700 space-y-2">
              <p><strong className="text-gray-900">Raison sociale :</strong> AGENCY BINARY</p>
              <p><strong className="text-gray-900">Forme juridique :</strong> SAS</p>
              <p><strong className="text-gray-900">Capital social :</strong> 100 Euros</p>
              <p><strong className="text-gray-900">Siège social :</strong> 8 rue du Val de Grâce, 75005 Paris</p>
              <p><strong className="text-gray-900">RCS :</strong> RCS Paris B 101 060 267</p>
              <p><strong className="text-gray-900">SIRET :</strong> 101 060 267 00016</p>
              <p><strong className="text-gray-900">SIREN :</strong> 101 060 267</p>
              <p><strong className="text-gray-900">Code APE/NAF :</strong> 6201Z</p>
              <p><strong className="text-gray-900">TVA intracommunautaire :</strong> FR38101060267</p>
            </div>
          </section>

          {/* 2. Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              2. Contact
            </h2>
            <div className="text-gray-700 space-y-2">
              <p><strong className="text-gray-900">Directeur de publication :</strong> Tristan Massarelli</p>
              <p><strong className="text-gray-900">Téléphone :</strong> 06 80 85 17 68</p>
              <p><strong className="text-gray-900">Email :</strong> contact@agencybinary.fr</p>
            </div>
          </section>

          {/* 3. Hébergement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              3. Hébergement du site
            </h2>
            <div className="text-gray-700 space-y-2">
              <p><strong className="text-gray-900">Hébergeur :</strong> Vercel Inc.</p>
              <p><strong className="text-gray-900">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
              <p><strong className="text-gray-900">Site web :</strong> <Link href="https://vercel.com" className="text-indigo-600 hover:text-indigo-700" target="_blank">https://vercel.com</Link></p>
            </div>
          </section>

          {/* 4. Propriété intellectuelle */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              4. Propriété intellectuelle
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La marque AGENCY BINARY ainsi que son logo sont des marques déposées. Toute reproduction non autorisée de ces éléments constitue une contrefaçon passible des sanctions prévues aux articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </div>
          </section>

          {/* 5. Protection des données personnelles */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              5. Protection des données personnelles
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles.
              </p>
              <p>
                <strong className="text-gray-900">Responsable du traitement :</strong> AGENCY BINARY
              </p>
              <p>
                <strong className="text-gray-900">Finalité :</strong> Gestion des demandes de contact et amélioration de nos services
              </p>
              <p>
                Pour exercer ces droits, contactez-nous à : contact@agencybinary.fr
              </p>
            </div>
          </section>

          {/* 6. Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              6. Cookies
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                Ces cookies ne collectent aucune information personnelle et ne nécessitent pas votre consentement.
              </p>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter le fonctionnement du site.
              </p>
            </div>
          </section>

          {/* 7. Responsabilité */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              7. Limitation de responsabilité
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                AGENCY BINARY s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site, 
                mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
              </p>
              <p>
                En conséquence, AGENCY BINARY décline toute responsabilité pour les éventuelles inexactitudes, 
                erreurs ou omissions portant sur les informations disponibles sur ce site.
              </p>
            </div>
          </section>

          {/* 8. Droit applicable */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
              8. Droit applicable
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                Les présentes mentions légales sont soumises au droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </section>

          {/* Date de mise à jour */}
          <div className="border-t border-gray-300 pt-6 mt-8">
            <p className="text-gray-600 text-sm">
              <strong>Dernière mise à jour :</strong> 20 novembre 2025
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
            href="/politique-confidentialite" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl font-semibold hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 shadow-lg"
          >
            Politique de confidentialité
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