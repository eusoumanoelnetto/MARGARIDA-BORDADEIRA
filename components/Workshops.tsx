import React from 'react';
import { MapPin, Calendar, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

const Workshops: React.FC = () => {
  return (
    <section id="workshops" className="py-24 bg-forest-900 relative overflow-hidden text-linen">
      {/* Background Textures */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-sans font-bold tracking-widest uppercase">
            <Sparkles size={12} /> Agenda 2026
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-linen">Ensino & Compartilho</h2>
          <p className="font-serif italic text-xl text-linen/70 max-w-2xl mx-auto">
            Mais do que técnica, o bordado é terapia. Venha descomplicar os pontos em encontros presenciais cheios de afeto.
          </p>
        </div>

        {/* Featured Event Card - Ticket Style */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ticket Border/Decor */}
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-gold-400 to-rose-400 rounded-2xl opacity-30 blur-sm"></div>
          
          <div className="relative bg-[#fff9f0] text-forest-900 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
            
            {/* Left Side: Image/Visual */}
            <div className="md:w-2/5 relative min-h-[300px] md:min-h-0">
               <div className="absolute inset-0 bg-forest-900/10 mix-blend-multiply z-10"></div>
               <img 
                 src="https://i.imgur.com/cqX2s6j.jpeg" 
                 alt="Mesa de trabalho com bordado" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 flex items-center justify-center z-20">
                 <div className="bg-white/90 backdrop-blur-sm p-6 rounded-sm text-center border border-double border-forest-900/20 shadow-lg m-6">
                    <span className="block font-sans text-xs uppercase tracking-widest text-rose-500 mb-1">Próxima Turma</span>
                    <span className="block font-serif text-3xl italic text-forest-900">Iniciação ao<br/>Bordado Livre</span>
                 </div>
               </div>
            </div>

            {/* Right Side: Details - Perforated Line Effect */}
            <div className="md:w-3/5 p-8 md:p-10 relative bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              
              {/* Decorative Perforation Line */}
              <div className="hidden md:block absolute left-0 top-4 bottom-4 w-px border-l-2 border-dashed border-stone-300"></div>
              
              <div className="flex flex-col h-full justify-between">
                <div>
                   <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-forest-900">
                         <MapPin className="text-rose-500" size={20} />
                         <span className="font-bold font-sans uppercase tracking-wider text-sm">Local Confirmado</span>
                      </div>
                      <span className="bg-forest-900 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Vagas Limitadas</span>
                   </div>

                   <h3 className="font-serif text-4xl text-forest-900 mb-2">O Sonho do Artesão</h3>
                   <p className="text-forest-600 mb-8 font-serif italic">Um espaço mágico para criarmos juntas.</p>

                   <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 text-forest-800">
                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                            <Calendar className="text-rose-500" size={20} />
                        </div>
                        <div>
                            <span className="block text-xs uppercase font-bold text-stone-400">Quando</span>
                            <span className="font-serif text-lg">Sábado, 20 de Abril</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-forest-800">
                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                            <Clock className="text-rose-500" size={20} />
                        </div>
                        <div>
                            <span className="block text-xs uppercase font-bold text-stone-400">Horário</span>
                            <span className="font-serif text-lg">Das 14h às 18h</span>
                        </div>
                      </div>
                   </div>

                   <div className="bg-stone-50 p-4 rounded-lg border border-stone-100 mb-8">
                      <span className="text-xs font-bold uppercase text-forest-400 mb-2 block">O que está incluso:</span>
                      <ul className="grid grid-cols-2 gap-2">
                        <li className="flex items-center gap-2 text-sm text-forest-700 font-medium">
                            <CheckCircle2 size={14} className="text-green-600" /> Kit completo
                        </li>
                        <li className="flex items-center gap-2 text-sm text-forest-700 font-medium">
                            <CheckCircle2 size={14} className="text-green-600" /> Apostila digital
                        </li>
                        <li className="flex items-center gap-2 text-sm text-forest-700 font-medium">
                            <CheckCircle2 size={14} className="text-green-600" /> Risco exclusivo
                        </li>
                        <li className="flex items-center gap-2 text-sm text-forest-700 font-medium">
                            <CheckCircle2 size={14} className="text-green-600" /> Coffee break
                        </li>
                      </ul>
                   </div>
                </div>

                <a 
                  href="https://wa.me/5500000000000?text=Olá! Gostaria de me inscrever no Workshop no Sonho do Artesão."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block text-center bg-rose-500 text-white py-4 rounded-sm font-sans font-bold uppercase tracking-[0.2em] text-sm hover:bg-rose-600 transition-colors shadow-lg hover:shadow-rose-500/30"
                >
                    Garantir minha vaga
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Future Classes Teaser */}
        <div className="mt-16 text-center">
            <p className="text-linen/50 font-sans text-sm tracking-widest uppercase">
                Quer levar o workshop para sua cidade? 
                <a href="#contact" className="text-rose-300 hover:text-white underline ml-2 transition-colors">Entre em contato</a>
            </p>
        </div>

      </div>
    </section>
  );
};

export default Workshops;