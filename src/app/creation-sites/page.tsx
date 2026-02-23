import Link from 'next/link'

export default function CreationSites() {
  const services = [
    {
      title: "Design Personnalisé",
      description: "Création d'une interface unique et attractive adaptée à votre identité visuelle",
      details: [
        "Design sur mesure selon votre branding",
        "Interface intuitive et moderne",
        "Prototypes et wireframes",
        "Révisions illimitées jusqu'à satisfaction"
      ]
    },
    {
      title: "Performance & Technologie",
      description: "Sites ultra-rapides construits avec les technologies web les plus modernes",
      details: [
        "Next.js & React pour performance maximale",
        "Temps de chargement optimisé < 2s",
        "Infrastructure cloud sécurisée",
        "Compatibilité multi-navigateurs"
      ]
    },
    {
      title: "SEO & Accessibilité",
      description: "Optimisation complète pour les moteurs de recherche et tous les utilisateurs",
      details: [
        "Référencement naturel intégré",
        "Structure sémantique HTML5",
        "Accessibilité WCAG compliant",
        "Sitemap & méta-données optimisées"
      ]
    },
    {
      title: "Gestion de Contenu",
      description: "CMS intuitif pour gérer votre contenu sans connaissances techniques",
      details: [
        "CMS facile d'utilisation",
        "Gestion des images & médias",
        "Édition de pages en temps réel",
        "Formation et documentation incluses"
      ]
    },
    {
      title: "E-commerce (optionnel)",
      description: "Solutions de vente en ligne complètes avec paiements sécurisés",
      details: [
        "Boutique en ligne intégrée",
        "Gestion des stocks automatisée",
        "Passerelles de paiement sécurisées",
        "Facturation et rapports de ventes"
      ]
    },
    {
      title: "Support & Maintenance",
      description: "Support technique réactif et maintenance continue de votre site",
      details: [
        "Support par email/téléphone",
        "Mises à jour de sécurité automatiques",
        "Sauvegardes régulières",
        "Optimisation continue des performances"
      ]
    }
  ]

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "Écoute de vos besoins, objectifs et contraintes pour définir la stratégie"
    },
    {
      number: "2",
      title: "Conception",
      description: "Création de prototypes et mockups pour validation de votre vision"
    },
    {
      number: "3",
      title: "Développement",
      description: "Développement du site avec les meilleures pratiques web modernes"
    },
    {
      number: "4",
      title: "Tests",
      description: "Tests complets (compatibilité, performance, sécurité, accessibilité)"
    },
    {
      number: "5",
      title: "Déploiement",
      description: "Mise en ligne avec configuration DNS et SSL sécurisé"
    },
    {
      number: "6",
      title: "Accompagnement",
      description: "Formation et support continu pour la gestion de votre site"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec retour */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/#services"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group w-fit"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Retour</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Web Design
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text safe-bg-clip-text" style={{ color: '#9f7aea' }}>
              Personnalisés
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des sites web modernes, performants et adaptés à vos objectifs commerciaux. 
            Chaque projet est unique et développé sur mesure pour votre entreprise.
          </p>
        </div>

        {/* Section: Pourquoi un site personnalisé */}
        <div className="bg-gray-100 rounded-3xl border border-gray-300 p-8 md:p-12 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi un site personnalisé ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Aligné avec vos objectifs</h3>
              <p className="text-gray-600">
                Votre site est conçu pour convertir, vendre ou informer selon votre stratégie commerciale spécifique
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Unique et différenciant</h3>
              <p className="text-gray-600">
                Un design qui vous démarque de vos concurrents et renforce votre identité de marque
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance maximale</h3>
              <p className="text-gray-600">
                Technologie avant-gardiste au service d'un site ultra-rapide, sécurisé et parfaitement adapté à tous les appareils
              </p>
            </div>
          </div>
        </div>

        {/* Services détaillés */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Nos Services de Création
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 rounded-xl border border-gray-300 p-6 hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Processus de création */}
        <div className="bg-gray-100 rounded-3xl border border-gray-300 p-8 md:p-12 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Notre Processus de Création
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Tarification */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl border border-purple-300 p-8 md:p-12 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Tarification Sur Devis
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto text-lg">
            Chaque projet est unique et les tarifs varient en fonction du type de site, de la complexité et des fonctionnalités requises.
            Nous proposons des solutions adaptées à tous les budgets.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                Site Vitrine
              </h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Présentation de votre entreprise</li>
                <li>✓ Portfolio ou galerie</li>
                <li>✓ Formulaire de contact</li>
                <li>✓ Blog intégré</li>
              </ul>
              <p className="text-sm text-gray-400">Idéal pour établir votre présence en ligne</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                E-commerce
              </h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Boutique en ligne complète</li>
                <li>✓ Gestion des stocks</li>
                <li>✓ Paiements sécurisés</li>
                <li>✓ Expéditions intégrées</li>
              </ul>
              <p className="text-sm text-gray-400">Pour vendre vos produits en ligne</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-purple-300">
            <p className="text-gray-700 mb-6">
              Les prix dépendent également de vos besoins en termes de design, fonctionnalités avancées, 
              intégrations tierces et maintenance.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100 rounded-3xl border border-gray-300 p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à créer votre site ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé adapté à vos besoins et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Nous Contacter
            </Link>
            <Link
              href="/"
              className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-200"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
