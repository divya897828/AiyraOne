import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Shield } from 'lucide-react';

interface LegalPageProps {
  page: 'privacy' | 'terms' | 'cookies';
}

export function LegalPage({ page }: LegalPageProps) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'October 5, 2025',
      content: [
        {
          section: 'Information We Collect',
          text: 'AiyraOne collects information you provide directly to us when you create an account, use our hospitality management platform, or contact us for support. This includes your name, email address, phone number, hotel/property information, booking data, guest information (where legally permitted), financial data, and usage analytics to improve our AI-powered services. We also collect information automatically through cookies and similar technologies when you use our platform.'
        },
        {
          section: 'How We Use Your Information',
          text: 'We use the information we collect to: (1) Provide, maintain, and improve our property management services and AI features; (2) Process transactions and manage bookings; (3) Send service communications, updates, and support responses; (4) Analyze usage patterns to enhance our AI algorithms and revenue optimization tools; (5) Ensure platform security and prevent fraud; (6) Comply with legal obligations and industry regulations. We do not sell your personal information to third parties under any circumstances.'
        },
        {
          section: 'Data Security & Protection',
          text: 'We implement enterprise-grade security measures including end-to-end encryption, SOC 2 Type II compliance, regular security audits, and multi-factor authentication. All data is encrypted both in transit (TLS 1.3) and at rest (AES-256). Our cloud infrastructure meets hospitality industry standards and is regularly monitored for vulnerabilities. We maintain incident response procedures and will notify you of any security breaches as required by law.'
        },
        {
          section: 'International Data Transfers & Compliance',
          text: 'AiyraOne operates globally and may transfer your data across borders to provide our services. We comply with GDPR (EU), CCPA (California), PIPEDA (Canada), and other applicable privacy laws. Data transfers are protected by appropriate safeguards including Standard Contractual Clauses and adequacy decisions. We maintain data processing agreements with all third-party service providers.'
        },
        {
          section: 'Data Retention & Deletion',
          text: 'We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Personal data is typically retained for 7 years after account closure for tax and regulatory compliance. Booking and guest data may be retained longer as required by hospitality regulations. You may request deletion of your account and associated data at any time, subject to legal retention requirements.'
        },
        {
          section: 'Your Privacy Rights',
          text: 'Depending on your location, you have rights including: (1) Access to your personal information; (2) Correction of inaccurate data; (3) Deletion of your data (right to be forgotten); (4) Data portability; (5) Restriction of processing; (6) Objection to processing; (7) Withdrawal of consent. To exercise these rights, contact us at Support@aiyraone.com. We will respond within 30 days of receiving your request.'
        },
        {
          section: 'Third-Party Integrations',
          text: 'AiyraOne integrates with various third-party services including OTAs (Booking.com, Expedia), payment processors, channel managers, and analytics providers. These integrations are governed by separate privacy policies. We only share necessary data to provide our services and require all partners to maintain appropriate data protection standards.'
        },
        {
          section: 'Updates to This Policy',
          text: 'We may update this Privacy Policy to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes via email or through our platform. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'October 5, 2025',
      content: [
        {
          section: 'Acceptance of Terms',
          text: 'By accessing or using AiyraOne\'s hospitality management platform and related services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree to these terms, please do not use our services. These terms apply to all users, including hotel owners, managers, staff members, and other authorized users.'
        },
        {
          section: 'Description of Service',
          text: 'AiyraOne provides a comprehensive cloud-based property management platform for hotels and hospitality businesses. Our services include: AI-powered revenue management, multi-property operations, guest communication tools, analytics and business intelligence, mobile applications, third-party integrations, and customer support. Features may vary based on your subscription plan and may be updated periodically.'
        },
        {
          section: 'User Accounts & Security',
          text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate, current, and complete information when creating an account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security. You may not share your account credentials or allow unauthorized access to your account.'
        },
        {
          section: 'Acceptable Use Policy',
          text: 'You agree to use our services only for lawful purposes and in accordance with these terms. Prohibited activities include: (1) Violating any applicable laws or regulations; (2) Uploading malicious code or attempting to compromise system security; (3) Interfering with other users\' access to the services; (4) Using the services for competitive intelligence or reverse engineering; (5) Transmitting spam, harassment, or inappropriate content; (6) Attempting to access unauthorized areas of the platform.'
        },
        {
          section: 'Intellectual Property Rights',
          text: 'AiyraOne and its licensors own all rights, title, and interest in the services, including all software, technology, content, trademarks, and related intellectual property. You are granted a limited, non-exclusive, non-transferable license to use our services in accordance with these terms. You may not copy, modify, distribute, sell, or create derivative works based on our services without explicit written permission.'
        },
        {
          section: 'Data Ownership & Backup',
          text: 'You retain ownership of all data you input into our platform, including guest information, booking data, and business records. AiyraOne performs regular automated backups of your data but recommends maintaining your own backup procedures for critical information. We are not liable for data loss due to user error, system failures, or other circumstances beyond our reasonable control.'
        },
        {
          section: 'Service Availability & Support',
          text: 'We strive to maintain 99.9% uptime but do not guarantee uninterrupted service availability. Scheduled maintenance will be announced in advance when possible. Our support team is available 24/7 via chat, email, and phone for paying customers. Response times vary based on your subscription plan and the severity of the issue.'
        },
        {
          section: 'Pricing & Payment Terms',
          text: 'Subscription fees are based on your selected plan and are billed in advance. All fees are non-refundable except as required by law. Price changes will be communicated at least 30 days in advance. Late payments may result in service suspension. You are responsible for all taxes, duties, and government fees associated with your use of our services.'
        },
        {
          section: 'Limitation of Liability',
          text: 'To the maximum extent permitted by law, AiyraOne\'s total liability for any claims arising from or related to these terms or your use of our services shall not exceed the amount you paid us in the 12 months preceding the claim. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption.'
        },
        {
          section: 'Termination',
          text: 'Either party may terminate this agreement at any time with 30 days\' written notice. We may immediately suspend or terminate your access if you violate these terms, fail to pay fees, or engage in activities that could harm our services or other users. Upon termination, your right to use the services will cease immediately, and we may delete your account and data after a reasonable grace period.'
        }
      ]
    },
    cookies: {
      title: 'Cookie Policy',
      lastUpdated: 'October 5, 2025',
      content: [
        {
          section: 'What Are Cookies',
          text: 'Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website or use our application. They help us provide you with a better, faster, and more secure experience by remembering your preferences, maintaining your login session, and improving our services based on how you interact with our platform.'
        },
        {
          section: 'Types of Cookies We Use',
          text: 'We use several types of cookies: (1) Essential cookies that are necessary for basic functionality; (2) Performance cookies that help us understand how our platform is used; (3) Functional cookies that remember your preferences and settings; (4) Analytics cookies that provide insights to improve our services. We do not use advertising or tracking cookies for marketing purposes.'
        },
        {
          section: 'Essential Cookies',
          text: 'These cookies are strictly necessary for our platform to function properly and cannot be disabled. They enable core features like secure login, session management, property data access, booking functionality, and security measures. Without these cookies, our services would not work correctly, and we cannot provide them to you.'
        },
        {
          section: 'Performance & Analytics Cookies',
          text: 'We use performance cookies to understand how visitors interact with our platform, which pages are most popular, and where users encounter issues. This data is aggregated and anonymized to protect your privacy. Analytics cookies help us optimize our AI algorithms, improve user experience, and identify technical problems. You can opt out of these cookies without affecting core functionality.'
        },
        {
          section: 'Functional & Preference Cookies',
          text: 'Functional cookies remember choices you make to improve your experience, such as language preferences, dashboard layouts, notification settings, and property configurations. These cookies make using our platform more convenient by avoiding the need to reconfigure settings each time you log in.'
        },
        {
          section: 'Third-Party Cookies',
          text: 'Some cookies on our platform are set by third-party services that we integrate with, including analytics providers (Google Analytics), customer support tools (Intercom), and payment processors. These third parties have their own privacy policies governing their use of cookies. We carefully select partners who meet our data protection standards.'
        },
        {
          section: 'Managing Your Cookie Preferences',
          text: 'You can control and manage cookies through your browser settings or our cookie preference center. Most browsers allow you to block or delete cookies, but please note that disabling essential cookies will prevent you from using core features of our platform. You can set your browser to notify you when cookies are being used or to refuse all cookies entirely.'
        },
        {
          section: 'Cookie Retention & Updates',
          text: 'Different cookies have different expiration periods, ranging from session cookies that expire when you close your browser to persistent cookies that may last up to 2 years. We regularly review our cookie usage and may update this policy to reflect changes in our practices or legal requirements. Check this page periodically for updates.'
        }
      ]
    }
  };

  const currentContent = content[page];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-sky-500/20 text-sky-300 border-sky-400/30 mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Legal Information
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            {currentContent.title}
          </h1>
          <p className="text-xl text-slate-300">
            Last updated: {currentContent.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 lg:p-12 border-2 border-sky-200 bg-white shadow-xl">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-sky-50 rounded-xl border border-sky-200">
                <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-sky-600" />
                  Important Notice
                </h2>
                <p className="text-slate-700 mb-0">
                  This {currentContent.title.toLowerCase()} is part of AiyraOne's commitment to transparency and data protection. 
                  By using our hospitality management platform, you acknowledge that you have read, understood, and agree to these terms.
                </p>
              </div>

              <div className="space-y-10">
                {currentContent.content.map((section, index) => (
                  <div key={index} className="border-l-4 border-sky-500 pl-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      {index + 1}. {section.section}
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-lg">{section.text}</p>
                  </div>
                ))}
              </div>

              {/* Compliance Badges */}
              <div className="mt-12 pt-8 border-t-2 border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                  Compliance & Certifications
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="bg-green-100 text-green-700 px-4 py-2">
                    GDPR Compliant
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 px-4 py-2">
                    SOC 2 Type II
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 px-4 py-2">
                    CCPA Compliant
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-700 px-4 py-2">
                    ISO 27001
                  </Badge>
                  <Badge className="bg-cyan-100 text-cyan-700 px-4 py-2">
                    PIPEDA Compliant
                  </Badge>
                </div>
                <p className="text-center text-slate-600 mt-4">
                  AiyraOne maintains the highest standards of data protection and security compliance.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}