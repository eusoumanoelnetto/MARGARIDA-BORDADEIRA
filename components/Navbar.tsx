import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'order') => void;
  currentPage: 'home' | 'order';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define se a navbar deve ser transparente ou sólida
  // ADIÇÃO: && !isOpen -> Se o menu estiver aberto, força o modo sólido para leitura correta
  const isTransparent = !scrolled && currentPage === 'home' && !isOpen;

  const textColor = isTransparent ? 'text-linen' : 'text-forest-900';
  const subTextColor = isTransparent ? 'text-linen/90' : 'text-forest-700';
  const accentColor = isTransparent ? 'text-rose-300' : 'text-rose-500';
  const hoverColor = isTransparent ? 'hover:text-rose-300' : 'hover:text-rose-500';
  
  // Se estiver aberto, remove a transparência/blur (/95) para ficar totalmente sólido igual ao menu
  const navBackground = isTransparent 
    ? 'bg-transparent py-6' 
    : `bg-linen${isOpen ? '' : '/95'} backdrop-blur-md shadow-sm py-2`;

  const buttonClass = isTransparent 
    ? 'bg-linen text-forest-900 hover:bg-white' 
    : 'bg-forest-900 text-linen hover:bg-rose-500';

  const navLinks = [
    { name: 'O Ateliê', target: '#gallery', type: 'anchor' },
    { name: 'A Bordadeira', target: '#about', type: 'anchor' },
    { name: 'Criar Ideia', target: '#ai-assistant', type: 'anchor' },
  ];

  const handleNavigation = (e: React.MouseEvent, link: { target: string, type: string }) => {
    e.preventDefault();
    setIsOpen(false);

    if (link.type === 'page') {
      onNavigate('order');
    } else {
      onNavigate('home');
      // Pequeno delay para permitir que a Home renderize antes de rolar
      setTimeout(() => {
        const element = document.querySelector(link.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${navBackground}`}>
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
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.target}
                onClick={(e) => handleNavigation(e, link)}
                className={`font-serif text-lg ${subTextColor} ${hoverColor} hover:italic transition-all duration-300 cursor-pointer`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => onNavigate('order')}
              className={`${buttonClass} px-6 py-2 rounded-full font-serif italic text-lg transition-all duration-500 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
            >
              <ShoppingBag size={18} className={isTransparent ? 'text-forest-700' : 'text-gold-400'} />
              Encomendar
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
              className="block w-full text-center px-3 py-2 text-2xl font-serif text-forest-800 hover:text-rose-500 italic transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
           <button 
              onClick={() => {
                setIsOpen(false);
                onNavigate('order');
              }}
              className="mt-6 w-full text-center bg-forest-900 text-white px-5 py-4 rounded-xl font-serif text-xl shadow-lg flex justify-center items-center gap-2"
            >
              <ShoppingBag size={20} className="text-gold-400" />
              Fazer Orçamento
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;