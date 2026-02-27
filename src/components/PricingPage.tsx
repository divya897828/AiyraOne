import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      name: 'Essential',
      subtitle: 'Perfect for Independent Motels and New operators',
      description: 'The foundation for a profitable, digital-first operation',
      features: [
        'Priority Email & Self-Service Support',
        'AI Chatbot',
        'Mobile Access for Staff',
        '3-Click Check-in/Check-out',
        'Centralized Booking & OTA Channel Sync'
      ],
      cta: 'Request Demo',
      popular: false
    },
    {
      name: 'Professional',
      subtitle: 'Designed for growth-focused owners with Multi properties',
      description: 'Unlock high-ROI tools to increase profit margins',
      features: [
        'AI Chatbot',
        'Automated Audits',
        'Dynamic Pricing Module',
        'Multi-Property Dashboard',
        'User Role Security & Permissions Control'
      ],
      cta: 'Request Demo',
      popular: true
    },
    {
      name: 'Enterprise',
      subtitle: 'Built for Hotel chains and Management groups',
      description: 'Ultimate Scale & Customization',
      features: [
        'Full API Access for Custom Integrations',
        'High-Availability Architecture',
        'Private Cloud Hosting Options',
        '24/7 Dedicated Account Management',
        'Dedicated Implementation & Strategic Onboarding',
        'Custom Business Intelligence Suite'
      ],
      cta: 'Request Quote',
      popular: false
    }
  ];

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
            <Star className="w-4 h-4 mr-2" />
            ROI-Focused Investment Plans
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Invest in 
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"> Your Success</span>
          </h1>
          
          <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Choose the AiyraOne plan that aligns with your growth strategy. 
            Every solution is designed to deliver a high return on investment and maximize operational efficiency.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-10 transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-sky-500 border-2 bg-gradient-to-br from-sky-50 to-blue-50' 
                  : 'border-slate-200 hover:border-sky-300'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-black text-slate-900 mb-3">{plan.name}</h3>
                  <p className="text-slate-600 mb-8 text-lg">{plan.subtitle}</p>
                  
                  <div className="mb-8">
                    <div className="text-2xl font-bold text-slate-900 mb-2">Value-Based Pricing</div>
                    <p className="text-slate-600 text-sm">Customized to your property size & needs</p>
                  </div>
                  
                  <Button 
                    onClick={() => plan.cta === 'Request Quote' ? onNavigate('contact') : onNavigate('demo')}
                    className={`w-full py-4 text-lg font-semibold transition-all duration-200 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white hover:text-white shadow-lg' 
                        : 'border-sky-300 text-sky-700 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-400'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Key Features:</h4>
                    <p className="text-slate-600 text-sm italic">{plan.description}</p>
                  </div>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Why Hotel Owners Choose AiyraOne
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every plan includes our complete hospitality platform with measurable business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Investment",
                description: "Designed for measurable return on investment with clear business results",
                icon: "💰"
              },
              {
                title: "Guest Satisfaction",
                description: "Consistently improve guest ratings and reviews",
                icon: "⭐"
              },
              {
                title: "Operational Efficiency",
                description: "Significantly reduce staff workload through intelligent automation",
                icon: "⚡"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-8 text-center border-0 bg-gradient-to-br from-white to-slate-50">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Investment Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about investing in AiyraOne
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How quickly will I see ROI?",
                answer: "Most hotels see positive ROI quickly, with meaningful results typically achieved within the first year. Revenue increases and cost savings vary depending on your current operations and plan level."
              },
              {
                question: "What does implementation involve?",
                answer: "Our dedicated success team handles everything - from system setup to staff training. Most hotels are fully operational quickly with zero disruption to guest services."
              },
              {
                question: "How is pricing determined?",
                answer: "Pricing is based on your property size, operational complexity, and growth goals. We create a custom package that ensures maximum ROI for your specific business needs."
              },
              {
                question: "Can I start small and scale up?",
                answer: "Absolutely. AiyraOne grows with your business. Start with essential features and add capabilities as your operation expands. No penalties for upgrading."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-sky-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-slate-100 mb-6">
            Ready to Transform Your Hotel Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Trusted by successful hotels worldwide to maximize revenue and deliver exceptional guest experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('demo')}
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-xl px-8 py-4"
            >
              Schedule Your Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => onNavigate('contact')}
              variant="outline" 
              size="lg"
              className="border-white/70 bg-white/10 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm px-8 py-4"
            >
              Speak with Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}