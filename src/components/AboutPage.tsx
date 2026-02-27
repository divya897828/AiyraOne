import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Users, 
  Globe, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Heart,
  Target,
  Zap,
  Hotel,
  Sparkles
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="bg-sky-500/20 text-sky-300 border-sky-400/30 mb-8">
            <Target className="w-4 h-4 mr-2" />
            About AiyraOne
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            The Future of 
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Hospitality Technology</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-16 leading-relaxed max-w-3xl mx-auto">
            AiyraOne represents the next generation of hotel management technology, 
            designed for the modern hospitality industry's most demanding requirements.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Aiyra's 
              <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent"> Mission</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Aiyra's mission is to simplify hotel management with smart, AI-driven technology that maximizes revenue, 
              enhances guest experiences, and streamlines operations. We believe technology should work quietly behind 
              the scenes, empowering hoteliers to focus on what truly matters.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              'Transform complex hotel operations into streamlined processes',
              'Maximize revenue through advanced AI-driven automation',
              'Deliver personalized guest experiences at scale',
              'Provide actionable insights for strategic decision-making'
            ].map((point, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-500 border-slate-200/60 bg-white group hover:border-sky-200 hover:bg-gradient-to-br hover:from-white hover:to-sky-50/30">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:shadow-lg transition-all duration-500">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-lg">{point}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Our Story: Built by Operators,
              <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent"> Powered by Technology</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-500 border-slate-200/60 bg-white group hover:border-sky-200 hover:bg-gradient-to-br hover:from-white hover:to-sky-50/30">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:shadow-lg transition-all duration-500">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-700 transition-colors duration-300">Industry Expertise</h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">At Aiyra, we are more than just a technology company, we know hotel operators, revenue managers, and technologists who have firsthand knowledge of the challenges posed by legacy systems.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-500 border-slate-200/60 bg-white group hover:border-sky-200 hover:bg-gradient-to-br hover:from-white hover:to-sky-50/30">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:shadow-lg transition-all duration-500">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-700 transition-colors duration-300">Smart Innovation</h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">Having experienced the inefficiencies and high costs of outdated solutions, we set out to build a smarter, more intuitive platform tailored to the needs of the modern hospitality industry.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-500 border-slate-200/60 bg-white group hover:border-sky-200 hover:bg-gradient-to-br hover:from-white hover:to-sky-50/30">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:shadow-lg transition-all duration-500">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-700 transition-colors duration-300">Results Driven</h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">Our goal is to provide a solution that not only simplifies hotel operations but also drives profitability, delivering a transformative impact on the way hotels manage their businesses.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Vision and Momentum Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-sky-100 text-sky-700 px-4 py-2 mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Global Vision
            </Badge>
            <h2 className="text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Our Vision and 
              <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent"> Momentum</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Aiyra is engineered for the global market, defining the next era of intelligent hotel management.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-500 border-slate-200/60 bg-white group hover:border-sky-200 hover:bg-gradient-to-br hover:from-white hover:to-sky-50/30">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:shadow-lg transition-all duration-500">
                  <Hotel className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-700 transition-colors duration-300">Versatile Excellence</h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">Aiyra is engineered to serve the full spectrum of hospitality, ensuring that independent motels and large boutique groups alike can deliver unparalleled operational excellence and drive profitability.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-500 border-slate-200/60 bg-white group hover:border-sky-200 hover:bg-gradient-to-br hover:from-white hover:to-sky-50/30">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:shadow-lg transition-all duration-500">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-700 transition-colors duration-300">Strategic Market Expansion</h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">Aiyra's architecture is global-ready, enabling strategic expansion across key markets to deliver advanced, scalable hospitality technology wherever it's needed.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-500 border-slate-200/60 bg-white group hover:border-sky-200 hover:bg-gradient-to-br hover:from-white hover:to-sky-50/30">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:shadow-lg transition-all duration-500">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-700 transition-colors duration-300">Innovation Leadership</h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">Aiyra continues to pioneer breakthrough hospitality technologies, setting new standards for intelligent hotel management.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              What 
              <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent"> Drives Us</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our core values shape every decision and drive our commitment to revolutionizing hospitality technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Operator First',
                description: 'Built by hospitality professionals who understand real industry challenges.'
              },
              {
                icon: Zap,
                title: 'Innovation',
                description: 'Pioneering AI-driven solutions that set new industry standards.'
              },
              {
                icon: Heart,
                title: 'Guest Focus',
                description: 'Every feature designed to enhance the guest experience and satisfaction.'
              },
              {
                icon: Target,
                title: 'Results Driven',
                description: 'Measurable impact on revenue, efficiency, and operational excellence.'
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-500 border-slate-200/60 bg-white group hover:border-sky-200 hover:bg-gradient-to-br hover:from-white hover:to-sky-50/30">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 group-hover:shadow-lg transition-all duration-500">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors duration-300">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge 
            className="bg-sky-500/20 text-sky-300 border-sky-400/30 mb-8 cursor-pointer hover:bg-sky-500/30 hover:border-sky-300/50 transition-all duration-300"
            onClick={() => onNavigate('presentation')}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Experience 
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> AiyraOne?</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Discover how AiyraOne can transform your hotel operations and drive unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => onNavigate('presentation')}
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
            >
              Schedule Your Demo
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              onClick={() => onNavigate('contact')}
              variant="outline" 
              size="lg"
              className="border-white/70 bg-white/10 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm px-12 py-6 text-xl font-medium"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}