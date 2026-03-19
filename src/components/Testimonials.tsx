import { useState, TouchEvent } from 'react';

const mainTestimonials = [
  {
    quote: "Bilau’s visionary approach to media systems has entirely transformed how we deliver theological education across Africa. His mastery of digital platforms and IP-based workflows has erased geographical boundaries, allowing our mission to reach thousands with unprecedented clarity, excellence, and spiritual impact.",
    initials: "SI",
    name: "Apostle Sunday Iyi",
    title: "Dean of Studies",
    organization: "Global School of Ministry",
    image: "https://i.ibb.co/ch3psxqC/Papa-5.jpg",
    tag: "Spiritual Father & Mentor"
  },
  {
    quote: "Victor Bilau represents a rare blend of technical excellence and kingdom-minded innovation. His understanding of digital systems and media infrastructure enables ministries to communicate their message with clarity, reach, and effectiveness. His work continues to demonstrate how technology can serve the advancement of God's work across communities and nations.",
    initials: "EO",
    name: "Pastor Efe Ovenseri",
    title: "General Assistant Superintendent",
    organization: "The Redeemed Assemblies Worldwide",
    image: "https://i.ibb.co/BKyXGtwN/Pastor-Efe-5.jpg",
    tag: "Spiritual Leader and Investor"
  },
  {
    quote: "The technical transformation we've experienced under his leadership is nothing short of miraculous. By integrating vMix and wireless multi-camera setups, our worship experiences are now broadcast-grade, engaging our congregation both locally and globally.",
    initials: "SB",
    name: "Pastor S.A Bilau",
    title: "Senior Pastor",
    organization: "CAC Latter Rain Centre",
    image: "https://i.ibb.co/1fSkhMdq/Angelica-Dad-2.jpg",
    tag: "Leadership"
  },
  {
    quote: "Attending his live streaming workshop changed the trajectory of my career. He doesn't just teach the technicalities of media integration; he imparts a spirit of excellence and spiritual depth that empowers you to lead with confidence.",
    initials: "OD",
    name: "Pastor Oluwasusi Daniel",
    title: "Regional Youth Coordinator",
    organization: "C.A.C Sophia Ajayi",
    image: "https://i.ibb.co/kVRQs4Wk/Daniel-Oluwasusi.jpg",
    tag: "Leadership"
  },
  {
    quote: "As 'Gigantic,' his ability to fuse high-end digital production with deeply spiritual music ministry is incredibly rare. He understands exactly how to amplify the liturgical experience without losing the core message.",
    initials: "MF",
    name: "Minister Faith",
    title: "Worship Leader",
    organization: "",
    image: "https://i.ibb.co/svTMHM2C/Faith-Yaro.jpg",
    tag: "Endorsement"
  },
  {
    quote: "The practical insights I gained from his sessions on digital ministry strategy saved our media department. His humility and strategic foresight make him an exceptional life coach and technical mentor.",
    initials: "KC",
    name: "Kingsley Chuku",
    title: "Media Coordinator",
    organization: "TRA Goodnews Tabernacle",
    image: "https://i.ibb.co/ksBCnKnY/Kingsley-Chucku.jpg",
    tag: "Endorsement"
  },
  {
    quote: "Whether managing complex IP workflows or leading tens of thousands in digital youth seminars, his reliability and creative execution are unmatched in the West African media landscape.",
    initials: "MT",
    name: "Marvelous Tabitha",
    title: "Event Manager",
    organization: "",
    image: "https://i.ibb.co/nMCxQStg/tabitha.jpg",
    tag: "Endorsement"
  },
  {
    quote: "A visionary in media systems and ICT, his work has consistently elevated the standard of digital ministry and organizational excellence.",
    initials: "GO",
    name: "Minister George Owen",
    title: "Founder, Light House Initiatives",
    organization: "Mission Coordinator, The Redeemed Assemblies Worldwide",
    image: "https://i.ibb.co/707wJ6C/Minister-George-Owen.jpg",
    tag: "Endorsement"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const changeSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 300);
  };

  const nextSlide = () => {
    changeSlide(currentIndex === mainTestimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    changeSlide(currentIndex === 0 ? mainTestimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="voices" className="py-32 bg-zinc-50 relative border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-section">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">Voices of Trust</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6 tracking-tight">Voices of Trust</h2>
          <p className="text-lg text-zinc-500 leading-relaxed font-light">
            Leaders and institutions who recognize the impact of technology, media systems, and digital innovation in advancing ministry and organizational growth.
          </p>
        </div>

        <div className="mb-12 fade-in-section relative group/carousel">
          <div 
            className="bg-zinc-950 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl bento-card border border-zinc-800"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/20 blur-[60px] rounded-full pointer-events-none"></div>
            <i className="ph-fill ph-quotes text-6xl text-amber-500/20 absolute top-8 right-10"></i>
            
            <div className={`grid lg:grid-cols-12 gap-8 items-center relative z-10 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <div className="lg:col-span-8">
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-zinc-200 min-h-[160px] md:min-h-[120px]">
                  "{mainTestimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-zinc-800 text-amber-400 flex items-center justify-center font-display font-bold text-xl border border-zinc-700 shadow-glow flex-shrink-0 overflow-hidden">
                    {mainTestimonials[currentIndex].image !== "[INSERT_IMAGE_URL_HERE]" && mainTestimonials[currentIndex].image !== "[INSERT_PROFILE_IMAGE_URL]" ? (
                      <img src={mainTestimonials[currentIndex].image} alt={mainTestimonials[currentIndex].name} className="w-full h-full object-cover" />
                    ) : (
                      <img src="https://i.ibb.co/k2P5xNWq/1000095077-02.jpg" alt="Bilau Oluwatobi Victor" className="w-full h-full object-cover rounded-full" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white">{mainTestimonials[currentIndex].name}</h4>
                    <p className="text-sm text-zinc-400 font-light">
                      {mainTestimonials[currentIndex].title} 
                      {mainTestimonials[currentIndex].organization && <><span className="text-amber-500 mx-1">&bull;</span> {mainTestimonials[currentIndex].organization}</>}
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex lg:col-span-4 justify-end">
                <div className="w-full max-w-[200px] aspect-square rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm relative overflow-hidden shadow-inner group">
                  {mainTestimonials[currentIndex].image !== "[INSERT_IMAGE_URL_HERE]" && mainTestimonials[currentIndex].image !== "[INSERT_PROFILE_IMAGE_URL]" ? (
                    <img src={mainTestimonials[currentIndex].image} alt={mainTestimonials[currentIndex].name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100" />
                  ) : (
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-zinc-800 text-zinc-500 p-4 text-center">
                      <i className="ph ph-image text-3xl mb-2"></i>
                      <span className="text-xs">Profile Image:<br/>[INSERT_PROFILE_IMAGE_URL]</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none z-0"></div>
                  <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col items-center justify-end z-10">
                    <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase drop-shadow-md text-center">{mainTestimonials[currentIndex].tag}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-zinc-900 border border-white/10 text-amber-400 flex items-center justify-center shadow-xl opacity-0 invisible group-hover/carousel:opacity-100 group-hover/carousel:visible transition-all duration-300 hover:bg-zinc-800 hover:scale-110 hover:shadow-glow z-20 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <i className="ph-bold ph-caret-left text-xl"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-zinc-900 border border-white/10 text-amber-400 flex items-center justify-center shadow-xl opacity-0 invisible group-hover/carousel:opacity-100 group-hover/carousel:visible transition-all duration-300 hover:bg-zinc-800 hover:scale-110 hover:shadow-glow z-20 focus:outline-none"
            aria-label="Next testimonial"
          >
            <i className="ph-bold ph-caret-right text-xl"></i>
          </button>
        </div>

        {/* Grid of Endorsement Profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 fade-in-section">
          {mainTestimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              onClick={() => changeSlide(idx)}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center gap-4 group ${
                currentIndex === idx 
                  ? 'bg-zinc-900 border-amber-500/50 shadow-glow scale-[1.02]' 
                  : 'bg-zinc-950 border-zinc-800 hover:border-amber-500/30 hover:shadow-glow hover:bg-zinc-900'
              }`}
            >
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-zinc-800 border border-zinc-700 relative">
                {testimonial.image !== "[INSERT_IMAGE_URL_HERE]" && testimonial.image !== "[INSERT_PROFILE_IMAGE_URL]" ? (
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <img src="https://i.ibb.co/k2P5xNWq/1000095077-02.jpg" alt="Bilau Oluwatobi Victor" className="w-full h-full object-cover rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-white truncate">{testimonial.name}</h4>
                <p className="text-xs text-zinc-400 truncate">
                  {testimonial.title}
                </p>
                {testimonial.organization && (
                  <p className="text-[10px] text-zinc-500 truncate mt-0.5">
                    {testimonial.organization}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
