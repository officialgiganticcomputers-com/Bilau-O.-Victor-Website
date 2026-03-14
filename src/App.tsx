import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ICTExpertise from './components/ICTExpertise';
import TrustedBy from './components/TrustedBy';
import Vision from './components/Vision';
import Leadership from './components/Leadership';
import Testimonials from './components/Testimonials';
import Systems from './components/Systems';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Mentorship from './components/Mentorship';
import BlueprintGenerator from './components/BlueprintGenerator';
import SocialEngine from './components/SocialEngine';
import Footer from './components/Footer';
import Lightboxes from './components/Lightboxes';

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false);
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
      if (videoLightboxOpen && e.key === 'Escape') setVideoLightboxOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, videoLightboxOpen]);

  return (
    <div className="bg-zinc-50 text-zinc-800 selection:bg-amber-500 selection:text-white font-sans">
      <Navbar />
      <Hero onOpenVideo={() => setVideoLightboxOpen(true)} />
      <AboutMe />
      <ICTExpertise />
      <TrustedBy />
      <Vision />
      <Leadership />
      <Testimonials />
      <Systems />
      <Music />
      <Gallery onOpenImage={(idx) => { setCurrentImageIndex(idx); setLightboxOpen(true); }} />
      <Mentorship />
      <BlueprintGenerator />
      <SocialEngine />
      <Footer />
      <Lightboxes 
        lightboxOpen={lightboxOpen}
        videoLightboxOpen={videoLightboxOpen}
        currentImageIndex={currentImageIndex}
        onCloseImage={() => setLightboxOpen(false)}
        onCloseVideo={() => setVideoLightboxOpen(false)}
        onNextImage={() => setCurrentImageIndex((prev) => (prev + 1) % 5)}
        onPrevImage={() => setCurrentImageIndex((prev) => (prev - 1 + 5) % 5)}
      />
    </div>
  );
}
