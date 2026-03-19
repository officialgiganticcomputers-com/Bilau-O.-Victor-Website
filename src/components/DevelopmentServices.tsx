import { useEffect, useRef } from 'react';

export default function DevelopmentServices() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-5');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Development Services
          </h2>
          <p className="text-lg text-slate-600">
            Building robust, scalable, and premium digital infrastructure for modern organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Website Development Card */}
          <div className="service-card opacity-0 translate-y-5 transition-all duration-700 ease-out bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-200 shadow-sm flex flex-col h-full">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-zinc-100 mb-8">
              <i className="ph ph-browser text-3xl text-zinc-900"></i>
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Website Development</h3>
            <p className="text-zinc-600 mb-8 flex-grow">
              Crafting high-performance, responsive websites tailored to your brand. We focus on delivering exceptional user experiences backed by solid technical foundations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-zinc-700">
                <i className="ph ph-check-circle text-emerald-500 mr-3 text-xl"></i>
                Custom UI/UX Design
              </li>
              <li className="flex items-center text-zinc-700">
                <i className="ph ph-check-circle text-emerald-500 mr-3 text-xl"></i>
                SEO & Performance Optimization
              </li>
              <li className="flex items-center text-zinc-700">
                <i className="ph ph-check-circle text-emerald-500 mr-3 text-xl"></i>
                Secure & Scalable Backends
              </li>
            </ul>
          </div>

          {/* Mobile Application Development Card */}
          <div className="service-card opacity-0 translate-y-5 transition-all duration-700 ease-out delay-100 bg-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-800 shadow-xl flex flex-col h-full relative overflow-hidden">
            {/* Subtle blue glow effect */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 mb-8 relative z-10">
              <i className="ph ph-device-mobile text-3xl text-blue-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Mobile Application Development</h3>
            <p className="text-zinc-400 mb-8 flex-grow relative z-10">
              Building native and cross-platform mobile experiences that engage users and drive growth. From concept to app store deployment.
            </p>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-center text-zinc-300">
                <i className="ph ph-check-circle text-blue-400 mr-3 text-xl"></i>
                iOS & Android Cross-Platform
              </li>
              <li className="flex items-center text-zinc-300">
                <i className="ph ph-check-circle text-blue-400 mr-3 text-xl"></i>
                Advanced Push Notifications
              </li>
              <li className="flex items-center text-zinc-300">
                <i className="ph ph-check-circle text-blue-400 mr-3 text-xl"></i>
                Live Streaming Integration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
