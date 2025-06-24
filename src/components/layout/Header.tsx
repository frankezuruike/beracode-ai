"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    dropdown: [
      { label: "Who We Are", href: "/about-us/who-we-are" },
      { label: "Value Proposition", href: "/about-us/value-proposition" },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { label: "AI-Powered Solutions", href: "/services/ai-powered-solutions" },
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "Cloud & Infrastructure Management", href: "/services/cloud-infrastructure-management" },
      { label: "Data Analytics & Business Intelligence", href: "/services/data-analytics-business-intelligence" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 100);
    setCloseTimeout(timeout);
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Logo />
          </div>

          {/* Navigation Section */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <nav className="flex items-center space-x-8">
              {navLinks.map(link => (
                link.dropdown ? (
                  <div 
                    key={link.label} 
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="flex items-center gap-1 text-[#3bb3e6] hover:text-primary transition-colors whitespace-nowrap focus:outline-none text-base"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <ChevronDown className="w-5 h-5" />
                    </button>
                    <div
                      className={`absolute left-0 mt-3 min-w-[200px] bg-white border border-border rounded-md shadow-lg z-40 transition-all duration-200 ${
                        openDropdown === link.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-base text-gray-600 hover:bg-primary/10 hover:text-primary whitespace-nowrap"
                          tabIndex={0}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="text-[#3bb3e6] hover:text-primary transition-colors whitespace-nowrap text-base"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </nav>
            <a 
              href="/contact-us" 
              className="px-4 py-2 rounded-md border border-[#3bb3e6] text-sm font-medium text-[#3bb3e6] hover:bg-[#3bb3e6] hover:text-white transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[#3bb3e6] hover:text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 