'use client'

import Image from 'next/image'

export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-indigo-950/30 to-slate-900 px-4">
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 text-center max-w-md mx-auto">
        <Image
          src="/images/logo.png"
          alt="AGENCY BINARY"
          width={80}
          height={80}
          className="mx-auto mb-6 opacity-90"
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
          AGENCY BINARY
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Nous effectuons une maintenance. Le site sera de retour très bientôt.
        </p>
        <p className="text-slate-500 text-sm mt-4">
          Merci de votre patience.
        </p>
      </div>
    </main>
  )
}
