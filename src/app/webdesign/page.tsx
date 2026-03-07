import Link from 'next/link'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Footer from '@/components/Footer'

export default function WebDesign() {
  return (
    <div className="bg-[#FFFFFF] font-sans text-[#0F172A]">
      <AnimatedNavbar />
      <main className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24">
        <section className="relative px-4 sm:px-6">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(226, 232, 240, 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(226, 232, 240, 0.7) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
              }}
            />
            <div className="absolute left-1/2 top-[-160px] h-[320px] w-[320px] -translate-x-[52%] rounded-full bg-[#2D5BFF]/14 blur-[120px]" />
            <div className="absolute left-1/2 top-[-130px] h-[280px] w-[280px] translate-x-[6%] rounded-full bg-[#8B5CF6]/12 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#475569] sm:mb-6">
              WebDesign & Interfaces Connectées
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl lg:text-6xl">
              Votre site web est-il une simple carte de visite ou un véritable moteur de croissance ?
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-pretty text-base leading-relaxed text-[#334155] sm:mt-8 sm:text-lg lg:text-xl">
              Vous avez investi dans un site internet, mais il ne vous rapporte que des formulaires vides ou des visiteurs qui fuient. Il est temps de transformer votre vitrine en une interface opérationnelle, ultra-rapide et directement connectée à vos processus métier.
            </p>
          </div>
        </section>

        <section className="mt-16 px-4 sm:mt-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl lg:text-4xl">Le design qui produit des résultats</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M6 16 10 12l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 20h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Conversion Maximisée</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Un parcours utilisateur (UX) pensé pour transformer vos simples visiteurs en clients qualifiés.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
                    <path d="M7 8h10M7 12h7M7 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Demandes 100% Qualifiées</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Fini les messages vagues. Obtenez dès le premier contact les informations pertinentes : contexte, budget et urgence.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                    <rect x="3.5" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                    <rect x="13.5" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                    <rect x="3.5" y="14" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                    <rect x="13.5" y="14" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M10.5 7h3M7 10.5v3M17 10.5v3M10.5 17h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Cohérence Opérationnelle</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Votre site n&apos;est plus isolé. Il communique de façon transparente avec vos processus internes, CRM et facturation.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 sm:p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true">
                    <path d="M6 18h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M8 14h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M10 10h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M12 6v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Image Haut de Gamme</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Une plateforme rapide, claire et structurée qui reflète instantanément le sérieux et le prestige de votre marque.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-[#F8FAFC] px-4 py-14 sm:mt-24 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl lg:text-4xl">La méthode Agency Binary</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#334155] sm:text-lg">
                Une approche de développement orientée performance, qualification commerciale et intégration métier.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7 lg:col-span-2">
                <div className="grid gap-8 lg:grid-cols-[1.08fr_1fr] lg:items-center">
                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">Mockup jauge de performance</p>
                    <div className="mt-5 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#2D5BFF]/30 bg-[#EEF3FF] text-xl font-semibold text-[#0F172A]">
                        0.9s
                      </div>
                      <div className="space-y-2">
                        <div className="h-2.5 rounded-full bg-[#DCE7FF]">
                          <div className="h-full w-[90%] rounded-full bg-[#2D5BFF]" />
                        </div>
                        <div className="h-2.5 rounded-full bg-[#E6EAF2]">
                          <div className="h-full w-[82%] rounded-full bg-[#64748B]" />
                        </div>
                        <div className="h-2.5 rounded-full bg-[#EDE9FE]">
                          <div className="h-full w-[76%] rounded-full bg-[#8B5CF6]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] sm:text-2xl">Design & Performance Technique</h3>
                    <p className="mt-4 text-base leading-relaxed text-[#334155]">
                      Nous concevons des sites web orientés lisibilité et expérience utilisateur (UX/UI). Code propre, temps de chargement éclair et optimisation mobile absolue.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">Mockup formulaire interactif moderne</p>
                  <div className="mt-4 space-y-3 rounded-lg border border-[#DCE7FF] bg-[#F7F9FF] p-4">
                    <div className="h-9 rounded-md border border-[#D7E2FF] bg-white" />
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="h-9 rounded-md border border-[#D7E2FF] bg-white" />
                      <div className="h-9 rounded-md border border-[#D7E2FF] bg-white" />
                    </div>
                    <div className="h-20 rounded-md border border-[#D7E2FF] bg-white" />
                    <div className="h-9 w-36 rounded-md bg-[#2D5BFF]/18" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0F172A] sm:text-2xl">Formulaires Orientés Qualification</h3>
                <p className="mt-4 text-base leading-relaxed text-[#334155]">
                  Oubliez la page « Contact » classique. Nous créons des formulaires dynamiques qui captent des demandes directement exploitables par vos équipes.
                </p>
              </article>

              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-7">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">Mockup schéma site → dashboard</p>
                  <div className="mt-4 grid grid-cols-3 items-center gap-2 text-center text-xs font-medium text-[#334155]">
                    <div className="rounded-lg border border-[#D7E2FF] bg-[#EEF3FF] p-2">Site</div>
                    <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2">CRM</div>
                    <div className="rounded-lg border border-[#E3D9FF] bg-[#F3EEFF] p-2">Dashboard</div>
                    <div className="col-span-3 flex items-center justify-center gap-2 py-1 text-[#2D5BFF]">
                      <span className="h-px w-12 bg-[#2D5BFF]/50" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2D5BFF]" />
                      <span className="h-px w-12 bg-[#2D5BFF]/50" />
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#0F172A] sm:text-2xl">L&apos;Intégration Systémique (Le Bonus IA)</h3>
                <p className="mt-4 text-base leading-relaxed text-[#334155]">
                  Votre site est livré avec une connexion directe à notre système d&apos;automatisation. Toutes les interactions remontent dans votre dashboard centralisé, et nous pouvons y intégrer nativement notre Agent IA pour conseiller vos visiteurs 24h/24.
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#93C5FD]">Cas n°1 — Institut de Beauté Haut de Gamme</p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Avant</p>
                    <p className="mt-2 text-white/90">
                      Le site était lent et la présentation des soins était confuse. Les clientes appelaient pour demander les prix.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Après</p>
                    <p className="mt-2 text-white/90">
                      Nous avons refondu l&apos;UX avec un parcours visuel clair et un module de qualification.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-lg font-semibold text-[#BFDBFE]">
                  Résultat : temps de chargement divisé par 3, image de marque sublimée et +40% de prises de rendez-vous qualifiées en ligne.
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-[#1E293B] p-6 text-white shadow-[0_20px_45px_rgba(15,23,42,0.35)] sm:p-8">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#93C5FD]">Cas n°2 — Cabinet de Conseil B2B</p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Avant</p>
                    <p className="mt-2 text-white/90">
                      Leur ancien site recevait des messages du type « Bonjour, rappelez-moi ».
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Après</p>
                    <p className="mt-2 text-white/90">
                      Nous avons créé des parcours interactifs segmentés selon le besoin du visiteur, connectés directement à leur outil de gestion (CRM).
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-lg font-semibold text-[#BFDBFE]">
                  Résultat : des commerciaux qui ne reçoivent plus que des prospects chauds avec des budgets déjà qualifiés.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-16 px-4 sm:mt-24 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E2E8F0] bg-gradient-to-r from-[#EEF4FF] via-[#F5F8FF] to-[#F3EEFF] p-7 text-center text-[#0F172A] shadow-[0_18px_42px_rgba(15,23,42,0.08)] sm:p-10 lg:p-14">
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Votre entreprise mérite un site web qui travaille pour elle.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#334155] sm:mt-6 sm:text-lg">
              Ne laissez plus vos concurrents capter vos clients avec des interfaces plus performantes. L&apos;équipe d&apos;Agency Binary est à votre écoute pour concevoir la vitrine numérique connectée de demain.
            </p>

            <Link
              href="/#contact"
              className="group mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#2D5BFF] px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_rgba(45,91,255,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#284FE8] hover:shadow-[0_16px_30px_rgba(45,91,255,0.32)] sm:mt-10 sm:w-auto sm:px-8 sm:py-4"
            >
              <span>Créer mon site performant</span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
