'use client'

import { useEffect } from 'react'
import HeroInteractive from '@/components/HeroInteractive'
import Services from '@/components/Services'
import Offres from '@/components/Offres'
import Contact from '@/components/Contact'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Gérer le scroll vers l'ancre après le chargement de la page
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          // Supprimer le hash de l'URL après le scroll
          window.history.replaceState(null, '', window.location.pathname)
        }
      }, 100)
    } else {
      // Si pas de hash, s'assurer qu'on est en haut de la page (après un refresh)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  return (
    <main className="min-h-screen">
      <AnimatedNavbar />
      <HeroInteractive />
      <Services />
      <Offres />
      <Contact />
      <Footer />
    </main>
  )
}

