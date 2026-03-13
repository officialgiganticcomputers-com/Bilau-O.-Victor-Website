export default function Hero({ onOpenVideo }: { onOpenVideo: () => void }) {
  return (
    <header id="home" className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden flex items-center min-h-screen mesh-bg">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-zinc-50 to-transparent z-10"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="particle-orb w-2 h-2 top-[30%] left-[20%]" style={{animationDelay: '0s'}}></div>
        <div className="particle-orb w-3 h-3 top-[70%] left-[10%]" style={{animationDelay: '2s', animationDuration: '18s'}}></div>
        <div className="particle-orb w-1 h-1 top-[50%] left-[80%]" style={{animationDelay: '5s', animationDuration: '12s'}}></div>
        <div className="particle-orb w-4 h-4 top-[20%] right-[25%] bg-blue-500/30" style={{animationDelay: '1s', animationDuration: '20s'}}></div>
        <div className="network-line top-[40%] left-[15%] rotate-45" style={{animationDelay: '3s'}}></div>
        <div className="network-line top-[75%] right-[20%] -rotate-12" style={{animationDelay: '7s'}}></div>
        <div className="network-line top-[20%] left-[60%] rotate-[30deg]" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full mix-blend-screen animate-[pulse-glow_8s_ease-in-out_infinite] z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen animate-[pulse-glow_12s_ease-in-out_infinite_reverse] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 fade-in-section">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-md mb-8 shadow-glass">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Ado-Ekiti, Nigeria</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6">
              The Architect of the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Digital Sanctuary.</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-zinc-300 font-medium tracking-tight mt-4 opacity-90">Where Faith Meets Technology.</span>
            </h1>
            
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed font-light max-w-xl">
              The evolution of religious practice in West Africa has reached a critical juncture. This transition is embodied by <strong className="text-zinc-200 font-medium">Bilau Oluwatobi Victor</strong>, widely recognized by his professional and ministerial moniker <strong className="text-amber-400 font-medium">"Gigantic"</strong>.
            </p>

            <div className="flex items-center gap-6 md:gap-10 mb-10 py-5 border-y border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 to-transparent pointer-events-none"></div>
              <div className="relative z-10">
                <div className="text-3xl font-display font-bold text-white mb-1 tracking-tight">40K+</div>
                <div className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">Youth<br/>Empowered</div>
              </div>
              <div className="w-px h-12 bg-zinc-800 relative z-10"></div>
              <div className="relative z-10">
                <div className="text-3xl font-display font-bold text-white mb-1 tracking-tight">150+</div>
                <div className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">Ministries<br/>Equipped</div>
              </div>
              <div className="w-px h-12 bg-zinc-800 relative z-10"></div>
              <div className="relative z-10">
                <div className="text-3xl font-display font-bold text-white mb-1 tracking-tight">500+</div>
                <div className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">Media Leaders<br/>Trained</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onOpenVideo} className="group flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]">
                <i className="ph-bold ph-play-circle text-xl group-hover:scale-110 transition-transform"></i> Watch Showreel
              </button>
              <a href="#contact" className="flex items-center justify-center bg-zinc-900/50 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-xl font-semibold text-sm transition-all backdrop-blur-sm">
                Book a Workshop
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block lg:col-span-6 relative fade-in-section perspective-1000">
            <div className="absolute inset-0 bg-amber-500/20 blur-[120px] rounded-full"></div>
            <div className="relative w-full max-w-lg mx-auto bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 group/mockup">
              <div className="absolute inset-0 z-30 flex items-center justify-center cursor-pointer transition-all duration-500" onClick={onOpenVideo}>
                <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-24 h-24 rounded-full bg-amber-500/20 flex items-center justify-center backdrop-blur-md border border-amber-500/50 transform scale-90 group-hover/mockup:scale-110 transition-all duration-500 shadow-[0_0_40px_rgba(245,158,11,0.5)]">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 pl-1 shadow-lg">
                    <i className="ph-fill ph-play text-3xl"></i>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2 bg-zinc-950/50 relative z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs font-mono text-zinc-500">vMix_Production_Live.prj</div>
              </div>
              <div className="p-4 bg-zinc-950/80 relative z-20">
                <div className="aspect-video bg-zinc-900 rounded-lg border border-white/5 flex items-center justify-center relative overflow-hidden">
                  <img src="https://i.ibb.co/x8764ZFP/9.jpg" alt="Live Production" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded animate-pulse">LIVE</div>
                    <div className="px-2 py-1 bg-zinc-900/80 text-white text-[10px] font-mono rounded backdrop-blur-sm">01:24:05</div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`aspect-video bg-zinc-900 rounded border ${i===1 ? 'border-red-500/50' : 'border-white/5'} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/5"></div>
                      <div className="absolute bottom-1 left-1 text-[8px] font-mono text-zinc-500">CAM {i}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
