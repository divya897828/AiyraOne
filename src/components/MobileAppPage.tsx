import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Smartphone, 
  Download, 
  Bell, 
  MessageSquare, 
  BarChart3, 
  Calendar, 
  Users, 
  Settings,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  Apple,
  PlayCircle,
  Zap,
  Shield
} from 'lucide-react';

interface MobileAppPageProps {
  onNavigate: (page: string) => void;
}

export function MobileAppPage({ onNavigate }: MobileAppPageProps) {
  const features = [
    {
      icon: Bell,
      title: 'Real-time Notifications',
      description: 'Stay updated with instant alerts for new bookings, guest requests, and operational updates wherever you are.'
    },
    {
      icon: MessageSquare,
      title: 'Guest Communication',
      description: 'Respond to guest inquiries, manage requests, and provide exceptional service directly from your mobile device.'
    },
    {
      icon: BarChart3,
      title: 'Performance Dashboard',
      description: 'Monitor key metrics, occupancy rates, and revenue insights with beautiful mobile-optimized charts and graphs.'
    },
    {
      icon: Calendar,
      title: 'Booking Management',
      description: 'View, modify, and manage reservations on the go. Handle check-ins, check-outs, and room assignments effortlessly.'
    },
    {
      icon: Users,
      title: 'Staff Coordination',
      description: 'Coordinate with your team, assign tasks to housekeeping, and manage staff schedules from anywhere.'
    },
    {
      icon: Settings,
      title: 'Quick Actions',
      description: 'Perform essential hotel operations with one-tap actions designed for busy hotel managers and staff.'
    }
  ];

  const appScreenshots = [
    {
      title: 'Dashboard Overview',
      description: 'Complete property performance at a glance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljcyUyMG1vYmlsZSUyMGFwcCUyMGludGVyZmFjZSUyMGNoYXJ0c3xlbnwxfHx8fDE3NTk2NjI5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Guest Messages',
      description: 'Seamless guest communication',
      image: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBjaGF0JTIwbWVzc2FnZXMlMjBtb2JpbGUlMjBhcHAlMjBjb252ZXJzYXRpb258ZW58MXx8fHwxNzU5NjYyOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Booking Calendar',
      description: 'Intuitive reservation management',
      image: 'https://images.unsplash.com/photo-1642360912445-61d71dd98400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29raW5nJTIwYXBwb2ludG1lbnQlMjBjYWxlbmRhciUyMGFwcCUyMG1vYmlsZSUyMGludGVyZmFjZSUyMHNjaGVkdWxlfGVufDF8fHx8MTc1OTY2Mjk4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
            alt="Hotel Manager Using Mobile App"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-sky-500/20 text-sky-300 border-sky-400/30 backdrop-blur-sm px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                Mobile App Available
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                Manage Your Hotel 
                <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> On the Go</span>
              </h1>
              
              <p className="text-xl text-slate-200 leading-relaxed">
                Take the power of AiyraOne with you wherever you go. Our mobile app puts complete hotel management 
                capabilities right in your pocket, so you never miss a beat.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-xl px-8 py-4 text-lg font-semibold"
                >
                  <Apple className="w-5 h-5 mr-3" />
                  Download for iOS
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/70 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-medium"
                >
                  <PlayCircle className="w-5 h-5 mr-3" />
                  Get on Android
                </Button>
              </div>
              
              <div className="flex items-center gap-8 text-slate-300 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">Simple & Intuitive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-sky-400" />
                  <span className="font-medium">Easy Solution</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
                  alt="AiyraOne Mobile App Interface"
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-sky-100 text-sky-700 px-4 py-2 mb-6">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Everything You Need in Your Pocket
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The AiyraOne mobile app brings the full power of hotel management to your smartphone, 
              with features designed specifically for busy hospitality professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center border-2 border-sky-200 hover:border-sky-400 transition-all duration-300 bg-gradient-to-br from-white to-sky-50">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-sky-100 text-sky-700 px-4 py-2 mb-6">
              <Play className="w-4 h-4 mr-2" />
              App Preview
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              See the App in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the intuitive design and powerful functionality that makes hotel management effortless.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {appScreenshots.map((screenshot, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-4 shadow-2xl">
                    <div className="bg-white rounded-2xl h-96 overflow-hidden">
                      <ImageWithFallback
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{screenshot.title}</h3>
                <p className="text-slate-600">{screenshot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-sky-100 text-sky-700 px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Why Choose Our App
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Hotel Management 
                <span className="text-sky-500"> Simplified</span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Our mobile app isn't just a companion to your desktop experience - it's a complete 
                hotel management solution designed for the modern hotelier who's always on the move.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Works offline - sync when connected</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Secure biometric authentication</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Real-time synchronization across devices</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Optimized for all screen sizes</span>
                </div>
              </div>
              
              <Button 
                onClick={() => onNavigate('demo')}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-xl px-8 py-4 text-lg font-semibold"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                  alt="Hotel Manager Using Mobile App for Operations"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/10 to-blue-600/10 rounded-3xl blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge className="bg-sky-500/20 text-sky-300 border-sky-400/30 px-4 py-2">
              <Download className="w-4 h-4 mr-2" />
              Available Now
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Download 
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> AiyraOne Mobile</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Experience the simplest and most intuitive hotel management solution designed for modern hospitality professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
              >
                <Apple className="w-6 h-6 mr-3" />
                App Store
              </Button>
              <Button 
                variant="outline"
                className="border-white/70 bg-white/15 text-white hover:bg-white/25 hover:border-white backdrop-blur-sm px-12 py-6 text-xl font-medium"
              >
                <PlayCircle className="w-6 h-6 mr-3" />
                Google Play
              </Button>
            </div>
            
            <div className="pt-8 text-slate-400">
              <p className="text-lg">
                Free download • iOS 14+ and Android 8+ • Works with all AiyraOne plans
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}