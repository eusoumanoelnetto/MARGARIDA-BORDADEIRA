import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

interface LanguageSelectorProps {
  isTransparent?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isTransparent = false }) => {
  const { language, setLanguage } = useLanguage();
  
  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'pt', name: 'PT', flag: '🇧🇷' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'es', name: 'ES', flag: '🇪🇸' },
  ];

  const containerClass = isTransparent
    ? 'bg-white/5 border-linen/20 hover:bg-white/10'
    : 'bg-forest-900/10 border-forest-900/20 hover:bg-forest-900/20';

  const activeClass = isTransparent
    ? 'bg-rose-500/30 text-rose-300 border-rose-400'
    : 'bg-rose-500 text-white border-rose-600';

  const inactiveClass = isTransparent
    ? 'text-linen/70 hover:text-linen'
    : 'text-forest-700 hover:text-forest-900';

  return (
    <div className={`flex items-center gap-1 px-3 py-2 rounded-full border backdrop-blur-sm transition-colors ${containerClass}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 rounded-md text-xs font-medium transition-all ${
            language === lang.code
              ? `${activeClass} border`
              : inactiveClass
          }`}
          title={lang.name}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
