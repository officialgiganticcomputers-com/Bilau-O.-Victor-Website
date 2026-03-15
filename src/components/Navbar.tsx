import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'ICT Expertise', path: '/ict-expertise' },
    { name: 'Media Systems', path: '/media-systems' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const moreLinks = [
    { name: 'Voices of Trust', path: '/voices' },
    { name: 'Music', path: '/music' },
  ];

  return (
    <nav id="navbar" className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className={`backdrop-blur-md rounded-2xl px-6 h-16 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg border border-slate-200' : 'bg-white/80 shadow-sm border border-slate-200/50'}`}>
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <img src="https://photos.fife.usercontent.google.com/pw/AP1GczNG-mwDkPAdkRSPHG-2eRcY7BEMOLU3nnTB64lvtS801vGkv2DSjh0=w403-h220-no?authuser=2" 
                 alt="Bilau O. Victor Logo" 
                 loading="eager" decoding="async" fetchPriority="high"
                 className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                 onError={(e) => { e.currentTarget.outerHTML = '<span class="font-display font-bold text-slate-900 text-lg tracking-tight">BILAU O. VICTOR</span>'; }} />
          </Link>
          
          <div className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive(link.path) ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="relative group">
              <button className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${moreLinks.some(l => isActive(l.path)) ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'}`}>
                More <i className="ph-bold ph-caret-down text-xs transition-transform group-hover:rotate-180"></i>
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {moreLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`block px-4 py-2 text-sm rounded-xl transition-colors ${isActive(link.path) ? 'text-blue-700 bg-blue-50 font-medium' : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="ml-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg">
              Engage
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-md hover:bg-slate-50 transition-colors">
              <i className="ph ph-list text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${isActive(link.path) ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="my-2 border-t border-slate-100"></div>
            <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">More</div>
            
            {moreLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${isActive(link.path) ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 mt-4 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-center shadow-md">
              Engage Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
