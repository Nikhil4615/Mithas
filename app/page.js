'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Contact from './components/Contact';

// Dynamic imports to prevent hydration errors
const About = dynamic(() => import('./components/About'));

const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSweetTrail, setShowSweetTrail] = useState(false);
  const [sweetTrails, setSweetTrails] = useState([]);

  const featuredSweets = [
    {
      name: "Royal Kaju Katli",
      description: "Diamond-cut cashew delicacy with silver varq",
      category: "Signature",
      image: "/sweets/kaju-katli.jpg"
    },
    {
      name: "Saffron Rasmalai",
      description: "Delicate cheese dumplings in saffron milk",
      category: "Premium",
      image: "/sweets/rasmalai.jpg"
    },
    {
      name: "Golden Jalebi",
      description: "Crispy spirals soaked in rose syrup",
      category: "Traditional",
      image: "/sweets/jalebi.jpg"
    },
    {
      name: "Pistachio Barfi",
      description: "Rich milk fudge with crushed pistachios",
      category: "Premium",
      image: "/sweets/barfi.jpg"
    }
  ];

  const heritage = [
    {
      title: "Traditional Recipes",
      description: "Preserving authentic flavors passed down through generations",
      icon: "📜"
    },
    {
      title: "Finest Ingredients",
      description: "Sourcing premium ingredients for exceptional taste",
      icon: "✨"
    },
    {
      title: "Artisanal Craft",
      description: "Handcrafted with expertise and dedication",
      icon: "👨‍🍳"
    }
  ];

  // Sweet trail effect
  const addSweetTrail = (e) => {
    if (!showSweetTrail) return;
    
    const sweets = ['🍬', '🍭', '🍪', '🍯', '🫖'];
    const newTrail = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      emoji: sweets[Math.floor(Math.random() * sweets.length)],
      rotation: Math.random() * 360
    };
    
    setSweetTrails(prev => [...prev.slice(-15), newTrail]);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      addSweetTrail(e);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showSweetTrail]);

  // Clean up old sweet trails
  useEffect(() => {
    const cleanup = setInterval(() => {
      setSweetTrails(prev => prev.slice(-5));
    }, 2000);
    return () => clearInterval(cleanup);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      {/* Sweet Trail Effect */}
      {sweetTrails.map(trail => (
        <div
          key={trail.id}
          className="fixed pointer-events-none text-2xl animate-float-up z-50"
          style={{
            left: trail.x,
            top: trail.y,
            transform: `rotate(${trail.rotation}deg)`,
            transition: 'all 1s ease-out'
          }}
        >
          {trail.emoji}
        </div>
      ))}

      {/* Interactive Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[var(--color-caramel)]/5 rounded-full blur-3xl" />
        <div className="absolute right-0 w-64 h-64 bg-[var(--color-honey)]/5 rounded-full blur-2xl" />
      </div>

      {/* Sugar Sparkles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>

      <Navbar scrollY={scrollY} />
      <Hero />
      <Heritage />
      <Gallery />
      <Process />
      <Contact />

      {/* Footer */}
      <footer className="bg-white py-20">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h4 className="text-2xl font-semibold text-[var(--text-primary)] mb-8">
                Our Legacy
              </h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Three decades of crafting moments of joy through our authentic sweets. 
                Every creation is a testament to our commitment to excellence.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-[var(--text-primary)] mb-8">
                Visit Us
              </h4>
              <address className="text-[var(--text-secondary)] not-italic leading-relaxed">
                123 Sweet Street<br />
                Delhi, India - 110001<br />
                <a 
                  href="tel:+919876543210" 
                  className="hover:text-[var(--color-caramel)] transition-colors"
                >
                  +91 98765 43210
                </a><br />
                <a 
                  href="mailto:info@mithas.com" 
                  className="hover:text-[var(--color-caramel)] transition-colors"
                >
                  info@mithas.com
                </a>
              </address>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-[var(--text-primary)] mb-8">
                Connect
              </h4>
              <div className="flex space-x-6">
                {[
                  { name: 'Instagram', icon: 'IG' },
                  { name: 'Facebook', icon: 'FB' },
                  { name: 'Twitter', icon: 'TW' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 rounded-full border border-[var(--color-caramel)]/20 
                      flex items-center justify-center text-[var(--text-light)]
                      hover:bg-[var(--color-caramel)] hover:text-white hover:border-transparent 
                      transition-all duration-300"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-[var(--color-caramel)]/10 text-center">
            <p className="text-[var(--text-light)]">
              © 2024 Mithas. Crafting Sweet Memories.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Page;
