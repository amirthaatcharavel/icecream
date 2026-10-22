import React, { useState } from 'react';
import type { PageView } from '../types';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  Navigation,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
  ChevronDown,
  CheckCircle2,
  Calendar,
  MessageSquare,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageView) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate: _onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Party Catering / Bulk Order',
    eventDate: '',
    guests: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: 'Do you offer vegan and dairy-free options?',
      a: 'Yes! We churn fresh vegan sorbets daily using ripe Alphonso mangoes, coastal tender coconuts, and berries. Our sorbets are 100% plant-based, dairy-free, and gluten-free with zero artificial flavorings.',
    },
    {
      q: 'Can I order insulated party tubs for home gatherings?',
      a: 'Absolutely! We pack 500ml and 1-Litre insulated artisan gelato tubs with food-grade dry cold packs that stay chilled for up to 90 minutes during transit. Pre-orders are recommended for large events.',
    },
    {
      q: 'Do you cater weddings, birthdays, and corporate events?',
      a: 'Yes, our mobile artisanal gelato cart brings authentic Italian scooping theatre directly to your venue in Puducherry, Auroville, and Chennai. Fill out our contact form above to receive our catering menu and pricing packages.',
    },
    {
      q: 'Are your waffle cones freshly baked in-house?',
      a: 'Every single waffle cone is rolled and griddled fresh throughout the day using whole butter, brown sugar, and Madagascar vanilla extract. We also offer dark chocolate-dipped and roasted almond-crusted cones!',
    },
    {
      q: 'Where do you source your milk and fruits?',
      a: 'We partner with local organic dairy cooperatives in Tamil Nadu and Auroville for fresh unhomogenized whole milk, and source premium regional produce such as Ratnagiri mangoes and Mahabaleshwar strawberries.',
    },
  ];

  return (
    <div className="py-12 md:py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-strawberry-light text-chocolate text-xs font-bold uppercase tracking-wider border border-strawberry/40">
            <MapPin className="w-3.5 h-3.5 text-strawberry-dark" />
            <span>Visit & Say Hello</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-chocolate tracking-tight">
            Come Visit Our Parlour
          </h1>

          <p className="text-base sm:text-lg text-chocolate/80 leading-relaxed font-normal">
            Whether you want to drop by for a late-evening waffle cone, plan a special event, or order bulk party tubs, our friendly team is always here for you.
          </p>
        </div>

        {/* 2-Column Store Info + Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Parlour Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-chocolate/8 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-black text-chocolate flex items-center gap-2">
                <span>🍦</span>
                <span>White Town Boutique</span>
              </h2>

              <p className="text-xs sm:text-sm text-chocolate/75 leading-relaxed">
                Nestled on the picturesque cobblestone corner of Rue Suffren, just 300 metres from the serene Bay of Bengal promenade.
              </p>

              {/* Contact Information */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-strawberry-light flex items-center justify-center text-strawberry-dark shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-chocolate">Address</h3>
                    <p className="text-xs text-chocolate/80 mt-0.5">
                      14 Rue Suffren, White Town, Puducherry 605001, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-vanilla-light flex items-center justify-center text-chocolate shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-chocolate">Hours of Joy</h3>
                    <p className="text-xs text-chocolate/80 mt-0.5">
                      Monday to Sunday: 11:00 AM – 11:00 PM
                    </p>
                    <span className="text-[11px] text-pistachio-dark font-bold">
                      Open 7 days a week, 365 days a year
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-pistachio-light flex items-center justify-center text-pistachio-dark shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-chocolate">Phone & Orders</h3>
                    <p className="text-xs text-chocolate/80 mt-0.5">
                      +91 98765 43210 / +91 (413) 222-7266
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-cream-dark flex items-center justify-center text-chocolate shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm text-chocolate">Email Inquiries</h3>
                    <p className="text-xs text-chocolate/80 mt-0.5">
                      bonjour@scoopandswirl.in / events@scoopandswirl.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-chocolate/8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-chocolate text-cream font-bold text-xs py-3.5 px-4 rounded-2xl hover:bg-chocolate-light transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-strawberry" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-cream text-chocolate font-bold text-xs py-3.5 px-4 rounded-2xl border border-chocolate/15 hover:bg-cream-dark transition-colors"
                >
                  <Phone className="w-4 h-4 text-chocolate/70" />
                  <span>Call Parlour</span>
                </a>
              </div>
            </div>

            {/* Travel & Parking Tips Card */}
            <div className="bg-pistachio-light/40 border border-pistachio/30 rounded-3xl p-6 space-y-3 text-xs text-chocolate">
              <h3 className="font-serif font-bold text-sm text-chocolate flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pistachio-dark" />
                <span>Visiting White Town Tips</span>
              </h3>
              <ul className="space-y-1.5 text-chocolate/80 list-disc list-inside">
                <li>Bicycle & two-wheeler parking available right in front of the parlour.</li>
                <li>Car parking is recommended along Rue Dumas or Rue Romain Rolland (2 min stroll).</li>
                <li>Outdoor verandah seating is pet-friendly! Bring your furry friends along.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Event Catering & Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-chocolate/8 shadow-sm">
              <div className="mb-8 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-strawberry-dark">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send a Note or Inquiry</span>
                </div>
                <h2 className="font-serif text-3xl font-black text-chocolate">
                  Catering, Bulk Orders & Hello
                </h2>
                <p className="text-xs sm:text-sm text-chocolate/70">
                  Planning a celebration or have a question? Leave your details and our gelato team will get back to you within 2 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-cream rounded-3xl border border-chocolate/10 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-pistachio-light text-pistachio-dark mx-auto flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif font-black text-2xl text-chocolate">
                    Message Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-chocolate/75 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'friend'}</strong>! We’ve received your inquiry regarding <em>{formData.inquiryType}</em> and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Party Catering / Bulk Order',
                        eventDate: '',
                        guests: '',
                        message: '',
                      });
                    }}
                    className="bg-chocolate text-cream font-bold text-xs px-6 py-3 rounded-full hover:bg-chocolate-light transition-colors mt-2"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-chocolate mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maya Iyer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-chocolate/10 text-xs text-chocolate placeholder-chocolate/40 focus:outline-none focus:border-chocolate"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-chocolate mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-chocolate/10 text-xs text-chocolate placeholder-chocolate/40 focus:outline-none focus:border-chocolate"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-chocolate mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. maya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-chocolate/10 text-xs text-chocolate placeholder-chocolate/40 focus:outline-none focus:border-chocolate"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-chocolate mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-chocolate/10 text-xs text-chocolate font-medium focus:outline-none focus:border-chocolate"
                      >
                        <option>Party Catering / Bulk Order</option>
                        <option>Gelato Cart Rental</option>
                        <option>Custom Flavour Collaboration</option>
                        <option>General Question / Feedback</option>
                      </select>
                    </div>
                  </div>

                  {formData.inquiryType.includes('Catering') && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-cream-light border border-chocolate/10">
                      <div>
                        <label className="block text-xs font-bold text-chocolate mb-1 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-strawberry-dark" />
                          <span>Event Date (Optional)</span>
                        </label>
                        <input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-chocolate/10 text-xs text-chocolate focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-chocolate mb-1">
                          Estimated Guests
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 50-80 guests"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-chocolate/10 text-xs text-chocolate focus:outline-none"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-chocolate mb-1">
                      Your Message / Notes *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your event, preferred flavours, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-cream-light border border-chocolate/10 text-xs text-chocolate placeholder-chocolate/40 focus:outline-none focus:border-chocolate resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-chocolate hover:bg-chocolate-light active:scale-98 text-cream font-bold text-xs shadow-xl flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4 text-strawberry" />
                    <span>Send Message to Team</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="mt-20 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vanilla text-chocolate text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-chocolate" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-chocolate">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-chocolate/75">
              Everything you need to know about our scoops, ingredients, and store policies.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-chocolate/8 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif font-bold text-base text-chocolate">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-chocolate/60 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-strawberry-dark' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-chocolate/75 leading-relaxed border-t border-chocolate/5 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
