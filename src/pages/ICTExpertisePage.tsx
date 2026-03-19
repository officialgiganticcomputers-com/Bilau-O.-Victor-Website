import { useEffect } from 'react';
import { motion } from 'motion/react';
import ICTExpertise from '../components/ICTExpertise';
import PublishingServices from '../components/PublishingServices';
import BlueprintGenerator from '../components/BlueprintGenerator';
import SEO from '../components/SEO';

export default function ICTExpertisePage() {
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
        title="ICT Expertise" 
        description="Comprehensive ICT solutions, strategic consulting, and robust systems support for organizations and ministries." 
        url="https://bilauovictor.netlify.app/ict-expertise"
      />
      <div className="bg-gradient-to-b from-indigo-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">ICT Solutions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            From strategic consulting to robust systems support, empowering organizations with world-class digital infrastructure.
          </p>
        </div>
      </div>

      <ICTExpertise />
      <PublishingServices />
      <BlueprintGenerator />
    </motion.div>
  );
}
