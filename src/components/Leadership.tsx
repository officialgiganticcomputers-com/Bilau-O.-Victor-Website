export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1 relative fade-in-section">
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-zinc-50 rounded-[40px] transform -rotate-3"></div>
            
            <div className="relative flex flex-col gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-glass border border-zinc-200/50 flex gap-5 items-start transform translate-x-4 hover:translate-x-6 transition-transform">
                <div className="w-14 h-14 bg-[#D9FF00] text-zinc-950 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ph-fill ph-globe-hemisphere-west text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-zinc-900 text-lg">Global School of Ministry</h4>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2">African Media Director</p>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">Coordinates continental media strategies. Facilitates the globalization of African theological education across diverse tech landscapes.</p>
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-800 flex gap-5 items-start transform -translate-x-4 hover:-translate-x-6 transition-transform">
                <div className="w-14 h-14 bg-[#D9FF00]/10 text-[#D9FF00] rounded-xl flex items-center justify-center flex-shrink-0 border border-[#D9FF00]/20">
                  <i className="ph-fill ph-church text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-lg">CAC Latter Rain Centre</h4>
                  <p className="text-xs font-semibold text-[#D9FF00] uppercase tracking-wide mb-2">Media Operations Lead</p>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">Implements high-end live streaming and multi-camera workflows. Pioneered workflows previously exclusive to commercial TV networks.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 fade-in-section">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6 border border-zinc-200">Institutional Leadership</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-8 tracking-tight leading-[1.1]">Driving Digital-First Strategy Across Africa</h2>
            
            <p className="text-lg text-zinc-500 mb-6 leading-relaxed font-light">
              His leadership involves moving beyond "emergency digitization" toward a <strong className="text-zinc-900 font-semibold">"digital-first" institutional strategy</strong>. 
            </p>
            <p className="text-lg text-zinc-500 mb-10 leading-relaxed font-light">
              Institutions leverage these platforms to democratize access to training and resources, ensuring distance is no longer a barrier. He acts as a change agent, managing major ICT and media projects that connect thousands globally.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#D9FF00]">
                  <i className="ph-bold ph-check"></i>
                </div>
                <div>
                  <strong className="text-zinc-900 block text-sm font-display">Project Management</strong>
                  <span className="text-zinc-500 text-sm font-light">Oversight of high-profile live event broadcasts.</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#D9FF00]">
                  <i className="ph-bold ph-check"></i>
                </div>
                <div>
                  <strong className="text-zinc-900 block text-sm font-display">Strategy Development</strong>
                  <span className="text-zinc-500 text-sm font-light">Implementation of a unified digital media roadmap.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
