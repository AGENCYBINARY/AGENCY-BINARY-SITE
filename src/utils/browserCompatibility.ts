/**
 * Browser Compatibility Detection and Polyfills
 * Ensures consistent behavior across macOS Safari, Windows Chrome/Firefox/Edge
 */

export const BrowserCompat = {
  /**
   * Détecte le support du backdrop-filter
   * Fallback: utiliser une couleur de fond semi-transparente
   */
  supportsBackdropFilter: (): boolean => {
    if (typeof window === 'undefined') return false
    
    const element = document.createElement('div')
    const supports = (
      CSS.supports('backdrop-filter', 'blur(10px)') ||
      CSS.supports('-webkit-backdrop-filter', 'blur(10px)')
    )
    return supports
  },

  /**
   * Détecte le support des animations CSS 3D
   */
  supports3DTransforms: (): boolean => {
    if (typeof window === 'undefined') return false
    
    return CSS.supports('transform', 'translate3d(0, 0, 0)')
  },

  /**
   * Détecte le support du mix-blend-mode
   */
  supportsMixBlendMode: (): boolean => {
    if (typeof window === 'undefined') return false
    
    return CSS.supports('mix-blend-mode', 'screen')
  },

  /**
   * Détecte si l'utilisateur est sur macOS
   */
  isMacOS: (): boolean => {
    if (typeof navigator === 'undefined') return false
    return /Mac|iPhone|iPad|iPod/.test(navigator.platform)
  },

  /**
   * Détecte si l'utilisateur utilise Safari
   */
  isSafari: (): boolean => {
    if (typeof navigator === 'undefined') return false
    return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
  },

  /**
   * Détecte si c'est iOS/iPad Safari
   */
  isIOSSafari: (): boolean => {
    if (typeof navigator === 'undefined') return false
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent)
  },

  /**
   * Detect if user prefers reduced motion
   */
  prefersReducedMotion: (): boolean => {
    if (typeof window === 'undefined') return false
    
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  /**
   * Optimise les transforms pour éviter jank sur les anciennes machines
   * Retourne un objet de style optimisé
   */
  optimizeTransform: (transform: string): Record<string, string> => {
    return {
      WebkitTransform: transform,
      MozTransform: transform,
      msTransform: transform,
      transform: transform,
      WebkitTransformStyle: 'preserve-3d',
      transformStyle: 'preserve-3d',
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      perspective: '1000px',
      WebkitPerspective: '1000px'
    }
  },

  /**
   * Add passive listener support with fallback
   */
  addEventListener: (
    element: Element | Window | Document,
    event: string,
    handler: EventListener,
    options?: boolean | AddEventListenerOptions
  ): void => {
    if (!element) return
    
    try {
      const eventOptions = typeof options === 'boolean' ? { capture: options } : (options || {})
      element.addEventListener(event, handler, eventOptions)
    } catch (e) {
      // Fallback for browsers that don't support passive option
      element.addEventListener(event, handler)
    }
  },

  /**
   * Adapte la sensibilité du scroll pour trackpad
   * macOS trackpads donnent des deltaY non entiers
   */
  getScrollSensitivity: (deltaY: number, isTouchpad: boolean): number => {
    // Détecte si c'est un trackpad (valeurs fractionnaires)
    const isTrackpad = Math.abs(deltaY) < 1
    
    if (isTrackpad || isTouchpad) {
      // Les trackpads sont plus sensibles, réduire la sensibilité
      return deltaY * 0.5
    }
    
    return deltaY
  },

  /**
   * Améliore la performance des animations
   * Désactive les animations si l'utilisateur préfère les mouvement réduits
   */
  getAnimationDuration: (duration: number): number => {
    return BrowserCompat.prefersReducedMotion() ? 0 : duration
  },

  /**
   * Initialise les optimisations de performance
   */
  init: (): void => {
    if (typeof document === 'undefined') return

    // Ajoute les classes de support CSS
    const root = document.documentElement
    
    if (!BrowserCompat.supportsBackdropFilter()) {
      root.classList.add('no-backdrop-filter')
    }
    
    if (!BrowserCompat.supports3DTransforms()) {
      root.classList.add('no-3d-transforms')
    }
    
    if (!BrowserCompat.supportsMixBlendMode()) {
      root.classList.add('no-mix-blend-mode')
    }
    
    if (BrowserCompat.isMacOS()) {
      root.classList.add('is-macos')
    }
    
    if (BrowserCompat.isSafari()) {
      root.classList.add('is-safari')
    }
    
    if (BrowserCompat.prefersReducedMotion()) {
      root.classList.add('prefers-reduced-motion')
    }
  }
}

export default BrowserCompat
