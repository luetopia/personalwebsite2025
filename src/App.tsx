import React, { useEffect } from 'react';
import { preloadCriticalResources, optimizeFontLoading } from './utils/lazyLoad';
import LazySection from './components/LazySection';
import Header from './components/Header';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Qualifications from './components/Qualifications';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Preload critical resources
    preloadCriticalResources();
    optimizeFontLoading();
    
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a small delay to ensure smooth scrolling after page renders
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Handle hash on initial load
    handleHashChange();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <LazySection>
          <Research />
        </LazySection>
        <LazySection>
          <Publications />
        </LazySection>
        <LazySection>
          <Teaching />
        </LazySection>
        <LazySection>
          <Qualifications />
        </LazySection>
        <LazySection>
          <CallToAction />
        </LazySection>
      </main>
      <Footer />
    </div>
  );
}

export default App;