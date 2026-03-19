import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Gallery from '../components/Gallery';
import Lightboxes from '../components/Lightboxes';
import SEO from '../components/SEO';

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') setLightboxOpen(false);
        if (e.key === 'ArrowRight') setCurrentImageIndex((prev) => (prev + 1) % 5); // 5 images
        if (e.key === 'ArrowLeft') setCurrentImageIndex((prev) => (prev - 1 + 5) % 5);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-12"
    >
      <SEO 
        title="Gallery" 
        description="A glimpse into event productions, workshop moments, and media systems in action." 
        url="https://bilauovictor.netlify.app/gallery"
      />
      <div className="bg-gradient-to-b from-zinc-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-zinc-900 mb-6 tracking-tight pb-2">
            Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">Storytelling</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-light">
            A glimpse into event productions, workshop moments, and media systems in action.
          </p>
        </div>
      </div>

      <Gallery onOpenImage={(idx) => { setCurrentImageIndex(idx); setLightboxOpen(true); }} />

      <Lightboxes 
        lightboxOpen={lightboxOpen}
        videoLightboxOpen={false}
        currentImageIndex={currentImageIndex}
        onCloseImage={() => setLightboxOpen(false)}
        onCloseVideo={() => {}}
        onNextImage={() => setCurrentImageIndex((prev) => (prev + 1) % 5)}
        onPrevImage={() => setCurrentImageIndex((prev) => (prev - 1 + 5) % 5)}
      />
    </motion.div>
  );
}
