import { useState, FormEvent } from 'react';

export default function Footer() {
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

  return (
    <footer id="contact" className="bg-zinc-950 pt-32 pb-12 border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at top, #fbbf24 0%, transparent 50%)'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24 fade-in-section">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Let’s Build Something<br/>Impactful.</h2>
            <p className="text-zinc-400 mb-10 leading-relaxed font-light text-lg">
              Whether you need ICT solutions, media systems support, live streaming consultation, training, or a speaker for your next event, I am open to meaningful collaborations that drive growth, excellence, and impact.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:scale-110 group-hover:bg-amber-500/10 transition-all duration-300">
                  <i className="ph-fill ph-map-pin text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="font-medium text-zinc-200">Ado-Ekiti, Ekiti State, Nigeria</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300 group">
                <div className="mb-5">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Quick WhatsApp Support</p>
                  <p className="text-sm text-zinc-400 font-light">WhatsApp Direct Chat</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-2 rounded-xl mb-4 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                    {/* [INSERT_WHATSAPP_QR_IMAGE] */}
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/message/6AY4I44O3NQMA1" 
                      alt="WhatsApp QR Code" 
                      className="w-32 h-32 object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-zinc-400 text-sm font-light mb-5">Scan to start a WhatsApp chat</p>
                  <a 
                    href="https://wa.me/message/6AY4I44O3NQMA1" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-zinc-950 font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] text-sm"
                  >
                    <i className="ph-fill ph-whatsapp-logo text-xl"></i>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-300">
                <div className="mb-5">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Quick Connect</p>
                  <p className="text-sm text-zinc-400 font-light">Follow My Work</p>
                </div>
                <div className="flex items-center justify-between sm:justify-start sm:gap-6">
                  <a href="https://youtube.com/@giganticpraise?si=ZMGKesUqXZXiMb0y" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:bg-zinc-800/80 hover:scale-110 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
                    <i className="ph-fill ph-youtube-logo text-2xl"></i>
                  </a>
                  <a href="https://www.tiktok.com/@giganticpraise?_r=1&_t=ZS-94gZzUgyRvE" target="_blank" rel="noreferrer" aria-label="TikTok" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:bg-zinc-800/80 hover:scale-110 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
                    <i className="ph-fill ph-tiktok-logo text-2xl"></i>
                  </a>
                  <a href="https://www.instagram.com/official_gigantic?igsh=MTExMWd6eWNhcWV5eQ==" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:bg-zinc-800/80 hover:scale-110 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
                    <i className="ph-fill ph-instagram-logo text-2xl"></i>
                  </a>
                  <a href="https://www.facebook.com/share/17Fr3H4uMb/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:bg-zinc-800/80 hover:scale-110 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-300">
                    <i className="ph-fill ph-facebook-logo text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative">
              <div className="mb-8 pb-8 border-b border-white/5">
                <p className="text-amber-400 font-medium mb-2 flex items-center gap-2">
                  <i className="ph-fill ph-shield-check"></i> Trusted by ministries, institutions, and leadership platforms.
                </p>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Available for workshops, speaking engagements, ICT consultation, and media systems support. Built on excellence, innovation, and practical impact.
                </p>
              </div>

              <form id="contact-form" className="space-y-6" onSubmit={handleContactSubmit}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{display: 'none'}} />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Name</label>
                    <input type="text" name="name" required className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-light" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Email</label>
                    <input type="email" name="email" required className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-light" placeholder="jane@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Inquiry Type</label>
                  <div className="relative">
                    <select name="inquiry_type" required className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-3.5 text-zinc-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all appearance-none font-light cursor-pointer">
                      <option value="ICT Consultation">ICT Consultation</option>
                      <option value="Media Systems Consultation">Media Systems Consultation</option>
                      <option value="Live Streaming Support">Live Streaming Support</option>
                      <option value="Workshop / Training Invitation">Workshop / Training Invitation</option>
                      <option value="Speaking Engagement">Speaking Engagement</option>
                      <option value="Collaboration / Partnership">Collaboration / Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-500">
                      <i className="ph-bold ph-caret-down"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea name="message" required rows={4} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-5 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none font-light" placeholder="How can we collaborate?"></textarea>
                </div>
                
                {formSuccess && (
                  <div id="form-success" className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium">
                    <i className="ph-fill ph-check-circle text-lg"></i>
                    Message sent successfully! I'll be in touch soon.
                  </div>
                )}

                <div>
                  <button type="submit" id="submit-btn" disabled={formSubmitting} className="w-full bg-white hover:bg-amber-400 text-zinc-950 font-bold py-4 rounded-xl transition-all duration-300 mt-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                    {formSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                  <p className="text-center text-zinc-500 text-xs mt-4 font-light">
                    For serious inquiries, training invitations, and partnership discussions. <br className="hidden sm:block" />You will receive a response as soon as possible.
                  </p>
                </div>
              </form>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-zinc-500 text-sm font-light italic">
                Open to ministry, organizational, and technology-driven collaborations.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 fade-in-section">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img src="https://photos.fife.usercontent.google.com/pw/AP1GczNG-mwDkPAdkRSPHG-2eRcY7BEMOLU3nnTB64lvtS801vGkv2DSjh0=w403-h220-no?authuser=2" 
                 alt="Bilau O. Victor Logo" 
                 loading="lazy" decoding="async"
                 className="h-6 sm:h-8 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                 onError={(e) => { e.currentTarget.outerHTML = '<span class="font-display font-bold text-zinc-300 group-hover:text-white transition-colors">BILAU O. VICTOR</span>'; }} />
          </div>
          <p>&copy; 2026 Bilau Oluwatobi Victor. Designed by Gigantic Computers.</p>
        </div>
      </div>
    </footer>
  );
}
