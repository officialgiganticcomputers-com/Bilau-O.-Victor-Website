import CountUp from './CountUp';

export default function AboutMe() {
  return (
    <section id="about" className="pt-24 pb-12 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 fade-in-section">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.15)] border border-amber-500/20 aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] lg:sticky lg:top-32">
              <img 
                src="https://i.ibb.co/k2P5xNWq/1000095077-02.jpg" 
                alt="Bilau O. Victor" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-display font-bold text-white mb-2">Bilau O. Victor</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium backdrop-blur-sm">ICT Expert</span>
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium backdrop-blur-sm">Media Systems Architect</span>
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium backdrop-blur-sm">Technology Trainer</span>
                  <span className="px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium backdrop-blur-sm">Digital Strategist</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <div className="mb-12 fade-in-section">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">About Me</h2>
              <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mb-6">Bridging faith, media, leadership, and technology.</p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                I am a Nigerian ICT expert, media systems architect, digital strategist, and technology trainer. 
                My professional journey spans over 15 years of hands-on experience in technology training, digital systems development, and operational leadership. I am deeply passionate about helping organizations and ministries harness technology to solve problems, expand possibilities, and empower communities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="fade-in-section">
                <div className="bento-card bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full flex flex-col justify-center">
                  <h3 className="text-xl font-display font-bold text-white mb-6">Years of Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <CountUp end={15} suffix="+" className="text-4xl font-bold text-amber-400 mb-1 block" />
                      <div className="text-sm text-zinc-400 font-medium">Years in ICT and digital systems</div>
                    </div>
                    <div>
                      <CountUp end={10} suffix="+" className="text-4xl font-bold text-amber-400 mb-1 block" />
                      <div className="text-sm text-zinc-400 font-medium">Years in media and live streaming</div>
                    </div>
                    <div>
                      <CountUp end={15} suffix="+" className="text-4xl font-bold text-amber-400 mb-1 block" />
                      <div className="text-sm text-zinc-400 font-medium">Years in training, mentorship, and ministry support</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fade-in-section" style={{ transitionDelay: '100ms' }}>
                <div className="bento-card bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                  <h3 className="text-xl font-display font-bold text-white mb-6">Core Competencies</h3>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {[
                      { icon: "ph-desktop", label: "ICT Systems" },
                      { icon: "ph-strategy", label: "Digital Strategy" },
                      { icon: "ph-broadcast", label: "Live Streaming" },
                      { icon: "ph-video-camera", label: "vMix Production" },
                      { icon: "ph-faders", label: "Media Operations" },
                      { icon: "ph-chalkboard-teacher", label: "Training" },
                      { icon: "ph-lightbulb", label: "Problem Solving" },
                      { icon: "ph-wrench", label: "Tech Support" },
                      { icon: "ph-chat-circle-text", label: "Communication" },
                      { icon: "ph-trend-up", label: "Org Growth" }
                    ].map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <i className={`ph-fill ${skill.icon} text-amber-400 text-xl shrink-0`}></i>
                        <span className="text-xs text-zinc-300 font-medium truncate">{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="fade-in-section">
                <div className="bento-card bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
                  <h3 className="text-xl font-display font-bold text-white mb-6">Key Achievements</h3>
                  <ul className="space-y-4">
                    {[
                      "Founder and Chief Executive Officer of Gigantic Computers (Est. 2012).",
                      "African Media Director for the Global School of Ministry (GSOM).",
                      "Former Director of Operations for a Federal Ministry of Information & Technology initiative in Ekiti State.",
                      "Facilitated digital innovation workshops for thousands of youth ministers at the CAC International Campground.",
                      "Began career as Assistant Managing Director & Facilitator at LAUTECH ICT Center (2009-2011)."
                    ].map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <i className="ph-fill ph-check-circle text-amber-400 text-lg shrink-0 mt-0.5"></i>
                        <span className="text-zinc-300 text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Quote */}
        <div className="mt-8 fade-in-section">
          <div className="bento-card bg-gradient-to-br from-amber-500/10 via-zinc-900/80 to-zinc-900/50 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-amber-500/20 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.05)]">
            <i className="ph-fill ph-quotes text-6xl md:text-8xl text-amber-500/10 absolute top-4 left-4 md:top-8 md:left-8"></i>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 relative z-10 leading-tight max-w-4xl mx-auto">
              "I build systems, train people, and use technology to expand impact."
            </h3>
            <div className="w-16 h-1 bg-amber-500/50 rounded-full mb-6 relative z-10"></div>
            <p className="text-amber-400 font-medium text-lg tracking-wide uppercase relative z-10">Oluwatobi Victor Bilau</p>
          </div>
        </div>

      </div>
    </section>
  );
}
