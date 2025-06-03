'use client';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Artistry in Every Sweet",
      subtitle: "Crafting Moments of Joy Since 1993",
      description: "Where tradition meets artisanal excellence in the heart of Indian confectionery",
      image: "/images/hero/traditional.jpg"
    },
    {
      title: "Heritage of Flavors",
      subtitle: "Three Generations of Expertise",
      description: "Each creation tells a story of passion, precision, and time-honored recipes",
      image: "/images/hero/heritage.jpg"
    },
    {
      title: "Masters of Sweetcraft",
      subtitle: "Preserving Traditional Excellence",
      description: "Witness the art of sweet-making perfected through decades of dedication",
      image: "/images/hero/craftsmanship.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-[var(--color-cream)] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-caramel)]/5 transform skew-x-12" />
        <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-[var(--color-caramel)]/5 transform -skew-x-12" />
        <div className="absolute inset-0 decorative-pattern opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative h-full">
        <div className="content-wrapper h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
            <div className="relative z-10 space-y-6">
              <span className="inline-block text-[var(--text-light)] uppercase tracking-wider text-sm">
                Welcome to Mithas
              </span>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="golden-text block mb-2">
                  {slides[currentSlide].title}
                </span>
                <span className="text-[var(--text-primary)] text-3xl md:text-4xl block mt-4">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-xl">
                {slides[currentSlide].description}
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <a 
                  href="#heritage" 
                  className="sweet-button inline-flex items-center group"
                >
                  Explore Our Heritage
                  <svg 
                    className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="aspect-square relative z-10 sweet-card p-8">
                <div className="absolute inset-0 bg-[var(--color-caramel)]/5 rounded-2xl" />
                <div className="relative h-full rounded-xl overflow-hidden">
                  {/* Image placeholder - replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-caramel)]/20 to-transparent" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--color-caramel)]/10 rounded-full blur-2xl" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[var(--color-honey)]/10 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[var(--color-gold)]/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentSlide 
                ? 'w-8 bg-[var(--color-caramel)]' 
                : 'bg-[var(--color-caramel)]/30 hover:bg-[var(--color-caramel)]/50'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center">
        <span className="text-[var(--text-light)] text-sm mb-2 writing-mode-vertical transform rotate-180">
          Scroll to Explore
        </span>
        <div className="w-px h-16 bg-[var(--color-caramel)]/20">
          <div className="w-full h-1/3 bg-[var(--color-caramel)] animate-gentle-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 