import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Home, 
  Calendar, 
  DollarSign, 
  Globe, 
  MessageCircle, 
  Key, 
  Smartphone, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Clock,
  Shield
} from 'lucide-react';

interface AirbnbRentalsPageProps {
  onNavigate: (page: string) => void;
}

export function AirbnbRentalsPage({ onNavigate }: AirbnbRentalsPageProps) {
  const features = [
    {
      icon: Globe,
      title: 'Multi-Platform Synchronization',
      description: 'Seamlessly sync your listings across Airbnb, VRBO, Booking.com, and 20+ vacation rental platforms.',
      benefits: ['Real-time calendar sync', 'Automated rate updates', 'Zero double bookings', 'Unified inbox management']
    },
    {
      icon: MessageCircle,
      title: 'Automated Guest Communication',
      description: 'Smart messaging system with automated check-in instructions, local recommendations, and guest support.',
      benefits: ['Welcome message automation', 'Check-in instruction delivery', 'Local recommendations', '24/7 automated support']
    },
    {
      icon: Key,
      title: 'Smart Access Management',
      description: 'Automated keyless entry with smart locks, access codes, and guest arrival coordination.',
      benefits: ['Smart lock integration', 'Automated access codes', 'Guest arrival notifications', 'Keyless entry management']
    },
    {
      icon: DollarSign,
      title: 'Dynamic Pricing Engine',
      description: 'AI-powered pricing optimization based on local events, seasonality, and market demand.',
      benefits: ['Event-based pricing', 'Seasonal adjustments', 'Market demand analysis', 'Revenue optimization']
    },
    {
      icon: Calendar,
      title: 'Cleaning & Maintenance',
      description: 'Coordinate cleaning schedules, maintenance tasks, and property preparation between bookings.',
      benefits: ['Automated cleaning scheduling', 'Maintenance task management', 'Turnover coordination', 'Property inspection logs']
    },
    {
      icon: Clock,
      title: 'Check-in Automation',
      description: 'Streamlined check-in process with automated guest verification and welcome procedures.',
      benefits: ['Digital guest verification', 'Automated welcome procedures', 'House rule acceptance', 'Local guide delivery']
    }
  ];

  const benefits = [
    'Perfect for individual property owners',
    'Multi-platform listing management',
    'Automated guest communication',
    'Smart pricing optimization',
    'Cleaning & maintenance coordination',
    'Keyless entry integration'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-orange-900 via-red-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/30 backdrop-blur-sm px-4 py-2 mb-8">
                <Home className="w-4 h-4 mr-2" />
                Airbnb & Vacation Rentals
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Smart Management for
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent"> Vacation Rentals</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Perfect for individual property owners and vacation rental managers. Automate guest 
                communication, synchronize across all platforms, and maximize your rental income 
                with smart pricing and seamless operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Button 
                  onClick={() => onNavigate('demo')}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-2xl px-12 py-6 text-lg font-semibold"
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
                  See Demo
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-slate-300">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNhdGlvbiUyMHJlbnRhbCUyMGhvdXNlfGVufDF8fHx8MTc1OTMxMTA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Beautiful Vacation Rental Property"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Everything You Need for Vacation Rental Success
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From listing management to guest automation, we've got all the tools you need 
              to run a successful vacation rental business with minimal effort.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
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

      {/* Platform Integration */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Integrated with All Major Platforms
            </h2>
            <p className="text-xl text-slate-600">
              Seamlessly manage your listings across all vacation rental platforms from one dashboard
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Airbnb Integration</h3>
              <p className="text-slate-600">Full Airbnb API integration with real-time sync of bookings, messages, and calendar updates.</p>
            </Card>
            
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">VRBO & Booking.com</h3>
              <p className="text-slate-600">Synchronize with VRBO, Booking.com, and other major vacation rental platforms automatically.</p>
            </Card>
            
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Direct Bookings</h3>
              <p className="text-slate-600">Create your own booking website to avoid platform fees and build direct guest relationships.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Trusted by Vacation Rental Owners
            </h2>
            <p className="text-xl text-slate-600">
              Automate your vacation rental business with smart management tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">38%</div>
              <div className="text-slate-600 font-medium">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">90%</div>
              <div className="text-slate-600 font-medium">Guest Communication Automated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">4.9★</div>
              <div className="text-slate-600 font-medium">Average Guest Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-orange-900 via-red-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Automate Your Rental?
            </Badge>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Maximize Your
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Rental Income</span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Automate your vacation rental operations and increase revenue 
              with smart pricing and seamless guest management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => onNavigate('demo')}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
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
                Talk to Specialist
              </Button>
            </div>
            
            <div className="pt-12 text-slate-400">
              <p className="text-lg">
                Free 30-day trial • No setup fees • Platform integrations included • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}