import { useState, useEffect } from 'react';

export default function Music() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPlayerOpen(false);
      }
    };
    if (isPlayerOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlayerOpen]);

  return (
    <section id="music" className="py-32 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-glass border border-zinc-200/60 p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-amber-100 rounded-full blur-[80px] opacity-60"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="fade-in-section">
              <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6 border border-zinc-200">Cultural Continuity</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">Music as a Vehicle for Transformation</h2>
              
              <p className="text-lg text-zinc-500 mb-6 leading-relaxed font-light">
                While his ICT expertise provides the technical framework, his role as a music minister provides the cultural and emotional resonance necessary for impactful ministry.
              </p>
              
              <div className="border-l-2 border-amber-500 pl-6 py-2 my-8">
                <p className="text-zinc-800 text-lg font-display italic">
                  "The stage name 'Gigantic Praise' suggests an ambition to match the spiritual and cultural impact of pioneers, albeit through the lens of 21st-century media."
                </p>
              </div>
              
              <p className="text-zinc-500 leading-relaxed font-light">
                Music is an essential component of "visual storytelling." Characterized by high production value, it leverages ICT skills to create <strong className="text-zinc-900 font-semibold">immersive worship experiences</strong> ensuring content is both spiritually enriching and technologically sophisticated.
              </p>
            </div>

            <div className="fade-in-section flex justify-center">
              <div 
                className="w-full max-w-sm bg-zinc-950 p-8 rounded-3xl shadow-2xl border border-zinc-800 relative group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)]"
                onClick={() => setIsPlayerOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div className="text-white font-display font-bold text-xl">"Gigantic"</div>
                  <i className="ph-fill ph-music-notes text-3xl text-zinc-600 group-hover:text-amber-500/50 transition-colors"></i>
                </div>

                <div className="flex items-center justify-center py-8 relative z-10">
                  <div className="relative w-32 h-32 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-900 shadow-glow group-hover:border-amber-500/30 transition-colors duration-500">
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-300">
                        <i className="ph-fill ph-play text-2xl ml-1"></i>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 rounded-full border border-amber-500/30 animate-[spin_4s_linear_infinite]">
                      <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-amber-400 rounded-full shadow-[0_0_10px_#f59e0b]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end justify-between h-12 gap-1 mt-6 px-4 relative z-10">
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_1s_ease-in-out_infinite] h-[40%] group-hover:h-[60%] transition-all duration-300"></div>
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_1.2s_ease-in-out_infinite] h-[80%] group-hover:h-[100%] transition-all duration-300"></div>
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_0.8s_ease-in-out_infinite] h-[60%] group-hover:h-[40%] transition-all duration-300"></div>
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_1.5s_ease-in-out_infinite] h-[100%] group-hover:h-[80%] transition-all duration-300"></div>
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_1.1s_ease-in-out_infinite] h-[50%] group-hover:h-[90%] transition-all duration-300"></div>
                  <div className="w-full bg-amber-500 rounded-t-sm animate-[pulse_0.9s_ease-in-out_infinite] h-[75%] group-hover:h-[50%] transition-all duration-300"></div>
                  <div className="w-full bg-zinc-800 group-hover:bg-amber-500/50 rounded-t-sm h-[30%] group-hover:h-[70%] transition-all duration-300"></div>
                  <div className="w-full bg-zinc-800 group-hover:bg-amber-500/50 rounded-t-sm h-[40%] group-hover:h-[60%] transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audiomack Player Modal */}
      {isPlayerOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-end sm:p-6 sm:pr-8 pointer-events-none">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm transition-opacity pointer-events-auto animate-in fade-in duration-300"
            onClick={() => setIsPlayerOpen(false)}
          ></div>
          
          {/* Player Panel */}
          <div className="relative w-full sm:w-[400px] bg-zinc-950 border-t sm:border border-zinc-800 sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto animate-in slide-in-from-bottom sm:slide-in-from-right duration-300 sm:duration-500 ease-out">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800/50 bg-zinc-900/50">
              <div className="flex items-center gap-2 text-amber-500">
                <i className="ph-fill ph-music-notes text-lg"></i>
                <span className="font-display font-medium text-sm tracking-wide">NOW PLAYING</span>
              </div>
              <button 
                onClick={() => setIsPlayerOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                aria-label="Close player"
              >
                <i className="ph ph-x text-lg"></i>
              </button>
            </div>
            
            {/* Iframe Container */}
            <div className="w-full bg-zinc-950 p-4 sm:p-6">
              <iframe 
                src="https://audiomack.com/embed/gigantic_praise/song/you-alone?share-user-id=45569933&background=1" 
                scrolling="no" 
                width="100%" 
                height="252" 
                scrollbars="no" 
                frameBorder="0"
                className="rounded-xl w-full shadow-lg"
                title="Audiomack Player"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
