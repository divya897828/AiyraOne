import React from 'react';
import { Logo } from './Logo';
import { Separator } from './ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    product: [
      { label: 'Solutions', page: 'solutions' },
      { label: 'Features', page: 'features' },
      { label: 'Pricing', page: 'pricing' },
      { label: 'Integrations', page: 'features' },
      { label: 'Mobile App', page: 'mobile-app' }
    ],
    company: [
      { label: 'About Us', page: 'about' },
      { label: 'Careers', page: 'careers' },
      { label: 'Press', page: 'resources' },
      { label: 'Partners', page: 'contact' }
    ],
    resources: [
      { label: 'Blog', page: 'resources' },
      { label: 'Help Center', page: 'help-center' },
      { label: 'API Documentation', page: 'resources' },
      { label: 'Webinars', page: 'resources' }
    ],
    support: [
      { label: 'Contact Us', page: 'contact' },
      { label: 'Book a Demo', page: 'demo' },
      { label: 'System Status', page: 'contact' },
      { label: 'Customer Stories', page: 'about' }
    ],
    legal: [
      { label: 'Privacy Policy', page: 'privacy' },
      { label: 'Terms of Service', page: 'terms' },
      { label: 'Cookie Policy', page: 'cookies' },
      { label: 'GDPR', page: 'privacy' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: XIcon, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Logo className="text-white" />
            </div>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold">AiyraOne</span> transforms hospitality management with intelligent automation, 
              advanced analytics, and premium support to help hotels maximize profitability 
              and deliver exceptional guest experiences.
            </p>
            
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <span className="font-medium">Support@aiyraone.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <span className="font-medium">+1 (530) 366-1683</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-sky-400" />
                <span className="font-medium">Serving Hotels Worldwide</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-slate-300 hover:text-sky-400 transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-slate-300 hover:text-sky-400 transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-slate-300 hover:text-sky-400 transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-slate-300 hover:text-sky-400 transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-slate-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 text-slate-300 mb-6 md:mb-0">
            {footerLinks.legal.map((link, index) => (
              <button
                key={index}
                onClick={() => onNavigate(link.page)}
                className="hover:text-sky-400 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-medium">Connect with <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold">AiyraOne</span>:</span>
            {socialLinks.map((social, index) => (
              <span
                key={index}
                aria-label={social.label}
                className="text-slate-400 transition-colors cursor-default"
              >
                <social.icon className="w-6 h-6" />
              </span>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="text-center text-slate-400">
          <p className="text-lg">&copy; {new Date().getFullYear()} <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold">AiyraOne</span>. All rights reserved. | Transforming hospitality with intelligent technology.</p>
        </div>
      </div>
    </footer>
  );
}