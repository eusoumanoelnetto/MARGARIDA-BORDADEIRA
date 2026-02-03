import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão após rolar 500px (aproximadamente após o Hero)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label={t.backToTop.ariaLabel}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 p-3 rounded-full border border-forest-900/10 
        backdrop-blur-sm bg-white/40 text-forest-900 shadow-sm
        hover:bg-forest-900 hover:text-linen hover:border-transparent hover:shadow-xl hover:-translate-y-1
        transition-all duration-700 ease-out flex items-center justify-center group
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
    >
      <ArrowUp 
        size={20} 
        strokeWidth={1.5} 
        className="transform group-hover:-translate-y-0.5 transition-transform duration-300"
      />
    </button>
  );
};

export default BackToTop;