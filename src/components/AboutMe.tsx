export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">About Me</h2>
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mb-6">Bridging faith, media, leadership, and technology.</p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I am a Nigerian ICT expert, media systems architect, digital strategist, and technology trainer. 
            My professional journey spans over 15 years of hands-on experience in technology training, digital systems development, and operational leadership. I am deeply passionate about helping organizations and ministries harness technology to solve problems, expand possibilities, and empower communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4 fade-in-section">
            <div className="bento-card bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full flex flex-col justify-center">
              <h3 className="text-xl font-display font-bold text-white mb-6">Years of Experience</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-amber-400 mb-1">15+</div>
                  <div className="text-sm text-zinc-400 font-medium">Years in ICT and digital systems</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400 mb-1">10+</div>
                  <div className="text-sm text-zinc-400 font-medium">Years in media and live streaming</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-400 mb-1">15+</div>
                  <div className="text-sm text-zinc-400 font-medium">Years in training, mentorship, and ministry support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 fade-in-section" style={{ transitionDelay: '100ms' }}>
            <div className="bento-card bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full">
              <h3 className="text-xl font-display font-bold text-white mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { icon: "ph-desktop", label: "ICT Systems" },
                  { icon: "ph-strategy", label: "Digital Strategy" },
                  { icon: "ph-broadcast", label: "Live Streaming" },
                  { icon: "ph-video-camera", label: "vMix Production" },
                  { icon: "ph-faders", label: "Media Operations" },
                  { icon: "ph-chalkboard-teacher", label: "Training & Mentoring" },
                  { icon: "ph-lightbulb", label: "Problem Solving" },
                  { icon: "ph-wrench", label: "Technical Support" },
                  { icon: "ph-chat-circle-text", label: "Digital Communication" },
                  { icon: "ph-trend-up", label: "Organization Growth" }
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <i className={`ph-fill ${skill.icon} text-amber-400 text-xl`}></i>
                    <span className="text-sm text-zinc-300 font-medium">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
          
          <div className="fade-in-section" style={{ transitionDelay: '100ms' }}>
            <div className="bento-card bg-gradient-to-br from-amber-500/20 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
              <i className="ph-fill ph-quotes text-6xl text-amber-500/20 absolute top-4 left-4"></i>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-10 leading-tight">
                "I build systems, train people, and use technology to expand impact."
              </h3>
              <p className="text-amber-400 font-medium relative z-10">— Oluwatobi Victor Bilau</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
