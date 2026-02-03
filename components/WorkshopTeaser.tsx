import React, { useState } from 'react';
import { MapPin, ArrowRight, Calendar, Ticket, X, Sparkles } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface WorkshopTeaserProps {
  onNavigate: () => void;
}

const WorkshopTeaser: React.FC<WorkshopTeaserProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
   const { t } = useTranslation();

  if (!isVisible) return null;

  return (
    <div 
      className="relative z-30 animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container Principal com Gradiente Premium */}
      <div 
        onClick={onNavigate}
        className="w-full bg-gradient-to-r from-forest-900 via-[#1e2b22] to-forest-900 text-linen border-y border-rose-500/20 shadow-2xl cursor-pointer group transition-all duration-500 relative overflow-hidden"
      >
        {/* Padrão de Fundo Sutil */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        
        {/* Efeito de Brilho ao passar o mouse */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          
          {/* Lado Esquerdo: Ícone e Status */}
          <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start">
            <div className="relative shrink-0">
               {/* Ícone de Ticket com animação suave */}
               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-900/50 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                  <Ticket className="text-white transform -rotate-12" size={22} />
               </div>
               {/* Badge de Notificação Pulsante */}
               <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-gold-500 border-2 border-forest-900"></span>
               </span>
            </div>
            
            <div className="flex flex-col text-left">
               <div className="flex items-center gap-2 mb-1">
                  <span className="bg-rose-500/20 text-rose-300 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border border-rose-500/20 flex items-center gap-1">
                    <Sparkles size={10} /> {t.workshopTeaser.badge}
                  </span>
               </div>
               <h3 className="font-serif text-2xl text-linen leading-none group-hover:text-rose-200 transition-colors">
                  {t.workshopTeaser.title}
               </h3>
            </div>
          </div>

          {/* Centro: Informações (Desktop) */}
          <div className="hidden md:flex items-center gap-8 border-l border-white/5 pl-8 ml-auto mr-8">
             <div className="flex flex-col">
                <span className="text-[10px] uppercase text-stone-400 tracking-widest font-sans">{t.workshopTeaser.dateLabel}</span>
                 <div className="flex items-center gap-2 text-linen/90">
                     <Calendar size={16} className="text-gold-400" />
                   <span className="font-serif text-lg">{t.workshopTeaser.dateValue}</span>
                 </div>
             </div>
             <div className="w-px h-8 bg-white/5"></div>
             <div className="flex flex-col">
                <span className="text-[10px] uppercase text-stone-400 tracking-widest font-sans">{t.workshopTeaser.locationLabel}</span>
                 <div className="flex items-center gap-2 text-linen/90">
                     <MapPin size={16} className="text-gold-400" />
                   <span className="font-serif text-lg">{t.workshopTeaser.locationValue}</span>
                 </div>
             </div>
          </div>

          {/* Lado Direito: Ações */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
             {/* Informação Mobile */}
             <div className="md:hidden flex items-center gap-3 text-xs text-stone-300">
                <span className="flex items-center gap-1"><Calendar size={12} className="text-gold-400"/> {t.workshopTeaser.mobileDate}</span>
                <span className="flex items-center gap-1"><MapPin size={12} className="text-gold-400"/> {t.workshopTeaser.mobileLocation}</span>
             </div>

             <div className="flex items-center gap-3">
                 <button className="flex items-center gap-2 bg-linen/10 hover:bg-linen text-linen hover:text-forest-900 px-6 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest border border-linen/20 hover:border-linen transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    {t.workshopTeaser.cta}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </button>
                 
                 {/* Botão de Fechar - UX Improvement */}
                 <div 
                    onClick={(e) => {
                        e.stopPropagation(); // Impede o clique no container pai
                        setIsVisible(false);
                    }}
                    className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    title={t.workshopTeaser.close}
                 >
                    <X size={18} />
                 </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkshopTeaser;