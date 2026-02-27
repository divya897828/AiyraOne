import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Logo } from './Logo';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Modal } from './ui/modal';
import hotelTechImage from 'figma:asset/03da0b2ffe9af8ffad5d9cb418515d2492021c07.png';
import { 
  ChevronLeft, 
  ChevronRight, 
  Hotel, 
  TrendingUp, 
  DollarSign,
  Users,
  Globe,
  Zap,
  Bot,
  BarChart4,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Rocket,
  Building,
  PieChart,
  Calendar,
  Smartphone,
  Monitor,
  LineChart,
  Settings,
  AlertTriangle,
  X,
  Mail,
  ExternalLink,
  Download
} from 'lucide-react';

interface PresentationPageProps {
  onNavigate: (page: string) => void;
}

export function PresentationPage({ onNavigate }: PresentationPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '', icon: null as React.ReactNode });

  const slides = [
    {
      id: 1,
      title: "AiyraOne",
      subtitle: "Transforming Hospitality with AI-Powered Hotel Management",
      content: "cover"
    },
    {
      id: 2,
      title: "The Problem",
      subtitle: "Hotel Operations Are Still Stuck in the Past",
      content: "problem"
    },
    {
      id: 3,
      title: "The Solution",
      subtitle: "A Unified, Intelligent PMS Platform",
      content: "solution"
    },
    {
      id: 4,
      title: "Market & Traction",
      subtitle: "Growing Market, Early Validation",
      content: "market"
    },
    {
      id: 5,
      title: "Regional Market",
      subtitle: "West Region Target Market",
      content: "regional"
    },
    {
      id: 6,
      title: "Funding",
      subtitle: "Pre-Seed Round: SAFE $2M Cap, 20% Discount",
      content: "funding"
    },
    {
      id: 7,
      title: "Vision & Call to Action",
      subtitle: "Building the AI Operating System for Independent Hotels",
      content: "vision"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slideRef = useRef<HTMLDivElement>(null);

  const downloadPowerPoint = async () => {
    setIsDownloading(true);
    
    try {
      // Import libraries dynamically
      const html2canvas = (await import('html2canvas')).default;
      const PptxGenJS = (await import('pptxgenjs')).default;
      
      const pptx = new PptxGenJS();
      
      // Set presentation properties
      pptx.author = 'AiyraOne Inc';
      pptx.company = 'AiyraOne Inc';
      pptx.subject = 'Pre-Seed Investment Opportunity';
      pptx.title = 'AiyraOne - AI-powered Hotel Management System';
      
      // Store original slide for restoration
      const originalSlide = currentSlide;
      
      // Create a style element to override oklch colors during capture
      const styleOverride = document.createElement('style');
      styleOverride.id = 'presentation-export-override';
      styleOverride.textContent = `
        /* Override all oklch colors with explicit hex values */
        * {
          color: inherit !important;
          background-color: inherit !important;
          border-color: inherit !important;
        }
        
        .text-blue-900 { color: #1e3a8a !important; }
        .text-slate-900 { color: #0f172a !important; }
        .text-slate-600 { color: #475569 !important; }
        .text-slate-700 { color: #334155 !important; }
        .text-slate-300 { color: #cbd5e1 !important; }
        .text-sky-400 { color: #0ea5e9 !important; }
        .text-sky-500 { color: #0ea5e9 !important; }
        .text-sky-600 { color: #0284c7 !important; }
        .text-blue-400 { color: #60a5fa !important; }
        .text-blue-500 { color: #3b82f6 !important; }
        .text-blue-600 { color: #2563eb !important; }
        .text-emerald-500 { color: #10b981 !important; }
        .text-emerald-600 { color: #059669 !important; }
        .text-emerald-700 { color: #047857 !important; }
        .text-red-600 { color: #dc2626 !important; }
        .text-white { color: #ffffff !important; }
        
        .bg-white { background-color: #ffffff !important; }
        .bg-slate-50 { background-color: #f8fafc !important; }
        .bg-slate-100 { background-color: #f1f5f9 !important; }
        .bg-slate-800 { background-color: #1e293b !important; }
        .bg-slate-900 { background-color: #0f172a !important; }
        .bg-sky-50 { background-color: #f0f9ff !important; }
        .bg-sky-100 { background-color: #e0f2fe !important; }
        .bg-sky-500 { background-color: #0ea5e9 !important; }
        .bg-blue-50 { background-color: #eff6ff !important; }
        .bg-blue-500 { background-color: #3b82f6 !important; }
        .bg-blue-600 { background-color: #2563eb !important; }
        .bg-blue-900 { background-color: #1e3a8a !important; }
        .bg-emerald-50 { background-color: #ecfdf5 !important; }
        .bg-emerald-100 { background-color: #d1fae5 !important; }
        .bg-emerald-500 { background-color: #10b981 !important; }
        .bg-red-100 { background-color: #fee2e2 !important; }
        .bg-purple-50 { background-color: #faf5ff !important; }
        
        .border-slate-200 { border-color: #e2e8f0 !important; }
        .border-sky-200 { border-color: #bae6fd !important; }
        .border-sky-300 { border-color: #7dd3fc !important; }
        .border-sky-400 { border-color: #38bdf8 !important; }
        .border-emerald-200 { border-color: #a7f3d0 !important; }
        .border-emerald-400 { border-color: #34d399 !important; }
        .border-white { border-color: #ffffff !important; }
        
        /* Handle gradients */
        .bg-gradient-to-r.from-slate-900.via-blue-900.to-slate-800 {
          background: linear-gradient(to right, #0f172a, #1e3a8a, #1e293b) !important;
        }
        .bg-gradient-to-r.from-sky-50.to-blue-50 {
          background: linear-gradient(to right, #f0f9ff, #eff6ff) !important;
        }
        .bg-gradient-to-r.from-emerald-50.to-sky-50 {
          background: linear-gradient(to right, #ecfdf5, #f0f9ff) !important;
        }
        .bg-gradient-to-br.from-sky-500.to-blue-600 {
          background: linear-gradient(to bottom right, #0ea5e9, #2563eb) !important;
        }
        .bg-gradient-to-br.from-slate-800.to-slate-700 {
          background: linear-gradient(to bottom right, #1e293b, #334155) !important;
        }
        .bg-gradient-to-br.from-sky-50.to-blue-50 {
          background: linear-gradient(to bottom right, #f0f9ff, #eff6ff) !important;
        }
        .bg-gradient-to-br.from-emerald-50.to-green-50 {
          background: linear-gradient(to bottom right, #ecfdf5, #f0fdf4) !important;
        }
      `;
      
      // Add the style override to the document
      document.head.appendChild(styleOverride);
      
      // Capture each slide as an image
      for (let i = 0; i < slides.length; i++) {
        try {
          // Navigate to the slide
          setCurrentSlide(i);
          
          // Wait for slide to render completely
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Get the slide content element
          const slideElement = slideRef.current;
          
          if (slideElement) {
            // Capture the slide with html2canvas
            const canvas = await html2canvas(slideElement, {
              width: 1920,
              height: 1080,
              scale: 2,
              useCORS: true,
              allowTaint: true,
              backgroundColor: slides[i].content === 'vision' ? '#0f172a' : '#ffffff',
              logging: false,
              removeContainer: true,
              foreignObjectRendering: false,
              ignoreElements: (element) => {
                // Skip any problematic elements
                return element.classList?.contains('ignore-capture') || false;
              }
            });
            
            // Convert canvas to base64 image
            const imageData = canvas.toDataURL('image/png', 1.0);
            
            // Add slide to PowerPoint with full-size image
            const slide = pptx.addSlide();
            slide.addImage({
              data: imageData,
              x: 0,
              y: 0,
              w: '100%',
              h: '100%',
              sizing: { type: 'contain', w: '100%', h: '100%' }
            });
          }
        } catch (slideError) {
          // Continue with next slide instead of failing completely
        }
      }
      
      // Clean up the style override
      const overrideElement = document.getElementById('presentation-export-override');
      if (overrideElement) {
        document.head.removeChild(overrideElement);
      }
      
      // Restore original slide
      setCurrentSlide(originalSlide);
      
      // Generate and download the PowerPoint file
      await pptx.writeFile({ fileName: 'AiyraOne_Investment_Presentation.pptx' });
      
    } catch (error) {
      setModalContent({
        title: 'Download Error',
        message: `Error generating PowerPoint presentation: ${error.message || 'Unknown error'}. Please try again.`,
        icon: <AlertTriangle className="w-8 h-8 text-red-500" />
      });
      setShowModal(true);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderSlideContent = () => {
    const slide = slides[currentSlide];
    
    switch (slide.content) {
      case "cover":
        return (
          <div className="h-screen flex flex-col py-4 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex-1 flex items-center">
              <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
                {/* Left Side - Content */}
                <div className="space-y-4">
                  {/* Logo */}
                  <div className="mb-4">
                    <Logo size="lg" className="mb-2" />
                  </div>
                  
                  {/* Main Title */}
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-black text-blue-900 mb-4 leading-tight">
                      AI-powered Property Management System for Independent Hotels & Motels
                    </h1>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    The intelligent hospitality platform that combines AI, automation, and analytics 
                    to help hotels maximize revenue, enhance guest experiences, and streamline operations.
                  </p>
                  
                  {/* Founder */}
                  <Card className="p-4 bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-slate-900">Anu</div>
                        <div className="text-base text-sky-600">Founder & CEO</div>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Right Side - Image */}
                <div className="relative">
                  <Card className="p-3 bg-white shadow-2xl border-2 border-slate-200">
                    <img
                      src={hotelTechImage}
                      alt="Hotel Management Software with AR Interface - AiyraOne Technology"
                      className="w-full aspect-[4/3] object-cover rounded-lg"
                    />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        );

      case "problem":
        return (
          <div className="h-screen flex flex-col py-4 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex-1 flex flex-col">
              {/* Header - Minimal */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-black text-blue-900 mb-2">
                  Hotel Operations Are Still Stuck in the Past
                </h2>
                <p className="text-base text-slate-600 max-w-4xl mx-auto">
                  Hotel & motel owners desire automation, but existing solutions are too expensive for small independents
                </p>
              </div>
              
              {/* Main Content Grid */}
              <div className="flex-1 grid grid-cols-12 gap-4">
                {/* Left Section - What Owners Want */}
                <div className="col-span-4 space-y-3">
                  <h3 className="text-xl font-bold text-emerald-600 text-center mb-3">What Owners Want</h3>
                  <div className="space-y-2">
                    {[
                      { icon: Zap, title: "Automation", desc: "Streamlined operations without manual work" },
                      { icon: Globe, title: "OTA Management", desc: "Seamless channel distribution" },
                      { icon: TrendingUp, title: "Dynamic Pricing", desc: "AI-powered revenue optimization" },
                      { icon: BarChart4, title: "Analytics", desc: "Data-driven insights and reporting" }
                    ].map((want, index) => (
                      <Card key={index} className="p-3 border border-slate-200 bg-white hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <want.icon className="w-4 h-4 text-emerald-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-slate-900 mb-1">{want.title}</h4>
                            <p className="text-xs text-slate-600 leading-tight">{want.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Center Section - Image and Results */}
                <div className="col-span-4 space-y-3">
                  {/* Frustrated Manager Image */}
                  <Card className="p-2 bg-white shadow-lg border border-slate-200">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758525588907-5a06b0b68462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVzdHJhdGVkJTIwaG90ZWwlMjBtYW5hZ2VyJTIwc3RyZXNzZWQlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NTk3Mzk3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Frustrated Hotel Manager"
                      className="w-full aspect-[3/2] object-cover rounded-lg"
                    />
                  </Card>
                  
                  {/* Results */}
                  <Card className="p-3 bg-slate-50 border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-2 text-center">The Result: Independent Hotels Are Left Behind</h4>
                    <p className="text-xs text-slate-700 mb-3 text-center leading-tight">
                      Independent hotels struggle with outdated systems while larger chains benefit from advanced technology.
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="text-lg font-black text-red-600">40%</div>
                        <div className="text-xs text-slate-600">of US hotels are independent</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-black text-red-600">78%</div>
                        <div className="text-xs text-slate-600">use 5+ disconnected systems</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-black text-red-600">$180K</div>
                        <div className="text-xs text-slate-600">lost annually per hotel</div>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Right Section - What They Actually Use */}
                <div className="col-span-4 space-y-3">
                  <h3 className="text-xl font-bold text-red-600 text-center mb-3">What They Actually Use</h3>
                  <div className="space-y-2">
                    {[
                      { icon: X, title: "Manual Processes", desc: "Time-consuming manual operations" },
                      { icon: AlertTriangle, title: "Expensive Legacy Systems", desc: "Too costly for independent hotels" },
                      { icon: Building, title: "Fragmented Tools", desc: "Multiple disconnected systems" },
                      { icon: DollarSign, title: "Lost Revenue", desc: "Poor pricing and overbookings" }
                    ].map((problem, index) => (
                      <Card key={index} className="p-3 border border-slate-200 bg-white hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <problem.icon className="w-4 h-4 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-slate-900 mb-1">{problem.title}</h4>
                            <p className="text-xs text-slate-600 leading-tight">{problem.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "solution":
        return (
          <div className="h-screen flex flex-col py-4 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex-1 flex flex-col">
              {/* Header - Compressed */}
              <div className="text-center mb-6">
                <h2 className="text-3xl lg:text-4xl font-black text-blue-900 mb-3">
                  A Unified, Intelligent PMS Platform
                </h2>
                <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                  AiyraOne automates hotel operations, integrates OTA channels, delivers live analytics, 
                  and optimizes pricing with AI, empowering hotels to operate smarter and boost revenue.
                </p>
              </div>
              
              {/* Main Content - Compressed */}
              <div className="flex-1 grid lg:grid-cols-2 gap-8 items-start">
                {/* Left Side - Features */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        icon: Building,
                        title: "Multi-Property Management",
                        features: ["Unified dashboard", "Cross-property insights", "Centralized control"]
                      },
                      {
                        icon: BarChart4,
                        title: "Live Analytics Dashboard",
                        features: ["Real-time metrics", "Performance tracking", "Custom reports"]
                      },
                      {
                        icon: TrendingUp,
                        title: "Dynamic Pricing Engine", 
                        features: ["AI-powered pricing", "Market analysis", "Revenue optimization"]
                      },
                      {
                        icon: Globe,
                        title: "OTA Channel Manager",
                        features: ["Multi-channel sync", "Inventory management", "Booking distribution"]
                      }
                    ].map((feature, index) => (
                      <Card key={index} className="p-4 border-2 border-sky-200 hover:border-sky-400 transition-all duration-300 bg-gradient-to-br from-white to-sky-50">
                        <div className="text-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 mb-2">{feature.title}</h3>
                          <div className="space-y-1">
                            {feature.features.map((item, idx) => (
                              <div key={idx} className="text-xs text-slate-600 flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Right Side - Product UI Mockup */}
                <div className="relative">
                  <Card className="p-4 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl shadow-2xl overflow-hidden">
                    {/* Laptop Frame */}
                    <div className="bg-slate-900 rounded-lg p-3">
                      <div className="bg-white rounded-md h-48 relative overflow-hidden">
                        {/* Dashboard Mockup */}
                        <div className="p-3">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="text-sm font-bold text-slate-900">AiyraOne Dashboard</h4>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          </div>
                          
                          {/* Revenue Chart */}
                          <div className="bg-sky-50 rounded-lg p-2 mb-3">
                            <div className="text-xs text-slate-600 mb-1">Daily Revenue</div>
                            <div className="text-sm font-bold text-slate-900">$12,450</div>
                            <div className="flex items-end gap-1 h-6">
                              {[40, 60, 30, 80, 50, 90, 70].map((height, idx) => (
                                <div key={idx} className={`bg-sky-500 rounded-sm w-2`} style={{ height: `${height}%` }}></div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Metrics Grid */}
                          <div className="grid grid-cols-3 gap-1">
                            <div className="bg-emerald-50 rounded p-1 text-center">
                              <div className="text-xs text-slate-600">Occupancy</div>
                              <div className="text-xs font-bold text-emerald-600">85%</div>
                            </div>
                            <div className="bg-blue-50 rounded p-1 text-center">
                              <div className="text-xs text-slate-600">ADR</div>
                              <div className="text-xs font-bold text-blue-600">$189</div>
                            </div>
                            <div className="bg-purple-50 rounded p-1 text-center">
                              <div className="text-xs text-slate-600">RevPAR</div>
                              <div className="text-xs font-bold text-purple-600">$160</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "market":
        return (
          <div className="h-screen flex flex-col py-4 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex-1 flex flex-col">
              {/* Header - Compressed */}
              <div className="text-center mb-4">
                <h2 className="text-3xl lg:text-4xl font-black text-blue-900 mb-2">
                  Growing Market, Early Validation
                </h2>
                <p className="text-base text-slate-600 max-w-4xl mx-auto">
                  Let's look at the opportunity and where we already are
                </p>
              </div>
              
              {/* Main Content - Compressed */}
              <div className="flex-1 grid lg:grid-cols-2 gap-6">
                {/* Left Side - Market Data */}
                <div className="space-y-4">
                  <Card className="p-4 bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                    <h3 className="text-lg font-bold mb-3 text-center">Market Size</h3>
                    <div className="text-center">
                      <div className="text-4xl font-black mb-1">$3.7B</div>
                      <div className="text-sm opacity-90 mb-2">Global Market 2024</div>
                      <div className="text-xs opacity-80">Growing rapidly with strong CAGR through 2032</div>
                    </div>
                  </Card>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Card className="p-3 text-center border border-slate-200">
                      <div className="text-2xl font-black text-slate-900 mb-1">112K+</div>
                      <div className="text-xs text-slate-600">Hotels & Motels in US</div>
                    </Card>
                    <Card className="p-3 text-center border border-slate-200">
                      <div className="text-2xl font-black text-slate-900 mb-1">40%</div>
                      <div className="text-xs text-slate-600">Are Independent</div>
                    </Card>
                  </div>
                  
                  <Card className="p-4 border-l-4 border-l-emerald-500 bg-emerald-50">
                    <h4 className="text-sm font-bold text-slate-900 mb-2">Key Insight</h4>
                    <p className="text-xs text-slate-700 leading-tight">
                      About 40% of U.S. hotels are independent/unbranded — many operators don't have 
                      corporate support for advanced PMS solutions.
                    </p>
                  </Card>
                </div>
                
                {/* Right Side - Traction */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">Our Traction</h3>
                  
                  <div className="space-y-3">
                    {[
                      {
                        icon: CheckCircle,
                        title: "Incorporated & Launched",
                        desc: "Company established with professional website",
                        status: "✅ Complete"
                      },
                      {
                        icon: Monitor,
                        title: "Prototype Designed",
                        desc: "Full system designed in Figma and development started",
                        status: "✅ Complete"
                      },
                      {
                        icon: Hotel,
                        title: "5 Hotel Clients Committed",
                        desc: "Signed clients ready to use the system at launch",
                        status: "✅ Secured"
                      },
                      {
                        icon: Rocket,
                        title: "Development in Progress",
                        desc: "MVP development underway for Q1 2026 launch",
                        status: "🚀 In Progress"
                      }
                    ].map((traction, index) => (
                      <Card key={index} className="p-3 border border-slate-200 hover:border-sky-300 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <traction.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="text-sm font-bold text-slate-900">{traction.title}</h4>
                              <Badge className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1">{traction.status}</Badge>
                            </div>
                            <p className="text-xs text-slate-600 leading-tight">{traction.desc}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  
                  <Card className="p-4 bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-2">Early Validation</h4>
                    <p className="text-xs text-slate-700 leading-tight">
                      This combination, a growing market, a large number of operators, and signed clients, 
                      shows that there is real demand and that AiyraOne can capture it.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        );

      case "regional":
        return (
          <div className="h-screen flex flex-col py-4 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex-1 flex flex-col">
              {/* Header - Compressed */}
              <div className="text-center mb-4">
                <h2 className="text-3xl lg:text-4xl font-black text-blue-900 mb-2">
                  Regional Addressable Market
                </h2>
                <p className="text-base text-slate-600 max-w-4xl mx-auto">
                  Our beachhead strategy: West Region hotels & independent properties
                </p>
              </div>
              
              {/* Main Content - Compressed */}
              <div className="flex-1 grid lg:grid-cols-2 gap-6">
                {/* Left Side - Strategy */}
                <div className="space-y-4">
                  <Card className="p-4 border border-sky-200 bg-gradient-to-br from-sky-50 to-blue-50">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Why West Region First?</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Target className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">Manageable Early Market</h4>
                          <p className="text-xs text-slate-600 leading-tight">Geographic proximity with similar regulations & infrastructure</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Hotel className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">High Density</h4>
                          <p className="text-xs text-slate-600 leading-tight">Large number of hotels and independent lodging operators</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Go-to-Market Plan</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs text-slate-700">Run pilot programs in target states</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs text-slate-700">Build local case studies and references</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs text-slate-700">Establish regional support infrastructure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs text-slate-700">Scale outward to national markets</span>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Right Side - Market Data */}
                <div className="space-y-4">
                  <div className="bg-slate-100 rounded-xl p-4 relative">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">West Region Market</h3>
                    
                    {/* Simplified Map */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-sky-500 rounded-lg p-3 text-white text-center relative">
                        <div className="text-sm font-bold mb-1">CA</div>
                        <div className="text-xs">California</div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Hotel className="w-2 h-2 text-slate-900" />
                        </div>
                      </div>
                      <div className="bg-blue-500 rounded-lg p-3 text-white text-center">
                        <div className="text-sm font-bold mb-1">AZ</div>
                        <div className="text-xs">Arizona</div>
                      </div>
                      <div className="bg-indigo-500 rounded-lg p-3 text-white text-center">
                        <div className="text-sm font-bold mb-1">UT</div>
                        <div className="text-xs">Utah</div>
                      </div>
                      <div className="bg-purple-500 rounded-lg p-3 text-white text-center">
                        <div className="text-sm font-bold mb-1">WA</div>
                        <div className="text-xs">Washington</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Market Table */}
                  <Card className="p-3">
                    <h4 className="text-sm font-bold text-slate-900 mb-3">Target Market Breakdown</h4>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-2 p-2 bg-slate-50 rounded text-xs">
                        <div className="font-semibold text-slate-900">State</div>
                        <div className="font-semibold text-slate-900">Hotels & Motels</div>
                        <div className="font-semibold text-slate-900">Est. Independent</div>
                      </div>
                      
                      {[
                        { state: "California", count: "~14,055", independent: "~40%" },
                        { state: "Arizona", count: "~2,800", independent: "~38%" },
                        { state: "Utah", count: "~1,200", independent: "~45%" },
                        { state: "Washington", count: "~2,400", independent: "~42%" }
                      ].map((data, index) => (
                        <div key={index} className="grid grid-cols-3 gap-2 p-2 border-b border-slate-200">
                          <div className="text-xs text-slate-900 font-medium">{data.state}</div>
                          <div className="text-xs text-slate-700">{data.count}</div>
                          <div className="text-xs text-emerald-600 font-semibold">{data.independent}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-gradient-to-r from-slate-900 to-blue-900 text-white text-center">
                    <h4 className="text-lg font-bold mb-2">Total Addressable Market</h4>
                    <div className="text-3xl font-black mb-1">8,000+</div>
                    <div className="text-sm opacity-90">Independent Properties in West Region</div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        );

      case "funding":
        return (
          <div className="h-screen flex flex-col py-4 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex-1 flex flex-col">
              {/* Header - Compressed */}
              <div className="text-center mb-4">
                <h2 className="text-3xl lg:text-4xl font-black text-blue-900 mb-2">
                  Pre-Seed Round: SAFE $2M Cap, 20% Discount
                </h2>
                <p className="text-base text-slate-600 max-w-4xl mx-auto">
                  Strategic funding to accelerate product development and market entry
                </p>
              </div>
              
              {/* Main Content - Compressed */}
              <div className="flex-1 grid lg:grid-cols-2 gap-6">
                {/* Left Side - Raise Details */}
                <div className="space-y-4">
                  <Card className="p-4 bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                    <h3 className="text-lg font-bold mb-3 text-center">Raise Target</h3>
                    <div className="text-center">
                      <div className="text-4xl font-black mb-2">$120K</div>
                      <div className="text-sm opacity-90 mb-3">Pre-Seed Investment</div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <div className="opacity-80">Structure</div>
                          <div className="font-semibold">SAFE Note</div>
                        </div>
                        <div>
                          <div className="opacity-80">Valuation Cap</div>
                          <div className="font-semibold">$2M</div>
                        </div>
                        <div>
                          <div className="opacity-80">Discount</div>
                          <div className="font-semibold">20%</div>
                        </div>
                        <div>
                          <div className="opacity-80">Timeline</div>
                          <div className="font-semibold">Q1 2025</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-4 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Why This Round?</h3>
                    <div className="space-y-2">
                      {[
                        { icon: Rocket, title: "MVP Development", desc: "Complete core platform development" },
                        { icon: Users, title: "Early Customers", desc: "Onboard committed hotel clients" },
                        { icon: TrendingUp, title: "Market Validation", desc: "Prove product-market fit in West region" },
                        { icon: Building, title: "Team Growth", desc: "Hire key technical and sales talent" }
                      ].map((reason, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <reason.icon className="w-3 h-3 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-900">{reason.title}</h4>
                            <p className="text-xs text-slate-600 leading-tight">{reason.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
                
                {/* Right Side - Use of Funds */}
                <div className="space-y-4">
                  <Card className="p-4 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">Use of Funds</h3>
                    
                    {/* Compact Pie Chart */}
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="absolute inset-0 rounded-full" style={{
                        background: `conic-gradient(
                          from 0deg,
                          #0ea5e9 0deg 162deg,
                          #3b82f6 162deg 252deg,
                          #6366f1 252deg 324deg,
                          #8b5cf6 324deg 360deg
                        )`
                      }}>
                        <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-lg font-bold text-slate-900">$120K</div>
                            <div className="text-xs text-slate-600">Total</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Fund Breakdown - Compact */}
                    <div className="space-y-2">
                      {[
                        { category: "Product Development", percentage: "45%", amount: "$54K", color: "bg-sky-500" },
                        { category: "Marketing & Client Onboarding", percentage: "25%", amount: "$30K", color: "bg-blue-500" },
                        { category: "Hiring & Infrastructure", percentage: "20%", amount: "$24K", color: "bg-indigo-500" },
                        { category: "Legal & Admin", percentage: "10%", amount: "$12K", color: "bg-purple-500" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 ${item.color} rounded`}></div>
                            <span className="text-xs font-medium text-slate-900">{item.category}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-slate-900">{item.percentage}</div>
                            <div className="text-xs text-slate-600">{item.amount}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  
                  <Card className="p-4 bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-2">18-Month Milestones</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        <span className="text-slate-700">Q1 2026: MVP Launch with 5 pilot customers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        <span className="text-slate-700">Q2 2026: 15 paying customers in West region</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        <span className="text-slate-700">Q3 2026: $50K ARR, Series A fundraising</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        <span className="text-slate-700">Q4 2026: National expansion readiness</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        );

      case "vision":
        return (
          <div className="h-screen flex flex-col justify-center items-center text-center px-6 py-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 30px 30px, white 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            <div className="relative max-w-6xl mx-auto flex-1 flex flex-col justify-center">
              {/* Main Headline */}
              <h1 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
                Building the AI Operating System for{' '}
                <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Independent Hotels
                </span>
              </h1>
              
              {/* Vision Quote */}
              <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mb-8">
                <div className="text-xl lg:text-2xl font-bold text-sky-400 mb-4">
                  "Empowering independent hotels with automation, analytics, and AI."
                </div>
                <p className="text-sm text-slate-300 leading-relaxed max-w-4xl mx-auto">
                  Our vision is to democratize advanced hotel technology, making AI-powered operations 
                  accessible to every independent property, regardless of size or budget.
                </p>
              </Card>
              
              {/* Founder & Contact */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Founder Section */}
                <Card className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-white">Anu</div>
                      <div className="text-sm text-sky-300">Founder & CEO</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hospitality technology veteran with deep understanding of independent hotel challenges 
                    and proven track record in AI-driven solutions.
                  </p>
                </Card>
                
                {/* Contact Section */}
                <Card className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-3">Let's Connect</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-sky-400" />
                      </div>
                      <div>
                        <div className="text-sm text-sky-400 font-medium">anu@aiyraone.com</div>
                        <div className="text-xs text-slate-400">Direct email</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-400 font-medium">www.aiyraone.com</div>
                        <div className="text-xs text-slate-400">Company website</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Call to Action */}
              <div className="space-y-4">
                <Card className="p-4 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl inline-block">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-sky-600 rounded-xl flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-white mb-1">Ready to Partner with AiyraOne?</h3>
                      <p className="text-xs text-slate-300">Join us in transforming the hospitality industry</p>
                    </div>
                    <Button 
                      onClick={() => onNavigate('contact')}
                      className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-4 py-2 text-sm font-bold"
                    >
                      Let's Talk
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
                
                {/* Tagline */}
                <div className="text-lg font-bold text-sky-400">
                  Smarter Hotels. Better Guests. Powered by AiyraOne.
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Presentation Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => onNavigate('about')}
                variant="outline"
                size="sm"
                className="border-white/70 bg-white/10 text-white hover:bg-white/20 hover:border-white"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to About
              </Button>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-bold">AiyraOne Inc</div>
              <div className="text-sm opacity-80">Pre-Seed Investment Opportunity</div>
            </div>
            
            <Button 
              onClick={downloadPowerPoint}
              disabled={isDownloading}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
              size="sm"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Download PowerPoint
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="min-h-screen" ref={slideRef}>
        {renderSlideContent()}
      </div>

      {/* Presentation Controls */}
      <div className="bg-slate-100 border-t border-slate-200 py-4 sticky bottom-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-sky-500' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="text-center mt-3">
            <h3 className="text-lg font-semibold text-slate-900">{slides[currentSlide].title}</h3>
            <p className="text-sm text-slate-600">{slides[currentSlide].subtitle}</p>
          </div>
        </div>
      </div>

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