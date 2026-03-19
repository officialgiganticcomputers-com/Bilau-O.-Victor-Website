import { Link } from 'react-router-dom';

export default function Gallery({ onOpenImage }: { onOpenImage: (index: number) => void }) {
  return (
    <section id="gallery" className="py-32 bg-white relative border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#D9FF00]/10 text-[#D9FF00] text-xs font-bold uppercase tracking-widest mb-4">Proof of Impact</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-900 mb-6 tracking-tight">Case Studies & Media Gallery</h2>
          <p className="text-lg text-zinc-500 leading-relaxed font-light">
            Moments from live productions, ministry training sessions, workshops, and digital media systems led by Oluwatobi Victor Bilau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px] fade-in-section">
          
          <div className="gallery-item cursor-pointer relative overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-2 group shadow-sm hover:shadow-2xl transition-shadow duration-500"
               onClick={() => onOpenImage(0)}>
            <img src="https://i.ibb.co/x8764ZFP/9.jpg" alt="Workshop Leadership" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-[#D9FF00] text-zinc-950 flex items-center justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 shadow-glow">
                <i className="ph-bold ph-arrows-out-simple"></i>
              </div>
              <h3 className="text-white font-display font-bold text-2xl mb-2">Workshop Leadership</h3>
              <p className="text-zinc-300 text-sm font-light max-w-md line-clamp-2">Addressing Workshop Participants at Christ Apostolic Church International Camp Ground, Ikeji Arakeji 2023.</p>
            </div>
          </div>

          <div className="gallery-item cursor-pointer relative overflow-hidden rounded-3xl group shadow-sm hover:shadow-xl transition-shadow duration-500"
               onClick={() => onOpenImage(1)}>
            <img src="https://i.ibb.co/6RjhpSC0/10.jpg" alt="Youth Affairs Collaboration" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-display font-bold text-lg mb-1">Youth Affairs Collaboration</h3>
              <p className="text-zinc-300 text-xs font-light line-clamp-2">Photograph with the Christ Apostolic Church Director of Youth Affairs & His Assistant Director.</p>
            </div>
          </div>

          <div className="gallery-item cursor-pointer relative overflow-hidden rounded-3xl group shadow-sm hover:shadow-xl transition-shadow duration-500"
               onClick={() => onOpenImage(2)}>
            <img src="https://i.ibb.co/RktLJF0m/11.jpg" alt="ICT Empowerment Program" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-display font-bold text-lg mb-1">ICT Empowerment Program</h3>
              <p className="text-zinc-300 text-xs font-light line-clamp-2">Photograph during free ICT Empowerment Program at Ikeji Arakeji 2023.</p>
            </div>
          </div>

          <div className="gallery-item cursor-pointer relative overflow-hidden rounded-3xl group shadow-sm hover:shadow-xl transition-shadow duration-500"
               onClick={() => onOpenImage(3)}>
            <img src="https://i.ibb.co/608gGszh/12.jpg" alt="Mentorship Impact" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-display font-bold text-lg mb-1">Mentorship Impact</h3>
              <p className="text-zinc-300 text-xs font-light line-clamp-2">Photograph with one of the participant of Free ICT Empowerment Program in the Year 2020.</p>
            </div>
          </div>

          <div className="gallery-item cursor-pointer relative overflow-hidden rounded-3xl lg:col-span-2 group shadow-sm hover:shadow-xl transition-shadow duration-500"
               onClick={() => onOpenImage(4)}>
            <img src="https://i.ibb.co/JRBcqp1q/13.jpg" alt="National & International Leaders" loading="lazy" decoding="async" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-display font-bold text-xl mb-1">National & International Leaders</h3>
              <p className="text-zinc-300 text-sm font-light max-w-md line-clamp-2">Photograph with the Christ Apostolic Church National and International Leaders at Ikeji Arakeji 2023.</p>
            </div>
          </div>

        </div>

        <div className="text-center mt-16 fade-in-section">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 hover:border-zinc-300 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm">
            Contact Us
            <i className="ph-bold ph-arrow-up-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
