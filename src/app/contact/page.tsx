'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { FacebookIcon, InstagramIcon, PinterestIcon, WhatsAppIcon } from '@/components/icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-[129px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re here to help you find your perfect fit
            </p>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Sarit Centre */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#E6007E] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900">Sarit Centre</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#E6007E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-700">Sarit Centre, Westlands, Nairobi</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#E6007E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+254746844227" className="text-gray-700 hover:text-[#E6007E] transition-colors">
                      +254 746 844 227
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#E6007E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:hello@lovingmycurves.com" className="text-gray-700 hover:text-[#E6007E] transition-colors">
                      hello@lovingmycurves.com
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3 pt-4 border-t">
                    <svg className="w-5 h-5 text-[#E6007E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 font-semibold">Opening Hours:</p>
                      <p className="text-gray-600 text-sm">Mon-Sat: 10am - 7pm</p>
                      <p className="text-gray-600 text-sm">Sun: 10am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yaya Centre */}
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#E6007E] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900">Yaya Centre</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#E6007E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-700">Yaya Centre, Kilimani, Nairobi</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#E6007E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+254703844227" className="text-gray-700 hover:text-[#E6007E] transition-colors">
                      +254 703 844 227
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#E6007E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:hello@lovingmycurves.com" className="text-gray-700 hover:text-[#E6007E] transition-colors">
                      hello@lovingmycurves.com
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-3 pt-4 border-t">
                    <svg className="w-5 h-5 text-[#E6007E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700 font-semibold">Opening Hours:</p>
                      <p className="text-gray-600 text-sm">Mon-Sat: 10am - 7pm</p>
                      <p className="text-gray-600 text-sm">Sun: 10am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-100">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2 text-center">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                  We&apos;ll get back to you within 24 hours
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-center font-medium">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-[#E6007E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6007E] focus:border-[#E6007E] outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-[#E6007E]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6007E] focus:border-[#E6007E] outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6007E] focus:border-[#E6007E] outline-none transition-all"
                        placeholder="+254 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject <span className="text-[#E6007E]">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6007E] focus:border-[#E6007E] outline-none transition-all bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="fitting">Bra Fitting Question</option>
                        <option value="products">Product Information</option>
                        <option value="order">Order Status</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-[#E6007E]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6007E] focus:border-[#E6007E] outline-none transition-all resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E6007E] hover:bg-[#c50069] text-white font-semibold py-4 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:ring-4 focus:ring-[#E6007E]/30 outline-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    <span className="text-[#E6007E]">*</span> Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Follow Us
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay connected with us on social media for the latest updates, tips, and exclusive offers
            </p>
            
            <div className="flex justify-center items-center gap-6">
              <a
                href="https://facebook.com/lovingmycurves"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Follow us on Facebook"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all group-hover:scale-110">
                  <FacebookIcon className="w-8 h-8 text-gray-600 group-hover:text-[#E6007E] transition-colors" />
                </div>
              </a>
              
              <a
                href="https://instagram.com/lovingmycurves"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Follow us on Instagram"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all group-hover:scale-110">
                  <InstagramIcon className="w-8 h-8 text-gray-600 group-hover:text-[#E6007E] transition-colors" />
                </div>
              </a>
              
              <a
                href="https://pinterest.com/lovingmycurves"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Follow us on Pinterest"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all group-hover:scale-110">
                  <PinterestIcon className="w-8 h-8 text-gray-600 group-hover:text-[#E6007E] transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <WhatsAppIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Prefer WhatsApp?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Chat with us instantly for quick answers and personalized assistance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/254746844227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>Chat - Sarit Centre</span>
              </a>
              
              <a
                href="https://wa.me/254703844227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>Chat - Yaya Centre</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254746844227"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
