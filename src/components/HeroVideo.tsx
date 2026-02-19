'use client'
import { useState, useEffect, useRef } from 'react'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showText1, setShowText1] = useState(true)
  const [showText2, setShowText2] = useState(false)
  const [showBox, setShowBox] = useState(false)
  const [boxPosition, setBoxPosition] = useState(0)
  const [videoScale, setVideoScale] = useState(1)
  const [wheelDelta, setWheelDelta] = useState(0)

  useEffect(() => {
    let currentProgress = 0
    const maxProgress = 1.0

    const handleWheel = (e: WheelEvent) => {
      // Only control video when it's on screen
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0

      if (isInView && currentProgress < maxProgress) {
        e.preventDefault()

        // Update progress based on wheel delta - smaller increment for smoother control
        const delta = e.deltaY > 0 ? 0.01 : -0.01
        currentProgress = Math.max(0, Math.min(currentProgress + delta, maxProgress))
        
        setScrollProgress(currentProgress)

        // Text 1 fade out (0 to 0.25)
        if (currentProgress < 0.25) {
          setShowText1(true)
          setShowText2(false)
          setShowBox(false)
        }
        // Text 2 fade in and out (0.2 to 0.5)
        else if (currentProgress < 0.5) {
          setShowText1(false)
          setShowText2(true)
          setShowBox(false)
        }
        // Box appear (0.4 onwards)
        else {
          setShowText2(false)
          setShowBox(true)
          const boxProg = Math.min((currentProgress - 0.4) / 0.4, 1)
          setBoxPosition(boxProg)
          
          // Video shrinks from 0.7 onwards
          if (currentProgress > 0.7) {
            const scaleProg = Math.max(1 - (currentProgress - 0.7) / 0.3, 0)
            setVideoScale(scaleProg)
          }
        }

        // Control video playback
        if (videoRef.current) {
          const duration = videoRef.current.duration
          if (duration) {
            videoRef.current.currentTime = currentProgress * duration * 0.8
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  // Auto-play when wheel stops
  useEffect(() => {
    let autoPlayTimeout: NodeJS.Timeout
    let scrollCheckTimeout: NodeJS.Timeout

    const handleWheelStart = () => {
      clearTimeout(autoPlayTimeout)
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }

    const handleWheelEnd = () => {
      clearTimeout(autoPlayTimeout)
      autoPlayTimeout = setTimeout(() => {
        if (videoRef.current && scrollProgress < 0.4) {
          videoRef.current.play()
        }
      }, 300)
    }

    // Check if user scrolls back to top
    const handleScroll = () => {
      clearTimeout(scrollCheckTimeout)
      scrollCheckTimeout = setTimeout(() => {
        if (window.scrollY < 100) {
          setScrollProgress(0)
          setShowText1(true)
          setShowText2(false)
          setShowBox(false)
          setBoxPosition(0)
          setVideoScale(1)
          if (videoRef.current) {
            videoRef.current.currentTime = 0
          }
        }
      }, 100)
    }

    window.addEventListener('wheel', handleWheelStart)
    window.addEventListener('wheel', handleWheelEnd)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleWheelStart)
      window.removeEventListener('wheel', handleWheelEnd)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(autoPlayTimeout)
      clearTimeout(scrollCheckTimeout)
    }
  }, [scrollProgress])

  return (
    <>
      {/* Video Hero Section - Fixed container */}
      <div 
        ref={containerRef}
        className={`fixed top-0 left-0 right-0 h-screen w-full overflow-visible bg-white transition-opacity duration-300 rounded-b-3xl ${scrollProgress >= 0.8 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{
          zIndex: scrollProgress >= 0.8 ? -1 : 40
        }}
      >
        {/* Gradient Background Fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-b-3xl"></div>

        {/* Text 1: "Laissez votre inspiration parler" */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300"
          style={{
            opacity: showText1 ? Math.max(1 - scrollProgress / 0.3, 0) : 0,
            pointerEvents: showText1 ? 'auto' : 'none'
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white text-center px-4">
            Laissez votre inspiration parler
          </h2>
        </div>

        {/* Text 2: "Laissez nous lui donner vie" */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300"
          style={{
            opacity: showText2 ? Math.min(Math.max((scrollProgress - 0.25) / 0.15, 0), Math.max(1 - (scrollProgress - 0.45) / 0.15, 0)) : 0,
            pointerEvents: showText2 ? 'auto' : 'none'
          }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white text-center px-4">
            Laissez nous lui donner vie
          </h2>
        </div>

        {/* Agency Binary Box */}
        {showBox && (
          <div
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{
              opacity: Math.min(boxPosition * 2, 1)
            }}
          >
            <div className="relative group w-full overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-3xl blur-xl transform scale-150 group-hover:scale-175 transition-transform duration-700"></div>
              <div 
                className="relative bg-white/10 backdrop-blur-xl p-8 md:p-12 lg:p-16 xl:p-20 rounded-3xl border border-white/20 shadow-2xl overflow-hidden mx-4 md:mx-8 lg:mx-auto max-w-4xl"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                  transform: `translateY(${100 - boxPosition * 100}px)`,
                  transition: 'transform 0.05s linear'
                }}
              >
                <div className="relative z-10 flex items-center justify-center lg:justify-end h-full lg:pr-8 xl:pr-16">
                  <div className="text-center lg:text-right">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-tight">
                      <span className="block mb-2">
                        AGENCY
                      </span>
                    </h1>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-tight">
                      <span className="block">
                        BU<span className="text-indigo-400" style={{textShadow: '0 0 20px rgba(129, 140, 248, 0.6)'}}>I</span>LDL<span className="text-indigo-400" style={{textShadow: '0 0 20px rgba(129, 140, 248, 0.6)'}}>A</span>B
                      </span>
                    </h1>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content starts after hero interaction */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
