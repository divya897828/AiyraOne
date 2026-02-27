import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Building, 
  FileText, 
  DollarSign, 
  Users, 
  Wrench, 
  Shield, 
  Smartphone, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Home,
  Bell
} from 'lucide-react';

interface ApartmentCommunitiesPageProps {
  onNavigate: (page: string) => void;
}

export function ApartmentCommunitiesPage({ onNavigate }: ApartmentCommunitiesPageProps) {
  const features = [
    {
      icon: FileText,
      title: 'Lease Management System',
      description: 'Comprehensive lease management with automated renewals, document storage, and compliance tracking.',
      benefits: ['Digital lease agreements', 'Renewal automation', 'Document management', 'Compliance tracking']
    },
    {
      icon: Users,
      title: 'Tenant Portal & Community',
      description: 'Modern tenant portal with community features, announcements, and resident communication tools.',
      benefits: ['Online rent payments', 'Community announcements', 'Resident directory', 'Event coordination']
    },
    {
      icon: Wrench,
      title: 'Maintenance Request System',
      description: 'Streamlined maintenance management with work order tracking, vendor coordination, and tenant communication.',
      benefits: ['Online maintenance requests', 'Work order tracking', 'Vendor management', 'Priority scheduling']
    },
    {
      icon: DollarSign,
      title: 'Rent Collection & Finance',
      description: 'Automated rent collection with payment processing, late fee management, and financial reporting.',
      benefits: ['Automated rent collection', 'Late fee processing', 'Financial reporting', 'Payment tracking']
    },
    {
      icon: Shield,
      title: 'Security & Access Control',
      description: 'Integrated security system with access control, visitor management, and community safety features.',
      benefits: ['Access control management', 'Visitor registration', 'Security monitoring', 'Emergency alerts']
    },
    {
      icon: Bell,
      title: 'Community Engagement',
      description: 'Tools to build vibrant communities with events, amenity booking, and resident communication.',
      benefits: ['Event planning tools', 'Amenity reservations', 'Community boards', 'Neighbor connections']
    }
  ];

  const benefits = [
    'Complete residential property management',
    'Digital lease management system',
    'Automated rent collection',
    'Maintenance request tracking',
    'Community engagement tools',
    'Security & access control'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 backdrop-blur-sm px-4 py-2 mb-8">
                <Building className="w-4 h-4 mr-2" />
                Apartment Communities
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Smart Management for
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Apartment Communities</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Comprehensive management solution for apartment complexes and residential communities. 
                Streamline lease management, automate rent collection, enhance community engagement, 
                and provide exceptional tenant experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Button 
                  onClick={() => onNavigate('demo')}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-lg font-semibold"
                >
                  Schedule Demo
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => onNavigate('contact')}
                  variant="outline" 
                  size="lg"
                  className="border-white/70 bg-white/10 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm px-12 py-6 text-lg font-medium"
                >
                  Contact Sales
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-slate-300">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBjb21wbGV4JTIwbW9kZXJufGVufDF8fHx8MTc1OTMxMTExOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Apartment Community Complex"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Complete Residential Community Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to manage modern apartment communities efficiently. 
              From digital leasing to community engagement and maintenance coordination.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
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

      {/* Community Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Modern Community Living Features
            </h2>
            <p className="text-xl text-slate-600">
              Tools designed to create vibrant, connected apartment communities where residents love to live
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tenant Portal</h3>
              <p className="text-slate-600">Modern online portal for rent payments, maintenance requests, and community communication.</p>
            </Card>
            
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Community Events</h3>
              <p className="text-slate-600">Event planning tools, amenity booking system, and community engagement features.</p>
            </Card>
            
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Security & Safety</h3>
              <p className="text-slate-600">Access control, visitor management, and emergency communication systems.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Trusted by Apartment Communities
            </h2>
            <p className="text-xl text-slate-600">
              Leading property management companies choose Aiyra for their residential communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-600 mb-2">99.9%</div>
              <div className="text-slate-600 font-medium">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-600 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-600 mb-2">95%</div>
              <div className="text-slate-600 font-medium">Rent Collection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-cyan-600 mb-2">4.7★</div>
              <div className="text-slate-600 font-medium">Tenant Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Transform Your Community?
            </Badge>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Build Thriving
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Apartment Communities</span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join forward-thinking property managers who've revolutionized their apartment 
              communities with modern technology, better tenant experiences, and streamlined operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => onNavigate('demo')}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
              >
                Schedule Demo
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline" 
                size="lg"
                className="border-white/70 bg-white/15 text-white hover:bg-white/25 hover:border-white backdrop-blur-sm px-12 py-6 text-xl font-medium shadow-lg"
              >
                Contact Sales Team
              </Button>
            </div>
            
            <div className="pt-12 text-slate-400">
              <p className="text-lg">
                Custom implementation • Training included • Ongoing support • Scalable solution
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}