'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function AnimatedNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're already on the homepage, scroll to #hero instead of navigating
    if (pathname === '/' || pathname === '') {
      e.preventDefault()
      const el = document.getElementById('hero')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculer les valeurs d'animation basées sur le scroll (DESKTOP SEULEMENT)
  const maxScroll = 800
  const progress = Math.min(scrollY / maxScroll, 1)
  const navWidth = 50 + (45 * progress)
  const maxWidth = 30 + (50 * progress)
  const isInitialState = progress < 0.5
  const logoOpacity = progress > 0.3 ? (progress - 0.3) / 0.7 : 0
  const logoScale = 0.6 + (0.4 * progress)

  return (
    <>
      {/* MOBILE Navbar - Rectangle plat collé en haut SANS animation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 w-full z-50 bg-gray-200/30 backdrop-blur-md shadow-2xl border-b border-gray-300/30 animate-slide-down will-change-transform">
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" onClick={handleLogoClick} aria-label="Accueil" className="flex items-center hover:scale-110 transition-transform duration-300 will-change-transform">
                <span className="text-2xl font-black text-gray-900">AGENCY BINARY</span>
              </Link>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-primary-600 focus:outline-none drop-shadow-sm transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-200/40 backdrop-blur-md border-t border-gray-300/30 animate-slide-down">
            <Link href="/#hero" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-bold transition-colors drop-shadow-sm">
              Accueil
            </Link>
            <Link href="/#services" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-bold transition-colors drop-shadow-sm">
              Services
            </Link>
            <Link href="/#offres" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-bold transition-colors drop-shadow-sm">
              Offres
            </Link>
            <Link href="/#contact" className="text-gray-900 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-bold transition-colors drop-shadow-sm">
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* DESKTOP Navbar - Avec animation au scroll */}
      <nav 
        className="hidden md:block bg-gray-200/30 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-300/30 fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out will-change-auto"
        style={{
          width: `${navWidth}%`,
          maxWidth: `${maxWidth}rem`,
          WebkitTransform: `translate(-50%, 0)`,
          transform: `translate(-50%, 0)`
        }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`flex items-center h-16 transition-all duration-500 ${
              isInitialState ? 'justify-center' : 'justify-between'
            }`}
          >
            {/* Logo - Apparaît lors du scroll */}
            <div 
              className="flex-shrink-0 transition-all duration-500 will-change-transform"
              style={{
                opacity: logoOpacity,
                WebkitTransform: `scale(${logoScale})`,
                transform: `scale(${logoScale})`,
                marginRight: logoOpacity > 0 ? '1rem' : '0',
                display: logoOpacity > 0.1 ? 'block' : 'none'
              }}
            >
              <Link href="/" onClick={handleLogoClick} aria-label="Accueil" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="AGENCY BINARY"
                  width={40}
                  height={40}
                  className="filter brightness-110"
                />
              </Link>
            </div>
            
            {/* Menu Desktop */}
            <div className="flex items-baseline space-x-2">
              <Link href="/#hero" className="relative text-gray-900 px-4 py-2 text-sm font-bold group">
                <span className="relative z-10">Accueil</span>
                <span className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-full scale-30 group-hover:scale-[1.15] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-lg group-hover:duration-300"></span>
                <span className="absolute inset-0 border border-white/60 rounded-full scale-30 group-hover:scale-[1.15] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:duration-300"></span>
              </Link>
              <Link href="/#services" className="relative text-gray-900 px-4 py-2 text-sm font-bold group">
                <span className="relative z-10">Services</span>
                <span className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-full scale-30 group-hover:scale-[1.15] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-lg group-hover:duration-300"></span>
                <span className="absolute inset-0 border border-white/60 rounded-full scale-30 group-hover:scale-[1.15] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:duration-300"></span>
              </Link>
              <Link href="/#offres" className="relative text-gray-900 px-4 py-2 text-sm font-bold group">
                <span className="relative z-10">Offres</span>
                <span className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-full scale-30 group-hover:scale-[1.15] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-lg group-hover:duration-300"></span>
                <span className="absolute inset-0 border border-white/60 rounded-full scale-30 group-hover:scale-[1.15] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:duration-300"></span>
              </Link>
              <Link href="/#contact" className="relative text-gray-900 px-4 py-2 text-sm font-bold group">
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-full scale-30 group-hover:scale-[1.15] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-lg group-hover:duration-300"></span>
                <span className="absolute inset-0 border border-white/60 rounded-full scale-30 group-hover:scale-[1.15] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}