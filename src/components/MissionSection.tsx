'use client'

import Image from 'next/image'

export default function MissionSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-purple-50/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 animate-fade-in">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              De la technique pure à l&apos;ingénierie intelligente. Agency Binary a été fondée par deux développeurs devenus experts en IA avec une conviction : la technologie doit servir la rentabilité.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              En automatisant la complexité, nous concevons des solutions digitales sur-mesure et évolutives. Notre mission ? Vous redonner du temps pour vous concentrer sur l&apos;essentiel, tout en optimisant vos marges.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/mission-agency-binary.png"
                alt="Équipe Agency Binary - collaboration et expertise"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        <p className="mt-10 md:mt-14 w-full text-base sm:text-lg text-gray-700 leading-relaxed animate-fade-in">
          Aujourd&apos;hui, maîtriser son écosystème numérique n&apos;est plus une option pour rester compétitif. C&apos;est le pilier de votre croissance. À l&apos;ère digitale, c&apos;est la qualité de vos outils et de votre présence en ligne qui dicte les règles du jeu. Notre mission est de vous donner cette maîtrise absolue : nous concevons des solutions qui renforcent instantanément votre image de marque à l&apos;extérieur, tout en décuplant votre productivité à l&apos;intérieur.
        </p>
      </div>
    </section>
  )
}
