import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-200/30 backdrop-blur-md rounded-3xl border border-gray-300/30 shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-black text-gray-900">AGENCY BINARY</span>
            </Link>
            <p className="text-gray-700 mb-6 max-w-md">
              Spécialiste de la création d'agents IA et de sites internet pour toutes les entreprises. 
              Nous transformons votre présence digitale et votre relation client grâce à l'intelligence artificielle, quel que soit votre secteur d'activité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors relative group">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none max-w-xs text-center">
                  Nous ne sommes pas encore sur ce réseau social, retentez une prochaine fois !
                </div>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors relative group">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none max-w-xs text-center">
                  Nous ne sommes pas encore sur ce réseau social, retentez une prochaine fois !
                </div>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors relative group">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none max-w-xs text-center">
                  Nous ne sommes pas encore sur ce réseau social, retentez une prochaine fois !
                </div>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors relative group">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zm4.541 7.544c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-4.541 1.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm0 5.5c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2z"/>
                </svg>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none max-w-xs text-center">
                  Nous ne sommes pas encore sur ce réseau social, retentez une prochaine fois !
                </div>
              </a>
            </div>
          </div>

          {/* Liens légaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-gray-700 hover:text-gray-900 transition-colors">
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-2 text-gray-700">
              <li>07 72 04 02 70</li>
              <li>06 80 85 17 68</li>
              <li>contact@agencybinary.fr</li>
            </ul>
          </div>

            <div className="col-span-1 md:col-span-4 border-t border-gray-400/30 mt-8 pt-8 text-center">
              <p className="text-gray-700 text-sm">
                © 2025 AGENCY BINARY. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}