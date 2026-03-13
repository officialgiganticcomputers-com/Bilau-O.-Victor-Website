export default function TrustedBy() {
  const logos = [
    {src: "https://i.ibb.co/ycgr2rjS/2.jpg", alt: "Christ Apostolic Church, Worldwide", text: "Christ Apostolic<br/>Church"},
    {src: "https://i.ibb.co/3yK75mGY/8.jpg", alt: "Global School of Ministry", text: "Global School<br/>of Ministry"},
    {src: "https://i.ibb.co/zTPBVt8T/IMF-LOGO-2.png", alt: "International Minister Fellowship", text: "Intl. Minister<br/>Fellowship"},
    {src: "https://i.ibb.co/hJWt22pw/TRA-LOGO.png", alt: "The Redeemed Assemblies, Worldwide", text: "The Redeemed<br/>Assemblies"},
    {src: "https://i.ibb.co/YTkww5q0/1.jpg", alt: "Christ Apostolic Church, Ekiti State Media Team", text: "CAC Ekiti<br/>Media Team"},
    {src: "https://i.ibb.co/PsFCZyYD/6.jpg", alt: "The Renewed Mind", text: "The Renewed<br/>Mind"}
  ];

  return (
    <section className="pt-12 pb-20 bg-zinc-50 border-b border-zinc-200/50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 fade-in-section">
          <h3 className="text-xs font-display font-bold text-zinc-400 uppercase tracking-widest mb-2">Trusted By Leading Ministries & Institutions</h3>
        </div>
        <div className="flex overflow-x-auto sm:flex-wrap justify-start sm:justify-center items-center gap-12 md:gap-16 lg:gap-24 pb-6 sm:pb-0 hide-scrollbar snap-x snap-mandatory fade-in-section w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:[mask-image:none]">
          {logos.map((logo, i) => (
            <a key={i} href="#" className="group flex items-center justify-center min-w-[140px] sm:min-w-0 snap-center transition-transform hover:scale-105">
              <img src={logo.src} alt={logo.alt} className="h-10 md:h-12 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-sm"
                   onError={(e) => { e.currentTarget.outerHTML = `<span class="font-display font-bold text-zinc-400 group-hover:text-zinc-800 transition-colors text-center text-xs tracking-wider leading-tight uppercase">${logo.text}</span>`; }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
