import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Company Name */}
      <div className="flex items-center justify-center">
        <span className={`${textSizes[size]} font-black tracking-tight`}>
          <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">AiyraOne</span>
        </span>
      </div>
    </div>
  );
}