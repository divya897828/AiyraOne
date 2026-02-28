import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Modal } from './ui/modal';
import { CheckCircle, Calendar, Clock, Users, TrendingUp, BarChart3, DollarSign, AlertCircle } from 'lucide-react';

interface DemoPageProps {
  onNavigate: (page: string) => void;
}

export function DemoPage({ onNavigate }: DemoPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    properties: '',
    currentSystem: '',
    challenges: '',
    demoDate: '',
    demoTime: ''
  });
  
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: '',
    icon: null as React.ReactNode
  });

  // Format phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedPhoneNumber = phoneNumber.substring(0, 10);
    
    // Format the phone number
    if (limitedPhoneNumber.length <= 3) {
      return limitedPhoneNumber;
    } else if (limitedPhoneNumber.length <= 6) {
      return `(${limitedPhoneNumber.slice(0, 3)}) ${limitedPhoneNumber.slice(3)}`;
    } else {
      return `(${limitedPhoneNumber.slice(0, 3)}) ${limitedPhoneNumber.slice(3, 6)}-${limitedPhoneNumber.slice(6)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({...formData, phone: formatted});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Phone validation (Keep your existing logic)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      setModalState({
        isOpen: true,
        title: 'Invalid Phone Number',
        message: 'Please enter a valid 10-digit US phone number.',
        icon: <AlertCircle className="w-6 h-6 text-red-500" />
      });
      return;
    }
try {
  const response = await fetch("https://formspree.io/f/mykdagoz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData),
  });

  // CHECK THIS LINE: If response.ok is true (status 200-299), it worked!
  if (response.ok) {
    setModalState({
      isOpen: true,
      title: 'Thank You!',
      message: 'We\'ve received your request and will contact you shortly.',
      icon: <CheckCircle className="w-6 h-6 text-green-500" />
    });
    // Clear form
    setFormData({ name: '', email: '', phone: '', company: '', properties: '', currentSystem: '', challenges: '', demoDate: '', demoTime: '' });
  } else {
    // This runs if Formspree returns an error code (like 404 or 403)
    throw new Error("Server rejected the submission");
  }
} catch (error) {
  // This runs if there's a network error OR if your code above crashed
  setModalState({
    isOpen: true,
    title: 'Submission Error',
    message: 'There was a problem. Please check your internet and try again.',
    icon: <AlertCircle className="w-6 h-6 text-red-500" />
  });
}

  };



  const benefits = [
    {
      icon: TrendingUp,
      title: 'See Revenue Growth Potential',
      description: 'Discover how dynamic pricing can increase your revenue by 15-30%'
    },
    {
      icon: BarChart3,
      title: 'Live Dashboard Walkthrough',
      description: 'Experience real-time analytics and KPI tracking in action'
    },
    {
      icon: DollarSign,
      title: 'ROI Calculator',
      description: 'Get a personalized analysis of your potential return on investment'
    },
    {
      icon: Users,
      title: 'Staff Efficiency Gains',
      description: 'Learn how to reduce manual work and streamline operations'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-gray-900 mb-6">
            Book Your 
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Free Demo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            See how Aiyra can transform your hotel operations in just 30 minutes. 
            Get a personalized walkthrough with real data examples.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              30-minute session
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No obligation
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              Hospitality expert
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Demo Benefits */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl text-gray-900 mb-6">What You'll See in Your Demo</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our hospitality experts will show you exactly how Aiyra can solve your specific challenges 
                  and help you achieve your business goals.
                </p>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-sky-50 p-6 rounded-lg border border-sky-200">
                <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Demo Agenda (30 minutes)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Current challenges discussion (5 min)</li>
                  <li>• Live dashboard walkthrough (10 min)</li>
                  <li>• Key features demonstration (10 min)</li>
                  <li>• Q&A and next steps (5 min)</li>
                </ul>
              </div>
            </div>

            {/* Booking Form */}
            <Card className="p-8 shadow-2xl border-sky-100 order-1 lg:order-2">
              <h3 className="text-2xl text-gray-900 mb-6 text-center">Schedule Your Demo</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-sky-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="border-sky-200 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="(XXX) XXX-XXXX"
                      required
                      className="border-sky-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Hotel/Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="border-sky-200 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="properties">Number of Properties</Label>
                    <Select onValueChange={(value) => setFormData({...formData, properties: value})}>
                      <SelectTrigger className="border-sky-200 focus:border-blue-500">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Property</SelectItem>
                        <SelectItem value="2-5">2-5 Properties</SelectItem>
                        <SelectItem value="6-10">6-10 Properties</SelectItem>
                        <SelectItem value="11-25">11-25 Properties</SelectItem>
                        <SelectItem value="25+">25+ Properties</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="currentSystem">Current PMS</Label>
                    <Input
                      id="currentSystem"
                      value={formData.currentSystem}
                      onChange={(e) => setFormData({...formData, currentSystem: e.target.value})}
                      placeholder=""
                      className="border-sky-200 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="demoDate">Preferred Demo Date</Label>
                    <Input
                      id="demoDate"
                      type="date"
                      value={formData.demoDate}
                      onChange={(e) => setFormData({...formData, demoDate: e.target.value})}
                      className="border-sky-200 focus:border-blue-500"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="demoTime">Preferred Time</Label>
                    <Select onValueChange={(value) => setFormData({...formData, demoTime: value})}>
                      <SelectTrigger className="border-sky-200 focus:border-blue-500">
                        <SelectValue placeholder="Select time..." />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="challenges">What are your biggest operational challenges? (Optional)</Label>
                  <Textarea
                    id="challenges"
                    value={formData.challenges}
                    onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                    placeholder=""
                    rows={3}
                    className="border-sky-200 focus:border-blue-500"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-3"
                  size="lg"
                >
                  Book My Free Demo
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to receive communications from Aiyra. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl text-gray-900 mb-8">Trusted by Hotel Owners Worldwide</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">32%</div>
              <p className="text-gray-700">Average Revenue Increase</p>
            </div>
            <div>
              <div className="text-3xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">4.9/5</div>
              <p className="text-gray-700">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">24/7</div>
              <p className="text-gray-700">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, title: '', message: '', icon: null })}
        title={modalState.title}
        message={modalState.message}
        icon={modalState.icon}
      />
    </div>
  );
}