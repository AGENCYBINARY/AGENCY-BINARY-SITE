'use client'

import { useState, useEffect, useRef } from 'react'

export default function HeroInteractive() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const wheelAccumulatorRef = useRef(0)

  useEffect(() => {
    const colors = ['#001657', '#002688', '#0135A7', '#0F40C5', '#3E66F0']
    const ambientContainer = document.getElementById('ambient-bg')
    const ambientContainerMobile = document.getElementById('ambient-bg-mobile')
    
    const containers = []
    if (ambientContainer) containers.push(ambientContainer)
    if (ambientContainerMobile) containers.push(ambientContainerMobile)
    
    if (containers.length === 0) return

    const allBlobs: HTMLDivElement[] = []
    
    containers.forEach((container) => {
      colors.forEach((color, index) => {
        const blob = document.createElement('div')
        blob.className = 'blob'
        blob.style.background = color
        blob.style.top = Math.random() * 100 + '%'
        blob.style.left = Math.random() * 100 + '%'
        blob.style.animationDuration = 5 + Math.random() * 4 + 's'
        blob.style.animationDelay = -(Math.random() * 7) + 's'
        blob.style.animationDirection = Math.random() > 0.5 ? 'alternate' : 'alternate-reverse'
        blob.style.setProperty('--tx-a', `${-45 + Math.random() * 90}vw`)
        blob.style.setProperty('--ty-a', `${-45 + Math.random() * 90}vh`)
        blob.style.setProperty('--tx-b', `${-45 + Math.random() * 90}vw`)
        blob.style.setProperty('--ty-b', `${-45 + Math.random() * 90}vh`)
        blob.style.setProperty('--tx-c', `${-45 + Math.random() * 90}vw`)
        blob.style.setProperty('--ty-c', `${-45 + Math.random() * 90}vh`)
        blob.style.setProperty('--blob-scale', `${0.85 + Math.random() * 0.65}`)
        container.appendChild(blob)
        allBlobs.push(blob)
      })
    })

    return () => {
      allBlobs.forEach((blob) => blob.remove())
    }
  }, [])

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Détection du trackpad/scroll wheel pour éviter preventDefault excessif
      const isTrackpad = e.deltaY % 1 !== 0 || Math.abs(e.deltaY) > Math.abs(e.deltaX)
      
      if (!isAnimationComplete) {
        e.preventDefault()
        // Adapter la vitesse de scroll pour trackpad
        const delta = isTrackpad ? e.deltaY * 0.5 : e.deltaY
        wheelAccumulatorRef.current += delta

        const progress = Math.max(0, Math.min(wheelAccumulatorRef.current / 1500, 1))
        setAnimationProgress(progress)

        if (progress >= 1) {
          setIsAnimationComplete(true)
          document.body.style.overflow = 'auto'
        }
      } else if (animationProgress > 0 && animationProgress < 1) {
        e.preventDefault()
        const delta = isTrackpad ? e.deltaY * 0.5 : e.deltaY
        wheelAccumulatorRef.current += delta
        const progress = Math.max(0, Math.min(wheelAccumulatorRef.current / 1500, 1))
        setAnimationProgress(progress)
      }
    }

    if (!isAnimationComplete || (isAnimationComplete && animationProgress > 0 && animationProgress < 1)) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('wheel', handleWheel, { passive: false })
      return () => {
        window.removeEventListener('wheel', handleWheel)
        document.body.style.overflow = 'auto'
      }
    }

    if (isAnimationComplete && animationProgress === 1) {
      document.body.style.overflow = 'auto'
    }
  }, [isAnimationComplete, animationProgress])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && isAnimationComplete) {
        document.body.style.overflow = 'auto'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isAnimationComplete])

  // Text 1 opacity: fades from 1 to 0 in first 30%
  const text1Opacity = Math.max(1 - animationProgress / 0.3, 0)

  // Text 2 opacity: appears at 30%, disappears at 70%
  let text2Opacity = 0
  if (animationProgress >= 0.3 && animationProgress <= 0.7) {
    text2Opacity = Math.sin(((animationProgress - 0.3) / 0.4) * Math.PI)
  }

  // Box position: starts at 30%, reaches center at 100%
  const boxProgress = Math.max((animationProgress - 0.3) / 0.7, 0)
  const boxTranslateY = (1 - boxProgress) * 100 // 100% at start, 0% when centered

  return (
    <>
      {/* VERSION MOBILE - Simple et statique avec fond animé et compatible mobile */}
      <div className="md:hidden relative w-full h-screen overflow-hidden rounded-b-3xl safe-area-inset">
        <div id="ambient-bg-mobile" className="absolute inset-0 overflow-hidden rounded-b-3xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 pt-24 safe-area-inset-top">
          <h1 className="text-5xl sm:text-6xl font-black text-white text-center mb-4 sm:mb-6 leading-tight tracking-tight">
            AGENCY BINARY
          </h1>
          <p className="text-lg sm:text-xl text-white/90 text-center max-w-xs sm:max-w-sm font-medium leading-relaxed">
            Laissez votre inspiration parler, laissez-nous lui donner vie
          </p>
        </div>
      </div>

      {/* VERSION DESKTOP - Animation au scroll */}
      <div
        ref={containerRef}
        className="hidden md:block relative w-full h-screen overflow-visible rounded-b-3xl"
        style={{ isolation: 'isolate' }}
      >
        <div id="ambient-bg" className="absolute inset-0 overflow-hidden rounded-b-3xl" />

        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Text 1: "Laissez votre inspiration parler" */}
          <div
            style={{
              opacity: text1Opacity,
              transition: 'opacity 0.05s linear',
              pointerEvents: text1Opacity > 0 ? 'auto' : 'none',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '800',
              letterSpacing: '-0.02em'
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white text-center px-4">
              Laissez votre inspiration parler
            </h2>
          </div>

          {/* Text 2: "Laissez nous lui donner vie" */}
          <div
            style={{
              opacity: text2Opacity,
              transition: 'opacity 0.05s linear',
              pointerEvents: text2Opacity > 0 ? 'auto' : 'none',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '800',
              letterSpacing: '-0.02em'
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white text-center px-4">
              Laissez-nous lui donner vie
            </h2>
          </div>

          {/* Box AGENCY BINARY */}
          <div
            style={{
              opacity: Math.min(boxProgress * 2, 1),
              transform: `translateY(${boxTranslateY}%)`,
              transition: 'opacity 0.05s linear, transform 0.05s linear'
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative group w-full max-w-4xl mx-4 md:mx-8">
              <div 
                className="relative bg-white/10 backdrop-blur-xl p-8 md:p-12 lg:p-16 xl:p-20 rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-tight">
                      <span className="block mb-2">AGENCY</span>
                    </h1>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-tight">
                      <span className="block">
                        B<span style={{ color: '#5170FF' }}>I</span>N<span style={{ color: '#5170FF' }}>A</span>RY
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer - Becomes visible after animation */}
      {isAnimationComplete && (
        <div className="relative w-full" />
      )}
    </>
  )
}
