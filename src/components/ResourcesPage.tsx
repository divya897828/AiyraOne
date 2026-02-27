import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Modal } from './ui/modal';
import { 
  Search, 
  Calendar, 
  BookOpen, 
  HelpCircle,
  ArrowRight,
  Clock,
  Users,
  MessageCircle,
  X,
  Mail,
  Phone,
  Building2,
  Smartphone,
  Shield,
  Download,
  ExternalLink,
  TrendingUp,
  Newspaper,
  Star,
  Filter,
  FileText,
  Globe,
  Lightbulb,
  BarChart3,
  Target
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

export function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '', icon: null as React.ReactNode });
  const [demoFormData, setDemoFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    propertyType: '',
    message: '',
    preferredTime: ''
  });

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
      message: 'This section is currently under maintenance. We\'re working hard to bring you fresh content. Please check back soon!',
      icon: <FileText className="w-8 h-8 text-sky-500" />
    });
    setShowModal(true);
  };

  const handleDemoSubmit = () => {
    setModalContent({
      title: 'Demo Request Received',
      message: 'Thank you for your interest! Our team will contact you within 24 hours to schedule your personalized demo.',
      icon: <MessageCircle className="w-8 h-8 text-sky-500" />
    });
    setShowModal(true);
    setShowDemoForm(false);
    setDemoFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      propertyType: '',
      message: '',
      preferredTime: ''
    });
  };

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How quickly can I implement AiyraOne in my hotel?',
          answer: 'Most hotels are fully operational within 48-72 hours. Our onboarding team handles system setup, data migration, and staff training. The process includes connecting your existing systems, importing property data, and configuring automated features.'
        },
        {
          question: 'Do I need technical expertise to use AiyraOne?',
          answer: 'No technical expertise required. AiyraOne is designed for hospitality professionals, not IT specialists. Our intuitive interface requires minimal training, and our support team provides comprehensive onboarding and ongoing assistance.'
        },
        {
          question: 'How does AiyraOne integrate with my current systems?',
          answer: 'AiyraOne connects with 200+ hospitality systems including major PMS platforms, OTAs, payment processors, and accounting software. Our integration team ensures seamless data flow between all your existing tools.'
        },
        {
          question: 'What happens to my existing data during setup?',
          answer: 'All your historical data is safely migrated and preserved. We import guest profiles, booking history, financial records, and operational data to ensure continuity. The migration process is automated and secure.'
        }
      ]
    },
    {
      category: 'Features & Technology',
      questions: [
        {
          question: 'How accurate is the AI revenue management?',
          answer: 'Our AI analyzes 300+ data points including market demand, competitor rates, local events, weather patterns, and historical trends. This delivers 95%+ accuracy in pricing recommendations and 35% average revenue increase.'
        },
        {
          question: 'Can I customize the automation rules?',
          answer: 'Absolutely. You maintain full control with customizable rules, pricing caps, approval workflows, and manual overrides. The AI learns from your preferences to improve recommendations over time.'
        },
        {
          question: 'How does the mobile app handle offline situations?',
          answer: 'The mobile app stores critical data locally, allowing you to access key metrics, manage reservations, and handle urgent tasks without internet. Data automatically syncs when connection is restored.'
        },
        {
          question: 'What security measures protect our guest data?',
          answer: 'AiyraOne uses enterprise-grade security including end-to-end encryption, SOC 2 compliance, GDPR compliance, regular security audits, and secure cloud infrastructure with 99.9% uptime guarantee.'
        }
      ]
    },
    {
      category: 'Pricing & Plans',
      questions: [
        {
          question: 'How is pricing calculated for my property?',
          answer: 'Pricing is based on your property size, feature requirements, and business goals. We offer flexible plans that scale with your success, ensuring maximum ROI for your specific needs.'
        },
        {
          question: 'Are there setup fees or long-term contracts?',
          answer: 'No setup fees or long-term contracts required. We offer month-to-month flexibility with the option for annual discounts. Implementation and training are included at no extra cost.'
        },
        {
          question: 'Can I change plans as my business grows?',
          answer: 'Yes, plans can be upgraded or downgraded anytime. Changes are prorated and take effect immediately. Our success team helps ensure you\'re always on the optimal plan for your needs.'
        }
      ]
    },
    {
      category: 'Support & Training',
      questions: [
        {
          question: 'What support is available after implementation?',
          answer: '24/7 technical support via chat, email, and phone. Plus dedicated customer success manager, regular check-ins, ongoing training sessions, and access to our knowledge base and video tutorials.'
        },
        {
          question: 'Do you provide staff training?',
          answer: 'Yes, comprehensive training is included for all staff levels. We provide role-specific training programs, video tutorials, documentation, and ongoing support to ensure your team maximizes the platform\'s capabilities.'
        },
        {
          question: 'How do you handle feature requests and feedback?',
          answer: 'Customer feedback drives our product roadmap. We have a formal feature request process, regular customer advisory sessions, and quarterly product updates based on user needs and industry trends.'
        }
      ]
    }
  ];

  const resources = [
    {
      title: 'User Manual & Documentation',
      description: 'Comprehensive guides for all AiyraOne features',
      icon: BookOpen,
      action: 'Download PDF',
      link: '#'
    },
    {
      title: 'Video Training Library',
      description: 'Step-by-step video tutorials for every feature',
      icon: Calendar,
      action: 'Access Videos',
      link: '#'
    },
    {
      title: 'API Documentation',
      description: 'Technical documentation for developers',
      icon: ExternalLink,
      action: 'View Docs',
      link: '#'
    },
    {
      title: 'Best Practices Guide',
      description: 'Industry best practices and optimization tips',
      icon: Shield,
      action: 'Download Guide',
      link: '#'
    }
  ];

  const latestArticles = [
    {
      id: 1,
      title: 'AI-Powered Revenue Management: The Future of Hotel Pricing',
      excerpt: 'Discover how artificial intelligence is revolutionizing hotel revenue management with dynamic pricing strategies that adapt to market conditions in real-time.',
      category: 'Revenue Management',
      readTime: '8 min read',
      date: 'January 15, 2025',
      featured: true,
      author: 'Sarah Chen, Revenue Strategy Expert',
      image: 'https://images.unsplash.com/photo-1627405782446-6b512e76e049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcmV2ZW51ZSUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmQlMjBob3RlbCUyMHByaWNpbmd8ZW58MXx8fHwxNzU5NjU3NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'Guest Experience Automation: Beyond Basic Chatbots',
      excerpt: 'Explore advanced automation techniques that create personalized guest experiences while reducing operational overhead.',
      category: 'Guest Experience',
      readTime: '6 min read',
      date: 'January 12, 2025',
      featured: true,
      author: 'Michael Rodriguez, CX Director',
      image: 'https://images.unsplash.com/photo-1558959357-685f9c7ace7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGd1ZXN0JTIwY2hhdGJvdCUyMGF1dG9tYXRpb24lMjBjb25jaWVyZ2UlMjB0YWJsZXR8ZW58MXx8fHwxNzU5NjU3NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      title: 'Sustainability in Hospitality: Technology-Driven Green Initiatives',
      excerpt: 'Learn how modern hotel technology can significantly reduce environmental impact while improving operational efficiency.',
      category: 'Sustainability',
      readTime: '7 min read',
      date: 'January 10, 2025',
      featured: true,
      author: 'Dr. Emma Thompson, Sustainability Expert',
      image: 'https://images.unsplash.com/photo-1602751020702-39995172bafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGdyZWVuJTIwc3VzdGFpbmFibGUlMjBsdXh0cnklMjBob3RlbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1OTY1NzQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      title: 'Multi-Property Management: Scaling Operations Efficiently',
      excerpt: 'Best practices for managing multiple properties with centralized systems while maintaining local flexibility.',
      category: 'Operations',
      readTime: '9 min read',
      date: 'January 8, 2025',
      featured: false,
      author: 'David Park, Operations Consultant',
      image: 'https://images.unsplash.com/photo-1759038086454-5644437ccf4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNoYWluJTIwbXVsdGklMjBwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzU5NjU3NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      title: 'Data Analytics in Hospitality: From Metrics to Actionable Insights',
      excerpt: 'Transform raw hotel data into strategic business intelligence that drives revenue growth and operational improvements.',
      category: 'Analytics',
      readTime: '10 min read',
      date: 'January 5, 2025',
      featured: false,
      author: 'Lisa Wang, Data Science Lead',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJ1c2luZXNzJTIwaW50ZWxsaWdlbmNlJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzJTIwZGF0YXxlbnwxfHx8fDE3NTk2NTc0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      title: 'Mobile-First Hotel Management: Empowering On-the-Go Operations',
      excerpt: 'How mobile technology is enabling hotel managers to maintain full operational control from anywhere.',
      category: 'Technology',
      readTime: '5 min read',
      date: 'January 3, 2025',
      featured: false,
      author: 'Alex Kumar, Mobile Technology Specialist',
      image: 'https://images.unsplash.com/photo-1700569861349-266929be3d4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBob3RlbCUyMGFwcCUyMHNtYXJ0cGhvbmUlMjBtYW5hZ2VtZW50JTIwaW50ZXJmYWNlJTIwbW9kZXJufGVufDF8fHx8MTc1OTY1NzQ3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 7,
      title: 'Contactless Services: The New Standard in Hotel Operations',
      excerpt: 'Implementing contactless check-in, mobile keys, and digital concierge services for enhanced guest safety and convenience.',
      category: 'Guest Experience',
      readTime: '6 min read',
      date: 'December 28, 2024',
      featured: false,
      author: 'Jennifer Martinez, Guest Services Director',
      image: 'https://images.unsplash.com/photo-1589187775328-882e91b3db4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0bGVzcyUyMGhvdGVsJTIwY2hlY2slMjBpbiUyMG1vYmlsZSUyMGtleSUyMGRpZ2l0YWwlMjBsb2JieXxlbnwxfHx8fDE3NTk2NTc0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 8,
      title: 'Integration Strategies: Connecting Your Hotel Tech Stack',
      excerpt: 'Best practices for seamlessly integrating PMS, POS, CRM, and other essential hotel systems for unified operations.',
      category: 'Technology',
      readTime: '8 min read',
      date: 'December 25, 2024',
      featured: false,
      author: 'Robert Kim, Systems Integration Expert',
      image: 'https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNvZnR3YXJlJTIwaW50ZWdyYXRpb24lMjBzeXN0ZW1zJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5NjU3NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 9,
      title: 'Workforce Management in the Digital Age',
      excerpt: 'Optimizing staff scheduling, training, and performance management with intelligent workforce management tools.',
      category: 'Operations',
      readTime: '7 min read',
      date: 'December 22, 2024',
      featured: false,
      author: 'Amanda Foster, HR Technology Consultant',
      image: 'https://images.unsplash.com/photo-1663194815198-3e3183f9d9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YWZmJTIwd29ya2ZvcmNlJTIwbWFuYWdlbWVudCUyMHRlYW0lMjBtZWV0aW5nJTIwbW9kZXJuJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTY1NzQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 10,
      title: 'Financial Performance Tracking: Key Metrics for Hotel Success',
      excerpt: 'Essential financial KPIs every hotel manager should monitor and how to use them for strategic decision-making.',
      category: 'Finance',
      readTime: '9 min read',
      date: 'December 20, 2024',
      featured: false,
      author: 'Thomas Anderson, Hotel Finance Expert',
      image: 'https://images.unsplash.com/photo-1669399213378-2853e748f217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGZpbmFuY2lhbCUyMHBlcmZvcm1hbmNlJTIwbWV0cmljcyUyMGNoYXJ0cyUyMHJldmVudWUlMjBncm93dGh8ZW58MXx8fHwxNzU5NjU3NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 11,
      title: 'Competitive Analysis: Staying Ahead in Dynamic Markets',
      excerpt: 'Tools and techniques for monitoring competitor performance and adjusting your strategy accordingly.',
      category: 'Revenue Management',
      readTime: '6 min read',
      date: 'December 18, 2024',
      featured: false,
      author: 'Sophie Chen, Market Analysis Specialist',
      image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wZXRpdGl2ZSUyMG1hcmtldCUyMGFuYWx5c2lzJTIwaG90ZWwlMjBidXNpbmVzcyUyMHN0cmF0ZWd5JTIwY2hhcnRzfGVufDF8fHx8MTc1OTY1NzQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 12,
      title: 'Customer Retention Strategies for Independent Hotels',
      excerpt: 'Proven tactics for building guest loyalty and increasing repeat bookings without the backing of major brands.',
      category: 'Marketing',
      readTime: '8 min read',
      date: 'December 15, 2024',
      featured: false,
      author: 'Mark Johnson, Independent Hotel Consultant',
      image: 'https://images.unsplash.com/photo-1695806109708-f5d5a2da99bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGd1ZXN0JTIwbG95YWx0eSUyMHByb2dyYW0lMjBjdXN0b21lciUyMHJldGVudGlvbiUyMGhhcHB5JTIwZ3Vlc3RzfGVufDF8fHx8MTc1OTY1NzQ5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 13,
      title: 'Cybersecurity Best Practices for Hotels',
      excerpt: 'Protecting guest data and hotel systems from evolving cyber threats with comprehensive security measures.',
      category: 'Security',
      readTime: '7 min read',
      date: 'December 12, 2024',
      featured: false,
      author: 'Rachel Taylor, Cybersecurity Expert',
      image: 'https://images.unsplash.com/photo-1614064642261-3ccbfafa481b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGN5YmVyc2VjdXJpdHklMjBkYXRhJTIwcHJvdGVjdGlvbiUyMHNoaWVsZCUyMHNlY3VyaXR5JTIwbG9ja3xlbnwxfHx8fDE3NTk2NTc0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 14,
      title: 'Voice Technology in Hospitality: Smart Room Experiences',
      excerpt: 'Implementing voice assistants and smart room controls to enhance guest convenience and operational efficiency.',
      category: 'Technology',
      readTime: '5 min read',
      date: 'December 10, 2024',
      featured: false,
      author: 'Chris Wilson, IoT Solutions Architect',
      image: 'https://images.unsplash.com/photo-1644477547567-c511e3547210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvdGVsJTIwcm9vbSUyMHZvaWNlJTIwYXNzaXN0YW50JTIwYWxleGElMjBsdXh0cnklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTY1NzQ5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 15,
      title: 'Crisis Management: Building Resilient Hotel Operations',
      excerpt: 'Strategies for maintaining business continuity and guest satisfaction during unexpected disruptions.',
      category: 'Operations',
      readTime: '10 min read',
      date: 'December 8, 2024',
      featured: false,
      author: 'Dr. Patricia Adams, Crisis Management Consultant',
      image: 'https://images.unsplash.com/photo-1758404958502-44f156617bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNyaXNpcyUyMG1hbmFnZW1lbnQlMjBlbWVyZ2VuY3klMjBwbGFubmluZyUyMGJ1c2luZXNzJTIwY29udGludWl0eXxlbnwxfHx8fDE3NTk2NTc1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 16,
      title: 'Personalization at Scale: AI-Driven Guest Experiences',
      excerpt: 'Using artificial intelligence to deliver personalized services and recommendations to every guest.',
      category: 'Guest Experience',
      readTime: '8 min read',
      date: 'December 5, 2024',
      featured: false,
      author: 'Kevin Lee, AI Product Manager',
      image: 'https://images.unsplash.com/photo-1741795854922-87217b375e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHBlcnNvbmFsaXplZCUyMGhvdGVsJTIwZ3Vlc3QlMjBleHBlcmllbmNlJTIwbHV4dXJ5JTIwc2VydmljZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5NjU3NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const newsUpdates = [
    {
      id: 1,
      title: 'AiyraOne Announces Strategic Partnership with Leading PMS Providers',
      summary: 'New integrations expand compatibility with 50+ additional property management systems.',
      date: 'January 18, 2025',
      type: 'Partnership'
    },
    {
      id: 2,
      title: 'Q4 2024 Platform Updates: Enhanced Mobile App and New Analytics Features',
      summary: 'Latest release includes improved mobile interface and advanced reporting capabilities.',
      date: 'January 16, 2025',
      type: 'Product Update'
    },
    {
      id: 3,
      title: 'Industry Recognition: AiyraOne Named "Best Innovation" at HotelTech Awards 2025',
      summary: 'Recognition for groundbreaking AI-powered revenue management solution.',
      date: 'January 14, 2025',
      type: 'Award'
    },
    {
      id: 4,
      title: 'New Compliance Features Support International Data Privacy Regulations',
      summary: 'Enhanced security measures ensure GDPR, CCPA, and other regulatory compliance.',
      date: 'January 11, 2025',
      type: 'Compliance'
    },
    {
      id: 5,
      title: 'Customer Success: Independent Hotel Chain Reports 40% Revenue Increase',
      summary: 'Case study highlights the impact of AI-driven pricing optimization.',
      date: 'January 9, 2025',
      type: 'Case Study'
    },
    {
      id: 6,
      title: 'AiyraOne Expands Global Presence with New European Data Centers',
      summary: 'Enhanced performance and data residency for European hotel clients.',
      date: 'January 7, 2025',
      type: 'Infrastructure'
    }
  ];

  const categories = [
    'all',
    'Revenue Management',
    'Guest Experience',
    'Technology',
    'Operations',
    'Analytics',
    'Marketing',
    'Finance',
    'Sustainability',
    'Security'
  ];

  const filteredArticles = latestArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Demo Form Modal
  if (showDemoForm) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-black text-slate-900 mb-2">
                  Schedule Your AiyraOne Demo
                </h1>
                <p className="text-slate-600">Get a personalized demonstration of how AiyraOne can transform your hotel operations.</p>
              </div>
              <Button
                variant="outline"
                onClick={() => setShowDemoForm(false)}
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Close
              </Button>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={demoFormData.firstName}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={demoFormData.lastName}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={demoFormData.email}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={demoFormData.phone}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Hotel/Company Name *</Label>
                  <Input
                    id="company"
                    value={demoFormData.company}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, company: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <select
                    id="propertyType"
                    value={demoFormData.propertyType}
                    onChange={(e) => setDemoFormData(prev => ({ ...prev, propertyType: e.target.value }))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                  >
                    <option value="">Select property type</option>
                    <option value="independent-hotel">Independent Hotel</option>
                    <option value="hotel-chain">Hotel Chain</option>
                    <option value="resort">Resort & Luxury Property</option>
                    <option value="hostel">Hostel</option>
                    <option value="vacation-rental">Vacation Rental</option>
                    <option value="apartment">Apartment Community</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="preferredTime">Preferred Demo Time</Label>
                <select
                  id="preferredTime"
                  value={demoFormData.preferredTime}
                  onChange={(e) => setDemoFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Tell us about your needs (Optional)</Label>
                <Textarea
                  id="message"
                  value={demoFormData.message}
                  onChange={(e) => setDemoFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="What specific challenges would you like to address? How many properties do you manage?"
                  rows={4}
                />
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  onClick={handleDemoSubmit}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3"
                  disabled={!demoFormData.firstName || !demoFormData.lastName || !demoFormData.email || !demoFormData.company || !demoFormData.propertyType}
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowDemoForm(false)}
                >
                  Cancel
                </Button>
              </div>

              <div className="bg-sky-50 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-slate-900 mb-2">What to Expect in Your Demo:</h4>
                <ul className="text-slate-600 space-y-1">
                  <li>• Personalized walkthrough of AiyraOne features</li>
                  <li>• Live demonstration with your property data</li>
                  <li>• Q&A session with our hospitality experts</li>
                  <li>• Custom pricing and implementation timeline</li>
                  <li>• Duration: 45-60 minutes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            <BookOpen className="w-4 h-4 mr-2" />
            Resources & Support
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Get the Most Out of 
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> AiyraOne</span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Your Hub for Training, Support, and Success. Instant access to documentation, video guides, and 1:1 help from our hospitality experts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="demo" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="demo" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Product Demo
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Documentation
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </TabsTrigger>
            </TabsList>

            {/* Product Demo Tab */}
            <TabsContent value="demo" className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Schedule Your Product Demo</h2>
                <div className="max-w-4xl mx-auto">
                  <Card className="p-8 border-2 border-sky-200 bg-gradient-to-br from-white to-sky-50">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                        <Building2 className="w-10 h-10 text-white" />
                      </div>
                      <Badge className="bg-sky-100 text-sky-700 mb-4">Live Demo</Badge>
                      <h3 className="text-3xl font-black text-slate-900 mb-4">
                        See AiyraOne in Action
                      </h3>
                      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                        Get a personalized demonstration of how AiyraOne can transform your hotel operations. 
                        See real features, ask questions, and discover how we can help grow your business.
                      </p>
                    </div>

                    <div className="max-w-3xl mx-auto mb-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center md:text-left">
                          <h4 className="font-bold text-slate-900 mb-4">What You'll See:</h4>
                          <ul className="space-y-3 text-slate-600">
                            <li className="flex items-center justify-center md:justify-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-sky-500 flex-shrink-0"></div>
                              AI Revenue Management in action
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-sky-500 flex-shrink-0"></div>
                              Real-time analytics dashboard
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-sky-500 flex-shrink-0"></div>
                              Guest communication tools
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-sky-500 flex-shrink-0"></div>
                              Mobile app demonstration
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-sky-500 flex-shrink-0"></div>
                              Integration capabilities
                            </li>
                          </ul>
                        </div>

                        <div className="text-center md:text-left">
                          <h4 className="font-bold text-slate-900 mb-4">Demo Details:</h4>
                          <ul className="space-y-3 text-slate-600">
                            <li className="flex items-center justify-center md:justify-start gap-3">
                              <Clock className="w-5 h-5 text-sky-500 flex-shrink-0" />
                              <span>45-60 minutes duration</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                              <Users className="w-5 h-5 text-sky-500 flex-shrink-0" />
                              <span>One-on-one with expert</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                              <MessageCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                              <span>Live Q&A session</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                              <Smartphone className="w-5 h-5 text-sky-500 flex-shrink-0" />
                              <span>Via Zoom or in-person</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                              <Shield className="w-5 h-5 text-sky-500 flex-shrink-0" />
                              <span>No obligation required</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button 
                        onClick={() => setShowDemoForm(true)}
                        size="lg"
                        className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-xl px-12 py-6 text-xl font-bold"
                      >
                        Schedule Your Demo
                        <ArrowRight className="ml-3 w-6 h-6" />
                      </Button>
                      <p className="text-slate-500 mt-4">
                        See how AiyraOne can transform your hotel operations
                      </p>
                    </div>
                  </Card>

                  <div className="mt-8 grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center border border-slate-200">
                      <Mail className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                      <h4 className="font-bold text-slate-900 mb-2">Email Demo Request</h4>
                      <p className="text-slate-600 text-sm mb-4">
                        Send us your details and we'll contact you within 24 hours
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onNavigate('contact')}
                      >
                        Email Us
                      </Button>
                    </Card>

                    <Card className="p-6 text-center border border-slate-200">
                      <Phone className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                      <h4 className="font-bold text-slate-900 mb-2">Call for Demo</h4>
                      <p className="text-slate-600 text-sm mb-4">
                        Speak directly with our sales team for immediate assistance
                      </p>
                      <Button variant="outline" size="sm">
                        +1 (530) 366-1683
                      </Button>
                    </Card>

                    <Card className="p-6 text-center border border-slate-200">
                      <MessageCircle className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                      <h4 className="font-bold text-slate-900 mb-2">Live Chat</h4>
                      <p className="text-slate-600 text-sm mb-4">
                        Chat with our team for instant demo scheduling
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={showLiveChatModal}
                      >
                        Start Chat
                      </Button>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Latest Industry Articles Section */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <Badge className="bg-sky-100 text-sky-700 mb-4">
                    <Newspaper className="w-4 h-4 mr-2" />
                    Industry Insights 2025
                  </Badge>
                  <h2 className="text-4xl font-black text-slate-900 mb-4">
                    Latest Industry Articles
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    Stay ahead with expert insights, trends, and best practices from hospitality technology leaders
                  </p>
                </div>

                {/* Search and Filter */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-slate-500" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Featured Articles */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-500" />
                    Featured Articles
                  </h3>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {filteredArticles.filter(article => article.featured).map((article, index) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-sky-200">
                        <div className="h-48 relative overflow-hidden">
                          <ImageWithFallback 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="p-6">
                          <Badge className="bg-sky-100 text-sky-700 mb-3">
                            {article.category}
                          </Badge>
                          <h4 className="font-bold text-slate-900 mb-3 line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {article.readTime}
                            </span>
                            <span>{article.date}</span>
                          </div>
                          <p className="text-xs text-slate-500 mb-4">By {article.author}</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full hover:bg-sky-50 hover:border-sky-300"
                            onClick={showMaintenanceModal}
                          >
                            Read Article
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* All Articles Grid */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    All Articles ({filteredArticles.length})
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((article, index) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-sky-300">
                        <div className="h-32 relative overflow-hidden">
                          <ImageWithFallback 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>
                        <div className="p-5">
                          <Badge variant="outline" className="mb-2 text-xs">
                            {article.category}
                          </Badge>
                          <h4 className="font-bold text-slate-900 mb-2 text-sm line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-slate-600 text-xs mb-3 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                            <span>{article.date}</span>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full text-xs h-8"
                            onClick={showMaintenanceModal}
                          >
                            Read More
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Latest News & Updates */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-sky-500" />
                    Latest News & Updates
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {newsUpdates.map((news, index) => (
                      <Card key={news.id} className="p-4 border border-slate-200 hover:border-sky-300 transition-all duration-300">
                        <div className="flex items-start justify-between mb-3">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              news.type === 'Partnership' ? 'border-green-300 text-green-700' :
                              news.type === 'Product Update' ? 'border-blue-300 text-blue-700' :
                              news.type === 'Award' ? 'border-yellow-300 text-yellow-700' :
                              news.type === 'Case Study' ? 'border-purple-300 text-purple-700' :
                              'border-slate-300 text-slate-700'
                            }`}
                          >
                            {news.type}
                          </Badge>
                          <span className="text-xs text-slate-500">{news.date}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 text-sm">
                          {news.title}
                        </h4>
                        <p className="text-slate-600 text-xs mb-3">
                          {news.summary}
                        </p>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs h-7 p-2"
                          onClick={showMaintenanceModal}
                        >
                          Read More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Quick Links & Tools */}
                <div className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                    Quick Access Tools
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <Card className="p-4 text-center border border-slate-200 hover:border-sky-300 transition-all duration-300 cursor-pointer">
                      <BarChart3 className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Revenue Calculator</h4>
                      <p className="text-xs text-slate-600 mb-3">Calculate potential revenue impact</p>
                      <Button variant="outline" size="sm" className="text-xs h-7" onClick={showMaintenanceModal}>
                        Try Tool
                      </Button>
                    </Card>
                    <Card className="p-4 text-center border border-slate-200 hover:border-sky-300 transition-all duration-300 cursor-pointer">
                      <Target className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                      <h4 className="font-bold text-slate-900 text-sm mb-2">ROI Estimator</h4>
                      <p className="text-xs text-slate-600 mb-3">Estimate return on investment</p>
                      <Button variant="outline" size="sm" className="text-xs h-7" onClick={showMaintenanceModal}>
                        Calculate
                      </Button>
                    </Card>
                    <Card className="p-4 text-center border border-slate-200 hover:border-sky-300 transition-all duration-300 cursor-pointer">
                      <Lightbulb className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Best Practices</h4>
                      <p className="text-xs text-slate-600 mb-3">Industry optimization tips</p>
                      <Button variant="outline" size="sm" className="text-xs h-7" onClick={showMaintenanceModal}>
                        Learn More
                      </Button>
                    </Card>
                    <Card className="p-4 text-center border border-slate-200 hover:border-sky-300 transition-all duration-300 cursor-pointer">
                      <Globe className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Market Insights</h4>
                      <p className="text-xs text-slate-600 mb-3">Regional market trends</p>
                      <Button variant="outline" size="sm" className="text-xs h-7" onClick={showMaintenanceModal}>
                        View Data
                      </Button>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Documentation Tab */}
            <TabsContent value="resources" className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Documentation & Resources</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {resources.map((resource, index) => (
                    <Card key={index} className="p-6 text-center border-2 border-slate-200 hover:border-sky-400 transition-all duration-300 cursor-pointer">
                      <resource.icon className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                      <h3 className="font-bold text-slate-900 mb-2">{resource.title}</h3>
                      <p className="text-sm text-slate-600 mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        {resource.action}
                      </Button>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Card className="p-8 bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Need Additional Help?</h3>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                      Our support team is available 24/7 to assist with any questions about AiyraOne features, 
                      implementation, or best practices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        onClick={() => onNavigate('help-center')}
                        className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                      >
                        Visit Help Center
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => onNavigate('contact')}
                      >
                        Contact Support
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* FAQ Tab */}
            <TabsContent value="faq" className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  {faqs.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h3 className="text-xl font-bold text-slate-900 mb-6">{category.category}</h3>
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border border-slate-200 rounded-lg px-6">
                            <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-sky-600">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Card className="p-8 bg-slate-50 border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Still Have Questions?</h3>
                    <p className="text-slate-600 mb-6">
                      Can't find what you're looking for? Our support team is here to help.
                    </p>
                    <Button 
                      onClick={() => onNavigate('contact')}
                      className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                    >
                      Contact Support
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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