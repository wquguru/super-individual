'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, variant = 'primary', onClick, className = '' }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-2 border rounded-md text-base font-medium transition-colors duration-200';
  
  const variantStyles = {
    primary: 'border-transparent text-white bg-blue-600 hover:bg-blue-700',
    secondary: 'border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 