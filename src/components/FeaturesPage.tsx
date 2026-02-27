import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import dynamicPricingImage from 'figma:asset/1e72b6c274d176a883aa215dcec172b90c182a99.png';
import analyticsImage from 'figma:asset/1d020e346e38be538206a368bb50e03d5fd34c39.png';
import otaChannelImage from 'figma:asset/332cc77132705ece251a7aa25a142fb4b7046cf5.png';
import aiAssistantImage from 'figma:asset/8d778687730bf3832c9eadb361ef75e147edc704.png';
import revenueManagementImage from 'figma:asset/0cb5311af692658f686ed4a67c5d4c06eeafb8c3.png';
import multiPropertyImage from 'figma:asset/16dbc307cae8e8b6d5ebfe73722e578851b3b29e.png';
import mobileAppImage from 'figma:asset/7c3bcf7d26ea54adef40cc650747fcd6db2dd8d2.png';
import supportImage from 'figma:asset/513b40f30692d420b995634b00c8ad86d1a118e0.png';
import { 
  Building2, 
  BarChart3, 
  DollarSign, 
  Globe2, 
  TrendingUp, 
  MessageCircle, 
  Smartphone, 
  Phone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface FeaturesPageProps {
  onNavigate: (page: string) => void;
}

export function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const features = [
    {
      icon: Building2,
      title: 'Multi-Property Management',
      subtitle: 'Centralized Control for All Your Hotels',
      description: 'Manage all your hotels from a single, cloud-based dashboard. Assign tasks, monitor performance, and scale easily across unlimited properties. Real-time synchronization ensures you never miss a beat.',
      image: multiPropertyImage,
      benefits: [
        'Unified dashboard for all properties',
        'Real-time property status updates',
        'Centralized staff task assignment',
        'Cross-property performance comparison'
      ]
    },
    {
      icon: BarChart3,
      title: 'Live Analytics Dashboard',
      subtitle: 'Data-Driven Decisions in Real-Time',
      description: 'Track occupancy, RevPAR, bookings, cancellations, and revenue in real-time with visual, exportable KPIs. Make informed decisions with comprehensive analytics and forecasting tools.',
      image: analyticsImage,
      benefits: [
        'Real-time occupancy tracking',
        'Revenue per available room (RevPAR)',
        'Booking conversion analytics',
        'Exportable performance reports'
      ]
    },
    {
      icon: DollarSign,
      title: 'Dynamic Pricing Engine',
      subtitle: 'Maximize Revenue with Smart Pricing',
      description: 'Automatically adjust rates based on demand, seasonality, competition, and local events — maximize every booking. Our AI analyzes market conditions 24/7 to optimize your pricing strategy.',
      image: dynamicPricingImage,
      benefits: [
        'AI-powered price optimization',
        'Competitor analysis integration',
        'Seasonal demand forecasting',
        'Event-based pricing adjustments'
      ]
    },
    {
      icon: Globe2,
      title: 'OTA Channel Manager',
      subtitle: 'Connect with 50+ Booking Platforms',
      description: 'Synchronize availability and pricing across Booking.com, Airbnb, Expedia, and 50+ OTAs. Eliminate double bookings and maximize your online presence with automated inventory management.',
      image: otaChannelImage,
      benefits: [
        'Real-time inventory synchronization',
        'Automated rate distribution',
        'Zero double bookings',
        'Booking.com, Airbnb, Expedia integration'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Management',
      subtitle: 'Advanced Analytics for Profit Growth',
      description: 'Forecast trends, monitor performance, and increase profitability with advanced revenue tools. Identify opportunities, track KPIs, and make strategic decisions that drive growth.',
      image: revenueManagementImage,
      benefits: [
        'Revenue forecasting models',
        'Profitability analysis',
        'Market trend insights',
        'Performance benchmarking'
      ]
    },
    {
      icon: MessageCircle,
      title: 'AI Assistant (Chatbot)',
      subtitle: 'Intelligent Support for Staff and Guests',
      description: 'Let AI answer FAQs, recommend actions, and assist hotel staff with automated insights. Provide 24/7 guest support while reducing workload on your team.',
      image: aiAssistantImage,
      benefits: [
        '24/7 automated guest support',
        'Smart recommendations for staff',
        'Multi-language capabilities',
        'Integration with booking system'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      subtitle: 'Manage Your Hotel from Anywhere',
      description: 'Manage bookings, monitor performance, and communicate with staff — right from your phone. iOS and Android apps keep you connected to your business wherever you are.',
      image: mobileAppImage,
      benefits: [
        'iOS and Android native apps',
        'Real-time notifications',
        'Offline mode capabilities',
        'Staff communication tools'
      ]
    },
    {
      icon: Phone,
      title: '24/7 Support',
      subtitle: 'Expert Help When You Need It Most',
      description: 'Live chat, email, and phone support — always available when you need it most. Our hospitality experts understand your business and provide personalized assistance.',
      image: supportImage,
      benefits: [
        'Live chat support',
        'Phone and email assistance',
        'Hospitality industry experts',
        'Priority support for enterprise'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-gray-900 mb-6">
            Powerful Features for 
            <span className="text-sky-600"> Modern Properties</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to streamline operations, maximize revenue, and deliver exceptional guest experiences.
          </p>
          <Button 
            onClick={() => onNavigate('demo')}
            size="lg"
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
          >
            Book a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image - Left on even indexes, Right on odd indexes */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Card className="p-4 shadow-2xl border-slate-200">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </Card>
                </div>
                
                {/* Text - Right on even indexes, Left on odd indexes */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl text-gray-900">{feature.title}</h2>
                      <p className="text-lg text-sky-600">{feature.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600">{feature.description}</p>
                  
                  <div className="grid gap-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-white mb-6">Ready to See These Features in Action?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a personalized demo and discover how AiyraOne can transform your hotel operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('demo')}
              size="lg"
              className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4"
            >
              Book Your Free Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => onNavigate('pricing')}
              variant="outline" 
              size="lg"
              className="border-white/70 bg-white/15 text-white hover:bg-white/25 hover:border-white backdrop-blur-sm px-8 py-4 shadow-lg"
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}