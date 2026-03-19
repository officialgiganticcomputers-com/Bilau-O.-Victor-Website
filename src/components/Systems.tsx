export default function Systems() {
  return (
    <section id="systems" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCAwaC0xdjYwaDFWMHptLTU5IDBIMHY2MGgxVjB6bTAgNTl2MWg2MHYtMUgwem0wLTU5djFoNjBWMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')] opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#D9FF00]/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#D9FF00]/10 text-[#D9FF00] border border-[#D9FF00]/20 text-xs font-bold uppercase tracking-widest mb-4">Core Infrastructure</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">The vMix Revolution in Nigerian Liturgy</h2>
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            Mastery of advanced live streaming and media systems. Ensuring that audio, video, and lighting architectures are synchronized to produce a cohesive, broadcast-grade output.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-10 rounded-3xl fade-in-section hover:bg-zinc-900 transition-colors group">
            <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center border border-white/5 mb-8 group-hover:border-[#D9FF00]/50 transition-colors shadow-glow">
              <i className="ph ph-broadcast text-2xl text-[#D9FF00]"></i>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-white">IP-Based Workflows</h3>
            <p className="text-zinc-400 leading-relaxed font-light mb-6">
              The integration of <strong className="text-white font-medium">vMix</strong> signifies a technological leap. It acts as a software-based video production solution enabling high-definition switching, recording, and streaming.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <i className="ph-fill ph-check-circle text-[#D9FF00]"></i> NDI (Network Device Interface)
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <i className="ph-fill ph-check-circle text-[#D9FF00]"></i> Multiple HD Camera Inputs
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-10 rounded-3xl fade-in-section hover:bg-zinc-900 transition-colors group">
            <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center border border-white/5 mb-8 group-hover:border-[#D9FF00]/50 transition-colors shadow-glow">
              <i className="ph ph-wifi-high text-2xl text-[#D9FF00]"></i>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Wireless Multi-Camera</h3>
            <p className="text-zinc-400 leading-relaxed font-light mb-6">
              Large auditoriums and dynamic visual storytelling make wired setups cumbersome. Deploying <strong className="text-white font-medium">wireless architectures</strong> captures the high-energy environment seamlessly.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <i className="ph-fill ph-check-circle text-[#D9FF00]"></i> Dynamic Cinematic Storytelling
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <i className="ph-fill ph-check-circle text-[#D9FF00]"></i> Unrestricted Logistical Movement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
