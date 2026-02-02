import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('margarida-cookie-consent');
    if (!consent) {
      // Pequeno delay para animação suave na entrada
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('margarida-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center pointer-events-none">
      <div className="bg-linen/95 backdrop-blur-md border border-rose-200 shadow-2xl p-6 rounded-sm max-w-2xl w-full flex flex-col md:flex-row items-center gap-6 pointer-events-auto animate-fade-in-up">
        <div className="p-3 bg-white rounded-full shadow-sm shrink-0">
          <Cookie className="text-rose-500" size={24} />
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <p className="font-serif text-forest-900 text-lg leading-tight">
            Usamos cookies para deixar sua experiência mais doce.
          </p>
          <p className="font-sans text-xs text-forest-600 mt-2">
            Ao continuar navegando, você concorda com nossa Política de Privacidade e o uso de cookies para melhorar o desempenho do site.
          </p>
        </div>

        <button
          onClick={handleAccept}
          className="whitespace-nowrap bg-forest-900 text-linen px-8 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:bg-rose-500 transition-colors shadow-lg hover:shadow-rose-500/20"
        >
          Aceitar e Continuar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;