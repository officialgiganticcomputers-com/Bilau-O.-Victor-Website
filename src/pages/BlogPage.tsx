import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const categories = ["Technology", "Ministry", "Leadership", "Media Systems"];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Ministry in Africa",
    excerpt: "Exploring how emerging technologies and IP-based workflows are democratizing theological education and expanding the reach of the Gospel across the continent.",
    category: "Ministry",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    author: "Bilau O. Victor"
  },
  {
    id: 2,
    title: "Building Resilient Media Infrastructure for Mega-Churches",
    excerpt: "A deep dive into the technical requirements for broadcasting to thousands without dropping a single frame.",
    category: "Media Systems",
    date: "March 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=2070",
    author: "Bilau O. Victor"
  },
  {
    id: 3,
    title: "Why Every Leader Needs a Digital Strategy",
    excerpt: "In today's hyper-connected world, leadership extends beyond the physical room. Here is how to build your digital presence.",
    category: "Leadership",
    date: "March 5, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070",
    author: "Bilau O. Victor"
  },
  {
    id: 4,
    title: "Mastering vMix: Tips for Seamless Live Production",
    excerpt: "Advanced techniques for using vMix to create broadcast-quality live streams with minimal hardware overhead.",
    category: "Technology",
    date: "February 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070",
    author: "Bilau O. Victor"
  },
  {
    id: 5,
    title: "The Intersection of Faith and Innovation",
    excerpt: "How embracing modern technology can enhance rather than dilute the spiritual experience of your congregation.",
    category: "Ministry",
    date: "February 20, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=2070",
    author: "Bilau O. Victor"
  },
  {
    id: 6,
    title: "Essential Gear for Mobile Live Streaming",
    excerpt: "A comprehensive guide to building a portable, high-quality live streaming kit for events on the go.",
    category: "Media Systems",
    date: "February 15, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1974",
    author: "Bilau O. Victor"
  },
  {
    id: 7,
    title: "Cultivating a Culture of Excellence in Your Media Team",
    excerpt: "Technical skills are important, but the right mindset is crucial. How to train and retain top-tier media volunteers.",
    category: "Leadership",
    date: "February 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
    author: "Bilau O. Victor"
  },
  {
    id: 8,
    title: "Designing Acoustic Spaces for Modern Worship",
    excerpt: "Balancing traditional architectural acoustics with the demands of modern line arrays and broadcast audio.",
    category: "Media Systems",
    date: "January 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2070",
    author: "Bilau O. Victor"
  }
];

const getPostLink = (id: number) => {
  if (id === 1) return "/blog/the-future-of-digital-ministry-in-africa";
  if (id === 2) return "/blog/building-resilient-media-infrastructure-mega-churches";
  if (id === 3) return "/blog/why-every-leader-needs-a-digital-strategy";
  if (id === 4) return "/blog/mastering-vmix-live-production";
  if (id === 5) return "/blog/the-intersection-of-faith-and-innovation";
  if (id === 6) return "/blog/essential-gear-for-mobile-live-streaming";
  if (id === 7) return "/blog/cultivating-a-culture-of-excellence-in-your-media-team";
  if (id === 8) return "/blog/designing-acoustic-spaces-for-modern-worship";
  return "#";
};

const PostCard: React.FC<{ post: typeof blogPosts[0] }> = ({ post }) => (
  <div className="group bg-white rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center gap-4 mb-4 text-xs text-slate-500 font-light">
        <span className="flex items-center gap-1"><i className="ph ph-calendar-blank"></i> {post.date}</span>
        <span className="flex items-center gap-1"><i className="ph ph-clock"></i> {post.readTime}</span>
      </div>
      <h3 className="text-xl font-display font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
        <Link to={getPostLink(post.id)}>{post.title}</Link>
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed font-light mb-8 flex-grow">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
            <img src="https://i.ibb.co/k2P5xNWq/1000095077-02.jpg" alt={post.author} className="w-full h-full object-cover" />
          </div>
          <p className="text-xs font-bold text-slate-900">{post.author}</p>
        </div>
        <Link to={getPostLink(post.id)} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <i className="ph-bold ph-arrow-up-right"></i>
        </Link>
      </div>
    </div>
  </div>
);

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredPosts = blogPosts.filter(post => post.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-12"
    >
      <SEO 
        title="Blog" 
        description="Insights, strategies, and thoughts on digital ministry, media systems, and technology." 
        url="https://bilauovictor.netlify.app/blog"
      />
      
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-section">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Perspectives</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Thoughts on technology, media systems, leadership, and the future of digital ministry.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16 fade-in-section">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-600 ring-offset-2' 
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm hover:-translate-y-0.5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Layout Based on Post Count */}
        <div className="fade-in-section">
          {filteredPosts.length === 1 && (
            <div className="max-w-4xl mx-auto">
              <div className="group relative bg-white rounded-3xl shadow-glass border border-slate-200/60 overflow-hidden flex flex-col md:flex-row transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="md:w-1/2 relative overflow-hidden aspect-video md:aspect-auto min-h-[300px]">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-100">
                      {filteredPosts[0].category}
                    </span>
                    <span className="text-sm text-slate-500 font-light flex items-center gap-1">
                      <i className="ph ph-clock"></i> {filteredPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    <Link to={getPostLink(filteredPosts[0].id)}>{filteredPosts[0].title}</Link>
                  </h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                        <img src="https://i.ibb.co/k2P5xNWq/1000095077-02.jpg" alt={filteredPosts[0].author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{filteredPosts[0].author}</p>
                        <p className="text-xs text-slate-500">{filteredPosts[0].date}</p>
                      </div>
                    </div>
                    <Link to={getPostLink(filteredPosts[0].id)} className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Read Article <i className="ph-bold ph-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {filteredPosts.length === 2 && (
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
              {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {filteredPosts.length >= 3 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                <i className="ph ph-article text-3xl"></i>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-500">There are currently no articles in the "{activeCategory}" category.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
