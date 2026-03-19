import { useEffect, useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import SocialEngine from '../components/SocialEngine';
import SEO from '../components/SEO';
import ChatAgent from '../components/ChatAgent';

export default function ContactPage() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormSuccess(false);
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formsubmit.co/ajax/42d0713919e72f4a12feb544427d480b", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        (e.target as HTMLFormElement).reset();
        setFormSuccess(true);
        setTimeout(() => setFormSuccess(false), 6000);
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was a network error submitting your form.");
    } finally {
      setFormSubmitting(false);
    }
  };

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
        title="Contact" 
        description="Get in touch for media systems consultation, workshops, or speaking engagements." 
        url="https://bilauovictor.netlify.app/contact"
      />
      <div className="bg-gradient-to-b from-rose-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600">Connect</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Whether you need a media systems consultation, a workshop, or a speaking engagement, I'm ready to help you build powerful digital infrastructure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="fade-in-section">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Send an Inquiry</h2>
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{display: 'none'}} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select id="subject" name="inquiry_type" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50">
                  <option value="Media Systems Consultation">Media Systems Consultation</option>
                  <option value="Speaking Engagement">Speaking Engagement</option>
                  <option value="Workshop / Training">Workshop / Training</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50" placeholder="How can I help you?"></textarea>
              </div>
              
              {formSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium">
                  <i className="ph-fill ph-check-circle text-lg"></i>
                  Message sent successfully! I'll be in touch soon.
                </div>
              )}

              <button type="submit" disabled={formSubmitting} className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
                {formSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="fade-in-section">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Direct Contact</h2>
            <div className="space-y-6 mb-12">
              <a href="https://wa.me/message/6AY4I44O3NQMA1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="ph-fill ph-whatsapp-logo text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">WhatsApp</h3>
                  <p className="text-slate-500 text-sm">Chat with me directly</p>
                </div>
              </a>
              <a href="mailto:contact@oluwatobibilau.com" className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="ph-fill ph-envelope-simple text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-500 text-sm">contact@oluwatobibilau.com</p>
                </div>
              </a>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Have Questions? Ask AI</h2>
              <ChatAgent />
            </div>
            
            <SocialEngine />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
