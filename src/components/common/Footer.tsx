import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ShieldCheck, 
  Award, 
  Clock, 
  Send,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { showToast } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  // Mobile collapsible state for accordion sections
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    packages: false,
    services: false,
    company: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterDone(true);
      showToast('Thank you for subscribing to Al-Hashmi travel updates!');
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900 pb-20 lg:pb-8 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-emerald-900/80 pb-10">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-900 border border-gold-400/40 flex items-center justify-center text-2xl shadow-lg">
                🕋
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight text-white flex items-center gap-2">
                  AL-HASHMI TRAVELS
                </h3>
                <p className="text-xs text-gold-300 font-semibold tracking-wide uppercase">
                  Govt Licensed DTS #3842 • IATA Accredited
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-md">
              Al-Hashmi Travels & Tours (Pvt) Ltd is Pakistan’s leading authorized Hajj, Umrah, and global visa management company. Delivering peace of mind and sacred hospitality for over 15 years.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900 text-gold-300 text-xs font-semibold border border-gold-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Ministry Approved Umrah Operator
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900 text-gold-300 text-xs font-semibold border border-gold-500/20">
                <Award className="w-3.5 h-3.5" />
                IATA Member #27-3-9482
              </span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-emerald-900/40 p-6 rounded-2xl border border-emerald-800/60">
            <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-gold-400">✨</span> Get Notified of Limited Ramadan & Economy Deals
            </h4>
            <p className="text-xs text-emerald-200/80 mb-4">
              Join 40,000+ pilgrims who receive our exclusive package launches and airline flash fare alerts.
            </p>

            {newsletterDone ? (
              <div className="p-3 bg-emerald-800/80 rounded-xl text-xs font-semibold text-gold-300 border border-gold-500/30">
                ✓ You are subscribed! Check your inbox for upcoming promotional packages.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-700 text-white placeholder-emerald-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-bold text-charcoal-950 bg-gold-500 hover:bg-gold-400 text-sm flex items-center justify-center gap-2 transition-all active:scale-95 touch-target"
                >
                  <Send className="w-4 h-4 text-emerald-950" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Section: Collapsible Mobile Accordions / Desktop Multi-Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Umrah Packages */}
          <div className="border-b lg:border-b-0 border-emerald-900 pb-4 lg:pb-0">
            <button
              onClick={() => toggleSection('packages')}
              className="w-full flex items-center justify-between text-left font-bold text-sm tracking-wide text-white uppercase mb-2 lg:mb-4 lg:cursor-default"
            >
              <span className="text-gold-400">Umrah Packages</span>
              <ChevronDown
                className={`w-5 h-5 text-gold-400 lg:hidden transition-transform duration-200 ${
                  openSections.packages ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`space-y-2.5 text-xs text-emerald-100/80 font-medium ${
                openSections.packages ? 'block' : 'hidden lg:block'
              }`}
            >
              <div><Link to="/package/5-star-royal-vip-14n" className="hover:text-gold-300 transition-colors">5-Star Royal Clock Tower (14N)</Link></div>
              <div><Link to="/package/4-star-premium-15n" className="hover:text-gold-300 transition-colors">4-Star Executive Comfort (15N)</Link></div>
              <div><Link to="/package/3-star-economy-14n" className="hover:text-gold-300 transition-colors">3-Star Economy Budget (14N)</Link></div>
              <div><Link to="/package/ramadan-special-last-10-days" className="hover:text-gold-300 transition-colors">Ramadan Laylatul Qadr Special</Link></div>
              <div><Link to="/package/custom-vip-family-10n" className="hover:text-gold-300 transition-colors">Custom Family & Elderly VIP</Link></div>
              <div><Link to="/packages" className="text-gold-400 font-bold hover:underline">View All Packages →</Link></div>
            </div>
          </div>

          {/* Column 2: Key Travel Services */}
          <div className="border-b lg:border-b-0 border-emerald-900 pb-4 lg:pb-0">
            <button
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between text-left font-bold text-sm tracking-wide text-white uppercase mb-2 lg:mb-4 lg:cursor-default"
            >
              <span className="text-gold-400">Our Services</span>
              <ChevronDown
                className={`w-5 h-5 text-gold-400 lg:hidden transition-transform duration-200 ${
                  openSections.services ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`space-y-2.5 text-xs text-emerald-100/80 font-medium ${
                openSections.services ? 'block' : 'hidden lg:block'
              }`}
            >
              <div><Link to="/visa" className="hover:text-gold-300 transition-colors">Saudi Umrah & Tourist eVisa</Link></div>
              <div><Link to="/visa" className="hover:text-gold-300 transition-colors">Dubai / UAE Visit Visas</Link></div>
              <div><Link to="/visa" className="hover:text-gold-300 transition-colors">Turkey & Malaysia Visas</Link></div>
              <div><Link to="/flights" className="hover:text-gold-300 transition-colors">PIA & Saudia Umrah Flights</Link></div>
              <div><Link to="/packages" className="hover:text-gold-300 transition-colors">Haramain Bullet Train Booking</Link></div>
              <div><Link to="/contact" className="hover:text-gold-300 transition-colors">Private VIP GMC Transfers</Link></div>
            </div>
          </div>

          {/* Column 3: Trust & Company */}
          <div className="border-b lg:border-b-0 border-emerald-900 pb-4 lg:pb-0">
            <button
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between text-left font-bold text-sm tracking-wide text-white uppercase mb-2 lg:mb-4 lg:cursor-default"
            >
              <span className="text-gold-400">Company & Trust</span>
              <ChevronDown
                className={`w-5 h-5 text-gold-400 lg:hidden transition-transform duration-200 ${
                  openSections.company ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`space-y-2.5 text-xs text-emerald-100/80 font-medium ${
                openSections.company ? 'block' : 'hidden lg:block'
              }`}
            >
              <div><Link to="/about" className="hover:text-gold-300 transition-colors">About Al-Hashmi Travels</Link></div>
              <div><Link to="/about" className="hover:text-gold-300 transition-colors">Official Licenses & Affiliations</Link></div>
              <div><Link to="/contact" className="hover:text-gold-300 transition-colors">Our Branch Offices</Link></div>
              <div><Link to="/contact" className="hover:text-gold-300 transition-colors">Pilgrim Reviews & Testimonials</Link></div>
              <div><Link to="/contact" className="hover:text-gold-300 transition-colors">Terms of Booking & Cancellation</Link></div>
              <div><Link to="/contact" className="hover:text-gold-300 transition-colors">Privacy Policy</Link></div>
            </div>
          </div>

          {/* Column 4: Head Office & Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm tracking-wide text-gold-400 uppercase mb-4">
              Head Office Contact
            </h4>
            <div className="space-y-3 text-xs text-emerald-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  Office #14-16, Commercial Plaza, Main Boulevard, Gulberg III, Lahore, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+924235789123" className="hover:text-gold-300">
                  +92 42 3578 9123 / +92 300 8456789
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href="https://wa.me/923008456789" className="hover:text-gold-300">
                  WhatsApp Support (24/7)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:info@alhashmitravels.com" className="hover:text-gold-300">
                  info@alhashmitravels.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-emerald-300">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Google Map Preview */}
        <div className="rounded-2xl overflow-hidden border border-emerald-900 shadow-xl bg-emerald-900/30">
          <div className="p-3 bg-emerald-900/70 border-b border-emerald-800 flex items-center justify-between text-xs text-emerald-200">
            <span className="font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              Visit Our Authorized Consultation Centers
            </span>
            <span className="text-[11px] text-gold-300">Head Office: Lahore | Regional: Islamabad & Karachi</span>
          </div>
          <div className="w-full h-48 sm:h-56 relative bg-slate-800">
            <iframe
              title="Al-Hashmi Travels Head Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108843.83407983637!2d74.27096695!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a55555555%3A0x1b415e612345678!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[110%] w-full h-full"
            />
          </div>
        </div>

        {/* Bottom Bar: Copyright & Accreditations */}
        <div className="pt-8 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300">
          <p>© {new Date().getFullYear()} Al-Hashmi Travels & Tours (Pvt) Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-emerald-300">
            <span>DTS License #3842</span>
            <span>•</span>
            <span>IATA Code #27-3-9482</span>
            <span>•</span>
            <span>SEC Reg #0093841</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
