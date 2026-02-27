import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Users, 
  Bed, 
  DollarSign, 
  Globe, 
  MessageCircle, 
  Calendar, 
  Smartphone, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Coffee,
  Wifi
} from 'lucide-react';

interface HostelsPageProps {
  onNavigate: (page: string) => void;
}

export function HostelsPage({ onNavigate }: HostelsPageProps) {
  const features = [
    {
      icon: Bed,
      title: 'Bed-Level Management',
      description: 'Manage individual beds in shared dormitories with precise inventory control and bed assignment system.',
      benefits: ['Individual bed tracking', 'Dormitory room management', 'Bed assignment automation', 'Occupancy optimization']
    },
    {
      icon: Users,
      title: 'Guest Community Features',
      description: 'Foster social connections with community boards, event planning, and guest interaction tools.',
      benefits: ['Social community boards', 'Group activity planning', 'Guest matching system', 'Local recommendations']
    },
    {
      icon: DollarSign,
      title: 'Budget-Friendly Pricing',
      description: 'Dynamic pricing optimized for budget travelers with special rates for long-term stays and groups.',
      benefits: ['Long-stay discounts', 'Group booking rates', 'Seasonal pricing', 'Student discounts']
    },
    {
      icon: Globe,
      title: 'Backpacker Channel Integration',
      description: 'Connect with specialized backpacker and budget travel booking platforms and channels.',
      benefits: ['Hostelworld integration', 'Booking.com hostel rates', 'Backpacker platforms', 'Youth travel channels']
    },
    {
      icon: Calendar,
      title: 'Events & Activities',
      description: 'Plan and manage hostel events, walking tours, pub crawls, and social activities for guests.',
      benefits: ['Event calendar management', 'Activity booking system', 'Tour coordination', 'Social event planning']
    },
    {
      icon: Coffee,
      title: 'Common Area Management',
      description: 'Optimize shared spaces like kitchens, lounges, and work areas with usage tracking and maintenance.',
      benefits: ['Common space scheduling', 'Kitchen usage tracking', 'Maintenance coordination', 'Amenity management']
    }
  ];

  const benefits = [
    'Affordable pricing for budget properties',
    'Bed-level inventory management',
    'Social community features',
    'Backpacker platform integration',
    'Simple, intuitive interface',
    'Perfect for young travelers'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-violet-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 backdrop-blur-sm px-4 py-2 mb-8">
                <Users className="w-4 h-4 mr-2" />
                Hostels & Budget Accommodations
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Smart Hostel
                <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-pink-600 bg-clip-text text-transparent"> Management System</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Streamlined management solution designed specifically for hostels and budget accommodations. 
                Manage bed-level inventory, foster guest communities, and optimize operations for 
                the modern backpacker experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Button 
                  onClick={() => onNavigate('demo')}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-2xl px-12 py-6 text-lg font-semibold"
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
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3N0ZWwlMjBiZWRzJTIwZG9ybWl0b3J5fGVufDF8fHx8MTc1OTMxMTAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Hostel Dormitory with Bunk Beds"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-violet-600/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Built for Modern Hostel Operations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to run a successful hostel. From bed-level inventory management 
              to community building tools that create memorable experiences for travelers.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
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

      {/* Hostel-Specific Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Hostel-Specific Features
            </h2>
            <p className="text-xl text-slate-600">
              Tools designed specifically for the unique needs of hostel and budget accommodation operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-6">
                <Bed className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Bed Management</h3>
              <p className="text-slate-600">Individual bed tracking in shared dormitories with automated assignment and availability management.</p>
            </Card>
            
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Guest Community</h3>
              <p className="text-slate-600">Social features to help travelers connect, share experiences, and participate in hostel activities.</p>
            </Card>
            
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-6">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Digital Services</h3>
              <p className="text-slate-600">WiFi management, digital check-in kiosks, and mobile-first guest services for tech-savvy travelers.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Trusted by Hostels Worldwide
            </h2>
            <p className="text-xl text-slate-600">
              Streamline your hostel operations with smart management tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">85%</div>
              <div className="text-slate-600 font-medium">Occupancy Rate Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">25min</div>
              <div className="text-slate-600 font-medium">Check-in Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">4.8★</div>
              <div className="text-slate-600 font-medium">Guest Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-purple-900 via-violet-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Transform Your Hostel?
            </Badge>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Build a Thriving
              <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"> Hostel Community</span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join the modern hostel revolution. Create amazing experiences for travelers while 
              streamlining your operations and maximizing occupancy rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => onNavigate('demo')}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
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
                Talk to Expert
              </Button>
            </div>
            
            <div className="pt-12 text-slate-400">
              <p className="text-lg">
                Free trial • Budget-friendly pricing • Community support • Easy setup
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}