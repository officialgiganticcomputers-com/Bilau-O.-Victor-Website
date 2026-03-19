import { useEffect } from 'react';
import { motion } from 'motion/react';
import AboutMe from '../components/AboutMe';
import Vision from '../components/Vision';
import Leadership from '../components/Leadership';
import SEO from '../components/SEO';

export default function About() {
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-12"
    >
      <SEO 
        title="About Me" 
        description="Learn about Oluwatobi Victor Bilau, a certified IT expert, media systems architect, and African Media Director for the Global School of Ministry." 
        url="https://bilauovictor.netlify.app/about"
      />
      <div className="bg-gradient-to-b from-zinc-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-zinc-900 mb-6 tracking-tight pb-2">
            The Man Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">Digital Architecture</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-light">
            A certified IT expert, media systems architect, and African Media Director for the Global School of Ministry.
          </p>
        </div>
      </div>

      <AboutMe />

      {/* Cinematic Transition Band */}
      <div 
        className="w-full h-48 md:h-64 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #09090b 0%, #18181b 30%, #27272a 60%, #ffffff 100%)' }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D9FF00]/5 rounded-full blur-[80px]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-zinc-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>

      <Vision />
      <Leadership />
    </motion.div>
  );
}
