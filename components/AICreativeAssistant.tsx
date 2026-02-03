import React, { useState } from 'react';
import { Sparkles, Loader2, Copy, Palette, PenTool, Eraser } from 'lucide-react';
import { generateEmbroideryIdea } from '../services/geminiService';
import { AIResponse } from '../types';
import { useTranslation } from '../hooks/useTranslation';

const AICreativeAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);
  const [error, setError] = useState('');
  const { t } = useTranslation();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await generateEmbroideryIdea(input);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(t.aiAssistant.error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      const colorNames = result.colorPalette.map(c => c.name).join(', ');
      const { intro, concept, colors, stitches } = t.aiAssistant.whatsappPrefill;
      const text = `${intro}\n\n${concept} ${result.suggestion}\n${colors} ${colorNames}\n${stitches} ${result.stitchTypes.join(', ')}`;
      navigator.clipboard.writeText(text);
      // Feedback visual simples via alert
      alert(t.aiAssistant.result.copySuccess);
    }
  };

  return (
    <section id="ai-assistant" className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-rose-50 rounded-full mb-6">
                 <Sparkles className="text-rose-500" size={24} />
            </div>
          <h2 className="font-serif text-5xl md:text-6xl text-forest-900 mb-6">{t.aiAssistant.title}</h2>
          <p className="text-forest-700 text-xl font-serif max-w-2xl mx-auto italic">
            {t.aiAssistant.subtitle}
          </p>
        </div>

        {/* Sketchbook Container */}
        <div className="bg-[#fffdf5] rounded-sm shadow-2xl max-w-4xl mx-auto overflow-hidden relative border border-stone-300 transform md:rotate-1 hover:rotate-0 transition-transform duration-700" style={{boxShadow: '10px 10px 30px rgba(0,0,0,0.1), -2px -2px 0px rgba(220, 210, 190, 0.5)'}}>
          
          {/* Spiral binding illusion */}
          <div className="absolute top-0 left-4 md:left-8 bottom-0 w-10 border-r border-stone-300/50 flex flex-col justify-evenly py-4 z-20">
             {[...Array(12)].map((_, i) => (
                 <div key={i} className="w-8 h-8 rounded-full -ml-5 bg-gradient-to-br from-stone-300 to-stone-100 shadow-inner border border-stone-400 flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#fffdf5] rounded-full shadow-inner"></div>
                 </div>
             ))}
          </div>

          {/* Paper Content */}
          <div className="p-8 md:p-12 pl-16 md:pl-28 relative min-h-[500px]">
            
            <form onSubmit={handleGenerate} className="mb-12 relative z-10">
              <label className="block font-script text-5xl text-forest-900 mb-8 ml-2 drop-shadow-sm opacity-90">
                {t.aiAssistant.diaryLabel}
              </label>
              
              {/* Lined Paper Effect Container */}
              <div className="relative w-full group">
                {/* Background Lines */}
                <div 
                    className="absolute inset-0 pointer-events-none w-full h-full"
                    style={{
                        backgroundImage: 'linear-gradient(transparent 95%, #e5e0d8 95%)',
                        backgroundSize: '100% 3.5rem' // 56px line height
                    }}
                ></div>

                {/* Text Area aligned to lines */}
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.aiAssistant.placeholder}
                  rows={4}
                  className="w-full bg-transparent border-none resize-none focus:ring-0 p-0 text-xl md:text-2xl font-serif text-forest-900/90 leading-[3.5rem] placeholder:text-forest-300 placeholder:italic focus:outline-none"
                  style={{
                      lineHeight: '3.5rem',
                      marginTop: '0.6rem' // Fine tune text to sit on line
                  }}
                />
                
                {/* Actions Area */}
                <div className="flex justify-between items-center mt-8 pt-4 border-t border-stone-100">
                    <button 
                        type="button" 
                        onClick={() => setInput('')}
                        className={`flex items-center gap-2 text-stone-400 hover:text-rose-400 transition-colors font-sans text-xs tracking-widest uppercase ${!input && 'opacity-0 cursor-default'}`}
                    >
                        <Eraser size={14} /> {t.aiAssistant.clear}
                    </button>

                    <button
                        type="submit"
                        disabled={loading || !input.trim()}
                        className="group relative inline-flex items-center justify-center gap-2 bg-forest-900 text-linen px-8 py-3 rounded-sm font-serif text-xl italic hover:bg-rose-500 transition-all shadow-lg hover:shadow-rose-900/20 disabled:opacity-50 disabled:hover:bg-forest-900"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                <span className="animate-pulse">{t.aiAssistant.submit.loading}</span>
                            </>
                        ) : (
                            <>
                                <span className="relative z-10">{t.aiAssistant.submit.idle}</span>
                                <Sparkles size={18} className="text-gold-400 group-hover:text-white transition-colors" />
                            </>
                        )}
                    </button>
                </div>
              </div>
              
              {error && <p className="text-rose-600 mt-4 font-serif italic text-lg bg-rose-50/80 inline-block px-4 py-1 rounded-md">{error}</p>}
            </form>

            {result && (
              <div className="animate-fade-in-up mt-8 relative">
                  {/* Tape Effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm transform -rotate-1 shadow-sm border-l border-r border-white/60 z-20 opacity-70"></div>

                  <div className="bg-white p-8 rounded-sm shadow-[0_3px_15px_-3px_rgba(0,0,0,0.1)] border border-stone-100 rotate-1 transition-transform hover:rotate-0">
                      
                    <h3 className="font-script text-4xl text-rose-600 mb-4 drop-shadow-sm text-center">{t.aiAssistant.result.title}</h3>
                    <p className="font-serif text-2xl text-forest-900 leading-relaxed font-medium text-center mb-8">
                      "{result.suggestion}"
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-dashed border-stone-300 pt-8">
                        <div className="bg-stone-50 p-4 rounded-lg">
                            <h4 className="font-sans text-xs font-bold uppercase text-forest-600 mb-3 flex items-center gap-2">
                              <Palette size={14} /> {t.aiAssistant.result.paletteTitle}
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {result.colorPalette.map((color, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-stone-200 rounded-full shadow-sm hover:scale-105 transition-transform cursor-default">
                                    <div 
                                      className="w-6 h-6 rounded-full border border-stone-200 shadow-inner ring-1 ring-white" 
                                      style={{ backgroundColor: color.hex }}
                                      title={color.hex}
                                    ></div>
                                    <span className="text-sm font-serif italic text-forest-800">
                                        {color.name}
                                    </span>
                                </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-stone-50 p-4 rounded-lg">
                            <h4 className="font-sans text-xs font-bold uppercase text-forest-600 mb-3 flex items-center gap-2">
                              <PenTool size={14} /> {t.aiAssistant.result.stitchesTitle}
                            </h4>
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                {result.stitchTypes.map((stitch, idx) => (
                                <span key={idx} className="text-lg font-serif text-forest-800 relative after:content-['•'] after:absolute after:-right-3 after:text-stone-300 last:after:content-none mr-2">
                                    {stitch}
                                </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 text-forest-900 border-b border-rose-300 hover:border-rose-600 hover:text-rose-600 transition-all font-sans text-xs uppercase tracking-widest font-bold pb-1"
                        >
                        <Copy size={14} /> {t.aiAssistant.result.copy}
                        </button>
                    </div>
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICreativeAssistant;