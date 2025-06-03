'use client';
import { useEffect, useRef } from 'react';

const Heritage = () => {
  const timelineRef = useRef(null);

  const milestones = [
    {
      year: '1993',
      title: 'The Beginning',
      description: 'Founded by Master Craftsman Rajesh Kumar with a small shop in the heart of the city',
      highlights: [
        'Traditional recipes from family heritage',
        'Handcrafted sweets made fresh daily',
        'Personal attention to every customer'
      ]
    },
    {
      year: '2003',
      title: 'Expanding Traditions',
      description: 'Second generation joins, bringing innovation while preserving traditional methods',
      highlights: [
        'Introduction of seasonal collections',
        'Modernized kitchen facilities',
        'Preservation of artisanal techniques'
      ]
    },
    {
      year: '2013',
      title: 'Excellence in Craft',
      description: 'Recognition as one of the premier traditional sweet makers in the region',
      highlights: [
        'Award for culinary excellence',
        'Featured in national food magazines',
        'Expansion of signature collections'
      ]
    },
    {
      year: '2023',
      title: 'Modern Legacy',
      description: 'Third generation continues the legacy with a blend of tradition and contemporary vision',
      highlights: [
        'Sustainable sourcing practices',
        'Artisanal workshop programs',
        'Heritage preservation initiatives'
      ]
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

    const elements = timelineRef.current.querySelectorAll('.milestone');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="heritage" className="section-padding bg-white" ref={timelineRef}>
      <div className="content-wrapper">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="golden-text">Our Heritage</span>
          </h2>
          <p className="section-subtitle">
            Three decades of sweet-making excellence
          </p>
        </div>

        {/* Heritage Story */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            At Mithas, we are more than just sweet makers - we are custodians of tradition, 
            artisans of taste, and creators of moments. Our journey began in 1993 with a 
            simple vision: to preserve and perfect the art of traditional Indian sweet-making.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[var(--color-caramel)]/20" />

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="milestone opacity-0 transition-all duration-1000"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}>
                  <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="inline-flex items-center gap-3">
                      <span className="text-4xl font-playfair text-[var(--color-caramel)]">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-[var(--text-secondary)]">
                      {milestone.description}
                    </p>
                    <ul className="space-y-2">
                      {milestone.highlights.map((highlight) => (
                        <li 
                          key={highlight}
                          className="text-[var(--text-light)] flex items-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--color-caramel)]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="sweet-card aspect-square">
                      <div className="absolute inset-0 bg-[var(--color-caramel)]/5 rounded-2xl" />
                      {/* Image placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-caramel)]/20 to-transparent rounded-xl" />
                    </div>
                    {/* Timeline point */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 rounded-full bg-[var(--color-caramel)] relative">
                        <div className="absolute inset-0 bg-[var(--color-caramel)] rounded-full animate-ping opacity-75" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-32">
          <h3 className="text-center text-2xl font-semibold text-[var(--text-primary)] mb-12">
            Our Guiding Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tradition',
                description: 'Preserving time-honored recipes and techniques passed down through generations'
              },
              {
                title: 'Craftsmanship',
                description: 'Dedication to perfection in every step of the sweet-making process'
              },
              {
                title: 'Innovation',
                description: 'Thoughtfully evolving our craft while respecting traditional foundations'
              }
            ].map((value) => (
              <div 
                key={value.title}
                className="sweet-card p-8 text-center"
              >
                <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                  {value.title}
                </h4>
                <p className="text-[var(--text-light)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage; 