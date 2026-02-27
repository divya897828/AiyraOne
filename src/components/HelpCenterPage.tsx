import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Modal } from './ui/modal';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Settings, 
  Users, 
  CreditCard,
  Shield,
  Smartphone,
  BarChart3,
  Hotel,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  Play,
  FileText,
  Video,
  Download
} from 'lucide-react';

interface HelpCenterPageProps {
  onNavigate: (page: string) => void;
}

interface Article {
  id: string;
  title: string;
  category: string;
  icon: any;
  description: string;
  readTime: string;
  popular: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: any;
  description: string;
  articleCount: number;
}

export function HelpCenterPage({ onNavigate }: HelpCenterPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '', icon: null as React.ReactNode });

  const showLiveChatModal = () => {
    setModalContent({
      title: 'Coming Soon',
      message: 'Live chat support is being introduced soon. In the meantime, feel free to reach out via email or phone.',
      icon: <MessageCircle className="w-8 h-8 text-sky-500" />
    });
    setShowModal(true);
  };

  const showMaintenanceModal = () => {
    setModalContent({
      title: 'Under Maintenance',
      message: 'This section is currently under maintenance. We\'re working to bring you fresh content. Please check back soon!',
      icon: <Settings className="w-8 h-8 text-sky-500" />
    });
    setShowModal(true);
  };

  const categories: Category[] = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: BookOpen,
      description: 'Everything you need to know to get up and running with AiyraOne',
      articleCount: 12
    },
    {
      id: 'property-management',
      name: 'Property Management',
      icon: Hotel,
      description: 'Manage reservations, check-ins, housekeeping, and daily operations',
      articleCount: 25
    },
    {
      id: 'ai-features',
      name: 'AI & Automation',
      icon: MessageCircle,
      description: 'AI chatbot, automated responses, and intelligent recommendations',
      articleCount: 18
    },
    {
      id: 'analytics',
      name: 'Analytics & Reports',
      icon: BarChart3,
      description: 'Business intelligence, dashboards, and performance analytics',
      articleCount: 20
    },
    {
      id: 'mobile-app',
      name: 'Mobile App',
      icon: Smartphone,
      description: 'Using AiyraOne on iOS and Android devices',
      articleCount: 8
    },
    {
      id: 'billing',
      name: 'Billing & Subscriptions',
      icon: CreditCard,
      description: 'Plans, pricing, payments, and subscription management',
      articleCount: 15
    },
    {
      id: 'security',
      name: 'Security & Privacy',
      icon: Shield,
      description: 'Data protection, user permissions, and security best practices',
      articleCount: 10
    },
    {
      id: 'integrations',
      name: 'Integrations',
      icon: Settings,
      description: 'Connect with booking channels, payment systems, and third-party tools',
      articleCount: 22
    }
  ];

  const popularArticles: Article[] = [
    {
      id: 'setup-guide',
      title: 'Complete Setup Guide for New Hotels',
      category: 'Getting Started',
      icon: BookOpen,
      description: 'Step-by-step guide to set up your hotel property in AiyraOne',
      readTime: '10 min read',
      popular: true
    },
    {
      id: 'booking-management',
      title: 'Managing Reservations and Bookings',
      category: 'Property Management',
      icon: Hotel,
      description: 'How to handle reservations, modifications, and cancellations',
      readTime: '8 min read',
      popular: true
    },
    {
      id: 'ai-chatbot-setup',
      title: 'Setting Up Your AI Guest Assistant',
      category: 'AI & Automation',
      icon: MessageCircle,
      description: 'Configure and customize your AI chatbot for guest interactions',
      readTime: '12 min read',
      popular: true
    },
    {
      id: 'revenue-analytics',
      title: 'Understanding Your Revenue Analytics',
      category: 'Analytics & Reports',
      icon: BarChart3,
      description: 'Learn to read and interpret your hotel performance metrics',
      readTime: '15 min read',
      popular: true
    },
    {
      id: 'mobile-app-guide',
      title: 'Getting Started with the Mobile App',
      category: 'Mobile App',
      icon: Smartphone,
      description: 'Download, install, and use AiyraOne on your mobile device',
      readTime: '6 min read',
      popular: true
    },
    {
      id: 'channel-integration',
      title: 'Connecting Booking Channels',
      category: 'Integrations',
      icon: Settings,
      description: 'Integrate with Booking.com, Expedia, Airbnb, and other OTAs',
      readTime: '20 min read',
      popular: true
    }
  ];

  const videoTutorials = [
    {
      title: 'AiyraOne Platform Overview',
      duration: '5:30',
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71'
    },
    {
      title: 'Setting Up Your First Property',
      duration: '12:45',
      thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
    },
    {
      title: 'AI Chatbot Configuration',
      duration: '8:20',
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
    },
    {
      title: 'Analytics Dashboard Walkthrough',
      duration: '15:10',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    }
  ];

  const filteredArticles = popularArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="bg-sky-500/20 text-sky-300 border-sky-400/30 mb-8">
            <BookOpen className="w-4 h-4 mr-2" />
            Help Center
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            How Can We 
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Help You?</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Find answers, guides, and resources to help you get the most out of AiyraOne. 
            From setup to advanced features, we've got you covered.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for help articles, guides, and tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder-slate-300 backdrop-blur-sm focus:bg-white focus:text-slate-900 focus:placeholder-slate-500"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-sky-500 mb-2">150+</div>
              <p className="text-slate-600 font-medium">Help Articles</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-sky-500 mb-2">25+</div>
              <p className="text-slate-600 font-medium">Video Tutorials</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-sky-500 mb-2">24/7</div>
              <p className="text-slate-600 font-medium">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-sky-500 mb-2">98%</div>
              <p className="text-slate-600 font-medium">Issue Resolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      {searchQuery ? (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 mb-8">
              Search Results ({filteredArticles.length})
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="p-6 border-2 border-slate-200 hover:border-sky-400 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <article.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-sky-100 text-sky-700 text-xs">{article.category}</Badge>
                        <span className="text-sm text-slate-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{article.title}</h3>
                      <p className="text-slate-600 text-sm">{article.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Categories */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                  Browse by Category
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Find the help you need organized by topic and feature area.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <Card key={category.id} onClick={showMaintenanceModal} className="p-6 text-center border-2 border-slate-200 hover:border-sky-400 transition-all duration-300 cursor-pointer group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{category.description}</p>
                    <Badge className="bg-slate-100 text-slate-700">
                      {category.articleCount} articles
                    </Badge>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Popular Articles */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                  Popular Articles
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  The most helpful guides and tutorials as voted by our community.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {popularArticles.map((article) => (
                  <Card key={article.id} onClick={showMaintenanceModal} className="p-6 border-2 border-slate-200 hover:border-sky-400 transition-all duration-300 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <article.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-sky-100 text-sky-700">{article.category}</Badge>
                          <span className="text-sm text-slate-500">{article.readTime}</span>
                          {article.popular && (
                            <Badge className="bg-orange-100 text-orange-700">Popular</Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{article.title}</h3>
                        <p className="text-slate-600">{article.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Video Tutorials */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                  Video Tutorials
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Learn AiyraOne features through step-by-step video guides.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videoTutorials.map((video, index) => (
                  <Card key={index} onClick={showMaintenanceModal} className="overflow-hidden border-2 border-slate-200 hover:border-sky-400 transition-all duration-300 cursor-pointer group">
                    <div className="relative">
                      <ImageWithFallback
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="w-6 h-6 text-slate-700 ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute bottom-2 right-2 bg-black/70 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{video.title}</h3>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Contact Support */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our support team is here to help you succeed. Reach out through your preferred channel.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-2 border-slate-200 hover:border-sky-400 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Live Chat</h3>
              <p className="text-slate-600 mb-6">
                Get instant help from our support team through live chat.
              </p>
              <Button 
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white w-full"
                onClick={showLiveChatModal}
              >
                Start Chat
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                <span>Available 24/7</span>
              </div>
            </Card>

            <Card className="p-8 text-center border-2 border-slate-200 hover:border-sky-400 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Email Support</h3>
              <p className="text-slate-600 mb-6">
                Send us a detailed message and we'll get back to you soon.
              </p>
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white w-full"
              >
                Send Email
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                <span>Response within 2 hours</span>
              </div>
            </Card>

            <Card className="p-8 text-center border-2 border-slate-200 hover:border-sky-400 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Phone Support</h3>
              <p className="text-slate-600 mb-4">
                Our team is available 24/7 to assist you with any questions or issues.
              </p>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w-full">
                +1 (530) 366-1683
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri 9AM-6PM EST</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Download guides, access our API documentation, and join our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card onClick={showMaintenanceModal} className="p-6 text-center border-2 border-slate-200 hover:border-sky-400 transition-all duration-300 cursor-pointer">
              <FileText className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">User Manual</h3>
              <p className="text-sm text-slate-600 mb-4">Complete AiyraOne user guide</p>
              <Button variant="outline" size="sm" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </Card>

            <Card onClick={showMaintenanceModal} className="p-6 text-center border-2 border-slate-200 hover:border-sky-400 transition-all duration-300 cursor-pointer">
              <Settings className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">API Docs</h3>
              <p className="text-sm text-slate-600 mb-4">Developer documentation</p>
              <Button variant="outline" size="sm" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Docs
              </Button>
            </Card>

            <Card onClick={showMaintenanceModal} className="p-6 text-center border-2 border-slate-200 hover:border-sky-400 transition-all duration-300 cursor-pointer">
              <Users className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Community</h3>
              <p className="text-sm text-slate-600 mb-4">Join user discussions</p>
              <Button variant="outline" size="sm" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Join Forum
              </Button>
            </Card>

            <Card onClick={showMaintenanceModal} className="p-6 text-center border-2 border-slate-200 hover:border-sky-400 transition-all duration-300 cursor-pointer">
              <Video className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h3 className="font-bold text-slate-900 mb-2">Webinars</h3>
              <p className="text-sm text-slate-600 mb-4">Live training sessions</p>
              <Button variant="outline" size="sm" className="w-full">
                <Play className="w-4 h-4 mr-2" />
                View Schedule
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={modalContent.title}
        message={modalContent.message}
        icon={modalContent.icon}
      />
    </div>
  );
}