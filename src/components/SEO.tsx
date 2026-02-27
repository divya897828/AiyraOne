import { useEffect } from 'react';

interface SEOProps {
  page: string;
}

interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: 'AiyraOne - AI-Powered Hotel PMS Software | Property Management System for Hotels',
    description: 'AiyraOne provides intelligent hotel property management software (PMS) with built-in AI chatbot, advanced analytics, and BI solutions. Perfect for independent hotels, hotel chains, resorts, hostels, Airbnb rentals, and apartment communities. Transform your hospitality operations with cutting-edge technology.',
    keywords: 'AiyraOne, Aiyra, PMS software, hotel management software, property management system, hotel PMS, AI hotel software, hotel chatbot, hospitality technology, hotel analytics, hotel BI, independent hotel software, hotel chain management, resort management software, hostel management, Airbnb management, vacation rental software, apartment management system',
    ogTitle: 'AiyraOne - AI-Powered Property Management System for Hotels',
    ogDescription: 'Transform your hotel operations with AiyraOne\'s intelligent PMS software featuring AI chatbot, analytics, and BI solutions.'
  },
  'independent-hotels': {
    title: 'Independent Hotels PMS Software | AiyraOne Hotel Management System',
    description: 'Streamline your independent hotel operations with AiyraOne\'s comprehensive PMS software. Features AI-powered guest communication, revenue management, automated operations, and real-time analytics designed specifically for independent properties.',
    keywords: 'independent hotel software, independent hotel PMS, boutique hotel management, small hotel software, AiyraOne independent hotels, hotel property management, single property management',
    ogTitle: 'Independent Hotels PMS - AiyraOne',
    ogDescription: 'Purpose-built PMS software for independent hotels with AI chatbot, revenue management, and operational automation.'
  },
  'hotel-chains': {
    title: 'Hotel Chain Management Software | Multi-Property PMS | AiyraOne',
    description: 'Manage multiple properties effortlessly with AiyraOne\'s hotel chain management software. Centralized control, standardized operations, multi-property analytics, and AI-powered guest engagement across all your locations.',
    keywords: 'hotel chain software, multi-property PMS, hotel chain management, centralized hotel management, AiyraOne hotel chains, multiple property management, hotel group software',
    ogTitle: 'Hotel Chain Management Software - AiyraOne',
    ogDescription: 'Powerful multi-property PMS for hotel chains with centralized management and unified analytics.'
  },
  resorts: {
    title: 'Resort Management Software | Luxury Property PMS | AiyraOne',
    description: 'Elevate your resort and luxury property operations with AiyraOne\'s premium PMS software. Comprehensive amenity management, guest experience personalization, spa & dining integration, and concierge automation.',
    keywords: 'resort management software, luxury hotel PMS, resort property management, spa management, amenity management, AiyraOne resorts, high-end hotel software',
    ogTitle: 'Resort & Luxury Property Management - AiyraOne',
    ogDescription: 'Premium PMS for resorts and luxury properties with advanced amenity management and personalized guest experiences.'
  },
  hostels: {
    title: 'Hostel Management Software | Budget Property PMS | AiyraOne',
    description: 'Optimize your hostel operations with AiyraOne\'s affordable PMS software. Features dorm management, social space coordination, backpacker-friendly booking, and community engagement tools.',
    keywords: 'hostel management software, hostel PMS, budget accommodation software, dorm management, backpacker hostel software, AiyraOne hostels',
    ogTitle: 'Hostel Management Software - AiyraOne',
    ogDescription: 'Streamlined PMS for hostels with dorm management, social features, and budget-friendly operations.'
  },
  'airbnb-rentals': {
    title: 'Vacation Rental Management Software | Airbnb PMS | AiyraOne',
    description: 'Manage your vacation rentals and Airbnb properties efficiently with AiyraOne\'s PMS software. Channel management integration, automated guest communication, cleaning schedules, and multi-platform listing management.',
    keywords: 'vacation rental software, Airbnb management, short-term rental PMS, rental property management, AiyraOne vacation rentals, VRBO management, channel manager',
    ogTitle: 'Vacation Rental & Airbnb Management - AiyraOne',
    ogDescription: 'Complete PMS for vacation rentals with channel management, automation, and multi-platform integration.'
  },
  'apartment-communities': {
    title: 'Apartment Community Management Software | Residential PMS | AiyraOne',
    description: 'Modernize your apartment community management with AiyraOne\'s residential PMS software. Tenant communication, lease management, maintenance tracking, amenity booking, and resident portal.',
    keywords: 'apartment management software, residential property management, apartment PMS, tenant management, AiyraOne apartments, community management, multifamily housing software',
    ogTitle: 'Apartment Community Management - AiyraOne',
    ogDescription: 'Comprehensive PMS for apartment communities with tenant management and amenity coordination.'
  },
  features: {
    title: 'Hotel PMS Features | AI Chatbot, Analytics & Automation | AiyraOne',
    description: 'Explore AiyraOne\'s comprehensive PMS features: AI-powered 24/7 guest chatbot, real-time analytics & BI dashboards, revenue management, automated operations, channel management, mobile app, and seamless integrations.',
    keywords: 'hotel PMS features, AI hotel chatbot, hotel analytics software, hotel automation, revenue management, channel manager, hotel BI dashboard, AiyraOne features',
    ogTitle: 'AiyraOne PMS Features - AI, Analytics & Automation',
    ogDescription: 'Discover powerful features: AI chatbot, advanced analytics, revenue management, and operational automation.'
  },
  pricing: {
    title: 'Hotel PMS Software Pricing | Affordable Plans | AiyraOne',
    description: 'Transparent and flexible pricing for AiyraOne\'s hotel PMS software. Choose the perfect plan for your property with scalable options for independent hotels, hotel chains, resorts, and vacation rentals. No hidden fees.',
    keywords: 'hotel PMS pricing, hotel software cost, PMS pricing plans, affordable hotel software, AiyraOne pricing, hotel management software rates',
    ogTitle: 'AiyraOne PMS Pricing Plans',
    ogDescription: 'Flexible and transparent pricing plans for hotels of all sizes. Find the perfect fit for your property.'
  },
  about: {
    title: 'About AiyraOne | Leading Hotel PMS Software Provider',
    description: 'Learn about AiyraOne, a leading provider of AI-powered hotel property management software. Our mission is to transform hospitality operations through intelligent technology, helping hotels worldwide improve efficiency, guest satisfaction, and revenue.',
    keywords: 'about AiyraOne, hospitality technology company, hotel software provider, PMS company, AiyraOne team, hotel management innovation',
    ogTitle: 'About AiyraOne - Transforming Hospitality Technology',
    ogDescription: 'Leading provider of AI-powered PMS software, helping hotels worldwide improve operations and guest experiences.'
  },
  contact: {
    title: 'Contact AiyraOne | Get Help with Hotel PMS Software',
    description: 'Contact AiyraOne for support, sales inquiries, or demo requests. Call +1 (530) 366-1683 or email Support@aiyraone.com. Our expert team is ready to help you transform your hotel operations.',
    keywords: 'contact AiyraOne, hotel PMS support, AiyraOne contact, hotel software help, PMS customer service',
    ogTitle: 'Contact AiyraOne Support',
    ogDescription: 'Get in touch with our team. Phone: +1 (530) 366-1683 | Email: Support@aiyraone.com'
  },
  demo: {
    title: 'Request a Demo | See AiyraOne Hotel PMS in Action',
    description: 'Schedule a personalized demo of AiyraOne\'s hotel PMS software. See how our AI-powered platform can transform your property management, increase revenue, and enhance guest satisfaction. Book your free demo today.',
    keywords: 'hotel PMS demo, AiyraOne demo, hotel software demonstration, PMS trial, free hotel software demo',
    ogTitle: 'Request AiyraOne PMS Demo',
    ogDescription: 'Schedule your personalized demo and see how AiyraOne can transform your hotel operations.'
  },
  resources: {
    title: 'Resources & Guides | Hotel Management Tips | AiyraOne',
    description: 'Access AiyraOne\'s resources including hotel management guides, industry insights, PMS tutorials, best practices, and hospitality technology trends to help you succeed.',
    keywords: 'hotel management resources, hospitality guides, PMS tutorials, hotel industry insights, AiyraOne resources',
    ogTitle: 'Hotel Management Resources - AiyraOne',
    ogDescription: 'Expert guides, tutorials, and insights for hotel management and hospitality technology.'
  },
  'mobile-app': {
    title: 'AiyraOne Mobile App | Manage Your Hotel On-The-Go',
    description: 'Download the AiyraOne mobile app for iOS and Android. Manage your hotel operations anywhere, anytime with real-time updates, guest communication, and key performance metrics at your fingertips.',
    keywords: 'AiyraOne mobile app, hotel management app, PMS mobile app, hotel software app, iOS Android hotel app',
    ogTitle: 'AiyraOne Mobile App',
    ogDescription: 'Manage your hotel operations on-the-go with our powerful mobile app for iOS and Android.'
  },
  careers: {
    title: 'Careers at AiyraOne | Join Our Hospitality Tech Team',
    description: 'Explore career opportunities at AiyraOne. Join our team of innovators transforming the hospitality industry with cutting-edge PMS technology and AI solutions.',
    keywords: 'AiyraOne careers, hospitality tech jobs, hotel software jobs, PMS company careers',
    ogTitle: 'Careers at AiyraOne',
    ogDescription: 'Join our team and help transform hospitality technology. Explore open positions.'
  },
  'help-center': {
    title: 'AiyraOne Help Center | PMS Software Support & Guides',
    description: 'Find answers to your questions in the AiyraOne Help Center. Access tutorials, FAQs, troubleshooting guides, and support documentation for our hotel PMS software.',
    keywords: 'AiyraOne help, PMS support, hotel software help center, user guides, troubleshooting',
    ogTitle: 'AiyraOne Help Center',
    ogDescription: 'Get help with AiyraOne PMS software. Access guides, FAQs, and support resources.'
  },
  login: {
    title: 'Login to AiyraOne PMS | Access Your Property Management System',
    description: 'Sign in to your AiyraOne account to access your hotel property management system. Manage reservations, guests, operations, and analytics from your secure dashboard.',
    keywords: 'AiyraOne login, PMS login, hotel software login, property management login',
    ogTitle: 'Login - AiyraOne PMS',
    ogDescription: 'Access your AiyraOne property management system dashboard.'
  },
  solutions: {
    title: 'Hotel PMS Solutions | AiyraOne Property Management Software',
    description: 'Discover AiyraOne\'s comprehensive PMS solutions for all property types including independent hotels, hotel chains, resorts, hostels, vacation rentals, and apartment communities.',
    keywords: 'hotel PMS solutions, property management solutions, hospitality software, AiyraOne solutions',
    ogTitle: 'AiyraOne PMS Solutions',
    ogDescription: 'Complete property management solutions for hotels, resorts, vacation rentals, and more.'
  },
  privacy: {
    title: 'Privacy Policy | AiyraOne',
    description: 'Read AiyraOne\'s privacy policy to understand how we collect, use, and protect your personal information.',
    keywords: 'AiyraOne privacy policy, data protection, privacy',
    ogTitle: 'Privacy Policy - AiyraOne',
    ogDescription: 'Learn about how AiyraOne protects your privacy and data.'
  },
  terms: {
    title: 'Terms of Service | AiyraOne',
    description: 'Review AiyraOne\'s terms of service and conditions for using our hotel PMS software and services.',
    keywords: 'AiyraOne terms, terms of service, legal terms',
    ogTitle: 'Terms of Service - AiyraOne',
    ogDescription: 'Terms and conditions for using AiyraOne services.'
  },
  cookies: {
    title: 'Cookie Policy | AiyraOne',
    description: 'Learn about how AiyraOne uses cookies to improve your experience on our website.',
    keywords: 'AiyraOne cookies, cookie policy',
    ogTitle: 'Cookie Policy - AiyraOne',
    ogDescription: 'Information about how AiyraOne uses cookies.'
  },
  presentation: {
    title: 'AiyraOne Presentation | Hotel PMS Software Overview',
    description: 'View a comprehensive presentation of AiyraOne\'s hotel property management system and its powerful features.',
    keywords: 'AiyraOne presentation, PMS overview, hotel software presentation',
    ogTitle: 'AiyraOne PMS Presentation',
    ogDescription: 'Comprehensive overview of AiyraOne\'s property management system.'
  }
};

export function SEO({ page }: SEOProps) {
  useEffect(() => {
    const metadata = pageMetadata[page] || pageMetadata.home;
    
    // Update document title
    document.title = metadata.title;
    
    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update standard meta tags
    setMetaTag('description', metadata.description);
    setMetaTag('keywords', metadata.keywords);
    setMetaTag('author', 'AiyraOne');
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');
    setMetaTag('bingbot', 'index, follow');
    setMetaTag('language', 'English');
    setMetaTag('revisit-after', '7 days');
    setMetaTag('distribution', 'global');
    setMetaTag('rating', 'general');
    
    // Viewport and mobile optimization
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0';
      document.head.appendChild(viewportMeta);
    }

    // Add manifest link for PWA support
    let manifestLink = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;
    if (!manifestLink) {
      manifestLink = document.createElement('link');
      manifestLink.rel = 'manifest';
      manifestLink.href = '/manifest.json';
      document.head.appendChild(manifestLink);
    }

    // Add apple-touch-icon for iOS
    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.href = '/icon-180x180.png';
      document.head.appendChild(appleTouchIcon);
    }

    // Add favicon
    let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/png';
      favicon.href = '/favicon.png';
      document.head.appendChild(favicon);
    }

    // Open Graph tags for social media
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', 'AiyraOne', true);
    setMetaTag('og:title', metadata.ogTitle || metadata.title, true);
    setMetaTag('og:description', metadata.ogDescription || metadata.description, true);
    setMetaTag('og:url', `https://aiyraone.com${page === 'home' ? '' : `/${page}`}`, true);
    setMetaTag('og:locale', 'en_US', true);
    setMetaTag('og:image', 'https://aiyraone.com/og-image.jpg', true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:image:alt', 'AiyraOne - AI-Powered Hotel PMS Software', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@AiyraOne');
    setMetaTag('twitter:creator', '@AiyraOne');
    setMetaTag('twitter:title', metadata.ogTitle || metadata.title);
    setMetaTag('twitter:description', metadata.ogDescription || metadata.description);
    setMetaTag('twitter:image', 'https://aiyraone.com/twitter-image.jpg');
    setMetaTag('twitter:image:alt', 'AiyraOne - AI-Powered Hotel PMS Software');

    // Additional SEO tags
    setMetaTag('theme-color', '#0ea5e9'); // Sky blue from your color scheme
    setMetaTag('msapplication-TileColor', '#0ea5e9');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    setMetaTag('apple-mobile-web-app-title', 'AiyraOne');
    setMetaTag('application-name', 'AiyraOne');
    setMetaTag('msapplication-tooltip', 'AiyraOne Hotel PMS Software');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://aiyraone.com${page === 'home' ? '' : `/${page}`}`;

    // JSON-LD Structured Data for rich snippets
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'AiyraOne',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Property Management System',
      operatingSystem: 'Web, iOS, Android',
      description: 'AI-powered hotel property management system with built-in chatbot, analytics, and BI solutions for hotels, resorts, vacation rentals, and apartment communities.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Contact for pricing'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '150',
        bestRating: '5',
        worstRating: '1'
      },
      publisher: {
        '@type': 'Organization',
        name: 'AiyraOne',
        url: 'https://aiyraone.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://aiyraone.com/logo.png'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-530-366-1683',
          contactType: 'Customer Support',
          email: 'Support@aiyraone.com',
          areaServed: 'Worldwide',
          availableLanguage: ['English']
        },
        sameAs: [
          'https://www.linkedin.com/company/aiyraone',
          'https://twitter.com/aiyraone',
          'https://facebook.com/aiyraone'
        ]
      },
      featureList: [
        'AI-Powered Guest Chatbot',
        'Real-time Analytics & BI',
        'Revenue Management',
        'Channel Management',
        'Mobile App',
        'Automated Operations',
        'Multi-Property Support'
      ]
    };

    // Organization Schema for home page
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AiyraOne',
      alternateName: 'Aiyra',
      url: 'https://aiyraone.com',
      logo: 'https://aiyraone.com/logo.png',
      description: 'Leading provider of AI-powered property management software for the hospitality industry',
      telephone: '+1-530-366-1683',
      email: 'Support@aiyraone.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-530-366-1683',
        contactType: 'Customer Support',
        email: 'Support@aiyraone.com',
        areaServed: 'Worldwide',
        availableLanguage: 'English'
      }
    };

    // Add or update structured data
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    
    const schemas = page === 'home' 
      ? [structuredData, organizationSchema] 
      : [structuredData];
    
    scriptTag.textContent = JSON.stringify(schemas);

  }, [page]);

  return null;
}