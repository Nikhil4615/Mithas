'use client';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCollection, setSelectedCollection] = useState('all');

  const collections = [
    {
      id: 'traditional',
      title: 'Traditional Masterpieces',
      description: 'Time-honored recipes perfected through generations',
      items: [
        {
          name: 'Kaju Katli',
          description: 'Delicate diamond-shaped cashew confection adorned with silver varq',
          artistry: 'Hand-rolled and precisely cut to achieve the perfect diamond shape',
          image: '/gallery/kaju-katli.jpg'
        },
        {
          name: 'Gulab Jamun',
          description: 'Perfectly spherical dumplings in aromatic saffron syrup',
          artistry: 'Crafted to achieve ideal density and golden-brown perfection',
          image: '/gallery/gulab-jamun.jpg'
        },
        {
          name: 'Rasgulla',
          description: 'Delicate cheese spheres in light sugar syrup',
          artistry: 'Expertly kneaded and shaped for cloud-like softness',
          image: '/gallery/rasgulla.jpg'
        }
      ]
    },
    {
      id: 'artistic',
      title: 'Artistic Creations',
      description: 'Where innovation meets tradition',
      items: [
        {
          name: 'Royal Paan Barfi',
          description: 'A fusion of traditional barfi with aromatic paan',
          artistry: 'Layered with edible silver and rose petals',
          image: '/gallery/paan-barfi.jpg'
        },
        {
          name: 'Saffron Symphony',
          description: 'Delicate layers of saffron-infused milk sweet',
          artistry: 'Each layer carefully crafted and garnished with pistachios',
          image: '/gallery/saffron-sweet.jpg'
        },
        {
          name: 'Golden Rose Kalakand',
          description: 'Textured milk cake with rose essence',
          artistry: 'Decorated with edible gold leaf and dried rose petals',
          image: '/gallery/rose-kalakand.jpg'
        }
      ]
    },
    {
      id: 'seasonal',
      title: 'Seasonal Specialties',
      description: 'Limited edition creations that celebrate the seasons',
      items: [
        {
          name: 'Mango Mastani',
          description: 'Summer special mango-infused delicacy',
          artistry: 'Fresh alphonso mangoes transformed into velvet-smooth treats',
          image: '/gallery/mango-mastani.jpg'
        },
        {
          name: 'Winter Gajar Halwa',
          description: 'Traditional carrot pudding with nuts',
          artistry: 'Slow-cooked to perfection with premium ghee',
          image: '/gallery/gajar-halwa.jpg'
        },
        {
          name: 'Festive Modak',
          description: 'Festival special coconut-filled dumplings',
          artistry: 'Intricately pleated by hand with artistic precision',
          image: '/gallery/modak.jpg'
        }
      ]
    }
  ];

  return (
    <section id="collections" className="section-padding bg-white">
      <div className="content-wrapper">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="golden-text">Sweet Artistry</span>
          </h2>
          <p className="section-subtitle">
            Each creation is a testament to our dedication to the art of sweet-making
          </p>
        </div>

        {/* Collection Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCollection('all')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              selectedCollection === 'all'
                ? 'sweet-button'
                : 'text-[var(--text-secondary)] hover:text-[var(--color-caramel)]'
            }`}
          >
            All Collections
          </button>
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setSelectedCollection(collection.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCollection === collection.id
                  ? 'sweet-button'
                  : 'text-[var(--text-secondary)] hover:text-[var(--color-caramel)]'
              }`}
            >
              {collection.title}
            </button>
          ))}
        </div>

        <div className="space-y-24">
          {collections
            .filter(collection => selectedCollection === 'all' || collection.id === selectedCollection)
            .map((collection) => (
              <div key={collection.id} className="relative">
                <div className="mb-12 text-center">
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                    {collection.title}
                  </h3>
                  <p className="text-[var(--text-light)]">
                    {collection.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {collection.items.map((item) => (
                    <article 
                      key={item.name}
                      className="sweet-card group cursor-pointer overflow-hidden"
                    >
                      <div className="aspect-square relative">
                        <div className="absolute inset-0 bg-[var(--color-caramel)]/10 group-hover:bg-[var(--color-caramel)]/20 transition-colors duration-300" />
                      </div>
                      <div className="p-6 space-y-4">
                        <h4 className="text-xl font-semibold text-[var(--text-primary)]">
                          {item.name}
                        </h4>
                        <p className="text-[var(--text-secondary)]">
                          {item.description}
                        </p>
                        <div className="pt-4 border-t border-[var(--color-caramel)]/10">
                          <p className="text-[var(--text-light)] text-sm italic">
                            {item.artistry}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 