import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';

interface NavbarProps {
  onNavigate: (page: 'home' | 'order' | 'workshops' | 'privacy' | 'cookies') => void;
  currentPage: 'home' | 'order' | 'workshops' | 'privacy' | 'cookies';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define se a navbar deve ser transparente ou sólida
  const isTransparent = !scrolled && currentPage === 'home' && !isOpen;

  const textColor = isTransparent ? 'text-linen' : 'text-forest-900';
  const subTextColor = isTransparent ? 'text-linen/90' : 'text-forest-700';
  const accentColor = isTransparent ? 'text-rose-300' : 'text-rose-500';
  const hoverColor = isTransparent ? 'hover:text-rose-300' : 'hover:text-rose-500';
  
  const navBackground = isTransparent 
    ? 'bg-transparent py-6' 
    : `bg-linen${isOpen ? '' : '/95'} backdrop-blur-md shadow-sm py-2`;

  const buttonClass = isTransparent 
    ? 'bg-linen text-forest-900 hover:bg-white' 
    : 'bg-forest-900 text-linen hover:bg-rose-500';

  const navLinks = [
    { name: t.navbar.atelier, target: '#gallery', type: 'anchor' },
    { 
      name: t.navbar.workshops, 
      target: 'workshops', 
      type: 'page',
      badge: true
    },
    { name: t.navbar.about, target: '#about', type: 'anchor' },
    // "Assistente IA" removido conforme solicitado
  ];

  const handleNavigation = (e: React.MouseEvent, link: { target: string, type: string }) => {
    e.preventDefault();
    setIsOpen(false);

    if (link.type === 'page') {
      if (link.target === 'workshops') {
        onNavigate('workshops');
      } else {
        onNavigate('order');
      }
    } else {
      // Se estamos em uma página que não é a home, primeiro vai pra home
      if (currentPage !== 'home') {
        onNavigate('home');
        // Pequeno timeout para permitir que a Home monte antes de rolar
        setTimeout(() => {
            const element = document.querySelector(link.target);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
      } else {
        // Se já estamos na home, só rola
        const element = document.querySelector(link.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#" onClick={handleLogoClick} className="flex flex-col group cursor-pointer">
              <span className={`font-serif text-3xl font-medium tracking-tight leading-none transition-colors duration-500 ${textColor}`}>
                Margarida
              </span>
              <span className={`font-script text-2xl -mt-2 ml-4 transition-colors duration-500 ${accentColor}`}>
                Bordada
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.target}
                onClick={(e) => handleNavigation(e, link)}
                className={`relative font-serif text-lg ${subTextColor} ${hoverColor} hover:italic transition-all duration-300 cursor-pointer ${currentPage === 'workshops' && link.target === 'workshops' ? 'text-rose-500 italic font-semibold' : ''}`}
              >
                {link.name}
                {/* Notification Badge */}
                {link.badge && (
                  <span className="absolute -top-1 -right-2 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                  </span>
                )}
              </a>
            ))}
            <LanguageSelector isTransparent={isTransparent} />
            <button 
              onClick={() => onNavigate('order')}
              className={`${buttonClass} px-8 py-2.5 rounded-full font-serif italic text-lg transition-all duration-500 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
            >
              <ShoppingBag size={18} className={isTransparent ? 'text-forest-700' : 'text-gold-400'} />
              {t.navbar.order}
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} hover:text-rose-500 focus:outline-none p-2 transition-colors duration-300`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-linen border-t border-rose-100 shadow-xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}
      >
        <div className="px-6 py-8 space-y-4 flex flex-col items-center bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.target}
              onClick={(e) => handleNavigation(e, link)}
              className="block w-full text-center px-3 py-2 text-2xl font-serif text-forest-800 hover:text-rose-500 italic transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              {link.name}
              {link.badge && (
                 <span className="inline-block w-2 h-2 bg-rose-500 rounded-full"></span>
              )}
            </a>
          ))}
          <div className="pt-2">
            <LanguageSelector isTransparent={false} />
          </div>
           <button 
              onClick={() => {
                setIsOpen(false);
                onNavigate('order');
              }}
              className="mt-6 w-full text-center bg-forest-900 text-white px-5 py-4 rounded-xl font-serif text-xl shadow-lg flex justify-center items-center gap-2"
            >
              <ShoppingBag size={20} className="text-gold-400" />
              {t.navbar.orderMobile}
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;