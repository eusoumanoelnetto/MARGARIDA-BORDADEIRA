import React from 'react';
import { Instagram, Facebook, Send, Mail, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-forest-900 text-linen pt-24 pb-12 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-forest-900 via-rose-500 to-forest-900 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Content Wrapper for center alignment */}
        <div className="max-w-3xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-10">
                <div className="p-1 bg-white/5 rounded-full border border-rose-500/20 shadow-xl">
                    <img 
                        src="https://i.imgur.com/rNj5VEk.jpeg" 
                        alt="Margarida Bordada Logo" 
                        className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </div>

            <div className="mb-16">
            <span className="font-script text-4xl text-rose-400 mb-4 block">Vamos conversar?</span>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
                Transforme sua memória<br/>em bordado.
            </h2>
            <p className="text-linen/60 text-xl font-serif max-w-xl mx-auto mb-12 italic">
                A agenda está aberta para novas histórias. Clique abaixo para iniciarmos seu projeto personalizado.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                href="https://wa.me/5500000000000" // Replace with actual number
                className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-full font-serif text-xl italic transition-all shadow-lg shadow-rose-900/50 flex items-center justify-center gap-3 hover:-translate-y-1"
                >
                <Send size={20} className="not-italic" />
                Chamar no WhatsApp
                </a>
                <a 
                href="https://instagram.com/margaridabordada"
                target="_blank"
                rel="noreferrer"
                className="border border-linen/20 hover:bg-linen/5 text-linen px-10 py-4 rounded-full font-serif text-xl italic transition-all flex items-center justify-center gap-3"
                >
                <Instagram size={20} className="not-italic" />
                @margaridabordada
                </a>
            </div>
            </div>
        </div>

        <div className="border-t border-linen/10 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-linen/40 font-sans text-sm tracking-widest uppercase order-2 lg:order-1">
            <Mail size={14} />
            <span>contato@margaridabordada.com</span>
          </div>
          
          {/* Social Icons Container */}
          <div className="flex items-center gap-6 order-1 lg:order-2 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
             <a 
                href="https://instagram.com/margaridabordada" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="text-linen/70 hover:text-rose-400 transition-colors transform hover:scale-110 duration-300"
             >
                <Instagram size={20} strokeWidth={1.5} />
             </a>
             
             <div className="w-px h-4 bg-linen/20"></div>
             
             <a 
                href="https://facebook.com/margaridabordada" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="text-linen/70 hover:text-rose-400 transition-colors transform hover:scale-110 duration-300"
             >
                <Facebook size={20} strokeWidth={1.5} />
             </a>
          </div>

          <div className="text-linen/40 font-serif italic text-lg flex flex-col sm:flex-row items-center justify-center gap-x-2 gap-y-1 order-3 text-center w-full lg:w-auto">
            <div className="flex items-center gap-2 whitespace-nowrap">
                <span>Feito à mão com</span>
                <Heart size={14} className="text-rose-500 fill-rose-500 shrink-0" />
                <span>por Paula</span>
            </div>
            
            <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span>pela</span>
                <a 
                  href="https://www.rebrandly.com/aeagledigital" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group relative flex items-center shrink-0"
                >
                    <img 
                      src="https://i.imgur.com/JMe6OUY.png" 
                      alt="Eagle Digital" 
                      className="h-9 md:h-11 w-auto relative top-[1px] opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                    
                    {/* Tooltip / Speech Bubble */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-32 bg-white text-forest-900 text-[10px] font-sans font-medium leading-tight py-2 px-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0 text-center border border-stone-200 z-50">
                        Faça seu site conosco!
                        <div className="h-1"></div>
                        <span className="font-bold text-rose-500 underline decoration-rose-300 underline-offset-2">Clique aqui!</span>
                        
                        {/* Arrow */}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-stone-200 transform rotate-45"></div>
                    </div>
                </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;