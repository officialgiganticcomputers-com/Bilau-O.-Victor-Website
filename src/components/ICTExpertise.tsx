export default function ICTExpertise() {
  return (
    <section id="ict-expertise" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">ICT Expertise</h2>
          <p className="text-blue-400 font-medium tracking-wide uppercase text-sm mb-6">Technology Solutions & Digital Systems</p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            As a certified IT and ICT expert, I solve problems with technology. I work across digital systems, media technology, training, and innovation to help ministries and organizations use technology for growth and effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "ICT Strategy",
              desc: "Developing comprehensive technology roadmaps aligned with organizational goals.",
              icon: "ph-strategy"
            },
            {
              title: "Digital Systems Support",
              desc: "Providing robust technical support and maintenance for critical digital infrastructure.",
              icon: "ph-desktop"
            },
            {
              title: "Live Streaming Technology",
              desc: "Architecting and deploying high-quality, reliable live streaming solutions.",
              icon: "ph-broadcast"
            },
            {
              title: "Training & Mentoring",
              desc: "Empowering teams and individuals with the technical skills needed to succeed.",
              icon: "ph-chalkboard-teacher"
            },
            {
              title: "Media & Tech Integration",
              desc: "Seamlessly blending media production with advanced IT systems.",
              icon: "ph-faders"
            },
            {
              title: "Workflow Optimization",
              desc: "Streamlining processes through automation and efficient technology use.",
              icon: "ph-arrows-clockwise"
            },
            {
              title: "Digital Communication",
              desc: "Implementing effective digital communication platforms and strategies.",
              icon: "ph-chat-circle-text"
            }
          ].map((item, i) => (
            <div key={i} className="fade-in-section" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="bento-card bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 h-full hover:border-blue-500/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <i className={`ph-fill ${item.icon} text-2xl text-blue-400`}></i>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
