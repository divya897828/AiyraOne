import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Hotel, 
  Building, 
  Home, 
  TreePine, 
  Users, 
  MapPin, 
  Smartphone,
  BarChart4,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield
} from 'lucide-react';

interface ProductSolutionsPageProps {
  onNavigate: (page: string) => void;
}

export function ProductSolutionsPage({ onNavigate }: ProductSolutionsPageProps) {
  const solutions = [
    {
      icon: Hotel,
      title: 'Independent Hotels',
      description: 'Professional management tools to compete with major hotel chains and maximize revenue potential.',
      features: ['AI Revenue Management', 'Direct Booking Engine', 'Guest Communication Hub', 'Performance Analytics'],
      color: 'from-sky-500 to-blue-600',
      route: 'independent-hotels'
    },
    {
      icon: Building,
      title: 'Hotel Chains',
      description: 'Centralized management solutions for multi-property hospitality groups with brand consistency.',
      features: ['Multi-Property Dashboard', 'Centralized Operations', 'Brand Standards', 'Group Analytics'],
      color: 'from-sky-500 to-blue-600',
      route: 'hotel-chains'
    },
    {
      icon: TreePine,
      title: 'Resorts & Luxury Properties',
      description: 'Sophisticated tools for delivering exceptional luxury guest experiences and premium service.',
      features: ['Luxury Guest Services', 'Activity Management', 'Concierge Tools', 'Premium Analytics'],
      color: 'from-sky-500 to-blue-600',
      route: 'resorts'
    },
    {
      icon: Users,
      title: 'Hostels',
      description: 'Community-focused solutions for hostels and budget accommodations with social features.',
      features: ['Bed-Level Management', 'Community Features', 'Budget Optimization', 'Social Integration'],
      color: 'from-sky-500 to-blue-600',
      route: 'hostels'
    },
    {
      icon: Home,
      title: 'Airbnb & Vacation Rentals',
      description: 'Streamlined management for vacation rental property owners and managers.',
      features: ['Multi-Platform Sync', 'Automated Guest Communication', 'Check-in Automation', 'Revenue Optimization'],
      color: 'from-sky-500 to-blue-600',
      route: 'airbnb-rentals'
    },
    {
      icon: MapPin,
      title: 'Apartment Communities',
      description: 'Modern solutions for residential property and community management.',
      features: ['Resident Portal', 'Lease Management', 'Community Engagement', 'Maintenance Coordination'],
      color: 'from-sky-500 to-blue-600',
      route: 'apartment-communities'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-sky-500/20 text-sky-300 border-sky-400/30 backdrop-blur-sm px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Complete Hospitality Solutions
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            AiyraOne Solutions for Every
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Property Type</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            From independent hotels to vacation rentals, resort chains to apartment communities – 
            AiyraOne provides tailored solutions that maximize revenue, streamline operations, and deliver exceptional guest experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => onNavigate('demo')}
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-lg font-semibold"
            >
              Find Your Solution
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => onNavigate('contact')}
              variant="outline" 
              size="lg"
              className="border-white/70 bg-white/10 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm px-12 py-6 text-lg font-medium"
            >
              Speak with an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Property Solutions Grid */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Built for Your Business Model
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each solution is specifically designed and optimized for different types of hospitality businesses, 
              ensuring you get exactly what you need to maximize your operational efficiency and revenue potential.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-2xl transition-all duration-300 group border-2 border-slate-200/60 bg-white hover:border-sky-200 cursor-pointer" 
                onClick={() => onNavigate(solution.route)}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-700 transition-colors duration-300">{solution.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{solution.description}</p>
                    
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-sky-600 font-medium group-hover:text-sky-700 transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Badge className="bg-sky-500/20 text-sky-300 border-sky-400/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </Badge>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Find Your Perfect
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Solution</span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let our experts help you choose the right AiyraOne solution for your business. 
              Get personalized recommendations and see how we can transform your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => onNavigate('demo')}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
              >
                Schedule a Demo
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline" 
                size="lg"
                className="border-white/70 bg-white/15 text-white hover:bg-white/25 hover:border-white backdrop-blur-sm px-12 py-6 text-xl font-medium shadow-lg"
              >
                Contact Sales
              </Button>
            </div>
            
            <div className="pt-12 flex items-center justify-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-sky-400" />
                <span className="font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-sky-400" />
                <span className="font-medium">Quick Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}