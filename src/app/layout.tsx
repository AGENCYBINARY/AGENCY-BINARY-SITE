import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['700', '800'] })

export const metadata: Metadata = {
  title: 'AGENCY BINARY - Agents IA & Web Design',
  description: 'AGENCY BINARY - Agence digitale créant des agents IA virtuels et des sites internet personnalisés modernes et performants',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="overflow-x-hidden scrollbar-hide">
      <head>
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
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}