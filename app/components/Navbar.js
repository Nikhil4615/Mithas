'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = ({ scrollY = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Heritage', href: '#heritage' },
    { name: 'Gallery', href: '#collections' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const isScrolled = scrollY > 50;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="content-wrapper">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/"
            className="relative z-10 text-2xl font-playfair font-bold text-[var(--text-primary)]"
          >
            Mithas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[var(--text-primary)] hover:text-[var(--color-caramel)]
                  transition-colors duration-300 text-sm uppercase tracking-wider
                  ${isScrolled ? 'py-2' : 'py-3'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span 
                className={`block h-0.5 bg-[var(--text-primary)] transition-all duration-300
                  ${isMenuOpen ? 'w-6 -rotate-45 translate-y-2' : 'w-6'}`}
              />
              <span 
                className={`block h-0.5 bg-[var(--text-primary)] transition-all duration-300
                  ${isMenuOpen ? 'w-0 opacity-0' : 'w-4'}`}
              />
              <span 
                className={`block h-0.5 bg-[var(--text-primary)] transition-all duration-300
                  ${isMenuOpen ? 'w-6 rotate-45 -translate-y-2' : 'w-6'}`}
              />
            </div>
          </button>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-md transition-all duration-300
              flex flex-col items-center justify-center space-y-8 ${
              isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[var(--text-primary)] hover:text-[var(--color-caramel)]
                  transition-colors duration-300 text-lg uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div 
        className={`h-px bg-gradient-to-r from-transparent via-[var(--color-caramel)]/20 to-transparent
          transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
      />
    </nav>
  );
};

export default Navbar; 