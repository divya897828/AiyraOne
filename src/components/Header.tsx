import React, { useState } from 'react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown,
  Menu,
  X,
  Hotel,
  Building,
  TreePine,
  Home,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  // Check if current page is a product page
  const productPages = ['independent-hotels', 'hotel-chains', 'resorts', 'hostels', 'airbnb-rentals', 'apartment-communities'];
  const isProductPage = productPages.includes(currentPage);

  const productSections = [
    {
      title: "Hotel Management",
      items: [
        {
          id: 'independent-hotels',
          title: 'Independent Hotels',
          description: 'Professional management tools to compete with major hotel chains',
          icon: Hotel,
          action: () => onNavigate('independent-hotels')
        },
        {
          id: 'hotel-chains',
          title: 'Hotel Chains',
          description: 'Centralized management solutions for multi-property hospitality groups',
          icon: Building,
          action: () => onNavigate('hotel-chains')
        }
      ]
    },
    {
      title: "Luxury & Resort",
      items: [
        {
          id: 'resorts',
          title: 'Resorts & Luxury Properties',
          description: 'Sophisticated tools for delivering exceptional luxury guest experiences',
          icon: TreePine,
          action: () => onNavigate('resorts')
        },
        {
          id: 'hostels',
          title: 'Hostels',
          description: 'Community-focused solutions for hostels and budget accommodations',
          icon: Users,
          action: () => onNavigate('hostels')
        }
      ]
    },
    {
      title: "Rental Properties", 
      items: [
        {
          id: 'airbnb-rentals',
          title: 'Airbnb & Vacation Rentals',
          description: 'Streamlined management for vacation rental property owners',
          icon: Home,
          action: () => onNavigate('airbnb-rentals')
        },
        {
          id: 'apartments',
          title: 'Apartment Communities',
          description: 'Modern solutions for residential property and community management',
          icon: MapPin,
          action: () => onNavigate('apartment-communities')
        }
      ]
    }
  ];

  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileProductsOpen(false);
    }
  };

  const toggleMobileProducts = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  const toggleProductsPanel = () => {
    setIsProductsMenuOpen(!isProductsMenuOpen);
  };

  const handleProductClick = (action: () => void) => {
    action();
    setIsProductsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white/90 backdrop-blur-xl border-b border-slate-200/40 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button onClick={() => {
              onNavigate('home');
              setIsProductsMenuOpen(false);
            }} className="flex-shrink-0 transition-transform hover:scale-105">
              <Logo />
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Products Button */}
              <button
                onClick={toggleProductsPanel}
                className={`group flex items-center gap-1 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                  isProductPage
                    ? 'text-sky-600 bg-gradient-to-r from-sky-50/70 to-blue-50/70'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-gradient-to-r hover:from-slate-50/70 hover:to-sky-50/70'
                }`}
              >
                Products
              </button>

              {/* Regular Navigation Items */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsProductsMenuOpen(false);
                  }}
                  className={`px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-sky-600 bg-gradient-to-r from-sky-50/70 to-blue-50/70'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-gradient-to-r hover:from-slate-50/70 hover:to-sky-50/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* CTA Button & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => {
                  onNavigate('login');
                  setIsProductsMenuOpen(false);
                }}
                className="hidden sm:flex bg-white hover:bg-slate-50 text-sky-700 border-2 border-sky-600 shadow-lg font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  onNavigate('demo');
                  setIsProductsMenuOpen(false);
                }}
                className="hidden sm:flex bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white shadow-xl font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Experience Aiyra
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-slate-50 transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Products Slide-Out Panel */}
      <AnimatePresence>
        {isProductsMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsProductsMenuOpen(false)}
              className="hidden lg:block fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40"
              style={{ top: '80px' }}
            />

            {/* Slide-Out Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
              className="hidden lg:block fixed left-0 top-20 bottom-0 w-[480px] bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-slate-200">
                <h2 className="text-2xl font-black text-slate-900">Our Products</h2>
                <button
                  onClick={() => setIsProductsMenuOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-all duration-200"
                >
                  <X className="w-6 h-6 text-slate-700" />
                </button>
              </div>

              {/* Panel Content */}
              <div className="px-8 py-8 space-y-8">
                {productSections.map((section, sectionIndex) => (
                  <motion.div
                    key={sectionIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * sectionIndex }}
                    className="space-y-4"
                  >
                    {/* Section Title */}
                    <div className="flex items-center gap-2 pb-3 border-b-2 border-sky-200">
                      <div className="w-1.5 h-6 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>
                      <h3 className="font-black text-slate-900 uppercase tracking-wide text-sm">
                        {section.title}
                      </h3>
                    </div>
                    
                    {/* Section Items */}
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <motion.button
                          key={itemIndex}
                          onClick={() => handleProductClick(item.action)}
                          className="group w-full p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white hover:from-sky-50 hover:to-blue-50 transition-all duration-300 text-left border-2 border-transparent hover:border-sky-300 hover:shadow-xl"
                          whileHover={{ scale: 1.02, x: 10 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl"
                              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <item.icon className="w-7 h-7 text-white" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-slate-900 group-hover:text-sky-700 transition-colors text-base">
                                  {item.title}
                                </h4>
                                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                              </div>
                              <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm">
          <div className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              {/* Mobile Products Section */}
              <div className="mb-6">
                <button
                  onClick={toggleMobileProducts}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-left transition-all duration-200 ${
                    isProductPage
                      ? 'text-sky-600 bg-gradient-to-r from-sky-50/70 to-blue-50/70'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-gradient-to-r hover:from-slate-50/70 hover:to-sky-50/70'
                  }`}
                >
                  <span className="text-lg">Products</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileProductsOpen && (
                  <div className="mt-4 space-y-4 pl-2">
                    {productSections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-3">
                        <h4 className="text-sm font-black text-slate-600 uppercase tracking-wide px-2 pb-2 border-b border-slate-200">
                          {section.title}
                        </h4>
                        {section.items.map((item, itemIndex) => (
                          <button
                            key={itemIndex}
                            onClick={() => {
                              item.action();
                              setIsMobileMenuOpen(false);
                              setIsMobileProductsOpen(false);
                            }}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-sky-50/80 hover:to-blue-50/80 transition-all duration-200 text-left w-full"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                              <item.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                              <div className="text-xs text-slate-600 mt-1">{item.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-2 mb-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full px-4 py-3 rounded-xl font-bold text-left transition-all duration-200 ${
                      currentPage === item.id
                        ? 'text-sky-600 bg-gradient-to-r from-sky-50/70 to-blue-50/70'
                        : 'text-slate-700 hover:text-sky-600 hover:bg-gradient-to-r hover:from-slate-50/70 hover:to-sky-50/70'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="space-y-3">
                <Button
                  onClick={() => {
                    onNavigate('login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-white hover:bg-slate-50 text-sky-700 border-2 border-sky-600 shadow-lg font-bold py-4 rounded-xl transition-all duration-300"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    onNavigate('demo');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white shadow-xl font-bold py-4 rounded-xl transition-all duration-300"
                >
                  Experience Aiyra
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}