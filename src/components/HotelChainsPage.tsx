import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Building, 
  BarChart4, 
  DollarSign, 
  Globe, 
  Users, 
  Shield, 
  Smartphone, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Database,
  Bot
} from 'lucide-react';

interface HotelChainsPageProps {
  onNavigate: (page: string) => void;
}

export function HotelChainsPage({ onNavigate }: HotelChainsPageProps) {
  const features = [
    {
      icon: Building,
      title: 'Multi-Property Dashboard',
      description: 'Centralized command center for managing multiple properties with real-time visibility across your entire portfolio.',
      benefits: ['Unified property overview', 'Cross-property analytics', 'Centralized reporting', 'Brand consistency management']
    },
    {
      icon: Users,
      title: 'Enterprise User Management',
      description: 'Advanced role-based access control with customizable permissions for different staff levels and properties.',
      benefits: ['Role-based permissions', 'Staff hierarchy management', 'Multi-property access', 'Audit trail tracking']
    },
    {
      icon: BarChart4,
      title: 'Enterprise Business Intelligence',
      description: 'Built-in BI platform with predictive analytics, cross-property comparisons, and executive dashboards - no additional software needed.',
      benefits: ['Portfolio benchmarking', 'Predictive revenue analytics', 'Custom executive dashboards', 'Multi-property intelligence']
    },
    {
      icon: Bot,
      title: 'Enterprise AI Chatbot',
      description: 'Scalable AI chatbot system that handles guest inquiries across all properties with brand-consistent responses and multi-language support.',
      benefits: ['Multi-property AI support', 'Brand-consistent responses', 'Multi-language capabilities', 'Enterprise-grade automation']
    },
    {
      icon: Globe,
      title: 'Global Channel Management',
      description: 'Manage distribution across 50+ OTA channels with group-level rate management and inventory control.',
      benefits: ['Bulk rate updates', 'Group inventory control', 'Channel performance analytics', 'Commission optimization']
    },
    {
      icon: DollarSign,
      title: 'Revenue Management System',
      description: 'AI-powered revenue optimization with market intelligence and competitive analysis across all properties.',
      benefits: ['Market intelligence', 'Competitive analysis', 'Group pricing strategies', 'Revenue forecasting']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SSO integration, data encryption, and compliance management.',
      benefits: ['SSO integration', 'Data encryption', 'Compliance reporting', 'Security monitoring']
    }
  ];

  const benefits = [
    'Enterprise AI chatbot & automation included',
    'Advanced BI & predictive analytics included',
    'Multi-property intelligence dashboards',
    'Dedicated enterprise account management',
    'Priority 24/7 support & custom integrations',
    'All platforms included, no extra fees'
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
                <Building className="w-4 h-4 mr-2" />
                Hotel Chains & Groups
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                Enterprise PMS for
                <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Hotel Chains</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                More than just enterprise PMS - Aiyra combines multi-property management with built-in AI chatbot, 
                advanced business intelligence, and predictive analytics. Get three enterprise platforms 
                in one integrated solution designed specifically for hotel chains and groups.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <Button 
                  onClick={() => onNavigate('demo')}
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-lg font-semibold"
                >
                  Schedule Enterprise Demo
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
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNoYWluJTIwYnVpbGRpbmdzfGVufDF8fHx8MTc1OTMxMDkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Hotel Chain Building"
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
              Enterprise-Grade Multi-Property Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Designed for hotel chains and groups that need centralized control, 
              brand consistency, and scalable operations across multiple properties.
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

      {/* Enterprise Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Built for Enterprise Scale
            </h2>
            <p className="text-xl text-slate-600">
              Built for enterprise-scale multi-property management excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-sky-600 mb-2">45%</div>
              <div className="text-slate-600 font-medium">Operational Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-sky-600 mb-2">99.99%</div>
              <div className="text-slate-600 font-medium">Enterprise Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-sky-600 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Enterprise Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Integrations</h3>
              <p className="text-slate-600">Connect with your existing systems through custom APIs and integrations.</p>
            </Card>
            
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Enterprise Security</h3>
              <p className="text-slate-600">Bank-level security with SOC 2 compliance and advanced threat protection.</p>
            </Card>
            
            <Card className="p-8 text-center border-0 bg-white shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Dedicated Support</h3>
              <p className="text-slate-600">24/7 priority support with dedicated account management and CSM.</p>
            </Card>
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
              Ready for Enterprise-Grade PMS?
            </Badge>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Scale Your Hotel Chain
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Operations</span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Enterprise-grade solutions for multi-property hotel management. 
              Get advanced features, dedicated support, and scalable infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => onNavigate('demo')}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
              >
                Schedule Enterprise Demo
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
                Custom deployment • Enterprise SLA • Dedicated support • Security compliance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}