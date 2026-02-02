import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-forest-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-forest-900/30 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="https://i.imgur.com/I8Bkvb9.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img src="https://i.imgur.com/Dc1PG1T.jpeg" alt="Background Texture" className="w-full h-full object-cover" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full pt-28 md:pt-32 pb-20">
        
        <div className="animate-fade-in-up space-y-6 md:space-y-8 lg:space-y-12 flex flex-col items-center">
          {/* Badge Moderno */}
          <span className="inline-flex items-center gap-2 py-2 px-6 border border-linen/20 rounded-full bg-white/5 backdrop-blur-md text-linen/90 text-xs md:text-sm font-sans tracking-[0.2em] uppercase shadow-lg hover:bg-white/10 transition-colors cursor-default">
            <Sparkles size={12} className="text-gold-400" />
            Arte Têxtil por Paula
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[10rem] text-linen font-serif leading-[0.9] drop-shadow-2xl tracking-tight">
            Poesia feita <br />
            <span className="font-script text-rose-300 relative inline-block mt-2 md:mt-0">
              à mão
              <svg className="absolute -bottom-3 md:-bottom-5 left-0 w-full h-4 md:h-8 text-gold-400 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="10 5" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-2xl lg:text-[28px] 2xl:text-[34px] text-linen/95 max-w-xs md:max-w-3xl lg:max-w-4xl mx-auto font-serif italic font-light drop-shadow-lg leading-relaxed px-4">
            "Onde cada ponto conta uma história e cada linha eterniza uma memória."
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 md:mt-12 lg:mt-16 flex justify-center">
              <a href="#gallery" className="flex flex-col items-center gap-2 text-linen/70 hover:text-white transition-colors cursor-pointer group animate-bounce duration-[2800ms]">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.18em] group-hover:tracking-[0.28em] transition-all duration-500 font-medium opacity-80">
              Explorar Ateliê
            </span>
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-linen/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-rose-500/20 group-hover:border-rose-300 transition-all shadow-lg">
              <ArrowDown size={18} strokeWidth={1.5} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;