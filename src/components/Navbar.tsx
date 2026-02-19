'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Navbar - Rectangle plat en haut */}
      <nav className="md:hidden fixed top-0 left-0 right-0 w-full z-50 bg-red-500/90 backdrop-blur-md shadow-2xl border-b-4 border-yellow-400">
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-black text-gray-900">AGENCY BINARY</span>
              </Link>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-primary-600 focus:outline-none drop-shadow-sm"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-200/40 backdrop-blur-md border-t border-gray-300/30">
            <Link href="#hero" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-bold transition-colors drop-shadow-sm">
              Accueil
            </Link>
            <Link href="#services" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-bold transition-colors drop-shadow-sm">
              Services
            </Link>
            <Link href="#offres" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-bold transition-colors drop-shadow-sm">
              Offres
            </Link>
            <Link href="#portfolio" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-bold transition-colors drop-shadow-sm">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-bold transition-colors drop-shadow-sm">
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Desktop Navbar - Arrondie et centrée avec animation */}
      <nav className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-gray-200/30 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-black text-gray-900">AGENCY BINARY</span>
              </Link>
            </div>
            
            <div className="flex items-baseline space-x-4">
              <Link href="#hero" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-bold transition-colors drop-shadow-sm">
                Accueil
              </Link>
              <Link href="#services" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-bold transition-colors drop-shadow-sm">
                Services
              </Link>
              <Link href="#offres" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-bold transition-colors drop-shadow-sm">
                Offres
              </Link>
              <Link href="#portfolio" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-bold transition-colors drop-shadow-sm">
                Portfolio
              </Link>
              <Link href="#contact" className="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-bold transition-colors drop-shadow-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}