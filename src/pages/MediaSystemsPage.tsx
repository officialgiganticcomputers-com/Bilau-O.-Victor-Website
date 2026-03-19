import { useEffect } from 'react';
import { motion } from 'motion/react';
import Systems from '../components/Systems';
import Mentorship from '../components/Mentorship';
import SEO from '../components/SEO';

export default function MediaSystemsPage() {
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
        title="Media Systems" 
        description="Cinematic media systems, live streaming infrastructure, vMix setups, and broadcast workflows for ministries and organizations." 
        url="https://bilauovictor.netlify.app/media-systems"
      />
      <div className="bg-gradient-to-b from-zinc-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-zinc-900 mb-6 tracking-tight pb-2">
            Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">Media Systems</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-light">
            Designing and deploying elite live streaming infrastructure, vMix setups, and broadcast workflows for ministries and organizations.
          </p>
        </div>
      </div>

      <Systems />
      <Mentorship />
    </motion.div>
  );
}
