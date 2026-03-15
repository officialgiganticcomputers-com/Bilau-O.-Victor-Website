import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Lightboxes from '../components/Lightboxes';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Home() {
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false);

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
    >
      <SEO 
        title="Home" 
        description="ICT expert, media systems architect, and African Media Director for the Global School of Ministry helping organizations build powerful digital and media systems." 
      />
      <Hero onOpenVideo={() => setVideoLightboxOpen(true)} />
      
      {/* Quick Introduction */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto fade-in-section">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Empowering the Next Generation of Digital Ministry
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              As a certified IT expert and Media Systems Architect, I bridge the gap between profound spiritual vision and cutting-edge technological execution. My mission is to equip organizations with robust, scalable, and premium digital infrastructure.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/about" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg">
                Discover My Journey
              </Link>
              <Link to="/ict-expertise" className="px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm">
                Explore Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustedBy />

      <Lightboxes 
        lightboxOpen={false}
        videoLightboxOpen={videoLightboxOpen}
        currentImageIndex={0}
        onCloseImage={() => {}}
        onCloseVideo={() => setVideoLightboxOpen(false)}
        onNextImage={() => {}}
        onPrevImage={() => {}}
      />
    </motion.div>
  );
}
