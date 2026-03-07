'use client'

import { useEffect } from 'react'
import HeroInteractive from '@/components/HeroInteractive'
import MissionSection from '@/components/MissionSection'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Footer from '@/components/Footer'
import MaintenancePage from '@/components/MaintenancePage'

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          window.history.replaceState(null, '', window.location.pathname)
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  if (process.env.NEXT_PUBLIC_MAINTENANCE === 'true') {
    return <MaintenancePage />
  }

  return (
    <main className="min-h-screen">
      <AnimatedNavbar />
      <HeroInteractive />
      <MissionSection />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
