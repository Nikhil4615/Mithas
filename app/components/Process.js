'use client';
import { useEffect, useRef } from 'react';

const Process = () => {
  const processRef = useRef(null);

  const steps = [
    {
      title: 'Ingredient Selection',
      description: 'Only the finest ingredients are chosen - from premium nuts to organic milk and authentic spices',
      details: [
        'Hand-picked cashews and almonds',
        'Farm-fresh organic milk',
        'Pure desi ghee',
        'Premium quality saffron',
        'Authentic cardamom and spices'
      ],
      image: '/process/ingredients.jpg'
    },
    {
      title: 'Traditional Methods',
      description: 'Time-honored techniques passed down through generations ensure authentic taste and texture',
      details: [
        'Slow cooking process',
        'Hand-beaten milk solids',
        'Traditional copper vessels',
        'Temperature control mastery',
        'Precise timing techniques'
      ],
      image: '/process/traditional.jpg'
    },
    {
      title: 'Artisanal Crafting',
      description: 'Each sweet is carefully shaped and decorated by our master craftsmen',
      details: [
        'Expert hand-rolling',
        'Precise cutting techniques',
        'Artistic garnishing',
        'Traditional patterns',
        'Delicate finishing'
      ],
      image: '/process/crafting.jpg'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality checks ensure each piece meets our high standards',
      details: [
        'Texture verification',
        'Taste testing',
        'Visual inspection',
        'Freshness check',
        'Temperature monitoring'
      ],
      image: '/process/quality.jpg'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = processRef.current.querySelectorAll('.process-step');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="section-padding bg-[var(--color-cream)]" ref={processRef}>
      <div className="content-wrapper">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="golden-text">Our Craft</span>
          </h2>
          <p className="section-subtitle">
            Witness the artistry behind every creation
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={`process-step opacity-0 transition-all duration-1000 delay-${index * 200}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-full bg-[var(--color-caramel)]/10 flex items-center justify-center text-[var(--color-caramel)] font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[var(--text-secondary)] text-lg">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li 
                        key={detail}
                        className="flex items-center text-[var(--text-light)]"
                      >
                        <svg
                          className="w-5 h-5 mr-3 text-[var(--color-caramel)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="sweet-card aspect-video">
                    <div className="absolute inset-0 bg-[var(--color-caramel)]/5 rounded-2xl" />
                    {/* Image placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-caramel)]/20 to-transparent rounded-xl" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-caramel)]/10 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[var(--color-honey)]/10 rounded-full blur-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 