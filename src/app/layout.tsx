import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import './compatibility.css'
import BrowserCompatInit from '@/components/BrowserCompatInit'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['700', '800'] })

export const metadata: Metadata = {
  title: 'AGENCY BINARY',
  description: 'AGENCY BINARY - Agence digitale créant des agents IA virtuels et des sites internet personnalisés modernes et performants',
  icons: {
    icon: '/icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="overflow-x-hidden scrollbar-hide">
      <head>
        {/* Viewport pour mobile et tablettes */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Mobile Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AGENCY BINARY" />
        <link rel="apple-touch-icon" href="/icon.png" />
        
        {/* Android Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Windows & Microsoft Meta Tags */}
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="application-name" content="AGENCY BINARY" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-window" content="width=device-width; height=device-height" />
        <meta name="msapplication-navbutton-color" content="#2d89ef" />
        
        {/* Format détection */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
        
        {/* Microsoft Edge optimisation */}
        <meta name="x-ua-compatible" content="IE=edge" />
        
        {/* Support tactile et pointer */}
        <meta name="description" content="AGENCY BINARY - Agence digitale créant des agents IA virtuels et des sites internet personnalisés modernes et performants" />
        
        {/* Icônes et favicons */}
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ABL_WIDGET_CONFIG = {
                apiKey: '',
                apiEndpoint: '/api/chat',
                model: 'gpt-4o-mini',
                brandName: 'Agency Build Lab',
                brandShort: 'ABL',
                showWelcome: true
              };
            `,
          }}
        />
        <script src="/widget.js" defer />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <BrowserCompatInit />
        {children}
      </body>
    </html>
  )
}