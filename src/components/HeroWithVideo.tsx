'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function HeroWithVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const scrollY = window.scrollY

      // Calculate progress from 0 to 1 while user is in hero section
      const relativeScroll = scrollY - sectionTop
      const progress = Math.max(0, Math.min(relativeScroll / sectionHeight, 1))
      
      setScrollProgress(progress)

      // Control video playback
      if (videoRef.current && videoRef.current.duration) {
        videoRef.current.currentTime = progress * videoRef.current.duration * 0.8
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-screen bg-white flex items-center justify-center overflow-visible pt-20 rounded-b-3xl"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-b-3xl"></div>

      {/* Animated gradient background fallback */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Text 1: Inspiration - Fade out on scroll */}
        <div
          style={{
            opacity: Math.max(1 - scrollProgress / 0.3, 0),
            transform: `translateY(${scrollProgress * 20}px)`,
            transition: 'none'
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Laissez votre inspiration parler
          </h2>
        </div>

        {/* Text 2: Main content - Shows after scroll */}
        <div
          style={{
            opacity: Math.min(Math.max((scrollProgress - 0.2) / 0.3, 0), 1),
            transform: `translateY(${Math.max(0, (0.3 - scrollProgress) * 30)}px)`,
            transition: 'none'
          }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            Transformez votre <span className="text-indigo-400" style={{textShadow: '0 0 20px rgba(129, 140, 248, 0.6)'}}>relation client</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez la puissance des agents IA virtuels pour automatiser votre service client 24h/24, 7j/7 et augmenter votre productivité
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/fonctionnalites" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-indigo-600/50">
              En savoir plus →
            </Link>
            <Link href="#contact" className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-gray-600/50">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
