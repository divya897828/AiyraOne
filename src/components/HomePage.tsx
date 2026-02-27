import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView } from 'motion/react';
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

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeCard, setActiveCard] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-cycle through cards every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const benefits = [
    {
      icon: Hotel,
      title: 'End to end operations',
      description: 'AiyraOne consolidates all your hotel operations into one sophisticated dashboard, giving you unprecedented control over multiple properties. Monitor occupancy rates, staff performance, and guest satisfaction scores in real-time across your entire portfolio.'
    },
    {
      icon: Sparkles,
      title: 'Intelligent Revenue Optimization',
      description: 'Experience the power of Aiyra\'s AI-driven pricing engine that analyzes market conditions, competitor rates, and demand patterns 24/7. Our advanced algorithms automatically adjust your room rates to maximize revenue while maintaining optimal occupancy levels.'
    },
    {
      icon: Globe,
      title: 'Global Distribution Network',
      description: 'Aiyra seamlessly connects your properties to 50+ premium OTA channels including Booking.com, Expedia, and Airbnb. Our sophisticated channel management ensures real-time synchronization, eliminating overbookings and maximizing your online presence.'
    },
    {
      icon: Bot,
      title: 'AI-Powered Guest Concierge',
      description: 'Let Aiyra\'s intelligent virtual assistant handle guest inquiries, provide personalized recommendations, and manage routine requests. Our AI learns from every interaction to deliver increasingly sophisticated and human-like service.'
    },
    {
      icon: BarChart4,
      title: 'Advanced Analytics Suite',
      description: 'Aiyra transforms raw data into actionable insights with beautiful, real-time dashboards. Track RevPAR, ADR, occupancy trends, and forecasting models that help you make informed strategic decisions for sustainable growth.'
    },
    {
      icon: Headphones,
      title: 'Premium Support Experience',
      description: 'Access Aiyra\'s dedicated hospitality experts who understand your industry challenges. Our 24/7 premium support includes phone, chat, and priority assistance to ensure your operations never miss a beat.'
    }
  ];

  const features = [
    'Real-time occupancy tracking',
    'Automated pricing optimization',
    'Multi-channel booking management',
    'Guest communication tools',
    'Revenue analytics and forecasting',
    'AI-powered guest support',
    'Staff task management',
    '24/7 customer support'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1735045634800-957fd0dad45e"
            alt="Luxury Hotel Management Technology"
            className="w-full h-full object-cover transform translate-x-8"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-800/30 to-slate-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-800/20 to-slate-900/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <Badge className="bg-sky-500/20 text-sky-300 border-sky-400/30 backdrop-blur-sm px-4 py-2">
              The Future of Hotel Management
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
              Meet 
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent bg-slate-900/60 backdrop-blur-sm px-4 py-2 rounded-lg"> Aiyra</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-200 max-w-4xl mx-auto font-light leading-relaxed">
              The intelligent property management platform that transforms how Hotels operate, optimize revenue, and deliver exceptional guest experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                onClick={() => onNavigate('demo')}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-lg font-semibold"
              >
                Experience Aiyra
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => onNavigate('features')}
                variant="outline" 
                size="lg"
                className="border-white/70 bg-white/10 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm px-12 py-6 text-lg font-medium"
              >
                Explore Features
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-slate-300 pt-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-sky-400" />
                <span className="font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-sky-400" />
                <span className="font-medium">Real-time Intelligence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="font-medium">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hotels Choose Aiyra - Ocean Tranquility Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Gentle Ocean Waves Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <motion.path
              d="M0,80 C300,20 600,100 900,40 C1000,20 1100,60 1200,40 L1200,120 L0,120 Z"
              fill="rgba(14, 165, 233, 0.02)"
              animate={{
                d: [
                  "M0,80 C300,20 600,100 900,40 C1000,20 1100,60 1200,40 L1200,120 L0,120 Z",
                  "M0,60 C300,100 600,20 900,80 C1000,100 1100,40 1200,60 L1200,120 L0,120 Z",
                  "M0,80 C300,20 600,100 900,40 C1000,20 1100,60 1200,40 L1200,120 L0,120 Z"
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M0,60 C300,100 600,20 900,80 C1000,100 1100,40 1200,60 L1200,120 L0,120 Z"
              fill="rgba(59, 130, 246, 0.03)"
              animate={{
                d: [
                  "M0,60 C300,100 600,20 900,80 C1000,100 1100,40 1200,60 L1200,120 L0,120 Z",
                  "M0,100 C300,40 600,80 900,20 C1000,40 1100,80 1200,100 L1200,120 L0,120 Z",
                  "M0,60 C300,100 600,20 900,80 C1000,100 1100,40 1200,60 L1200,120 L0,120 Z"
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </svg>
        </div>

        {/* Floating Gentle Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 rounded-full border border-sky-200/30 bg-gradient-to-br from-sky-100/20 to-blue-100/10"
              animate={{
                y: [100, -100],
                x: [0, Math.sin(i) * 50],
                scale: [0.5, 1, 0.5],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 3,
              }}
              style={{
                left: `${15 + i * 12}%`,
                bottom: '-50px',
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Badge className="bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 px-6 py-3 border border-sky-200/50 shadow-sm">
                Intelligent Hospitality Platform
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Why Hotels Choose 
              <motion.span 
                className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 100%' }}
              >
                {' '}Aiyra
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover how Aiyra revolutionizes hospitality management with cutting-edge technology 
              and unparalleled intelligence that transforms your operations into a premium experience
            </motion.p>
          </motion.div>

          {/* Flowing Card Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const isActive = activeCard === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  onHoverStart={() => {
                    setActiveCard(index);
                    setIsAutoPlaying(false);
                  }}
                  onHoverEnd={() => {
                    setIsAutoPlaying(true);
                  }}
                >
                  <motion.div
                    className={`p-8 rounded-2xl cursor-pointer group relative overflow-hidden transition-all duration-700 ${
                      isActive 
                        ? 'bg-gradient-to-br from-white to-sky-50/50 border-2 border-sky-300/50 shadow-xl shadow-sky-500/10' 
                        : 'bg-white/70 backdrop-blur-sm border-2 border-slate-200/40 hover:border-sky-200 shadow-lg hover:shadow-xl'
                    }`}
                    animate={{
                      y: isActive ? -8 : 0,
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeOut"
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.03,
                    }}
                    style={{
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {/* Gentle Ripple Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={{
                        background: isActive 
                          ? [
                              'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
                              'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 70%)',
                              'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.05) 0%, transparent 70%)',
                            ]
                          : 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 70%)',
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                    
                    <div className="flex items-start gap-6 relative">
                      <motion.div 
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg"
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          rotate: isActive ? [0, 5, -5, 0] : 0,
                          boxShadow: isActive 
                            ? '0 20px 40px rgba(14, 165, 233, 0.3), 0 0 20px rgba(14, 165, 233, 0.2)' 
                            : '0 10px 25px rgba(14, 165, 233, 0.2)',
                        }}
                        transition={{ 
                          duration: 0.5,
                          rotate: { duration: 2, ease: "easeInOut" }
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: isActive ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut" 
                          }}
                        >
                          <benefit.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          className={`text-xl font-bold mb-4 tracking-tight transition-all duration-500 ${
                            isActive ? 'text-sky-700' : 'text-slate-900 group-hover:text-sky-700'
                          }`}
                          animate={{
                            scale: isActive ? 1.02 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {benefit.title}
                        </motion.h3>
                        
                        <motion.p 
                          className={`leading-relaxed transition-all duration-500 ${
                            isActive ? 'text-slate-700' : 'text-slate-600 group-hover:text-slate-700'
                          }`}
                          animate={{
                            opacity: isActive ? 1 : 0.9,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {benefit.description}
                        </motion.p>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: isActive ? 1 : 0, 
                            y: isActive ? 0 : 10,
                          }}
                          transition={{ 
                            duration: 0.4, 
                            delay: isActive ? 0.3 : 0,
                            ease: "easeOut"
                          }}
                          className="mt-6"
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              onClick={() => onNavigate('demo')}
                              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
                            >
                              Learn More
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>


        </div>
      </section>



      {/* Dashboard Preview */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-sky-500/20 text-sky-300 border-sky-400/30 mb-6">
                  <BarChart4 className="w-4 h-4 mr-2" />
                  Intelligent Dashboard
                </Badge>
                <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                  See How Aiyra 
                  <span className="text-sky-400"> Transforms</span> Your Operations
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Experience the power of AiyraOne's intelligent dashboard where every metric, 
                  insight, and opportunity is beautifully presented and instantly actionable.
                </p>
              </div>
              
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={() => onNavigate('features')}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-xl px-8 py-4 text-lg font-semibold"
              >
                Explore the AiyraOne Experience
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558959357-685f9c7ace7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG1hbmFnZW1lbnQlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkJTIwYnVzaW5lc3MlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc1OTY2ODA1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hotel Management Technology Dashboard - Business Operations Transformation"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/10 to-blue-600/10 rounded-3xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-sky-100 text-sky-700 px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              What Makes AiyraOne Different
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Everything Your Hotel Needs in One Place
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              While others offer basic property management, AiyraOne provides a complete hospitality solution 
              that helps you maximize revenue, delight guests, and run smoother operations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-2 border-sky-200 hover:border-sky-400 transition-all duration-300 group bg-gradient-to-br from-white to-sky-50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                <Hotel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Hotel Operations</h3>
              <p className="text-slate-600 mb-6">Handle all your daily operations seamlessly - from reservations and check-ins to housekeeping and guest services.</p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Bookings & Reservations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Guest Check-in & Check-out</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Housekeeping & Maintenance</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 text-center border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 group bg-gradient-to-br from-white to-blue-50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Always-On Guest Support</h3>
              <p className="text-slate-600 mb-6">Never miss a guest inquiry again. Our intelligent system handles guest questions, requests, and bookings around the clock.</p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Round-the-clock Guest Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Multiple Language Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Personalized Guest Recommendations</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 text-center border-2 border-cyan-200 hover:border-cyan-400 transition-all duration-300 group bg-gradient-to-br from-white to-cyan-50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                <BarChart4 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Business Insights</h3>
              <p className="text-slate-600 mb-6">Make informed decisions with clear insights about your revenue, guest satisfaction, and operational performance.</p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-500" />
                  <span>Revenue & Occupancy Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-500" />
                  <span>Guest Satisfaction Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-500" />
                  <span>Operational Performance Reports</span>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Hotel Owners Choose Us</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Most hotel management systems only handle basic bookings and check-ins. AiyraOne goes further by helping you 
                increase revenue, improve guest satisfaction, and reduce operational stress - all included in one comprehensive solution 
                designed specifically for hospitality professionals.
              </p>
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
              Ready to Transform Your Business?
            </Badge>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Meet 
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Aiyra?</span>
            </h2>
            
            <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join the revolution in hotel management. See how AiyraOne can help your business 
              achieve unprecedented levels of efficiency, profitability, and guest satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => onNavigate('demo')}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
              >
                Experience AiyraOne Today
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                onClick={() => onNavigate('pricing')}
                variant="outline" 
                size="lg"
                className="border-white/70 bg-white/15 text-white hover:bg-white/25 hover:border-white backdrop-blur-sm px-12 py-6 text-xl font-medium shadow-lg"
              >
                Request a Quote
              </Button>
            </div>
            
            <div className="pt-12 text-slate-400">
              <p className="text-lg">
                Trusted by Hotels worldwide • Enterprise-grade security • 24/7 expert support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}