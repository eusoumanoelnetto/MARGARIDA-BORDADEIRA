import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AICreativeAssistant from './components/AICreativeAssistant';
import About from './components/About';
import Contact from './components/Contact';
import OrderPage from './pages/OrderPage';
import WorkshopsPage from './pages/WorkshopsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiesPage from './pages/CookiesPage';
import BackToTop from './components/BackToTop';
import WorkshopTeaser from './components/WorkshopTeaser';
import CookieConsent from './components/CookieConsent';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'order' | 'workshops' | 'privacy' | 'cookies'>('home');

  const handleNavigate = (page: 'home' | 'order' | 'workshops' | 'privacy' | 'cookies') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'order':
        return <OrderPage />;
      case 'workshops':
        return <WorkshopsPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'cookies':
        return <CookiesPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            {/* O Teaser é colocado aqui para visibilidade imediata "de cara" */}
            <WorkshopTeaser onNavigate={() => handleNavigate('workshops')} />
            <Gallery />
            <AICreativeAssistant />
            <About />
            <Contact onNavigate={handleNavigate} />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-linen relative">
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
        
        {renderPage()}
        
        {/* Footer is rendered inside Home content, or separately for pages? 
            Correction: Contact (Footer) is inside Home switch case above.
            However, other pages usually need a footer too. 
            Let's move Contact outside to be global, OR keep it per page if we want specific layouts.
            For this app structure, adding Contact to other pages makes sense for navigation.
        */}
        {currentPage !== 'home' && <Contact onNavigate={handleNavigate} />}

        <BackToTop />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}

export default App;