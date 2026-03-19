import { useState, FormEvent } from 'react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function SocialEngine() {
  const [seMessage, setSeMessage] = useState('');
  const [seTone, setSeTone] = useState('Empowering & Prophetic');
  const [seState, setSeState] = useState<'initial' | 'loading' | 'error' | 'result'>('initial');
  const [seResult, setSeResult] = useState('');

  const handleSeSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSeState('loading');
    try {
      const systemInstruction = "You are an expert Digital Media Strategist working for Bilau Oluwatobi Victor. Your job is to take a core message/sermon and turn it into engaging social media assets.";
      const userQuery = `Take the following sermon excerpt/message and convert it into a digital media campaign.
      - Message: "${seMessage}"
      - Tone/Vibe: ${seTone}
      
      Generate the following 3 assets:
      1. <h3>Instagram Caption</h3>: A highly engaging caption with emojis and 5 relevant hashtags.
      2. <h3>Twitter / X Thread</h3>: A short thread (2-3 tweets) breaking down the key points.
      3. <h3>YouTube Video Description</h3>: A 2-paragraph description for a sermon video based on this message, including a call to action to subscribe.
      
      Format strictly in HTML using <h3> and <p> tags. DO NOT use markdown code blocks or backticks in the response.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userQuery,
        config: { systemInstruction }
      });
      
      let cleanHtml = response.text || "<p>Campaign generation incomplete.</p>";
      cleanHtml = cleanHtml.replace(/```html/g, '').replace(/```/g, '').trim();
      setSeResult(cleanHtml);
      setSeState('result');
    } catch (error) {
      console.error(error);
      setSeState('error');
    }
  };

  return (
    <section id="social-engine" className="py-32 bg-zinc-950 relative overflow-hidden border-t border-zinc-800 text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#D9FF00]/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#D9FF00]/10 text-[#D9FF00] border border-[#D9FF00]/20 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(217,255,0,0.15)]">Content Multiplier AI ✨</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Sermon-to-Social Engine</h2>
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            Paste a core message or sermon excerpt. Our Gemini-powered AI will act as your digital strategist, transforming it into a complete, platform-optimized social media campaign instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start fade-in-section">
          <div className="lg:col-span-5 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl relative z-20">
            <form id="ai-social-form" className="space-y-6" onSubmit={handleSeSubmit}>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Sermon Excerpt / Core Message</label>
                <textarea id="se-message" required rows={5} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D9FF00] transition-all resize-none font-light" placeholder="e.g. 'Faith is not the absence of fear, but the decision to move forward despite it...'" value={seMessage} onChange={e => setSeMessage(e.target.value)}></textarea>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Ministry Tone & Vibe</label>
                <select id="se-tone" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9FF00] transition-all font-light appearance-none" value={seTone} onChange={e => setSeTone(e.target.value)}>
                  <option value="Empowering & Prophetic">Empowering & Prophetic</option>
                  <option value="Academic & Theological">Academic & Theological</option>
                  <option value="Youthful & High-Energy">Youthful & High-Energy</option>
                  <option value="Calm & Pastoral">Calm & Pastoral</option>
                </select>
              </div>
              <button type="submit" id="se-submit" disabled={seState === 'loading'} className="w-full flex items-center justify-center gap-2 bg-[#D9FF00] hover:bg-[#b8d900] text-zinc-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(217,255,0,0.3)] disabled:opacity-70 disabled:cursor-not-allowed">
                {seState === 'loading' ? <><i className="ph-bold ph-spinner animate-spin"></i> Drafting Campaign...</> : <><i className="ph-bold ph-lightning"></i> Generate Campaign ✨</>}
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl min-h-[450px] flex flex-col relative overflow-hidden">
            
            {seState === 'initial' && (
              <div id="se-initial-state" className="flex-1 flex flex-col items-center justify-center text-center opacity-60">
                <i className="ph-thin ph-share-network text-6xl text-[#D9FF00] mb-4"></i>
                <h4 className="font-display font-bold text-xl mb-2 text-white">Awaiting Message</h4>
                <p className="text-sm text-zinc-400 max-w-sm font-light">Enter a sermon excerpt to generate an Instagram caption, Twitter thread, and YouTube description.</p>
              </div>
            )}

            {seState === 'loading' && (
              <div id="se-loading-state" className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="relative w-16 h-16 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 border-t-2 border-[#D9FF00] rounded-full animate-spin"></div>
                  <i className="ph-fill ph-sparkle text-2xl text-[#D9FF00] animate-pulse"></i>
                </div>
                <h4 className="font-display font-bold text-lg mb-1 text-white">Drafting Social Campaign...</h4>
                <p className="text-xs text-zinc-400 font-mono">Calling Gemini API ✨</p>
              </div>
            )}

            {seState === 'error' && (
              <div id="se-error-state" className="flex-1 flex flex-col items-center justify-center text-center">
                <i className="ph-fill ph-warning-circle text-5xl text-red-500 mb-4"></i>
                <h4 className="font-display font-bold text-lg mb-2 text-white">System Error</h4>
                <p id="se-error-text" className="text-sm text-zinc-400 max-w-sm font-light">Unable to generate campaign. Please try again later.</p>
              </div>
            )}

            {seState === 'result' && (
              <div id="se-result-state" className="flex-1 flex flex-col text-zinc-300">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D9FF00]/10 flex items-center justify-center text-[#D9FF00] border border-[#D9FF00]/20">
                      <i className="ph-fill ph-rocket-launch text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-lg">Generated Campaign</h4>
                    </div>
                  </div>
                  <button onClick={() => { navigator.clipboard.writeText(seResult); alert('Copied to clipboard!'); }} className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors">
                    <i className="ph-bold ph-copy"></i> Copy All
                  </button>
                </div>
                
                <div id="se-content" className="max-w-none font-light text-sm leading-relaxed overflow-y-auto max-h-[500px] pr-2 custom-scrollbar" dangerouslySetInnerHTML={{ __html: seResult }}>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
