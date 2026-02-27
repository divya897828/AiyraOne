import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  TreePine, 
  Calendar, 
  Utensils, 
  Waves, 
  Users, 
  Heart, 
  Smartphone, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Crown,
  Palmtree
} from 'lucide-react';

interface ResortsPageProps {
  onNavigate: (page: string) => void;
}

export function ResortsPage({ onNavigate }: ResortsPageProps) {
  const features = [
    {
      icon: TreePine,
      title: 'Resort Operations Management',
      description: 'Comprehensive resort management including accommodations, activities, dining, and guest services in one platform.',
      benefits: ['Room & villa management', 'Activity scheduling', 'Dining reservations', 'Guest service coordination']
    },
    {
      icon: Calendar,
      title: 'Activity & Experience Booking',
      description: 'Integrated activity management system for spa treatments, excursions, dining, and resort experiences.',
      benefits: ['Spa appointment scheduling', 'Tour & excursion booking', 'Equipment rental', 'Experience packages']
    },
    {
      icon: Utensils,
      title: 'Restaurant & Dining Management',
      description: 'Multi-venue dining management with reservation systems, menu management, and guest preferences.',
      benefits: ['Multi-restaurant bookings', 'Menu management', 'Special dietary tracking', 'Private dining coordination']
    },
    {
      icon: Users,
      title: 'Guest Experience Platform',
      description: 'Personalized guest experience management with preference tracking and luxury service coordination.',
      benefits: ['Guest preference profiles', 'Concierge service management', 'VIP guest tracking', 'Special occasion planning']
    },
    {
      icon: Heart,
      title: 'Spa & Wellness Center',
      description: 'Complete spa and wellness management with treatment scheduling, therapist management, and package sales.',
      benefits: ['Treatment room scheduling', 'Therapist management', 'Wellness package tracking', 'Membership management']
    },
    {
      icon: Crown,
      title: 'Luxury Guest Services',
      description: 'Premium guest service tools including butler services, private dining, and exclusive experience management.',
      benefits: ['Butler service coordination', 'Private chef arrangements', 'Yacht & transfer booking', 'Exclusive experience access']
    }
  ];

  const benefits = [
    'All-inclusive resort management',
    'Luxury guest experience tools',
    'Multi-venue coordination',
    'Premium concierge features',
    'Spa & wellness integration',
    'Activity & excursion booking'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 backdrop-blur-sm px-4 py-2 mb-8">
                <TreePine className="w-4 h-4 mr-2" />
                Resorts & Luxury Properties
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Luxury Resort
                <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-600 bg-clip-text text-transparent"> Management System</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Sophisticated management platform designed for luxury resorts and high-end properties. 
                Seamlessly manage accommodations, dining, spa services, activities, and guest experiences 
                all from one elegant system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Button 
                  onClick={() => onNavigate('demo')}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-2xl px-12 py-6 text-lg font-semibold"
                >
                  Experience Luxury PMS
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => onNavigate('demo')}
                  variant="outline" 
                  size="lg"
                  className="border-white/70 bg-white/10 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm px-12 py-6 text-lg font-medium"
                >
                  Book Private Demo
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
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc1OTMxMDk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury Resort Pool and Spa"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Complete Resort Experience Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to deliver exceptional luxury experiences. From villa management 
              to spa services, dining reservations to exclusive activities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
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

      {/* Luxury Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Luxury Resort Services
            </h2>
            <p className="text-xl text-slate-600">
              Specialized features for high-end resort operations and guest experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mx-auto mb-6">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Spa & Wellness</h3>
              <p className="text-slate-600">Complete spa management with treatment scheduling, wellness packages, and therapist coordination.</p>
            </Card>
            
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fine Dining</h3>
              <p className="text-slate-600">Multi-venue restaurant management with sommelier services and private dining coordination.</p>
            </Card>
            
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-6">
                <Palmtree className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Exclusive Experiences</h3>
              <p className="text-slate-600">Curated experiences, private excursions, and bespoke services for discerning guests.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Trusted by Luxury Resorts Worldwide
            </h2>
            <p className="text-xl text-slate-600">
              Leading luxury resorts choose Aiyra for exceptional guest experience management
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-emerald-600 mb-2">99.9%</div>
              <div className="text-slate-600 font-medium">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-emerald-600 mb-2">4.9★</div>
              <div className="text-slate-600 font-medium">Guest Satisfaction Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-emerald-600 mb-2">40%</div>
              <div className="text-slate-600 font-medium">Spa Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-emerald-600 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Concierge Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready for Luxury Resort Management?
            </Badge>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Elevate Your Resort
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> Experience</span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join the world's most prestigious resorts who trust Aiyra to deliver 
              exceptional guest experiences and streamline luxury operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => onNavigate('demo')}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
              >
                Experience Luxury PMS
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline" 
                size="lg"
                className="border-white/70 bg-white/15 text-white hover:bg-white/25 hover:border-white backdrop-blur-sm px-12 py-6 text-xl font-medium shadow-lg"
              >
                Speak with Specialist
              </Button>
            </div>
            
            <div className="pt-12 text-slate-400">
              <p className="text-lg">
                Private consultation • Luxury implementation • Premium support • White-glove service
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}