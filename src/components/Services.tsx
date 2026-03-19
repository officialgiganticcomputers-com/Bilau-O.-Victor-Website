import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: "Media Systems Architecture",
      desc: "Designing and deploying high-end broadcast systems, IP-based workflows, and live streaming infrastructure for seamless digital experiences.",
      icon: "ph-broadcast"
    },
    {
      title: "ICT Infrastructure & Strategy",
      desc: "Developing comprehensive technology roadmaps, robust network architectures, and scalable IT solutions aligned with organizational goals.",
      icon: "ph-hard-drives"
    },
    {
      title: "Digital Ministry Innovation",
      desc: "Bridging the gap between spiritual vision and technological execution to expand reach, engagement, and impact across digital platforms.",
      icon: "ph-globe-hemisphere-west"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-950 mb-4 tracking-tight">Core Capabilities</h2>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Delivering premium technological solutions that drive growth, efficiency, and global impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-200 hover:shadow-xl hover:border-zinc-300 transition-all duration-300 fade-in-section"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-[#D9FF00]/20 flex items-center justify-center mb-6">
                <i className={`ph-fill ${service.icon} text-2xl text-zinc-950`}></i>
              </div>
              <h3 className="text-xl font-display font-bold text-zinc-950 mb-3">{service.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
