'use client'

import { useEffect } from 'react'
import BrowserCompat from '@/utils/browserCompatibility'

/**
 * Composant qui initialise les détections de compatibilité cross-browser
 * Doit être exécuté au chargement de la page
 */
export default function BrowserCompatInit() {
  useEffect(() => {
    // Initialiser les détections et les classes CSS
    BrowserCompat.init()
    
    // Log les détections pour le debugging (à supprimer en production)
    if (process.env.NODE_ENV === 'development') {
      console.log('Browser Compatibility Detection:')
      console.log('- Backdrop Filter Support:', BrowserCompat.supportsBackdropFilter())
      console.log('- 3D Transforms Support:', BrowserCompat.supports3DTransforms())
      console.log('- Mix Blend Mode Support:', BrowserCompat.supportsMixBlendMode())
      console.log('- Is macOS:', BrowserCompat.isMacOS())
      console.log('- Is Safari:', BrowserCompat.isSafari())
      console.log('- Prefers Reduced Motion:', BrowserCompat.prefersReducedMotion())
    }

    // Ajouter un event listener pour détecter les changements de préférence de mouvement
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      const html = document.documentElement
      if (e.matches) {
        html.classList.add('prefers-reduced-motion')
      } else {
        html.classList.remove('prefers-reduced-motion')
      }
    }

    motionMediaQuery.addEventListener('change', handleMotionPreferenceChange)

    return () => {
      motionMediaQuery.removeEventListener('change', handleMotionPreferenceChange)
    }
  }, [])

  return null
}
