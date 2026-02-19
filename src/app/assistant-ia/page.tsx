import Link from 'next/link'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Footer from '@/components/Footer'

export default function AssistantIA() {
  return (
    <div>
      <AnimatedNavbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              ASSISTANT IA
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Assistant métier et administratif interne
            </h2>
          </div>

          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-indigo-500 pb-4">
              Ce que nous faisons
            </h2>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Nous déployons un <strong>assistant IA interne</strong>, configuré spécifiquement pour votre entreprise, qui connaît votre activité <strong>dans le détail</strong> et vous accompagne au quotidien.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Cet assistant est entraîné à partir de :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>votre site</li>
                <li>vos offres</li>
                <li>vos documents</li>
                <li>vos processus</li>
                <li>vos réponses types</li>
              </ul>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                Il devient un <strong>véritable collaborateur digital</strong>, capable d'intervenir rapidement et de manière cohérente.
              </p>
            </div>

            <div className="border-t-2 border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Concrètement, l&apos;assistant peut :</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Orienter et répondre plus vite</h4>
                  <p className="text-gray-700">
                    Il comprend le contexte de votre entreprise et peut orienter un client ou un prospect immédiatement, avec des réponses précises et adaptées.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Assister la rédaction professionnelle</h4>
                  <p className="text-gray-700">
                    Il aide à rédiger emails, réponses clients, messages commerciaux et contenus administratifs, en respectant votre ton et votre façon de communiquer.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Générer devis et factures PDF simples</h4>
                  <p className="text-gray-700">
                    À partir de vos modèles, il prépare devis et factures, prêts à être envoyés, sans ressaisie manuelle inutile.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Structurer l&apos;administratif</h4>
                  <p className="text-gray-700">
                    Les documents sont organisés, suivis (émis, envoyés, payés) et accessibles depuis le dashboard.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Donner accès à vos clients finaux</h4>
                  <p className="text-gray-700">
                    Vos propres clients peuvent consulter leurs documents via un portail sécurisé, sans multiplier les échanges.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-purple-500 pb-4">
              Ce que ça change
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Décisions plus rapides</h3>
                <p className="text-gray-700">L&apos;information est accessible instantanément pour agir vite</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Moins de dépendance à l&apos;humain</h3>
                <p className="text-gray-700">Les tâches répétitives sont automatisées efficacement</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Communication plus fluide</h3>
                <p className="text-gray-700">Échanges cohérents et professionnels en permanence</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Administratif mieux tenu</h3>
                <p className="text-gray-700">Organisation rigoureuse sans effort supplémentaire</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md md:col-span-2">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">Image beaucoup plus professionnelle</h3>
                <p className="text-gray-700">Perception client améliorée grâce à un service optimal</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 text-white">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-purple-400 pb-4">
              Équivalent fonctionnel
            </h2>
            <p className="text-2xl font-semibold leading-relaxed">
              Un collaborateur interne qui connaît votre entreprise sur le bout des doigts, disponible 24h/24, 7j/7, et toujours aligné avec vos règles.
            </p>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prêt à simplifier votre quotidien administratif ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez comment notre assistant IA peut vous faire gagner un temps précieux sur vos tâches quotidiennes
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
