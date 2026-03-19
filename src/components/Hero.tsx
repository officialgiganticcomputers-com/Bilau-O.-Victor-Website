import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import CountUp from './CountUp';

export default function Hero({ onOpenVideo }: { onOpenVideo: () => void }) {
  return (
    <header id="home" className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden flex items-center min-h-screen bg-zinc-950">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 opacity-90"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-zinc-50 to-transparent z-10"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="particle-orb w-2 h-2 top-[30%] left-[20%]" style={{animationDelay: '0s'}}></div>
        <div className="particle-orb w-3 h-3 top-[70%] left-[10%]" style={{animationDelay: '2s', animationDuration: '18s'}}></div>
        <div className="particle-orb w-1 h-1 top-[50%] left-[80%]" style={{animationDelay: '5s', animationDuration: '12s'}}></div>
        <div className="particle-orb w-4 h-4 top-[20%] right-[25%] bg-zinc-400/30" style={{animationDelay: '1s', animationDuration: '20s'}}></div>
        <div className="network-line top-[40%] left-[15%] rotate-45" style={{animationDelay: '3s'}}></div>
        <div className="network-line top-[75%] right-[20%] -rotate-12" style={{animationDelay: '7s'}}></div>
        <div className="network-line top-[20%] left-[60%] rotate-[30deg]" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D9FF00]/10 blur-[120px] rounded-full mix-blend-screen animate-[pulse-glow_8s_ease-in-out_infinite] z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-zinc-600/20 blur-[150px] rounded-full mix-blend-screen animate-[pulse-glow_12s_ease-in-out_infinite_reverse] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 fade-in-section">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-glass">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9FF00]"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-widest">Ado-Ekiti, Nigeria</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 pb-2">
              Building the Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9FF00] to-green-400">Digital & Media Systems</span>
            </h1>
            
            <p className="text-lg text-zinc-300/80 mb-8 leading-relaxed font-light max-w-xl">
              The evolution of digital systems in West Africa has reached a critical juncture. This transition is embodied by <strong className="text-white font-medium">Bilau Oluwatobi Victor</strong>, widely recognized by his professional and ministerial moniker <strong className="text-[#D9FF00] font-medium">"Gigantic"</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={onOpenVideo} className="group flex items-center justify-center gap-2 bg-[#D9FF00] hover:bg-[#b8d900] text-zinc-950 px-8 py-4 rounded-3xl font-bold text-sm transition-all shadow-[0_0_30px_rgba(217,255,0,0.3)] hover:shadow-[0_0_40px_rgba(217,255,0,0.5)] hover:scale-105">
                <i className="ph-bold ph-play-circle text-xl group-hover:scale-110 transition-transform"></i> Watch Showreel
              </button>
              <Link to="/contact" className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-3xl font-semibold text-sm transition-all backdrop-blur-sm hover:scale-105">
                Book a Workshop
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 h-[500px]">
            <div className="absolute inset-0 bg-[#D9FF00]/10 blur-[120px] rounded-full"></div>
            
            {/* Floating UI Card 1 */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-64 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">System Performance</div>
                <i className="ph-fill ph-trend-up text-[#D9FF00]"></i>
              </div>
              <div className="text-3xl font-display font-bold text-white mb-1">99.9%</div>
              <div className="text-xs text-green-400 flex items-center gap-1"><i className="ph-bold ph-arrow-up-right"></i> +2.4% uptime</div>
              <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#D9FF00] w-[99%]"></div>
              </div>
            </motion.div>

            {/* Floating UI Card 2 */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 w-72 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#D9FF00]/20 flex items-center justify-center text-[#D9FF00]">
                  <i className="ph-fill ph-users text-xl"></i>
                </div>
                <div>
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Growth Metric</div>
                  <div className="text-xl font-display font-bold text-white">40K+ Empowered</div>
                </div>
              </div>
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs text-zinc-400">
                    <i className="ph-fill ph-user"></i>
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">+</div>
              </div>
            </motion.div>

            {/* Main Center Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl flex items-center justify-center z-20"
            >
              <div className="w-64 h-64 rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center bg-zinc-950/50 shadow-inner">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#D9FF00] to-green-400 flex items-center justify-center text-zinc-950 shadow-[0_0_40px_rgba(217,255,0,0.4)]">
                    <i className="ph-fill ph-broadcast text-4xl"></i>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </header>
  );
}
