import { motion } from 'motion/react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Consultation",
      desc: "Perfect for emerging ministries and organizations looking to establish a solid digital foundation.",
      features: [
        "Basic ICT Assessment",
        "Initial Media Strategy",
        "Equipment Recommendations",
        "1-on-1 Strategy Call"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Growth",
      price: "Custom",
      desc: "Comprehensive solutions for growing entities needing robust, scalable infrastructure.",
      features: [
        "Full Systems Architecture",
        "Live Streaming Setup",
        "Team Training & Mentorship",
        "Ongoing Technical Support"
      ],
      cta: "Scale Your Impact",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Retainer",
      desc: "High-end, dedicated partnership for large-scale operations and global broadcast networks.",
      features: [
        "Advanced IP Workflows",
        "Multi-Campus Integration",
        "Executive Tech Leadership",
        "24/7 Priority Support"
      ],
      cta: "Partner With Us",
      highlighted: false
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D9FF00]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-tight">Engagement Tiers</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Tailored solutions designed to meet your organization's unique technological needs and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`rounded-3xl p-8 border backdrop-blur-xl transition-all duration-300 fade-in-section ${
                plan.highlighted 
                  ? 'bg-zinc-900/80 border-[#D9FF00]/50 shadow-[0_0_40px_rgba(217,255,0,0.15)] md:-mt-8 md:mb-8' 
                  : 'bg-zinc-900/40 border-white/10 hover:border-white/20'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-xl font-display font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-display font-extrabold text-[#D9FF00] mb-4">{plan.price}</div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 h-16">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                    <i className="ph-fill ph-check-circle text-[#D9FF00]"></i> {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-3xl font-bold text-sm transition-all ${
                plan.highlighted
                  ? 'bg-[#D9FF00] text-zinc-950 hover:bg-[#b8d900] shadow-[0_0_20px_rgba(217,255,0,0.3)] hover:shadow-[0_0_30px_rgba(217,255,0,0.5)]'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
