import Image from 'next/image'
import Link from 'next/link'
import AnimatedNavbar from '@/components/AnimatedNavbar'
import Footer from '@/components/Footer'

export default function DeveloppementLinkedIn() {
  return (
    <div className="bg-[#FFFFFF] font-sans text-[#0F172A]">
      <AnimatedNavbar />
      <main className="relative overflow-hidden pt-22 pb-14 sm:pt-24 sm:pb-16">
        <section className="relative px-4 sm:px-6">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.22) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />
            <div className="absolute left-1/2 top-[-170px] h-[340px] w-[340px] -translate-x-[58%] rounded-full bg-[#2D5BFF]/16 blur-[120px]" />
            <div className="absolute left-1/2 top-[-140px] h-[300px] w-[300px] translate-x-[2%] rounded-full bg-[#8B5CF6]/14 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#475569] sm:mb-5">
              Développement LinkedIn & Positionnement Expert
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight text-[#0F172A] sm:text-4xl lg:text-6xl">
              Votre niveau d&apos;expertise est exceptionnel. Pourquoi votre profil LinkedIn ne le reflète-t-il pas ?
            </h1>
            <p className="mx-auto mt-5 max-w-4xl text-pretty text-base leading-relaxed text-[#334155] sm:mt-6 sm:text-lg lg:text-xl">
              Publier du contenu de temps en temps ne suffit plus. Pendant que vous courez après les likes, vos concurrents structurent
              une présence crédible et captent les meilleures opportunités. Il est temps de construire votre autorité professionnelle.
            </p>
          </div>
        </section>

        <section className="mt-10 px-4 sm:mt-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl lg:text-4xl">La visibilité qui vous rapporte vraiment</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-4 shadow-[0_8px_26px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8B5CF6]/40 sm:p-5">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF] transition-colors duration-300 group-hover:border-[#C8B8FF] group-hover:bg-[#F2EEFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" aria-hidden="true">
                    <path d="M6 16 10 12l3 3 5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 20h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Autorité Incontestée</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                  Devenez la référence naturelle de votre secteur avec une parole experte qui vous positionne au-dessus de l&apos;auto-promotion.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-4 shadow-[0_8px_26px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8B5CF6]/40 sm:p-5">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF] transition-colors duration-300 group-hover:border-[#C8B8FF] group-hover:bg-[#F2EEFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105" aria-hidden="true">
                    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="16" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M10.2 9.8 11.1 13.3M13.8 9.8 12.9 13.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Réseau Hautement Qualifié</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                  Arrêtez d&apos;accumuler des connexions inutiles. Développez une audience ciblée avec un réel potentiel de collaboration ou d&apos;achat.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-4 shadow-[0_8px_26px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8B5CF6]/40 sm:p-5">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF] transition-colors duration-300 group-hover:border-[#C8B8FF] group-hover:bg-[#F2EEFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" aria-hidden="true">
                    <path d="M5 18h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M7.5 18V9.5m4 8.5V7m4 11V11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M6.5 6.5h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Soutien à la Conversion</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                  Une visibilité qualitative qui rassure vos prospects en amont et fluidifie vos ventes indirectes sans pression commerciale.
                </p>
              </article>

              <article className="group rounded-2xl border border-[#E2E8F0] bg-white/80 p-4 shadow-[0_8px_26px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8B5CF6]/40 sm:p-5">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E2FF] bg-[#EEF3FF] text-[#2D5BFF] transition-colors duration-300 group-hover:border-[#C8B8FF] group-hover:bg-[#F2EEFF]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
                    <path d="M6 15.5 10 11.5l3 2.8L18 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] sm:text-xl">Maîtrise Algorithmique</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                  Vous ne subissez plus l&apos;algorithme. Nous exploitons les signaux d&apos;engagement et la rétention de lecture pour une croissance pérenne.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-10 bg-[#F8FAFC] px-4 py-10 sm:mt-14 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl lg:text-4xl">La méthode Agency Binary: sprint intensif d&apos;un mois</h2>
              <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-[#334155] sm:text-lg">
                Vous ne misez pas sur des coups d&apos;éclat. Vous activez une véritable ingénierie sociale B2B: positionnement, contenu, réseau et pilotage pour installer une autorité crédible en 30 jours.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-6 lg:items-start">
              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-5 lg:col-span-4">
                <div className="grid gap-5 lg:grid-cols-[1.08fr_1fr] lg:items-start">
                  <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                    <Image
                      src="/images/linkedin-positionnement-expert-v2.png"
                      alt="Professionnel consultant un profil LinkedIn structuré sur un écran"
                      width={2276}
                      height={1516}
                      className="h-full w-full object-cover lg:max-h-[320px]"
                      priority
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] sm:text-2xl">Refonte du Point d&apos;Ancrage</h3>
                    <p className="mt-3 text-base leading-relaxed text-[#334155]">
                      Nous transformons votre profil en véritable vitrine. Optimisation stratégique de la structure, clarification de votre proposition de valeur et harmonisation visuelle.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-5 lg:col-span-2">
                <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                  <Image
                    src="/images/linkedin-croissance-engagement.png"
                    alt="Graphique de croissance mensuelle des visiteurs LinkedIn"
                    width={2565}
                    height={1488}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-4 text-xl font-semibold text-[#0F172A] sm:text-2xl">Sprint de Lancement (1 Mois) & Pilotage</h3>
                <p className="mt-3 text-base leading-relaxed text-[#334155]">
                  Un accompagnement intensif sur 30 jours pour poser des fondations solides. Mise en place du positionnement,
                  déploiement progressif de la ligne éditoriale, développement stratégique des connexions et analyse des premières
                  performances (Impressions, Engagement rate) pour vous rendre autonome sur de bonnes bases.
                </p>
              </article>

              <article className="rounded-3xl border border-[#E2E8F0] bg-white/85 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-5 lg:col-span-6">
                <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A] sm:text-2xl">Ligne Éditoriale & Production</h3>
                    <p className="mt-3 text-base leading-relaxed text-[#334155]">
                      Nous concevons des contenus pédagogiques et différenciants. Chaque post bénéficie d&apos;une accroche forte,
                      d&apos;un développement clair et d&apos;un appel à interaction conçu pour générer des commentaires qualitatifs.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-3 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-4">
                    <div className="space-y-2.5">
                      <div className="rounded-lg border border-[#E2E8F0] bg-[#FCFDFF] p-2.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">Semaine 1</p>
                        <p className="mt-1 text-sm text-[#334155]">Positionnement expert, promesse et architecture du profil.</p>
                      </div>
                      <div className="rounded-lg border border-[#E2E8F0] bg-[#FCFDFF] p-2.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">Semaine 2</p>
                        <p className="mt-1 text-sm text-[#334155]">Ligne éditoriale, formats de posts et méthode d&apos;accroche.</p>
                      </div>
                      <div className="rounded-lg border border-[#E2E8F0] bg-[#FCFDFF] p-2.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">Semaine 3</p>
                        <p className="mt-1 text-sm text-[#334155]">Déploiement des contenus et développement stratégique des connexions.</p>
                      </div>
                      <div className="rounded-lg border border-[#E2E8F0] bg-[#FCFDFF] p-2.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#64748B]">Semaine 4</p>
                        <p className="mt-1 text-sm text-[#334155]">Pilotage des signaux clés, ajustements et passage à l&apos;autonomie.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-10 px-4 sm:mt-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-[#0F172A] sm:text-3xl lg:text-4xl">Exemples fictifs concrets</h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-[#1E293B] p-5 text-white shadow-[0_20px_45px_rgba(15,23,42,0.35)] sm:p-6">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#93C5FD]">Cas n°1 - Gérante de Centre Expert</p>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Avant</p>
                    <p className="mt-2 text-white/90">
                      Vous postiez uniquement des promotions pour vos soins. Aucun engagement, image purement commerciale.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Après</p>
                    <p className="mt-2 text-white/90">
                      Nous avons restructuré votre profil sur la pédagogie du soin non invasif pour vous positionner sur l&apos;expertise plutôt que sur la promotion.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-lg font-semibold text-[#BFDBFE]">
                  Résultat: en un mois de lancement, votre réseau local qualifié a décollé, vous êtes perçue comme l&apos;experte santé/beauté de votre région et vous générez vos premières demandes entrantes.
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-[#1E293B] p-5 text-white shadow-[0_20px_45px_rgba(15,23,42,0.35)] sm:p-6">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#93C5FD]">Cas n°2 - CEO Tech / B2B</p>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Avant</p>
                    <p className="mt-2 text-white/90">
                      Votre profil ressemblait à un ancien CV. Vous vouliez attirer des partenaires, mais votre discours restait flou.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                    <p className="text-xs uppercase tracking-[0.14em] text-white/60">Après</p>
                    <p className="mt-2 text-white/90">
                      Nous avons défini une ligne éditoriale axée sur votre vision du marché et structuré vos prises de parole sur les signaux qui comptent.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-lg font-semibold text-[#BFDBFE]">
                  Résultat: dès les 30 premiers jours, votre taux d&apos;engagement est multiplié par 4 grâce à la maîtrise des signaux algorithmiques, attirant un réseau de décideurs.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mt-10 px-4 sm:mt-14 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E2E8F0] bg-gradient-to-r from-[#EEF4FF] via-[#F5F8FF] to-[#F3EEFF] p-6 text-center text-[#0F172A] shadow-[0_18px_42px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              Votre expertise mérite une audience à sa hauteur.
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#334155] sm:mt-5 sm:text-lg">
              Ne perdez plus de temps avec une communication hasardeuse. Confiez la structuration de votre image de marque à Agency Binary pour un sprint stratégique d&apos;un mois qui transformera durablement votre profil LinkedIn en levier business.
            </p>

            <Link
              href="/#contact"
              className="group mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#2D5BFF] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_24px_rgba(45,91,255,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#284FE8] hover:shadow-[0_16px_30px_rgba(45,91,255,0.32)] sm:mt-8 sm:w-auto sm:px-8 sm:py-3.5"
            >
              <span>Structurer mon positionnement</span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
