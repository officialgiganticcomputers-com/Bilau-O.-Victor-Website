import { useState, FormEvent } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Link } from 'react-router-dom';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function BlueprintGenerator() {
  const [bpSize, setBpSize] = useState('Under 100');
  const [bpFocus, setBpFocus] = useState('Live Streaming & vMix Integration');
  const [bpChallenge, setBpChallenge] = useState('');
  const [bpState, setBpState] = useState<'initial' | 'loading' | 'error' | 'result'>('initial');
  const [bpResult, setBpResult] = useState('');

  const handleBpSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setBpState('loading');
    try {
      const systemInstruction = "You are an AI assistant representing Bilau Oluwatobi Victor (aka 'Gigantic'), a premium Digital Evangelism & Media Systems Integrator in West Africa (expert in vMix, wireless setups, church IT). Speak with his voice: professional, innovative, spiritually grounded, and highly technical.";
      const userQuery = `A church leader has requested a custom media strategy blueprint.
      - Congregation Size: ${bpSize}
      - Primary Focus: ${bpFocus}
      - Biggest Challenge: ${bpChallenge}
      
      Generate a brief, strategic 3-step blueprint to solve their challenge. Use clean HTML formatting (only <h3>, <p>, <ul>, <li>, <strong>). DO NOT use markdown backticks or blockquotes. Highlight key tools like 'vMix' or 'NDI' if relevant. Keep the total response under 200 words.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userQuery,
        config: { systemInstruction }
      });
      
      let cleanHtml = response.text || "<p>Blueprint generation incomplete.</p>";
      cleanHtml = cleanHtml.replace(/```html/g, '').replace(/```/g, '').trim();
      setBpResult(cleanHtml);
      setBpState('result');
    } catch (error) {
      console.error(error);
      setBpState('error');
    }
  };

  return (
    <section id="blueprint" className="py-32 bg-zinc-900 relative overflow-hidden border-t border-zinc-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik02MCAwaC0xdjYwaDFWMHptLTU5IDBIMHY2MGgxVjB6bTAgNTl2MWg2MHYtMUgwem0wLTU5djFoNjBWMHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')] opacity-10"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D9FF00]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#D9FF00]/10 text-[#D9FF00] border border-[#D9FF00]/20 text-xs font-bold uppercase tracking-widest mb-4 shadow-glow">Powered by Gemini AI ✨</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Digital Sanctuary Blueprint Generator</h2>
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            Generate an instant, high-level media strategy tailored to your ministry's current size and challenge. Let's design your next steps before we even speak.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start fade-in-section">
          <div className="lg:col-span-5 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl shadow-2xl">
            <form id="ai-blueprint-form" className="space-y-6" onSubmit={handleBpSubmit}>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Congregation Size</label>
                <select id="bp-size" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9FF00] transition-all font-light appearance-none" value={bpSize} onChange={e => setBpSize(e.target.value)}>
                  <option value="Under 100">Under 100 (Church Plant / Small Parish)</option>
                  <option value="100 - 500">100 - 500 (Growing Congregation)</option>
                  <option value="500 - 2000">500 - 2,000 (Large Assembly)</option>
                  <option value="2000+">2,000+ (Mega Church / Camp Ground)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Primary Focus</label>
                <select id="bp-focus" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D9FF00] transition-all font-light appearance-none" value={bpFocus} onChange={e => setBpFocus(e.target.value)}>
                  <option value="Live Streaming & vMix Integration">Live Streaming & vMix Integration</option>
                  <option value="Audio Engineering & Music Ministry">Audio Engineering & Music Ministry</option>
                  <option value="Media Team Training & Strategy">Media Team Training & Strategy</option>
                  <option value="Complete Digital Transformation">Complete Digital Transformation</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Biggest Challenge Right Now</label>
                <textarea id="bp-challenge" required rows={3} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#D9FF00] transition-all resize-none font-light" placeholder="e.g. 'Our live stream audio drops frequently' or 'We need to train volunteers...'" value={bpChallenge} onChange={e => setBpChallenge(e.target.value)}></textarea>
              </div>
              <button type="submit" id="bp-submit" disabled={bpState === 'loading'} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D9FF00] to-[#D9FF00] hover:from-[#D9FF00] hover:to-[#D9FF00] text-zinc-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] disabled:opacity-70 disabled:cursor-not-allowed">
                {bpState === 'loading' ? <><i className="ph-bold ph-spinner animate-spin"></i> Generating...</> : <><i className="ph-bold ph-magic-wand"></i> Generate Blueprint ✨</>}
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 bg-zinc-950/50 backdrop-blur-xl border border-zinc-800 p-8 rounded-3xl min-h-[400px] flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-800 via-[#D9FF00] to-zinc-800 opacity-20"></div>
            
            {bpState === 'initial' && (
              <div id="bp-initial-state" className="flex-1 flex flex-col items-center justify-center text-center opacity-60">
                <i className="ph-thin ph-cpu text-6xl text-[#D9FF00] mb-4"></i>
                <h4 className="font-display font-bold text-xl mb-2 text-white">Awaiting Inputs</h4>
                <p className="text-sm text-zinc-400 max-w-sm font-light">Fill out the form to generate a custom media strategy powered by Gemini AI, based on Victor's proven methodologies.</p>
              </div>
            )}

            {bpState === 'loading' && (
              <div id="bp-loading-state" className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="relative w-16 h-16 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 border-t-2 border-[#D9FF00] rounded-full animate-spin"></div>
                  <i className="ph-fill ph-sparkle text-2xl text-[#D9FF00] animate-pulse"></i>
                </div>
                <h4 className="font-display font-bold text-lg mb-1 text-white">Architecting your strategy...</h4>
                <p className="text-xs text-zinc-400 font-mono">Calling Gemini API ✨</p>
              </div>
            )}

            {bpState === 'error' && (
              <div id="bp-error-state" className="flex-1 flex flex-col items-center justify-center text-center">
                <i className="ph-fill ph-warning-circle text-5xl text-red-500 mb-4"></i>
                <h4 className="font-display font-bold text-lg mb-2 text-white">System Error</h4>
                <p id="bp-error-text" className="text-sm text-zinc-400 max-w-sm font-light">Unable to generate blueprint. Please try again later.</p>
              </div>
            )}

            {bpState === 'result' && (
              <div id="bp-result-state" className="flex-1 flex flex-col text-zinc-300">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                  <div className="w-10 h-10 rounded-full bg-[#D9FF00]/10 flex items-center justify-center text-[#D9FF00] border border-[#D9FF00]/20">
                    <i className="ph-fill ph-check-circle text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-lg">Your Strategic Blueprint</h4>
                    <p className="text-[10px] uppercase tracking-widest text-[#D9FF00] font-bold">Generated via Gemini AI ✨</p>
                  </div>
                </div>
                
                <div id="bp-content" className="max-w-none font-light text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: bpResult }}>
                </div>
                
                <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
                  <p className="text-xs text-zinc-500 mb-4">Ready to implement this setup with professional guidance?</p>
                  <Link to="/contact" className="inline-block bg-white hover:bg-zinc-200 text-zinc-950 font-bold py-2.5 px-6 rounded-lg transition-all text-sm shadow-md">
                    Let's Discuss Execution
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
