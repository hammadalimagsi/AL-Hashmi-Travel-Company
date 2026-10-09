import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Calendar, Users, Phone, MapPin } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PACKAGES_DATA } from '../../data/packages';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, selectedPackageForModal, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    packageId: '',
    departureCity: 'Lahore (LHE)',
    travelMonth: 'Next Month (Immediate)',
    adults: '2',
    children: '0',
    roomPreference: 'Double Sharing',
    specialNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (selectedPackageForModal?.id) {
      setFormData(prev => ({ ...prev, packageId: selectedPackageForModal.id! }));
    } else if (PACKAGES_DATA.length > 0) {
      setFormData(prev => ({ ...prev, packageId: PACKAGES_DATA[0].id }));
    }
  }, [selectedPackageForModal]);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate quick API dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      showToast('Quotation request submitted! Our Umrah expert will contact you shortly.');
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeQuoteModal();
  };

  const selectedPkg = PACKAGES_DATA.find(p => p.id === formData.packageId);

  const getWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Al-Hashmi Travels,\n\nI want a quotation for: ${selectedPkg?.title || 'Umrah Package'}\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Departure City: ${formData.departureCity}\n` +
      `Travelers: ${formData.adults} Adults, ${formData.children} Children\n` +
      `Room Type: ${formData.roomPreference}\n` +
      `Travel Window: ${formData.travelMonth}\n` +
      (formData.specialNotes ? `Notes: ${formData.specialNotes}\n` : '')
    );
    return `https://wa.me/923008456789?text=${text}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={handleReset}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-emerald-900/20 my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 p-4 sm:p-5 text-white flex items-center justify-between relative border-b border-gold-500/30">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-gold-400 uppercase">
              Free Consultation & Estimate
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Request Umrah Quotation
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-2 text-white/80 hover:text-white rounded-full hover:bg-emerald-800 touch-target flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center border-2 border-emerald-300">
              <CheckCircle2 className="w-10 h-10 text-emerald-800" />
            </div>
            
            <h4 className="text-xl font-bold text-charcoal-900">
              JazakAllah Khair! Request Received
            </h4>
            
            <p className="text-sm text-charcoal-600 leading-relaxed max-w-sm mx-auto">
              Our certified Umrah advisor has received your request for{' '}
              <strong className="text-emerald-900">{selectedPkg?.title}</strong>. We will review hotel availability and send customized rates to <strong className="text-charcoal-900">{formData.phone}</strong> within 30 minutes.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center gap-2 text-sm shadow-md transition-all touch-target"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp Now</span>
              </a>
              <button
                onClick={handleReset}
                className="py-3 px-5 rounded-xl font-semibold text-charcoal-700 bg-slate-100 hover:bg-slate-200 text-sm touch-target"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Package Selector */}
            <div>
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                Selected Package
              </label>
              <select
                value={formData.packageId}
                onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 text-sm font-medium text-charcoal-900"
              >
                {PACKAGES_DATA.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.title} ({pkg.durationNights} Nights)
                  </option>
                ))}
              </select>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Haji Muhammad Ali"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-charcoal-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Departure City & Travel Month */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  Departure City
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-charcoal-400 absolute left-3 top-3.5" />
                  <select
                    value={formData.departureCity}
                    onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 text-sm"
                  >
                    <option value="Lahore (LHE)">Lahore (LHE)</option>
                    <option value="Karachi (KHI)">Karachi (KHI)</option>
                    <option value="Islamabad (ISB)">Islamabad (ISB)</option>
                    <option value="Peshawar (PEW)">Peshawar (PEW)</option>
                    <option value="Multan (MUX)">Multan (MUX)</option>
                    <option value="Sialkot (SKT)">Sialkot (SKT)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  Preferred Month / Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-charcoal-400 absolute left-3 top-3.5" />
                  <select
                    value={formData.travelMonth}
                    onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 text-sm"
                  >
                    <option value="This Month (Urgent)">This Month (Urgent)</option>
                    <option value="Next Month">Next Month</option>
                    <option value="Ramadan 2026 Season">Ramadan 2026 Season</option>
                    <option value="Post-Ramadan (Shawwal)">Post-Ramadan (Shawwal)</option>
                    <option value="Winter Vacation">Winter Vacation</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Travelers & Room Sharing */}
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  Adults (12+)
                </label>
                <select
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-xl border border-slate-300 text-sm"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  Children
                </label>
                <select
                  value={formData.children}
                  onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-xl border border-slate-300 text-sm"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3+">3+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 mb-1">
                  Room Type
                </label>
                <select
                  value={formData.roomPreference}
                  onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                  className="w-full px-2 py-2 rounded-xl border border-slate-300 text-sm"
                >
                  <option value="Double Sharing">Double (2 Bed)</option>
                  <option value="Triple Sharing">Triple (3 Bed)</option>
                  <option value="Quad Sharing">Quad (4 Bed)</option>
                </select>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-bold text-charcoal-700 mb-1">
                Special Requests (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Elderly wheelchair assistance, Kaaba view upgrade, private car, etc."
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 text-sm"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-4 rounded-xl font-extrabold text-charcoal-900 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 shadow-md flex items-center justify-center gap-2 text-sm transition-all active:scale-[0.99] touch-target"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-charcoal-900 border-t-transparent rounded-full animate-spin" />
                    Sending Request...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-emerald-950" />
                    <span>Submit & Get Instant Quote</span>
                  </>
                )}
              </button>
              <p className="text-[11px] text-center text-charcoal-500 mt-2">
                🔒 We respect your privacy. No spam. Instant official estimate.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
