import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function BlogPostCultureExcellence() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20 bg-white"
    >
      <SEO 
        title="Cultivating a Culture of Excellence in Your Media Team | Bilau O. Victor" 
        description="Technical skills are important, but the right mindset is crucial. How to train and retain top-tier media volunteers." 
        url="https://bilauovictor.netlify.app/blog/cultivating-a-culture-of-excellence-in-your-media-team"
      />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
            <i className="ph-bold ph-arrow-left"></i> Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-100">
              Leadership
            </span>
            <span className="text-sm text-slate-500 font-light flex items-center gap-1">
              <i className="ph ph-clock"></i> 6 min read
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Cultivating a Culture of Excellence in Your Media Team
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8 max-w-3xl">
            Technical skills are important, but the right mindset is crucial. How to train and retain top-tier media volunteers.
          </p>

          {/* Author Block */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-6 border-t border-slate-100">
            <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
              <img src="https://i.ibb.co/k2P5xNWq/1000095077-02.jpg" alt="Bilau O. Victor" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="text-base font-bold text-slate-900">Bilau O. Victor</p>
              <p className="text-sm text-slate-500">February 5, 2026</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 aspect-[16/9] md:aspect-[21/9] relative">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
            alt="Cultivating a Culture of Excellence in Your Media Team" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate max-w-3xl mx-auto prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-slate-600 prose-li:my-2 prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-strong:text-slate-900 prose-strong:font-semibold">
          <p>
            In the world of digital ministry, the media team is often the unsung hero. They are the invisible bridge between the message and the listener. However, technical skill alone is not enough to sustain a high-impact media department. To truly thrive, a leader must cultivate a culture of excellence—a shared commitment to professional standards and spiritual integrity that transcends individual talent.
          </p>

          <h2>1. Standards over Suggestions: The Power of SOPs</h2>
          <p>
            Excellence begins with clarity. A culture of excellence cannot exist in an environment of guesswork. Every high-performing media team needs <strong>Standard Operating Procedures (SOPs)</strong>. Whether it’s the specific order of the vMix transition, the precise framing of a wide shot, or the audio gain levels for a soloist, these should be documented. When you establish standards, you move the team from "trying their best" to "executing the vision."
          </p>

          <h2>2. Continuous Technical Training</h2>
          <p>
            Technology evolves faster than our habits. A team that isn't learning is already becoming obsolete. As a leader, you must invest in regular training workshops. This includes mastering software updates, exploring IP-based workflows like NDI, and refining sound engineering techniques. Excellence is a moving target; staying sharp requires a commitment to being a lifelong student of the craft.
          </p>

          <h2>3. Character in the Control Room</h2>
          <p>
            We often focus on the "media," but we must never forget the "minister." The culture of the control room should reflect the culture of the sanctuary. A team that is technically brilliant but spiritually disconnected will eventually produce "noise" rather than "ministry." Excellence in the media booth is an act of worship. It requires punctuality, humility, and a heart that understands the weight of the message being handled.
          </p>

          <h2>4. The Feedback Loop: Post-Event Reviews</h2>
          <p>
            Excellence is forged in the fire of honest critique. Every major broadcast or event should be followed by a "Post-Mortem" or review session. What went well? Where did the audio clip? Why was that camera angle missed? These sessions shouldn't be about blame, but about growth. A culture of excellence thrives on the desire to make the next broadcast better than the last.
          </p>

          <h2>Conclusion</h2>
          <p>
            Cultivating excellence is not an overnight event; it is a daily discipline. When your media team operates with professional precision and spiritual passion, they do more than just operate equipment—they create an atmosphere where the Gospel can travel without distraction.
          </p>
          
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-sm text-slate-600 mb-0 italic">
              <strong>Bilau Oluwatobi Victor</strong> is a Certified IT Expert and Digital Media Strategist dedicated to helping ministries achieve global impact through technical and leadership excellence.
            </p>
          </div>
        </div>

        {/* Article Footer / Navigation */}
        <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-slate-200">
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">More Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/why-every-leader-needs-a-digital-strategy" className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">Previous</span>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  Why Every Leader Needs a Digital Strategy
                </h4>
              </div>
              <div className="mt-4 text-slate-400 group-hover:text-blue-500 transition-colors">
                <i className="ph-bold ph-arrow-left"></i>
              </div>
            </Link>
            <Link to="/blog/the-future-of-digital-ministry-in-africa" className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between h-full text-right">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">Next</span>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  The Future of Digital Ministry in Africa
                </h4>
              </div>
              <div className="mt-4 text-slate-400 group-hover:text-blue-500 transition-colors flex justify-end">
                <i className="ph-bold ph-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
