'use client';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic to be implemented
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-padding bg-[var(--color-cream)]">
      <div className="content-wrapper">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="golden-text">Get in Touch</span>
          </h2>
          <p className="section-subtitle">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
                Visit Our Store
              </h3>
              <div className="space-y-4">
                <p className="text-[var(--text-secondary)]">
                  Experience the artistry of traditional sweet-making in person
                </p>
                <div className="space-y-2">
                  <p className="text-[var(--text-light)] flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--color-caramel)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    123 Sweet Street, Culinary District
                    <br />City, State 12345
                  </p>
                  <p className="text-[var(--text-light)] flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--color-caramel)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Mon-Sat: 9:00 AM - 8:00 PM
                    <br />Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
                Contact Details
              </h3>
              <div className="space-y-4">
                <p className="text-[var(--text-light)] flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--color-caramel)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1 (555) 123-4567
                </p>
                <p className="text-[var(--text-light)] flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--color-caramel)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contact@mithas.com
                </p>
              </div>
            </div>

            <div className="sweet-card p-6">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Special Orders & Events
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Planning a special celebration? We offer custom orders and catering services 
                for weddings, corporate events, and special occasions.
              </p>
              <p className="text-[var(--text-light)]">
                Contact our events team for personalized assistance.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="sweet-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-[var(--text-primary)] font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[var(--color-caramel)]/20 
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-caramel)]/20
                    bg-white/50 text-[var(--text-primary)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  className="block text-[var(--text-primary)] font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[var(--color-caramel)]/20 
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-caramel)]/20
                    bg-white/50 text-[var(--text-primary)]"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label 
                  htmlFor="subject"
                  className="block text-[var(--text-primary)] font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-[var(--color-caramel)]/20 
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-caramel)]/20
                    bg-white/50 text-[var(--text-primary)]"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="block text-[var(--text-primary)] font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-[var(--color-caramel)]/20 
                    focus:outline-none focus:ring-2 focus:ring-[var(--color-caramel)]/20
                    bg-white/50 text-[var(--text-primary)]"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="sweet-button w-full justify-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 