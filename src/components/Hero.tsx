export default function Hero() {
  return (
    <>
      {/* Landing Page - Full Height */}
      <section id="hero" className="h-screen relative overflow-hidden">
        {/* Éléments de fond clairs et premium */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Grid pattern clair et subtil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative flex items-center justify-center overflow-hidden">
          
          {/* Container premium avec effet cocon */}
          <div className="relative group w-full overflow-hidden rounded-3xl">
            {/* Halo clair et moderne */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/20 rounded-3xl blur-xl transform scale-150 group-hover:scale-175 transition-transform duration-700"></div>
            <div className="relative bg-white/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 xl:p-20 rounded-3xl border border-white/50 shadow-2xl overflow-hidden" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
            }}>
              
              {/* Contenu principal décalé à droite */}
              <div className="relative z-10 flex items-center justify-center lg:justify-end h-full lg:pr-8 xl:pr-16">
                <div className="text-center lg:text-right">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-tight tracking-tight">
                    <span className="block mb-2">
                      AGENCY
                    </span>
                  </h1>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-tight tracking-tight">
                    <span className="block">
                      B<span className="text-indigo-400" style={{textShadow: '0 0 20px rgba(129, 140, 248, 0.6)'}}>I</span>N<span className="text-indigo-400" style={{textShadow: '0 0 20px rgba(129, 140, 248, 0.6)'}}>A</span>RY
                    </span>
                  </h1>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
        
        {/* Flèche dans un cercle */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 border-2 border-gray-400/40 rounded-full flex items-center justify-center backdrop-blur-sm bg-gray-100/30">
            <svg 
              className="w-5 h-5 text-gray-600/70" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Content Page - Starts after full height */}
      <section className="pt-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solutions Digitales Complètes</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nous proposons deux solutions complémentaires pour transformer votre entreprise :
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 border border-gray-300/40">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Agents IA Virtuels</h3>
                <p className="text-sm text-gray-600">Assistants intelligents 24h/24 pour converser avec vos clients et générer des leads</p>
              </div>
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-4 border border-gray-300/40">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sites Personnalisés</h3>
                <p className="text-sm text-gray-600">Sites web modernes et performants adaptés à votre identité et vos objectifs</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}