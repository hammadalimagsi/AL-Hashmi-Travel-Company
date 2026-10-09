import React, { useState } from 'react';
import {
  Phone, MessageCircle, Mail, MapPin, Clock, Send,
  CheckCircle2, AlertCircle, User, FileText
} from 'lucide-react';
import { PACKAGES_DATA } from '../data/packages';
import { useApp } from '../context/AppContext';

interface FormData {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  packageChoice: string;
  inquiryType: string;
  message: string;
  preferredContact: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    packageChoice: '',
    inquiryType: 'Umrah Package Inquiry',
    message: '',
    preferredContact: 'WhatsApp',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      newErrors.name = 'Full name is required (min 3 characters)';
    }
    if (!formData.phone.trim() || !/^[0-9+\s-]{10,14}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Pakistani phone number';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least a brief message about your inquiry';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      showToast('Your inquiry was sent! Expect a call within 30 minutes.');
    }, 700);
  };

  const branches = [
    {
      city: 'Lahore (Head Office)',
      address: 'Office #14-16, Commercial Plaza, Main Boulevard, Gulberg III, Lahore',
      phone: '+92 42 3578 9123',
      whatsapp: '+92 300 8456789',
      hours: 'Mon–Sat: 9 AM – 9 PM | Sun: 11 AM – 5 PM'
    },
    {
      city: 'Islamabad Branch',
      address: 'Shop #7, Blue Area Plaza, Jinnah Avenue, Islamabad',
      phone: '+92 51 2345 6789',
      whatsapp: '+92 331 9876543',
      hours: 'Mon–Sat: 9 AM – 8 PM'
    },
    {
      city: 'Karachi Branch',
      address: 'Office A-12, Clifton Block-5, Commercial Area, Karachi',
      phone: '+92 21 3567 8900',
      whatsapp: '+92 333 1234567',
      hours: 'Mon–Sat: 9 AM – 8 PM'
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-28 lg:pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <div className="text-xs text-gold-400 font-bold uppercase tracking-widest">
            Al-Hashmi Travels › Contact Us
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            Get in Touch with Our Experts
          </h1>
          <p className="text-sm text-emerald-200 max-w-xl">
            Our certified Umrah travel advisors are available 6 days a week from 9 AM to 9 PM. WhatsApp support operates 24/7.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10">
        {/* Quick Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="tel:+924235789123"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 p-5 rounded-2xl bg-emerald-950 text-white font-bold shadow-md hover:bg-emerald-900 transition-all touch-target"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center">
              <Phone className="w-6 h-6 text-gold-300" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wide">Tap to Call Now</p>
              <p className="text-base font-extrabold">+92 42 3578 9123</p>
              <p className="text-[11px] text-emerald-300">Lahore Head Office</p>
            </div>
          </a>

          <a
            href="https://wa.me/923008456789?text=Assalam-o-Alaikum,%20I%20need%20help%20with%20my%20Umrah%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 p-5 rounded-2xl bg-[#25D366] text-white font-bold shadow-md hover:bg-[#1da851] transition-all touch-target"
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[11px] font-semibold text-white/80 uppercase tracking-wide">Tap to WhatsApp</p>
              <p className="text-base font-extrabold">+92 300 8456789</p>
              <p className="text-[11px] text-white/80">Available 24/7</p>
            </div>
          </a>

          <a
            href="mailto:info@alhashmitravels.com"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 p-5 rounded-2xl bg-white border border-slate-200 text-charcoal-900 font-bold shadow-sm hover:border-emerald-400 hover:bg-emerald-50 transition-all touch-target"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Mail className="w-6 h-6 text-emerald-800" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[11px] font-semibold text-charcoal-500 uppercase tracking-wide">Email Us</p>
              <p className="text-sm font-extrabold break-all">info@alhashmitravels.com</p>
              <p className="text-[11px] text-charcoal-500">Response within 4 hrs</p>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 p-5 sm:p-6">
              <h2 className="text-xl font-extrabold text-white">Send Us a Detailed Inquiry</h2>
              <p className="text-sm text-emerald-200 mt-1">Fill in the form and our advisor will respond within 30 minutes during business hours.</p>
            </div>

            <div className="p-5 sm:p-6">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-700 mx-auto" />
                  <h3 className="text-xl font-bold text-charcoal-900">JazakAllah Khair!</h3>
                  <p className="text-sm text-charcoal-600">
                    Inquiry received from <strong>{formData.name}</strong>. Our consultant will contact you on <strong>{formData.phone}</strong> within 30 minutes. May Allah bless your journey. 🕋
                  </p>
                  <a
                    href={`https://wa.me/923008456789?text=${encodeURIComponent(`Assalam-o-Alaikum, I am ${formData.name}. I just submitted an inquiry for ${formData.inquiryType}. Please confirm receipt.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Confirm on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-charcoal-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-charcoal-400 absolute left-3 top-3.5" />
                        <input
                          type="text" placeholder="Haji Muhammad Ali"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-700 ${errors.name ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                        />
                      </div>
                      {errors.name && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-charcoal-700 mb-1">
                        Primary Phone *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-charcoal-400 absolute left-3 top-3.5" />
                        <input
                          type="tel" placeholder="0300 1234567"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full pl-9 pr-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-700 ${errors.phone ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                        />
                      </div>
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold text-charcoal-700 mb-1">
                        WhatsApp Number
                      </label>
                      <div className="relative">
                        <MessageCircle className="w-4 h-4 text-[#25D366] absolute left-3 top-3.5" />
                        <input
                          type="tel" placeholder="Same as phone or different"
                          value={formData.whatsapp}
                          onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-charcoal-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-charcoal-400 absolute left-3 top-3.5" />
                        <input
                          type="email" placeholder="your@email.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Type & Package Choice */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-charcoal-700 mb-1">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-emerald-700"
                      >
                        <option>Umrah Package Inquiry</option>
                        <option>Hajj Package Inquiry</option>
                        <option>Visa Application Help</option>
                        <option>Flight Reservation</option>
                        <option>Hotel Only Booking</option>
                        <option>Haramain Train Booking</option>
                        <option>Complaint / Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-charcoal-700 mb-1">
                        Preferred Package (Optional)
                      </label>
                      <div className="relative">
                        <FileText className="w-4 h-4 text-charcoal-400 absolute left-3 top-3.5" />
                        <select
                          value={formData.packageChoice}
                          onChange={e => setFormData({ ...formData, packageChoice: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-emerald-700"
                        >
                          <option value="">Select package (if applicable)</option>
                          {PACKAGES_DATA.map(p => (
                            <option key={p.id} value={p.id}>{p.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['WhatsApp', 'Call', 'Email'].map(method => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: method })}
                          className={`px-4 py-2 rounded-xl border font-bold text-xs transition-all touch-target ${
                            formData.preferredContact === method
                              ? 'bg-emerald-850 text-white border-emerald-950'
                              : 'border-slate-300 text-charcoal-700 hover:border-emerald-400'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">
                      Your Message / Requirements *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. I am looking for a 14-night 5-star Umrah package for 4 adults departing from Lahore in December 2026. Senior citizen with wheelchair needed..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-emerald-700 resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                    />
                    {errors.message && <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl font-extrabold text-charcoal-950 bg-gold-500 hover:bg-gold-400 shadow-md flex items-center justify-center gap-2 text-sm touch-target transition-all disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-emerald-950" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Sidebar: Branch Offices */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-extrabold text-charcoal-900">Our Offices</h2>
            {branches.map((branch, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3 hover:border-emerald-400 transition-all">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-800 shrink-0" />
                  <h3 className="font-extrabold text-base text-charcoal-900">{branch.city}</h3>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed pl-7">{branch.address}</p>
                <div className="pl-7 space-y-2">
                  <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-xs font-semibold text-charcoal-800 hover:text-emerald-800">
                    <Phone className="w-3.5 h-3.5 text-emerald-700" /> {branch.phone}
                  </a>
                  <a href={`https://wa.me/${branch.whatsapp.replace(/[+\s]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-semibold text-charcoal-800 hover:text-[#25D366]">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> {branch.whatsapp}
                  </a>
                  <div className="flex items-start gap-2 text-xs text-charcoal-600">
                    <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                    <span>{branch.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-emerald-950 rounded-2xl p-5 text-white space-y-3">
              <h3 className="font-extrabold text-base text-gold-300">Follow & Connect</h3>
              <p className="text-xs text-emerald-200">Stay updated with latest package launches, visa news, and Ramadan deals.</p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'YouTube', 'TikTok'].map(platform => (
                  <button key={platform} onClick={() => showToast(`Opening ${platform}...`)}
                    className="px-3 py-2 rounded-xl bg-emerald-900 border border-emerald-700 text-[11px] font-bold text-gold-300 hover:border-gold-400 transition-all">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
