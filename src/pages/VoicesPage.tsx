import { useEffect } from 'react';
import { motion } from 'motion/react';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

export default function VoicesPage() {
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
        title="Voices of Trust" 
        description="Endorsements and testimonials from leaders, ministries, and organizations I have had the privilege to serve." 
        url="https://bilauovictor.netlify.app/voices-of-trust"
      />
      <div className="bg-gradient-to-b from-emerald-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Trust</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Endorsements and testimonials from leaders, ministries, and organizations I have had the privilege to serve.
          </p>
        </div>
      </div>

      <Testimonials />
    </motion.div>
  );
}
