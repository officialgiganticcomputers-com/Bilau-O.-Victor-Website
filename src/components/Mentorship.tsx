import CountUp from './CountUp';

export default function Mentorship() {
  return (
    <section id="mentorship" className="py-32 bg-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center fade-in-section">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-6">Social Impact</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6 tracking-tight">The Pedagogy of Empowerment</h2>
            <p className="text-lg text-zinc-500 mb-10 leading-relaxed font-light">
              Acting as a Life Coach, Victor addresses the African digital economy's talent gap, ensuring digital transformation is a permanent shift.
            </p>

            <div className="bg-zinc-950 rounded-3xl p-8 text-white relative overflow-hidden border border-zinc-800 shadow-2xl">
              <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/20 blur-[50px] rounded-full"></div>
              <CountUp end={40} suffix="K+" className="text-6xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 mb-2 block" />
              <h4 className="text-xl font-bold font-display mb-2">Youth Empowered</h4>
              <p className="text-sm text-zinc-400 font-light">Mentored across tech workshops and high-profile gatherings globally.</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="bento-card p-6 rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <i className="ph-bold ph-desktop text-xl"></i>
              </div>
              <h5 className="font-display font-bold text-zinc-900 mb-2">ICT & Tech Training</h5>
              <p className="text-sm text-zinc-500 font-light">Equipping individuals with essential IT skills, digital literacy, and technical problem-solving abilities.</p>
            </div>

            <div className="bento-card p-6 rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <i className="ph-bold ph-video-camera text-xl"></i>
              </div>
              <h5 className="font-display font-bold text-zinc-900 mb-2">Media Systems Ops</h5>
              <p className="text-sm text-zinc-500 font-light">Teaching the nuances of vMix, multi-camera angles, and broadcast audio mixing.</p>
            </div>

            <div className="bento-card p-6 rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50 sm:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <i className="ph-bold ph-strategy text-xl"></i>
              </div>
              <h5 className="font-display font-bold text-zinc-900 mb-2">Digital Transformation Strategy</h5>
              <p className="text-sm text-zinc-500 font-light">Helping leaders understand the strategic importance of digital systems, online engagement, and technology-driven growth in the global market.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
