import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductSolutionsPage } from './components/ProductSolutionsPage';
import { IndependentHotelsPage } from './components/IndependentHotelsPage';
import { HotelChainsPage } from './components/HotelChainsPage';
import { ResortsPage } from './components/ResortsPage';
import { HostelsPage } from './components/HostelsPage';
import { AirbnbRentalsPage } from './components/AirbnbRentalsPage';
import { ApartmentCommunitiesPage } from './components/ApartmentCommunitiesPage';
import { FeaturesPage } from './components/FeaturesPage';
import { PricingPage } from './components/PricingPage';
import { DemoPage } from './components/DemoPage';
import { ResourcesPage } from './components/ResourcesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { LegalPage } from './components/LegalPage';
import { MobileAppPage } from './components/MobileAppPage';
import { CareersPage } from './components/CareersPage';
import { HelpCenterPage } from './components/HelpCenterPage';
import { PresentationPage } from './components/PresentationPage';
import { LoginPage } from './components/LoginPage';
import { SEO } from './components/SEO';

type PageType = 'home' | 'solutions' | 'independent-hotels' | 'hotel-chains' | 'resorts' | 'hostels' | 'airbnb-rentals' | 'apartment-communities' | 'features' | 'pricing' | 'demo' | 'resources' | 'about' | 'contact' | 'mobile-app' | 'careers' | 'help-center' | 'privacy' | 'terms' | 'cookies' | 'presentation' | 'login';

// Helper function to get page from URL path
const getPageFromPath = (path: string): PageType => {
  const page = path.replace('/', '') || 'home';
  return page as PageType;
};

// Helper function to get path from page
const getPathFromPage = (page: PageType): string => {
  return page === 'home' ? '/' : `/${page}`;
};

export default function App() {
  // Initialize page from URL on first load
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    return getPageFromPath(window.location.pathname);
  });

  // Listen for browser back/forward button clicks
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || getPageFromPath(window.location.pathname);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);

    // Set initial state if not already set
    if (!window.history.state) {
      window.history.replaceState({ page: currentPage }, '', getPathFromPage(currentPage));
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigate = (page: string) => {
    const newPage = page as PageType;
    
    // Only navigate if it's a different page
    if (newPage === currentPage) {
      return;
    }
    
    setCurrentPage(newPage);
    
    // Push new state to browser history
    const path = getPathFromPage(newPage);
    window.history.pushState({ page: newPage }, '', path);
    
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'solutions':
        return <ProductSolutionsPage onNavigate={handleNavigate} />;
      case 'independent-hotels':
        return <IndependentHotelsPage onNavigate={handleNavigate} />;
      case 'hotel-chains':
        return <HotelChainsPage onNavigate={handleNavigate} />;
      case 'resorts':
        return <ResortsPage onNavigate={handleNavigate} />;
      case 'hostels':
        return <HostelsPage onNavigate={handleNavigate} />;
      case 'airbnb-rentals':
        return <AirbnbRentalsPage onNavigate={handleNavigate} />;
      case 'apartment-communities':
        return <ApartmentCommunitiesPage onNavigate={handleNavigate} />;
      case 'features':
        return <FeaturesPage onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case 'demo':
        return <DemoPage onNavigate={handleNavigate} />;
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'mobile-app':
        return <MobileAppPage onNavigate={handleNavigate} />;
      case 'careers':
        return <CareersPage onNavigate={handleNavigate} />;
      case 'help-center':
        return <HelpCenterPage onNavigate={handleNavigate} />;
      case 'presentation':
        return <PresentationPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <LegalPage page="privacy" />;
      case 'terms':
        return <LegalPage page="terms" />;
      case 'cookies':
        return <LegalPage page="cookies" />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO metadata management */}
      <SEO page={currentPage} />
      
      {/* Hide header on login page */}
      {currentPage !== 'login' && <Header currentPage={currentPage} onNavigate={handleNavigate} />}
      <main className="flex-1">
        {renderPage()}
      </main>
      {/* Hide footer on login page */}
      {currentPage !== 'login' && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}