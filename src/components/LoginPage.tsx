import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Eye, EyeOff, Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Image with Welcome Message */}
      <div className="relative lg:w-1/2 min-h-[40vh] lg:min-h-screen overflow-hidden">
        {/* Background Image */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761501989065-7c98a5d1f773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJuJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIxNTcxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Hotel Lobby"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/15 to-indigo-900/20"></div>
        
        {/* Content Overlay */}
        <div className="relative h-full flex flex-col justify-center p-8 lg:p-12">
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-full shadow-2xl">
              <span className="text-white font-black text-lg">Welcome to AiyraOne</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
              Hospitality<br />
              <span className="text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text">
                Reimagined
              </span>
            </h1>
          </motion.div>

          {/* Bottom Text */}
          <div className="text-slate-300 text-sm mt-auto">
            © {new Date().getFullYear()} AiyraOne. Transforming hospitality with intelligent technology.
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="lg:w-1/2 bg-gradient-to-br from-slate-50 via-blue-50/30 to-sky-50 flex flex-col p-8 lg:p-12">
        {/* Back to Home Button - Top Left */}
        <div className="mb-6 flex justify-start">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-slate-600 hover:text-sky-600 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border-2 border-slate-100">
              {/* Header */}
              <div className="mb-8 text-center">
                <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-slate-800 mb-3">
                  Login
                </h2>
                <p className="text-slate-600 text-base font-medium">Access your property management system</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-bold">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-14 text-lg border-2 border-slate-200 focus:border-sky-500 rounded-xl"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-700 font-bold">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 pr-12 h-14 text-lg border-2 border-slate-200 focus:border-sky-500 rounded-xl"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer"
                    />
                    <span className="text-sm font-semibold text-slate-700">Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="text-sm font-bold text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Login Button with Blue Theme */}
                <Button
                  type="submit"
                  className="w-full h-14 text-lg bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-700 hover:via-blue-700 hover:to-indigo-700 text-white shadow-xl font-black rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span>Log In</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-slate-500 font-semibold">OR</span>
                  </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-slate-600">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => onNavigate('demo')}
                      className="font-bold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      Request a Demo
                    </button>
                  </p>
                </div>
              </form>

              {/* Support Contact */}
              <div className="mt-8 pt-8 border-t-2 border-slate-100 text-center">
                <p className="text-sm text-slate-500 mb-2">Need help accessing your account?</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
                  <a href="mailto:Support@aiyraone.com" className="font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                    Support@aiyraone.com
                  </a>
                  <span className="hidden sm:inline text-slate-300">|</span>
                  <a href="tel:+15303661683" className="font-semibold text-sky-600 hover:text-sky-700 transition-colors">
                    +1 (530) 366-1683
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}