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
                 className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                 onError={(e) => { e.currentTarget.outerHTML = '<span class="font-display font-bold text-white text-lg tracking-tight">BILAU O. VICTOR</span>'; }} />
          </div>
          
          <div className="hidden md:flex space-x-1 items-center">
            <a href="#vision" className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">Vision</a>
            <a href="#leadership" className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">Leadership</a>
            <a href="#voices" className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">Voices</a>
            <a href="#systems" className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">Systems</a>
            <a href="#music" className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">Music</a>
            <a href="#gallery" className="px-4 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">Gallery</a>
            <a href="#blueprint" className="px-4 py-2 rounded-full text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 text-sm font-medium transition-all flex items-center gap-1 shadow-glow border border-amber-500/20">Blueprint ✨</a>
            <a href="#social-engine" className="px-4 py-2 rounded-full text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 text-sm font-medium transition-all flex items-center gap-1 shadow-glow border border-amber-500/20">Social AI ✨</a>
            <a href="tel:+2347049472690" className="px-3 py-2 rounded-full text-amber-400 hover:text-amber-300 hover:bg-white/5 text-sm font-bold transition-all flex items-center gap-1.5"><i className="ph-fill ph-phone-call text-lg"></i><span className="hidden lg:inline">+234 704 947 2690</span></a>
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
          <div className="bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 space-y-1 shadow-glass">
            {['vision', 'leadership', 'voices', 'systems', 'music', 'gallery'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors capitalize">{id}</a>
            ))}
            <a href="#blueprint" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 rounded-xl transition-colors">Media Blueprint ✨</a>
            <a href="#social-engine" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 rounded-xl transition-colors">Social AI ✨</a>
            <a href="tel:+2347049472690" className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-amber-400 hover:text-amber-300 hover:bg-white/5 rounded-xl transition-colors"><i className="ph-fill ph-phone-call text-lg"></i> +234 704 947 2690</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 mt-4 text-sm font-bold text-zinc-950 bg-amber-500 rounded-xl text-center shadow-glow">Engage Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}
