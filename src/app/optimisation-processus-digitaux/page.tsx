'use client'

import Link from 'next/link'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Footer from '@/components/Footer'

export default function OptimisationProcessusDigitaux() {
  return (
    <div className="bg-[#FFFFFF] text-[#0F172A]">
      <AnimatedNavbar />
      <main className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24">
        <section className="relative px-4 sm:px-6">
          <div className="pointer-events-none absolute left-1/2 top-[-170px] -z-10 h-[330px] w-[330px] -translate-x-[58%] rounded-full bg-[#2D5BFF]/25 blur-[115px]" />
          <div className="pointer-events-none absolute left-1/2 top-[-140px] -z-10 h-[300px] w-[300px] -translate-x-[2%] rounded-full bg-[#8B5CF6]/20 blur-[115px]" />

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#475569] sm:mb-6">
              Optimisation des Processus Digitaux
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl lg:text-6xl">
              Vous passez plus de temps à gérer vos outils qu&apos;à développer votre entreprise ?
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-pretty text-base leading-relaxed text-[#334155] sm:mt-8 sm:text-lg lg:text-xl">
              Vos données sont éparpillées, vos logiciels ne communiquent pas entre eux, et vos processus manuels freinent votre croissance. Il est temps que la technologie travaille pour vous, et non l&apos;inverse.
            </p>
          </div>
        </section>

        <section className="mt-16 px-4 sm:mt-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl lg:text-4xl">Ce que vous gagnez immédiatement</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(45,91,255,0.14)] sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Libération du temps opérationnel</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Fini les tâches répétitives et chronophages : vous récupérez du temps pour piloter votre activité.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(45,91,255,0.14)] sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path d="M7 12.5 10 15.5 17 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Zéro erreur, 100% de fiabilité</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  L&apos;automatisation élimine le risque d&apos;erreur humaine dans votre facturation et vos données.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(45,91,255,0.14)] sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path d="M4 15h4v5H4zm6-6h4v11h-4zm6-4h4v15h-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Prise de décision éclairée</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Toutes vos statistiques sont centralisées en temps réel pour décider plus vite et plus juste.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(45,91,255,0.14)] sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Scalabilité infinie</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Des systèmes conçus pour encaisser 10x ou 100x plus de volume sans embaucher.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-[#F8FAFC] px-4 py-14 sm:mt-24 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl lg:text-4xl">La solution technique</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#334155] sm:text-lg">
                Trois piliers d&apos;ingénierie pour transformer vos outils en un système digital cohérent, pilotable et rentable.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7 lg:col-span-2">
                <div className="grid gap-8 lg:grid-cols-[1.08fr_1fr] lg:items-center">
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">Mockup UI épuré</p>
                    <div className="mt-4 space-y-3">
                      <div className="h-2.5 w-36 rounded-full bg-[#DCE7FF] sm:w-44" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-20 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]" />
                        <div className="h-20 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]" />
                        <div className="h-20 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]" />
                      </div>
                      <div className="space-y-2 rounded-lg border border-[#E2E8F0] bg-[#FCFDFF] p-3">
                        <div className="h-2 rounded-full bg-[#E2E8F0]" />
                        <div className="h-2 w-10/12 rounded-full bg-[#E2E8F0]" />
                        <div className="h-2 w-8/12 rounded-full bg-[#E2E8F0]" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] sm:text-2xl">Audit & Optimisation de l&apos;existant</h3>
                    <p className="mt-4 text-base leading-relaxed text-[#334155]">
                      Nous ne détruisons pas ce qui fonctionne. Nous auditons vos sites et outils actuels (vitesse, code, UX) pour les mettre à jour et les interconnecter proprement.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">Mockup code interface</p>
                  <div className="mt-4 space-y-2 rounded-lg border border-[#DCE7FF] bg-[#F5F8FF] p-4 font-mono text-xs text-[#1E293B]">
                    <div className="h-2 rounded-full bg-[#C5D7FF]" />
                    <div className="h-2 w-11/12 rounded-full bg-[#C5D7FF]" />
                    <div className="h-2 w-8/12 rounded-full bg-[#C5D7FF]" />
                    <div className="h-2 w-10/12 rounded-full bg-[#C5D7FF]" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0F172A] sm:text-2xl">Développement de SaaS IA sur mesure</h3>
                <p className="mt-4 text-base leading-relaxed text-[#334155]">
                  Les outils standards ne suffisent plus ? Nous concevons et codons des logiciels métier intégrant l&apos;Intelligence Artificielle pour répondre à votre besoin exact (algorithmes personnalisés, traitement de data complexe).
                </p>
              </article>

              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">Mockup dashboard centralisé</p>
                  <div className="mt-4 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-14 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]" />
                      <div className="h-14 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]" />
                    </div>
                    <div className="h-24 rounded-lg border border-[#D8DFFF] bg-gradient-to-r from-[#EEF3FF] to-[#F3EEFF]" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0F172A] sm:text-2xl">Écosystème ERP & CRM</h3>
                <p className="mt-4 text-base leading-relaxed text-[#334155]">
                  Fini les dizaines d&apos;abonnements. Nous déployons notre solution propriétaire pour centraliser vos données, générer automatiquement vos factures, et suivre chaque interaction client en direct.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-16 px-4 sm:mt-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl lg:text-4xl">La preuve par l&apos;usage</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-[#1E293B] p-6 text-white shadow-[0_20px_45px_rgba(15,23,42,0.35)] sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#93C5FD]">Cas n°1 — Clinique Esthétique (SaaS IA)</p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Avant</p>
                    <p className="mt-2 text-white/90">La gérante passait 2h par jour à faire des devis à la main.</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Après</p>
                    <p className="mt-2 text-white/90">
                      Nous avons codé un simulateur IA sur son site. La cliente rentre ses besoins, l&apos;IA calcule la cure et envoie le devis PDF instantanément.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-lg font-semibold text-[#BFDBFE]">Résultat : +35% de conversion et 10h sauvées par semaine.</p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-[#1E293B] p-6 text-white shadow-[0_20px_45px_rgba(15,23,42,0.35)] sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#93C5FD]">Cas n°2 — E-commerce B2B (Optimisation & ERP)</p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Avant</p>
                    <p className="mt-2 text-white/90">Le site ramait et les commandes n&apos;étaient pas reliées à la comptabilité.</p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Après</p>
                    <p className="mt-2 text-white/90">
                      Nous avons optimisé le code du site (-60% de temps de chargement) et connecté notre ERP. Dès qu&apos;un client achète, la facture est générée, le stock est mis à jour, et le CRM planifie une relance.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-lg font-semibold text-[#BFDBFE]">
                  Résultat : -60% de temps de chargement et une chaîne ventes-compta-stock-CRM totalement automatisée.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-16 px-4 sm:mt-24 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E2E8F0] bg-gradient-to-r from-[#EEF4FF] via-[#F5F8FF] to-[#F3EEFF] p-7 text-center text-[#0F172A] shadow-[0_18px_42px_rgba(15,23,42,0.08)] sm:p-10 lg:p-14">
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Pendant que vous hésitez, vos concurrents s&apos;automatisent.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#334155] sm:mt-6 sm:text-lg">
              Chaque jour passé avec des processus obsolètes vous coûte du temps et de l&apos;argent. Ne laissez plus la technique être un plafond de verre. L&apos;équipe d&apos;Agency Binary est prête à auditer votre infrastructure.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#2D5BFF] px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_rgba(45,91,255,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#284FE8] hover:shadow-[0_16px_30px_rgba(45,91,255,0.32)] sm:mt-10 sm:w-auto sm:px-8 sm:py-4"
            >
              Planifier mon audit →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
