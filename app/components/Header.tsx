'use client';

import Link from 'next/link'
import { useState } from 'react'
import Logo from './Logo'
import Button from './Button'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Logo />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#services" className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors">
              服务方案
            </Link>
            <Link href="/#about" className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors">
              关于我
            </Link>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              客户反馈
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              常见问题
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <Button variant="secondary">
              联系咨询
            </Button>
            <Button variant="primary">
              预约服务
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 transition-colors" 
              aria-label="菜单"
            >
              <span className="sr-only">菜单</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                服务方案
              </Link>
              <Link href="/#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                关于我
              </Link>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              >
                客户反馈
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              >
                常见问题
              </button>
              <div className="mt-4 space-y-2">
                <Button variant="secondary" className="w-full">
                  联系咨询
                </Button>
                <Button variant="primary" className="w-full">
                  预约服务
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header; 