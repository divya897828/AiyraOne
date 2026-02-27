import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Modal } from './ui/modal';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp,
  Code,
  Brain,
  BarChart3,
  Database,
  Handshake,
  Target,
  Lightbulb,
  Upload,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: string) => void;
}

interface Job {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Internship';
  location: string;
  icon: any;
  description: string;
  responsibilities: string[];
  requirements: string[];
  compensation: string;
  postedDate: string;
}

interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  currentRole: string;
  motivation: string;
  availability: string;
  portfolio: string;
  expectedSalary: string;
  resume: File | null;
  coverLetter: File | null;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    currentRole: '',
    motivation: '',
    availability: '',
    portfolio: '',
    expectedSalary: '',
    resume: null,
    coverLetter: null
  });
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '', icon: null as React.ReactNode });

  const jobs: Job[] = [
    {
      id: 'fullstack-dev',
      title: 'Full Stack Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      icon: Code,
      description: 'Join our engineering team to build the next generation of hospitality management software. Work with modern technologies to create scalable solutions.',
      responsibilities: [
        'Develop and maintain web applications using React, TypeScript, and Node.js',
        'Design and implement RESTful APIs and database schemas',
        'Collaborate with product teams to translate requirements into technical solutions',
        'Write clean, maintainable, and well-tested code',
        'Participate in code reviews and technical discussions'
      ],
      requirements: [
        '3+ years of experience with full-stack development',
        'Proficiency in React, TypeScript, and Node.js',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Understanding of cloud platforms (AWS, GCP)',
        'Strong problem-solving and communication skills'
      ],
      compensation: 'Competitive salary and equity package',
      postedDate: 'September 15, 2025'
    },
    {
      id: 'ml-engineer',
      title: 'Machine Learning Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      icon: Brain,
      description: 'Drive AI innovation in hospitality technology. Build and deploy machine learning models that optimize hotel operations and enhance guest experiences.',
      responsibilities: [
        'Design and implement ML models for revenue optimization and demand forecasting',
        'Deploy models in production environments with monitoring and scaling',
        'Collaborate with data scientists to productionize research outcomes',
        'Optimize model performance and inference speed',
        'Build ML infrastructure and pipelines'
      ],
      requirements: [
        '4+ years of experience in machine learning engineering',
        'Proficiency in Python, TensorFlow/PyTorch, and scikit-learn',
        'Experience with MLOps tools and cloud ML services',
        'Strong understanding of statistics and algorithms',
        'Experience with hospitality or similar domain preferred'
      ],
      compensation: 'Competitive salary and equity package',
      postedDate: 'August 22, 2025'
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'Data & Analytics',
      type: 'Full-time',
      location: 'Remote',
      icon: BarChart3,
      description: 'Unlock insights from hospitality data to drive business decisions. Lead data-driven initiatives that transform how hotels operate.',
      responsibilities: [
        'Analyze large datasets to identify trends and opportunities',
        'Build predictive models for occupancy, pricing, and customer behavior',
        'Create data visualizations and dashboards for stakeholders',
        'Conduct A/B tests and statistical analysis',
        'Collaborate with product teams to define metrics and KPIs'
      ],
      requirements: [
        '3+ years of experience in data science',
        'Proficiency in Python, R, and SQL',
        'Experience with statistical analysis and machine learning',
        'Strong data visualization skills (Tableau, PowerBI, or similar)',
        'PhD/Masters in Statistics, Mathematics, or related field preferred'
      ],
      compensation: 'Competitive salary and equity package',
      postedDate: 'November 10, 2025'
    },
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      department: 'Data & Analytics',
      type: 'Full-time',
      location: 'Remote',
      icon: Database,
      description: 'Transform raw data into actionable insights for our hospitality clients. Support data-driven decision making across the organization.',
      responsibilities: [
        'Perform data analysis to support business operations and strategy',
        'Create reports and dashboards for internal and external stakeholders',
        'Clean and prepare data for analysis and modeling',
        'Support A/B testing and experimental design',
        'Collaborate with cross-functional teams to understand data needs'
      ],
      requirements: [
        '2+ years of experience in data analysis',
        'Proficiency in SQL, Excel, and Python/R',
        'Experience with data visualization tools',
        'Strong analytical and problem-solving skills',
        'Bachelor\'s degree in relevant field'
      ],
      compensation: 'Competitive salary and equity package',
      postedDate: 'December 5, 2025'
    },
    {
      id: 'bi-engineer',
      title: 'Business Intelligence Engineer',
      department: 'Data & Analytics',
      type: 'Full-time',
      location: 'Remote',
      icon: TrendingUp,
      description: 'Build the data infrastructure that powers our analytics platform. Design and maintain systems that enable data-driven hospitality solutions.',
      responsibilities: [
        'Design and build data warehouses and ETL pipelines',
        'Develop business intelligence solutions and reporting systems',
        'Optimize data processing and query performance',
        'Ensure data quality and governance standards',
        'Support business users with data access and training'
      ],
      requirements: [
        '3+ years of experience in business intelligence',
        'Proficiency in SQL, Python, and BI tools',
        'Experience with data warehousing and ETL processes',
        'Knowledge of cloud data platforms',
        'Strong understanding of business metrics and KPIs'
      ],
      compensation: 'Competitive salary and equity package',
      postedDate: 'July 18, 2025'
    },
    {
      id: 'b2b-sales-exec',
      title: 'B2B Sales Executive',
      department: 'Sales',
      type: 'Full-time',
      location: 'Remote',
      icon: Handshake,
      description: 'Drive revenue growth by building relationships with hotel owners and managers. Sell our comprehensive hospitality management platform.',
      responsibilities: [
        'Generate and qualify leads through outbound prospecting',
        'Conduct product demonstrations and presentations to prospects',
        'Manage the entire sales cycle from initial contact to contract signing',
        'Build and maintain relationships with key decision makers',
        'Collaborate with marketing and customer success teams'
      ],
      requirements: [
        '3+ years of B2B sales experience, preferably in SaaS',
        'Track record of meeting or exceeding sales quotas',
        'Experience selling to hospitality industry preferred',
        'Strong communication and presentation skills',
        'CRM experience (Salesforce, HubSpot, etc.)'
      ],
      compensation: 'Base salary plus commission and equity',
      postedDate: 'January 12, 2026'
    },
    {
      id: 'biz-dev-exec',
      title: 'Business Development Executive',
      department: 'Business Development',
      type: 'Full-time',
      location: 'Remote',
      icon: Target,
      description: 'Identify and pursue strategic partnerships that accelerate our growth. Build relationships with key players in the hospitality ecosystem.',
      responsibilities: [
        'Identify and evaluate strategic partnership opportunities',
        'Negotiate and structure partnership agreements',
        'Develop go-to-market strategies for new partnerships',
        'Manage relationships with existing partners',
        'Support business development initiatives and market expansion'
      ],
      requirements: [
        '4+ years of experience in business development or partnerships',
        'Experience in SaaS or hospitality technology preferred',
        'Strong negotiation and relationship-building skills',
        'Strategic thinking and analytical capabilities',
        'MBA or equivalent experience preferred'
      ],
      compensation: 'Competitive salary and equity package',
      postedDate: 'October 3, 2025'
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      type: 'Full-time',
      location: 'Remote',
      icon: Lightbulb,
      description: 'Shape the future of hospitality technology. Lead product strategy and execution for our innovative hotel management platform.',
      responsibilities: [
        'Define product strategy and roadmap for key platform features',
        'Collaborate with engineering, design, and business teams',
        'Gather and analyze customer feedback and market requirements',
        'Manage product launches and go-to-market strategies',
        'Track product metrics and drive data-informed decisions'
      ],
      requirements: [
        '4+ years of product management experience',
        'Experience with B2B SaaS products preferred',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership abilities',
        'Technical background or MBA preferred'
      ],
      compensation: 'Competitive salary and equity package',
      postedDate: 'June 25, 2025'
    },
    // Internships
    {
      id: 'b2b-sales-intern',
      title: 'B2B Sales Internship',
      department: 'Sales',
      type: 'Internship',
      location: 'Remote',
      icon: Handshake,
      description: 'Learn the fundamentals of B2B sales in the hospitality technology space. Support our sales team with lead generation and customer outreach.',
      responsibilities: [
        'Assist with lead research and qualification',
        'Support sales team with prospect outreach and follow-up',
        'Help prepare sales materials and presentations',
        'Participate in customer calls and demos',
        'Maintain CRM data and sales records'
      ],
      requirements: [
        'Currently pursuing degree in Business, Marketing, or related field',
        'Strong communication and interpersonal skills',
        'Interest in sales and technology',
        'Ability to work independently and as part of a team',
        'Available for 3-6 month commitment'
      ],
      compensation: 'Unpaid internship with valuable experience and mentorship',
      postedDate: 'February 8, 2026'
    },
    {
      id: 'ml-engineer-intern',
      title: 'Machine Learning Engineer Intern',
      department: 'Engineering',
      type: 'Internship',
      location: 'Remote',
      icon: Brain,
      description: 'Gain hands-on experience with machine learning in a real-world hospitality technology environment.',
      responsibilities: [
        'Assist with ML model development and experimentation',
        'Support data preprocessing and feature engineering tasks',
        'Help with model evaluation and testing',
        'Contribute to ML infrastructure and tooling',
        'Participate in research and development projects'
      ],
      requirements: [
        'Currently pursuing degree in Computer Science, Data Science, or related field',
        'Knowledge of Python and ML libraries (scikit-learn, pandas)',
        'Understanding of machine learning fundamentals',
        'Strong mathematical and analytical skills',
        'Available for 3-6 month commitment'
      ],
      compensation: 'Unpaid internship with valuable experience and mentorship',
      postedDate: 'March 20, 2026'
    },
    {
      id: 'data-engineer-intern',
      title: 'Data Engineer Internship',
      department: 'Data & Analytics',
      type: 'Internship',
      location: 'Remote',
      icon: Database,
      description: 'Learn data engineering best practices while working on real data pipelines that power our hospitality analytics platform.',
      responsibilities: [
        'Assist with building and maintaining data pipelines',
        'Support data warehouse and ETL development',
        'Help with data quality monitoring and testing',
        'Contribute to data infrastructure projects',
        'Learn cloud data technologies and best practices'
      ],
      requirements: [
        'Currently pursuing degree in Computer Science, Engineering, or related field',
        'Knowledge of SQL and Python',
        'Understanding of database concepts',
        'Interest in data engineering and analytics',
        'Available for 3-6 month commitment'
      ],
      compensation: 'Unpaid internship with valuable experience and mentorship',
      postedDate: 'January 28, 2026'
    },
    {
      id: 'software-dev-intern',
      title: 'Software Developer Internship',
      department: 'Engineering',
      type: 'Internship',
      location: 'Remote',
      icon: Code,
      description: 'Get hands-on software development experience building features for our hospitality management platform.',
      responsibilities: [
        'Assist with frontend and backend development tasks',
        'Support feature implementation and bug fixes',
        'Participate in code reviews and team meetings',
        'Help with testing and quality assurance',
        'Learn software development best practices'
      ],
      requirements: [
        'Currently pursuing degree in Computer Science or related field',
        'Knowledge of JavaScript, HTML, CSS',
        'Familiarity with React or similar frameworks preferred',
        'Strong problem-solving skills',
        'Available for 3-6 month commitment'
      ],
      compensation: 'Unpaid internship with valuable experience and mentorship',
      postedDate: 'August 14, 2025'
    }
  ];

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setShowApplication(true);
    window.scrollTo(0, 0);
  };

  const handleSubmitApplication = () => {
    setModalContent({
      title: 'Application Submitted',
      message: 'Thank you for your application! We will review it and get back to you soon.',
      icon: <CheckCircle className="w-8 h-8 text-sky-500" />
    });
    setShowModal(true);
    setShowApplication(false);
    setSelectedJob(null);
    setApplicationData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      experience: '',
      currentRole: '',
      motivation: '',
      availability: '',
      portfolio: '',
      expectedSalary: '',
      resume: null,
      coverLetter: null
    });
  };

  const handleFileUpload = (type: 'resume' | 'coverLetter', file: File | null) => {
    setApplicationData(prev => ({
      ...prev,
      [type]: file
    }));
  };

  if (showApplication && selectedJob) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-black text-slate-900 mb-2">
                  Apply for {selectedJob.title}
                </h1>
                <p className="text-slate-600">{selectedJob.department} • {selectedJob.location}</p>
              </div>
              <Button
                variant="outline"
                onClick={() => setShowApplication(false)}
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Close
              </Button>
            </div>

            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={applicationData.firstName}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, firstName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={applicationData.lastName}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, lastName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={applicationData.email}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Current Location *</Label>
                    <Input
                      id="location"
                      value={applicationData.location}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="City, Country"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentRole">Current Role</Label>
                    <Input
                      id="currentRole"
                      value={applicationData.currentRole}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, currentRole: e.target.value }))}
                      placeholder="Your current position"
                    />
                  </div>
                </div>
              </div>

              {/* Experience & Qualifications */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Experience & Qualifications</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="experience">Years of Relevant Experience *</Label>
                    <select
                      id="experience"
                      value={applicationData.experience}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, experience: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="motivation">Why are you interested in this role? *</Label>
                    <Textarea
                      id="motivation"
                      value={applicationData.motivation}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, motivation: e.target.value }))}
                      placeholder="Tell us about your interest in this position and AiyraOne..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="availability">When can you start? *</Label>
                    <Input
                      id="availability"
                      value={applicationData.availability}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, availability: e.target.value }))}
                      placeholder="Immediately / 2 weeks notice / etc."
                      required
                    />
                  </div>

                  {selectedJob.type === 'Full-time' && (
                    <div>
                      <Label htmlFor="expectedSalary">Expected Salary Range (Optional)</Label>
                      <Input
                        id="expectedSalary"
                        value={applicationData.expectedSalary}
                        onChange={(e) => setApplicationData(prev => ({ ...prev, expectedSalary: e.target.value }))}
                        placeholder="e.g., $80,000 - $100,000"
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="portfolio">Portfolio/LinkedIn/GitHub (Optional)</Label>
                    <Input
                      id="portfolio"
                      value={applicationData.portfolio}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, portfolio: e.target.value }))}
                      placeholder="https://your-portfolio.com"
                    />
                  </div>
                </div>
              </div>

              {/* File Uploads */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Documents</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="resume">Resume/CV *</Label>
                    <div className="mt-2">
                      <input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileUpload('resume', e.target.files?.[0] || null)}
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                        required
                      />
                      {applicationData.resume && (
                        <p className="text-sm text-green-600 mt-1">✓ {applicationData.resume.name}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                    <div className="mt-2">
                      <input
                        id="coverLetter"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileUpload('coverLetter', e.target.files?.[0] || null)}
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
                      />
                      {applicationData.coverLetter && (
                        <p className="text-sm text-green-600 mt-1">✓ {applicationData.coverLetter.name}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  onClick={handleSubmitApplication}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3"
                  disabled={!applicationData.firstName || !applicationData.lastName || !applicationData.email || !applicationData.location || !applicationData.experience || !applicationData.motivation || !applicationData.availability || !applicationData.resume}
                >
                  Submit Application
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowApplication(false)}
                >
                  Cancel
                </Button>
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
            <Briefcase className="w-4 h-4 mr-2" />
            Join Our Team
          </Badge>
          
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Build the Future of 
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Hospitality</span>
          </h1>
          
          <p className="text-2xl text-slate-300 mb-16 leading-relaxed max-w-3xl mx-auto">
            Join AiyraOne and help transform how hotels around the world operate, optimize revenue, 
            and deliver exceptional guest experiences through cutting-edge technology.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-sky-400 mb-2">50+</div>
              <p className="text-slate-300 font-medium">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-sky-400 mb-2">25+</div>
              <p className="text-slate-300 font-medium">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-sky-400 mb-2">100%</div>
              <p className="text-slate-300 font-medium">Remote</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-sky-400 mb-2">24/7</div>
              <p className="text-slate-300 font-medium">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're looking for talented individuals who are passionate about technology and hospitality. 
              All positions are remote and offer competitive compensation.
            </p>
          </div>
          
          {/* Full-time Positions */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-sky-500" />
              Full-time Positions
            </h3>
            <div className="grid gap-6">
              {jobs.filter(job => job.type === 'Full-time').map((job) => (
                <Card key={job.id} className="p-8 border-2 border-slate-200 hover:border-sky-400 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <job.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h4>
                        <div className="flex items-center gap-4 text-slate-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                        <p className="text-slate-600 mb-4">{job.description}</p>
                        <div className="flex items-center gap-4">
                          <Badge className="bg-sky-100 text-sky-700">
                            {job.compensation}
                          </Badge>
                          <span className="text-sm text-slate-500">Posted on {job.postedDate}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleApply(job)}
                      className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                    >
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-sky-500" />
              Internship Opportunities
            </h3>
            <div className="grid gap-6">
              {jobs.filter(job => job.type === 'Internship').map((job) => (
                <Card key={job.id} className="p-8 border-2 border-slate-200 hover:border-sky-400 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <job.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h4>
                        <div className="flex items-center gap-4 text-slate-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                        <p className="text-slate-600 mb-4">{job.description}</p>
                        <div className="flex items-center gap-4">
                          <Badge className="bg-purple-100 text-purple-700">
                            {job.compensation}
                          </Badge>
                          <span className="text-sm text-slate-500">Posted on {job.postedDate}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleApply(job)}
                      variant="outline"
                      className="border-purple-300 text-purple-700 hover:bg-purple-50"
                    >
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Why Join AiyraOne?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're building something extraordinary, and we want exceptional people to be part of our journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Rapid Growth',
                description: 'Join a fast-growing hospitality technology company with significant career advancement opportunities.'
              },
              {
                icon: Users,
                title: 'Amazing Team',
                description: 'Work with talented professionals from around the world who are passionate about technology and hospitality.'
              },
              {
                icon: MapPin,
                title: 'Remote First',
                description: 'Work from anywhere with flexible hours and a strong emphasis on work-life balance.'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Be at the forefront of hospitality technology, working on cutting-edge AI and data solutions.'
              },
              {
                icon: TrendingUp,
                title: 'Competitive Packages',
                description: 'Enjoy competitive salaries, equity packages, and comprehensive benefits for full-time positions.'
              },
              {
                icon: CheckCircle,
                title: 'Learning & Growth',
                description: 'Continuous learning opportunities with access to courses, conferences, and mentorship programs.'
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center border-2 border-slate-200 hover:border-sky-400 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Don't See the Perfect Role?
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to the future of hospitality technology.
          </p>
          
          <Button 
            onClick={() => onNavigate('contact')}
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-2xl px-12 py-6 text-xl font-bold"
          >
            Get in Touch
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
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