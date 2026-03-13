export default function Testimonials() {
  return (
    <section id="voices" className="py-32 bg-zinc-50 relative border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">Voices of Trust</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6 tracking-tight">What Leaders & Participants Say</h2>
          <p className="text-lg text-zinc-500 leading-relaxed font-light">
            Trusted by ministry leaders, institutions, and young people impacted through media, technology, and mentorship.
          </p>
        </div>

        <div className="mb-6 fade-in-section">
          <div className="bg-zinc-950 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl bento-card border border-zinc-800">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/20 blur-[60px] rounded-full pointer-events-none"></div>
            <i className="ph-fill ph-quotes text-6xl text-amber-500/20 absolute top-8 right-10"></i>
            
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-zinc-200">
                  "Bilau’s visionary approach to media systems has entirely transformed how we deliver theological education across Africa. His mastery of digital platforms and IP-based workflows has erased geographical boundaries, allowing our mission to reach thousands with unprecedented clarity, excellence, and spiritual impact."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-zinc-800 text-amber-400 flex items-center justify-center font-display font-bold text-xl border border-zinc-700 shadow-glow flex-shrink-0">
                    SI
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white">Apostle Sunday Iyi</h4>
                    <p className="text-sm text-zinc-400 font-light">Dean of Studies <span className="text-amber-500 mx-1">&bull;</span> Global School of Ministry</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-4 justify-end">
                <div className="w-full max-w-[200px] aspect-square rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden shadow-inner group">
                  <img src="https://i.ibb.co/ch3psxqC/Papa-5.jpg" alt="Apostle Sunday Iyi" className="absolute inset-0 w-full h-full object-cover object-top opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none z-0"></div>
                  <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col items-center justify-end z-10">
                    <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase drop-shadow-md">Featured Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6 fade-in-section">
          <div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm bento-card relative overflow-hidden">
            <i className="ph-fill ph-quotes text-4xl text-zinc-100 absolute top-6 right-6"></i>
            <p className="text-zinc-600 leading-relaxed font-light mb-8 relative z-10">
              "The technical transformation we've experienced under his leadership is nothing short of miraculous. By integrating vMix and wireless multi-camera setups, our worship experiences are now broadcast-grade, engaging our congregation both locally and globally."
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-display font-bold text-lg border border-blue-100 flex-shrink-0">
                SB
              </div>
              <div>
                <h4 className="font-display font-bold text-zinc-900">Pastor S.A Bilau</h4>
                <p className="text-xs text-zinc-500 font-light">Senior Pastor, CAC Latter Rain Centre</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm bento-card relative overflow-hidden">
            <i className="ph-fill ph-quotes text-4xl text-zinc-100 absolute top-6 right-6"></i>
            <p className="text-zinc-600 leading-relaxed font-light mb-8 relative z-10">
              "Attending his live streaming workshop changed the trajectory of my career. He doesn't just teach the technicalities of media integration; he imparts a spirit of excellence and spiritual depth that empowers you to lead with confidence."
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-display font-bold text-lg border border-amber-100 flex-shrink-0">
                OD
              </div>
              <div>
                <h4 className="font-display font-bold text-zinc-900">Pastor Oluwasusi Daniel</h4>
                <p className="text-xs text-zinc-500 font-light">C.A.C Sophia Ajayi Regional Youth Coordinator</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 fade-in-section">
          <div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm bento-card relative overflow-hidden">
            <p className="text-zinc-600 text-sm leading-relaxed font-light mb-8">
              "As 'Gigantic,' his ability to fuse high-end digital production with deeply spiritual music ministry is incredibly rare. He understands exactly how to amplify the liturgical experience without losing the core message."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-display font-bold text-sm border border-emerald-100 flex-shrink-0">
                MF
              </div>
              <div>
                <h4 className="font-display font-bold text-zinc-900 text-sm">Minister Faith</h4>
                <p className="text-[11px] text-zinc-500 font-light">Worship Leader</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm bento-card relative overflow-hidden">
            <p className="text-zinc-600 text-sm leading-relaxed font-light mb-8">
              "The practical insights I gained from his sessions on digital ministry strategy saved our media department. His humility and strategic foresight make him an exceptional life coach and technical mentor."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-display font-bold text-sm border border-purple-100 flex-shrink-0">
                KC
              </div>
              <div>
                <h4 className="font-display font-bold text-zinc-900 text-sm">Kingsley Chuku</h4>
                <p className="text-[11px] text-zinc-500 font-light">Media Coordinator, TRA Goodnews Tabernacle</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm bento-card relative overflow-hidden">
            <p className="text-zinc-600 text-sm leading-relaxed font-light mb-8">
              "Whether managing complex IP workflows or leading tens of thousands in digital youth seminars, his reliability and creative execution are unmatched in the West African media landscape."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-display font-bold text-sm border border-rose-100 flex-shrink-0">
                MT
              </div>
              <div>
                <h4 className="font-display font-bold text-zinc-900 text-sm">Marvelous Tabitha</h4>
                <p className="text-[11px] text-zinc-500 font-light">Event Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
