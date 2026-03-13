export default function Music() {
  return (
    <section id="music" className="py-32 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-glass border border-zinc-200/60 p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-amber-100 rounded-full blur-[80px] opacity-60"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="fade-in-section">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6 border border-zinc-200">Cultural Continuity</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">Music as a Vehicle for Transformation</h2>
              
              <p className="text-lg text-zinc-500 mb-6 leading-relaxed font-light">
                While his ICT expertise provides the technical framework, his role as a music minister provides the cultural and emotional resonance necessary for impactful ministry.
              </p>
              
              <div className="border-l-2 border-amber-500 pl-6 py-2 my-8">
                <p className="text-zinc-800 text-lg font-display italic">
                  "The nickname 'Gigantic' suggests an ambition to match the spiritual and cultural impact of pioneers, albeit through the lens of 21st-century media."
                </p>
              </div>
              
              <p className="text-zinc-500 leading-relaxed font-light">
                Music is an essential component of "visual storytelling." Characterized by high production value, it leverages ICT skills to create <strong className="text-zinc-900 font-semibold">immersive worship experiences</strong> ensuring content is both spiritually enriching and technologically sophisticated.
              </p>
            </div>

            <div className="fade-in-section flex justify-center">
              <div className="w-full max-w-sm bg-zinc-950 p-8 rounded-3xl shadow-2xl border border-zinc-800 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                
                <div className="flex justify-between items-center mb-8">
                  <div className="text-white font-display font-bold text-xl">"Gigantic"</div>
                  <i className="ph-fill ph-spotify-logo text-3xl text-zinc-600"></i>
                </div>

                <div className="flex items-center justify-center py-8">
                  <div className="relative w-32 h-32 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900 shadow-glow">
                    <i className="ph-fill ph-microphone-stage text-4xl text-amber-500"></i>
                    <div className="absolute inset-0 rounded-full border border-amber-500/30 animate-[spin_4s_linear_infinite]">
                      <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_#f59e0b]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between h-12 gap-1 mt-6 px-4">
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_1s_ease-in-out_infinite] h-[40%]"></div>
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_1.2s_ease-in-out_infinite] h-[80%]"></div>
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_0.8s_ease-in-out_infinite] h-[60%]"></div>
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_1.5s_ease-in-out_infinite] h-[100%]"></div>
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_1.1s_ease-in-out_infinite] h-[50%]"></div>
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_0.9s_ease-in-out_infinite] h-[75%]"></div>
                  <div className="w-full bg-zinc-800 rounded-t-sm h-[30%]"></div>
                  <div className="w-full bg-zinc-800 rounded-t-sm h-[40%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
