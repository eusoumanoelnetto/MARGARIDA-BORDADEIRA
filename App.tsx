import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import AICreativeAssistant from './components/AICreativeAssistant';
import About from './components/About';
import Contact from './components/Contact';
import OrderPage from './pages/OrderPage';
import BackToTop from './components/BackToTop';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'order'>('home');

  const handleNavigate = (page: 'home' | 'order') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-linen relative">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Gallery />
          <AICreativeAssistant />
          <About />
          <Contact />
        </>
      ) : (
        <OrderPage />
      )}
      
      <BackToTop />
    </div>
  );
}

export default App;