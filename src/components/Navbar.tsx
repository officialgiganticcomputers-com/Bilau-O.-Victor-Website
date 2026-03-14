import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className={`backdrop-blur-md border border-white/10 rounded-2xl px-6 h-16 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 shadow-bento' : 'bg-zinc-950/80 shadow-glass'}`}>
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <img src="https://photos.fife.usercontent.google.com/pw/AP1GczNG-mwDkPAdkRSPHG-2eRcY7BEMOLU3nnTB64lvtS801vGkv2DSjh0=w403-h220-no?authuser=2" 
                 alt="Bilau O. Victor Logo" 
                 loading="eager" decoding="async" fetchPriority="high"
                 className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                 onError={(e) => { e.currentTarget.outerHTML = '<span class="font-display font-bold text-white text-lg tracking-tight">BILAU O. VICTOR</span>'; }} />
          </div>
          
          <div className="hidden md:flex space-x-1 items-center">
            <a href="#about" className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">About Me</a>
            <a href="#ict-expertise" className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">ICT Expertise</a>
            <a href="#systems" className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">Media Systems</a>
            <a href="#gallery" className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">Gallery</a>
            
            <div className="relative group">
              <button className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all flex items-center gap-1">
                More <i className="ph-bold ph-caret-down text-xs transition-transform group-hover:rotate-180"></i>
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <a href="#vision" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">Vision</a>
                <a href="#leadership" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">Leadership</a>
                <a href="#voices" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">Voices</a>
                <a href="#music" className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">Music</a>
              </div>
            </div>

            <a href="#contact" className="ml-2 bg-white text-zinc-950 hover:bg-amber-400 hover:text-zinc-950 px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm">Engage</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-zinc-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-white/5 transition-colors">
              <i className="ph ph-list text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 space-y-1 shadow-glass max-h-[80vh] overflow-y-auto">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">About Me</a>
            <a href="#ict-expertise" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">ICT Expertise</a>
            <a href="#systems" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">Media Systems</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">Gallery</a>
            
            <div className="my-2 border-t border-white/10"></div>
            <div className="px-4 py-2 text-xs font-bold text-zinc-500 uppercase tracking-wider">More</div>
            
            {['vision', 'leadership', 'voices', 'music'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors capitalize">{id.replace('-', ' ')}</a>
            ))}
            
            <a href="#blueprint" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 rounded-xl transition-colors mt-2">Media Blueprint ✨</a>
            <a href="#social-engine" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 rounded-xl transition-colors">Social AI ✨</a>
            <a href="tel:+2347049472690" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-amber-400 hover:text-amber-300 hover:bg-white/5 rounded-xl transition-colors"><i className="ph-fill ph-phone-call text-lg"></i> +234 704 947 2690</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 mt-4 text-sm font-bold text-zinc-950 bg-amber-500 rounded-xl text-center shadow-glow">Engage Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}
