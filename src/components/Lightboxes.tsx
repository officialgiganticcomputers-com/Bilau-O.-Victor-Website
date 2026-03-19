export default function Lightboxes({ 
  lightboxOpen, 
  videoLightboxOpen, 
  currentImageIndex, 
  onCloseImage, 
  onCloseVideo, 
  onNextImage, 
  onPrevImage 
}: { 
  lightboxOpen: boolean; 
  videoLightboxOpen: boolean; 
  currentImageIndex: number; 
  onCloseImage: () => void; 
  onCloseVideo: () => void; 
  onNextImage: () => void; 
  onPrevImage: () => void; 
}) {
  const galleryData = [
    {
      src: "https://i.ibb.co/x8764ZFP/9.jpg",
      title: "Workshop Leadership",
      desc: "Addressing Workshop Participants at Christ Apostolic Church International Camp Ground, Ikeji Arakeji 2023."
    },
    {
      src: "https://i.ibb.co/6RjhpSC0/10.jpg",
      title: "Youth Affairs Collaboration",
      desc: "Photograph with the Christ Apostolic Church Director of Youth Affairs & His Assistant Director."
    },
    {
      src: "https://i.ibb.co/RktLJF0m/11.jpg",
      title: "ICT Empowerment Program",
      desc: "Photograph during free ICT Empowerment Program at Ikeji Arakeji 2023."
    },
    {
      src: "https://i.ibb.co/608gGszh/12.jpg",
      title: "Mentorship Impact",
      desc: "Photograph with one of the participant of Free ICT Empowerment Program in the Year 2020."
    },
    {
      src: "https://i.ibb.co/JRBcqp1q/13.jpg",
      title: "National & International Leaders",
      desc: "Photograph with the Christ Apostolic Church National and International Leaders at Ikeji Arakeji 2023."
    }
  ];

  return (
    <>
      {lightboxOpen && (
        <div id="lightbox" className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center opacity-100 visible transition-all duration-300" onClick={(e) => { if (e.target === e.currentTarget) onCloseImage(); }}>
          <button id="lightbox-close" onClick={onCloseImage} className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 bg-white/10 hover:bg-[#D9FF00] text-white hover:text-zinc-950 rounded-full flex items-center justify-center transition-colors duration-300 z-50">
            <i className="ph-bold ph-x text-xl"></i>
          </button>

          <button id="lightbox-prev" onClick={onPrevImage} className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#D9FF00] text-white hover:text-zinc-950 rounded-full flex items-center justify-center transition-colors duration-300 z-50">
            <i className="ph-bold ph-caret-left text-2xl"></i>
          </button>
          <button id="lightbox-next" onClick={onNextImage} className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#D9FF00] text-white hover:text-zinc-950 rounded-full flex items-center justify-center transition-colors duration-300 z-50">
            <i className="ph-bold ph-caret-right text-2xl"></i>
          </button>

          <div className="relative w-full max-w-5xl px-12 md:px-24 flex flex-col items-center">
            <img id="lightbox-img" src={galleryData[currentImageIndex].src} alt={galleryData[currentImageIndex].title} loading="lazy" decoding="async" className="max-h-[70vh] w-auto object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-300 scale-100" />
            
            <div className="mt-8 text-center max-w-2xl">
              <h3 id="lightbox-title" className="text-white font-display font-bold text-2xl mb-2">{galleryData[currentImageIndex].title}</h3>
              <p id="lightbox-desc" className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">{galleryData[currentImageIndex].desc}</p>
            </div>
          </div>
        </div>
      )}

      {videoLightboxOpen && (
        <div id="video-lightbox" className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center opacity-100 visible transition-all duration-300" onClick={(e) => { if (e.target === e.currentTarget) onCloseVideo(); }}>
          <button onClick={onCloseVideo} className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 bg-white/10 hover:bg-[#D9FF00] text-white hover:text-zinc-950 rounded-full flex items-center justify-center transition-colors duration-300 z-50">
            <i className="ph-bold ph-x text-xl"></i>
          </button>

          <div className="relative w-full max-w-5xl px-4 md:px-12 flex flex-col items-center">
            <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-center relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/xkJ0nSyOBhE?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
