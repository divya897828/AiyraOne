import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Hotel, 
  BarChart4, 
  DollarSign, 
  Globe, 
  Bot, 
  Headphones, 
  Smartphone, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Shield,
  Zap,
  Users
} from 'lucide-react';

interface IndependentHotelsPageProps {
  onNavigate: (page: string) => void;
}

export function IndependentHotelsPage({ onNavigate }: IndependentHotelsPageProps) {
  const features = [
    {
      icon: Hotel,
      title: 'Property Management Dashboard',
      description: 'Centralized control of all hotel operations with intuitive interface designed for independent operators.',
      benefits: ['Real-time occupancy tracking', 'Guest check-in/out management', 'Room status updates', 'Housekeeping coordination']
    },
    {
      icon: Globe,
      title: 'Channel Management',
      description: 'Connect to 20+ OTA platforms including Booking.com, Expedia, and Airbnb with real-time synchronization.',
      benefits: ['Automated inventory updates', 'Rate management', 'Zero double bookings', 'Commission tracking']
    },
    {
      icon: DollarSign,
      title: 'Smart Pricing Engine',
      description: 'AI-powered dynamic pricing that analyzes local market conditions and competitor rates.',
      benefits: ['Automated rate adjustments', 'Revenue optimization', 'Seasonal pricing', 'Event-based pricing']
    },
    {
      icon: BarChart4,
      title: 'Built-in Business Intelligence',
      description: 'Advanced BI platform with real-time dashboards, predictive analytics, and actionable insights - included with every subscription.',
      benefits: ['Real-time performance dashboards', 'Predictive revenue analytics', 'Custom KPI tracking', 'Competitive benchmarking']
    },
    {
      icon: Bot,
      title: 'AI Chatbot & Automation',
      description: 'Built-in AI chatbot that handles guest inquiries 24/7, automates responses, and provides intelligent recommendations.',
      benefits: ['24/7 AI-powered support', 'Multi-language capabilities', 'Smart upselling suggestions', 'Automated review responses']
    },
    {
      icon: Smartphone,
      title: 'Mobile Management',
      description: 'Manage your hotel operations from anywhere with our mobile-first interface.',
      benefits: ['iOS & Android apps', 'Real-time notifications', 'Remote management', 'Staff communication']
    }
  ];

  const benefits = [
    'Built-in AI chatbot & automation included',
    'Advanced analytics & BI platform included',
    'No extra fees for premium features',
    'Dedicated hospitality expert support',
    'Easy migration from existing systems',
    'All-in-one solution, not just PMS'
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-sky-500/20 text-sky-300 border-sky-400/30 backdrop-blur-sm px-4 py-2 mb-8">
                <Hotel className="w-4 h-4 mr-2" />
                Independent Hotels
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Perfect PMS for
                <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Independent Hotels</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                More than just PMS software - Aiyra combines property management with built-in AI chatbot, 
                advanced analytics, and business intelligence. Designed specifically for independent hotels 
                who need enterprise-grade tools without the complexity or cost.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Button 
                  onClick={() => onNavigate('demo')}
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-lg font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => onNavigate('demo')}
                  variant="outline" 
                  size="lg"
                  className="border-white/70 bg-white/10 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm px-12 py-6 text-lg font-medium"
                >
                  Book Demo
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-slate-300">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3NTkzMTA4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Elegant Independent Hotel Lobby"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Everything Your Independent Hotel Needs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional-grade features designed specifically for independent hotels. 
              No unnecessary complexity, just the tools you need to succeed.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Trusted by Independent Hotels Worldwide
            </h2>
            <p className="text-xl text-slate-600">
              Empowering independent hotel owners with professional management tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-sky-600 mb-2">32%</div>
              <div className="text-slate-600 font-medium">Average Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-sky-600 mb-2">15min</div>
              <div className="text-slate-600 font-medium">Daily Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-sky-600 mb-2">99.9%</div>
              <div className="text-slate-600 font-medium">System Uptime</div>
            </div>
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
              Ready to Transform Your Hotel?
            </Badge>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Start Your Free Trial
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Today</span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform your hotel operations with Aiyra's professional management platform. 
              No setup fees, no contracts, just results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => onNavigate('demo')}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
              >
                Start Free Trial
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline" 
                size="lg"
                className="border-white/70 bg-white/15 text-white hover:bg-white/25 hover:border-white backdrop-blur-sm px-12 py-6 text-xl font-medium shadow-lg"
              >
                Speak with Expert
              </Button>
            </div>
            
            <div className="pt-12 text-slate-400">
              <p className="text-lg">
                30-day free trial • No setup fees • Cancel anytime • Dedicated support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}