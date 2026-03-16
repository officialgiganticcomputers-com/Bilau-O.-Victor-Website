export default function Vision() {
  return (
    <section id="vision" className="pt-16 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">Professional Vision</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6 tracking-tight">The Convergence of ICT Proficiency & Service</h2>
          <p className="text-lg text-zinc-500 leading-relaxed font-light">
            The professional identity of Bilau Oluwatobi Victor is characterized by a deliberate synthesis of high-level technical certification and dedicated service. He operates as an <strong className="text-zinc-900 font-semibold">architect of digital transformation</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-section">
          <div className="bento-card bg-white rounded-3xl p-8 shadow-bento border border-zinc-200/60 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-8 shadow-md">
              <i className="ph ph-hard-drives text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-display font-bold text-zinc-900 mb-2">Information Technology</h3>
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-4">Systems Integrator</div>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">Establishes the technical reliability of ecclesiastical communication networks. Approaches media ministry through the lens of systems engineering rather than simple content production.</p>
          </div>

          <div className="bento-card bg-white rounded-3xl p-8 shadow-bento border border-zinc-200/60 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-8 shadow-md">
              <i className="ph ph-vector-two text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-display font-bold text-zinc-900 mb-2">Digital Media</h3>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">Content Strategist</div>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">Designs the visual and narrative language of modern African evangelism. Creates digital assets optimized for various social media platforms tailored to global consumption habits.</p>
          </div>

          <div className="bento-card bg-zinc-900 rounded-3xl p-8 shadow-bento border border-zinc-800 relative overflow-hidden group text-white">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500/10 rounded-tl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-8 border border-white/10">
              <i className="ph ph-speaker-hifi text-2xl text-amber-400"></i>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Creative Arts</h3>
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">"Gigantic" Persona</div>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">Utilizes auditory and visual arts to enhance liturgical engagement. Represents the modern iteration of Nigerian church music via sound engineering and branding.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
