import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Modal } from './ui/modal';
import { ImageWithFallback } from './figma/ImageWithFallback';
import indiaImage from 'figma:asset/bc52650a5f3fc1cdc7bdebd3a8f04fb5717f95aa.png';
import parisImage from 'figma:asset/33b4889c86cb7e97207abd3e84e008f528058aee.png';
import californiaImage from 'figma:asset/c922fa7286e0716e767c148665b92579dcc78fcb.png';
import texasImage from 'figma:asset/fc90bae57b95473fc79401af987b2dbf56831295.png';
import frankfurtImage from 'figma:asset/c89d2f5c039d20d994e71d470f3400b62cc401b5.png';
import floridaImage from 'figma:asset/5cc26ef6c79ea85f9d0de84df65f82765ae68e44.png';
import dubaiImage from 'figma:asset/89dcc90168cdc5d49683f2d36f8c880a870cc0e8.png';
import czechImage from 'figma:asset/f58a9d09c2c342c8e6569140ef0bb9f5ac5121e0.png';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
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
    
    // 1. Validate phone number if provided
    if (formData.phone) {
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
    }
    
    // 2. Send data to Formspree
    try {
      const response = await fetch("https://formspree.io/f/mykdagoz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      // If Formspree returns a success status (200-299)
      if (response.ok) {
        setModalState({
          isOpen: true,
          title: 'Message Sent',
          message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
          icon: <CheckCircle className="w-6 h-6 text-green-500" />
        });
        // Clear the form fields
        setFormData({
          name: '', email: '', phone: '', company: '', 
          subject: '', message: '', inquiryType: ''
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setModalState({
        isOpen: true,
        title: 'Submission Error',
        message: 'There was a problem sending your message. Please try again.',
        icon: <AlertCircle className="w-6 h-6 text-red-500" />
      });
    }
  };


  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'Support@aiyraone.com',
      availability: 'Response within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our experts',
      contact: '+1 (530) 366-1683',
      availability: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available on website',
      availability: 'Mon-Fri, 9AM-9PM EST'
    }
  ];

  const offices = [
    {
      city: 'California',
      phone: '+1 (530) 366-1683',
      image: californiaImage
    },
    {
      city: 'Texas',
      phone: '+1 (530) 366-1683',
      image: texasImage
    },
    {
      city: 'India',
      phone: '+91 22 4567 8900',
      image: indiaImage
    },
    {
      city: 'Dubai',
      phone: '+971 4 123 4567',
      image: dubaiImage
    },
    {
      city: 'Paris',
      phone: '+33 1 45 67 89 00',
      image: parisImage
    },
    {
      city: 'Czech Republic',
      phone: '+420 2 3456 7890',
      image: czechImage
    },
    {
      city: 'Frankfurt',
      phone: '+49 69 1234 5678',
      image: frankfurtImage
    },
    {
      city: 'Florida',
      phone: '+1 (530) 366-1683',
      image: floridaImage
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-gray-900 mb-6">
            Get in 
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Have questions about Aiyra? Our hospitality experts are here to help you find the perfect solution for your hotel.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-600" />
              24-hour response time
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Hospitality experts
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-sky-600" />
              Free consultation
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-8">Send us a Message</h2>
              
              <Card className="p-8 shadow-2xl border-slate-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="border-slate-200 focus:border-sky-500"
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
                        className="border-slate-200 focus:border-sky-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="(XXX) XXX-XXXX"
                        className="border-slate-200 focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Hotel/Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="border-slate-200 focus:border-sky-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                        <SelectTrigger className="border-slate-200 focus:border-sky-500">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="border-slate-200 focus:border-sky-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                      className="border-slate-200 focus:border-sky-500"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-3"
                    size="lg"
                  >
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    We'll respond to your inquiry within 24 hours during business days.
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl text-gray-900 mb-8">Other Ways to Reach Us</h2>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="p-6 border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-900 mb-2">{method.title}</h3>
                          <p className="text-gray-600 mb-2">{method.description}</p>
                          <p className="text-sky-600 mb-1">{method.contact}</p>
                          <p className="text-sm text-gray-500">{method.availability}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-xl text-gray-900 mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <Button 
                    onClick={() => onNavigate('demo')}
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white justify-between"
                  >
                    Book a Demo
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button 
                    onClick={() => onNavigate('resources')}
                    variant="outline"
                    className="w-full border-slate-200 text-sky-700 hover:bg-sky-50 justify-between"
                  >
                    Browse FAQ
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-6">Our Global Offices</h2>
            <p className="text-xl text-gray-600">
              Providing local expertise and support worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="overflow-hidden border-2 border-slate-200 hover:border-sky-400 transition-all duration-300 group">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-1.5">{office.city}</h3>
                    <div className="flex items-center justify-center gap-1.5 text-sky-300">
                      <Phone className="w-3 h-3" />
                      <p className="text-xs">{office.phone}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait to transform your hotel operations. See Aiyra in action with a personalized demo.
          </p>
          <Button 
            onClick={() => onNavigate('demo')}
            size="lg"
            className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-4"
          >
            Book Your Free Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
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