import Link from 'next/link'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Footer from '@/components/Footer'

export default function AssistantIA() {
  return (
    <div className="bg-[#FFFFFF] font-sans text-[#0F172A]">
      <AnimatedNavbar />
      <main className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24">
        <section className="relative px-4 sm:px-6">
          <div className="pointer-events-none absolute left-1/2 top-[-170px] -z-10 h-[330px] w-[330px] -translate-x-[58%] rounded-full bg-[#2D5BFF]/25 blur-[115px]" />
          <div className="pointer-events-none absolute left-1/2 top-[-140px] -z-10 h-[300px] w-[300px] -translate-x-[2%] rounded-full bg-[#8B5CF6]/20 blur-[115px]" />

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#475569] sm:mb-6">
              Assistant IA & Automatisation Intelligente
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl lg:text-6xl">
              Vous passez vos journées à répondre aux mêmes questions et à rédiger des devis ?
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-pretty text-base leading-relaxed text-[#334155] sm:mt-8 sm:text-lg lg:text-xl">
              Pendant que vous gérez l&apos;administratif et les emails répétitifs, vous ne développez pas votre activité. Déléguez ces tâches chronophages à un collaborateur digital qui connaît votre entreprise sur le bout des doigts, disponible 24h/24.
            </p>
          </div>
        </section>

        <section className="mt-16 px-4 sm:mt-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl lg:text-4xl">Ce que vous transformez dans votre quotidien</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(139,92,246,0.16)] sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Disponibilité absolue (24/7)</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Vos clients obtiennent des réponses immédiates, même la nuit ou le week-end. Fini les opportunités manquées.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(139,92,246,0.16)] sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M10 10h4M10 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Zéro charge mentale</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  L&apos;administratif se gère seul. Fini le stress des factures en retard ou des emails oubliés.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(139,92,246,0.16)] sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path d="M6 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M8.5 8.5h7M8.5 15.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Image ultra-professionnelle</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Une communication toujours parfaite, sans faute, et qui respecte le ton de votre marque.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(139,92,246,0.16)] sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M10 7h7v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Moins de dépendance humaine</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Vous automatisez le travail répétitif équivalent à un temps plein, pour une fraction du prix.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-[#F8FAFC] px-4 py-14 sm:mt-24 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl lg:text-4xl">Les capacités réelles de votre Assistant IA</h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7 lg:col-span-2">
                <div className="grid gap-8 lg:grid-cols-[1.08fr_1fr] lg:items-center">
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">Mockup interface de chat élégante</p>
                    <div className="mt-4 space-y-3">
                      <div className="ml-auto h-10 w-4/5 rounded-xl border border-[#DCE7FF] bg-[#EEF3FF]" />
                      <div className="h-10 w-11/12 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]" />
                      <div className="ml-auto h-10 w-3/4 rounded-xl border border-[#DCE7FF] bg-[#EEF3FF]" />
                      <div className="h-10 w-10/12 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] sm:text-2xl">Entraînement sur-mesure sur vos données</h3>
                    <p className="mt-4 text-base leading-relaxed text-[#334155]">
                      Contrairement à un chatbot classique, l&apos;IA lit votre site, vos PDF, et vos processus. Elle devient un véritable expert de votre métier.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">Mockup PDF généré automatiquement</p>
                  <div className="mt-4 rounded-lg border border-[#DCE7FF] bg-[#F7F9FF] p-4">
                    <div className="h-2.5 w-36 rounded-full bg-[#C5D7FF]" />
                    <div className="mt-4 space-y-2">
                      <div className="h-2 rounded-full bg-[#DFE8FF]" />
                      <div className="h-2 w-10/12 rounded-full bg-[#DFE8FF]" />
                      <div className="h-2 w-8/12 rounded-full bg-[#DFE8FF]" />
                    </div>
                    <div className="mt-5 h-9 w-28 rounded-md bg-[#2D5BFF]/15" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0F172A] sm:text-2xl">Rédaction & Génération de Devis/Factures</h3>
                <p className="mt-4 text-base leading-relaxed text-[#334155]">
                  L&apos;assistant ne fait pas que parler. Il rédige vos emails professionnels et génère des devis ou factures PDF simples à partir de vos modèles, sans aucune saisie manuelle.
                </p>
              </article>

              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">Mockup dashboard portail client</p>
                  <div className="mt-4 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-14 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]" />
                      <div className="h-14 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]" />
                    </div>
                    <div className="h-24 rounded-lg border border-[#D8DFFF] bg-gradient-to-r from-[#EEF3FF] to-[#F3EEFF]" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0F172A] sm:text-2xl">Portail Client & Suivi Structuré</h3>
                <p className="mt-4 text-base leading-relaxed text-[#334155]">
                  Tous vos documents sont organisés (émis, payés) et vos clients finaux disposent d&apos;un portail sécurisé pour tout consulter sans vous solliciter.
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#93C5FD]">Cas n°1 — Centre de Bien-Être / Esthétique</p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Avant</p>
                    <p className="mt-2 text-white/90">
                      La fondatrice passait ses soirées sur WhatsApp et Instagram à donner ses tarifs et contre-indications.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Après</p>
                    <p className="mt-2 text-white/90">
                      L&apos;Assistant IA répond instantanément aux clientes anxieuses, qualifie leur besoin et prépare le terrain pour la prise de RDV.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-lg font-semibold text-[#BFDBFE]">Résultat : 12h sauvées par semaine et un agenda rempli la nuit.</p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-[#1E293B] p-6 text-white shadow-[0_20px_45px_rgba(15,23,42,0.35)] sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#93C5FD]">Cas n°2 — Agence de conseil B2B</p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Avant</p>
                    <p className="mt-2 text-white/90">
                      Un prospect demande une prestation spécifique via le site, puis attend jusqu&apos;à 48h avant de recevoir un retour.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Après</p>
                    <p className="mt-2 text-white/90">
                      L&apos;Assistant IA analyse la demande, pioche dans le catalogue des offres, et rédige un email commercial parfait avec un devis PDF en pièce jointe.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-lg font-semibold text-[#BFDBFE]">Résultat : des délais de réponse divisés par 10 et un taux de signature en hausse.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-16 px-4 sm:mt-24 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E2E8F0] bg-gradient-to-r from-[#EEF4FF] via-[#F5F8FF] to-[#F3EEFF] p-7 text-center text-[#0F172A] shadow-[0_18px_42px_rgba(15,23,42,0.08)] sm:p-10 lg:p-14">
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Recrutez votre meilleur collaborateur dès aujourd&apos;hui.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#334155] sm:mt-6 sm:text-lg">
              Un employé qui ne dort jamais, qui connaît toutes vos offres par cœur et qui ne fait aucune erreur de facturation. L&apos;équipe d&apos;Agency Binary est prête à configurer l&apos;intelligence artificielle de votre entreprise.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#2D5BFF] px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_rgba(45,91,255,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#284FE8] hover:shadow-[0_16px_30px_rgba(45,91,255,0.32)] sm:mt-10 sm:w-auto sm:px-8 sm:py-4"
            >
              Déployer mon Assistant IA →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
