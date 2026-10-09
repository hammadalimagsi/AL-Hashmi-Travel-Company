import React, { useState } from 'react';
import { 
  ChevronDown, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Globe, 
  AlertCircle,
  MessageCircle,
  Phone,
  Send,
  Upload
} from 'lucide-react';
import { VISA_SERVICES_DATA } from '../data/visas';
import { useApp } from '../context/AppContext';

export const VisaPage: React.FC = () => {
  const { formatPrice, showToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVisaId, setSelectedVisaId] = useState<string | null>(null);
  const [inquiryForm, setInquiryForm] = useState({
    name: '', phone: '', visaType: '', passportNumber: '', travelDate: '', notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);

  const categories = ['All', 'Umrah & Hajj', 'GCC', 'International Tourist', 'E-Visa'];
  
  const filteredVisas = selectedCategory === 'All'
    ? VISA_SERVICES_DATA
    : VISA_SERVICES_DATA.filter(v => v.category === selectedCategory);

  const selectedVisa = VISA_SERVICES_DATA.find(v => v.id === selectedVisaId);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    showToast('Visa inquiry submitted! We will contact you within 2 hours.');
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-28 lg:pb-10">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-bold uppercase tracking-widest">
            <span>Al-Hashmi Travels</span> <span>›</span> <span>Visa Services</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            Official Visa Processing Services
          </h1>
          <p className="text-sm text-emerald-200 max-w-xl">
            MOFA-verified Saudi Umrah eVisa, Dubai, Turkey, Malaysia visas and more — with 99.8% approval rate and medical insurance included.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all touch-target ${
                selectedCategory === cat
                  ? 'bg-emerald-850 text-white border-emerald-950 shadow-md'
                  : 'bg-white text-charcoal-700 border-slate-200 hover:border-emerald-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Visa Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVisas.map((visa) => (
            <div key={visa.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-luxury transition-all overflow-hidden">
              {/* Card Banner Image */}
              <div className="relative h-36 w-full overflow-hidden">
                <img src={visa.bannerImage} alt={visa.country} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{visa.flagEmoji}</span>
                    <div>
                      <p className="font-extrabold text-base leading-tight">{visa.country}</p>
                      <span className="text-[10px] font-semibold bg-gold-500/90 text-charcoal-950 px-1.5 py-0.5 rounded">
                        {visa.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-emerald-200 font-semibold">From</p>
                    <p className="text-base font-black text-gold-300">{formatPrice(visa.fees)}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3">
                <h3 className="font-bold text-sm text-charcoal-900 leading-snug">{visa.title}</h3>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                    <p className="text-[10px] text-charcoal-500 font-semibold uppercase">Processing</p>
                    <p className="font-bold text-charcoal-900 mt-0.5 leading-snug">{visa.processingTime}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                    <p className="text-[10px] text-charcoal-500 font-semibold uppercase">Validity</p>
                    <p className="font-bold text-charcoal-900 mt-0.5 leading-snug">{visa.validity}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
                    <p className="text-[10px] text-charcoal-500 font-semibold uppercase">Entry Type</p>
                    <p className="font-bold text-charcoal-900 mt-0.5">{visa.entryType}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-2 border border-emerald-200">
                    <p className="text-[10px] text-emerald-700 font-semibold uppercase">Approval Rate</p>
                    <p className="font-bold text-emerald-800 mt-0.5">99.8% ✓</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedVisaId(selectedVisaId === visa.id ? null : visa.id)}
                  className="w-full py-2.5 px-4 rounded-xl border border-emerald-800/40 text-emerald-900 font-bold text-xs hover:bg-emerald-50 flex items-center justify-between transition-all touch-target"
                >
                  <span>View Requirements & Apply</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${selectedVisaId === visa.id ? 'rotate-180' : ''}`} />
                </button>

                {/* Expanded Requirements */}
                {selectedVisaId === visa.id && (
                  <div className="space-y-4 pt-2 border-t border-slate-100">
                    <p className="text-xs text-charcoal-600 leading-relaxed">{visa.description}</p>

                    {/* Requirements List */}
                    <div>
                      <h4 className="text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-2">Key Requirements</h4>
                      <ul className="space-y-1.5">
                        {visa.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-charcoal-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Required Documents with Download Buttons */}
                    <div>
                      <h4 className="text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-2">Documents Checklist</h4>
                      <div className="space-y-2">
                        {visa.requiredDocuments.map((doc, i) => (
                          <div key={i} className={`p-3 rounded-xl border text-xs ${doc.isMandatory ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="font-bold text-charcoal-900 flex items-center gap-1.5">
                                {doc.isMandatory ? (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                                ) : (
                                  <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                                )}
                                {doc.title}
                              </span>
                              {doc.sampleDownloadName && (
                                <button
                                  onClick={() => showToast(`Sample form "${doc.sampleDownloadName}" would download here.`)}
                                  className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-800 text-white text-[10px] font-bold shrink-0"
                                >
                                  <Download className="w-3 h-3" />
                                  Sample
                                </button>
                              )}
                            </div>
                            <p className="text-charcoal-600 leading-snug pl-5">{doc.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Apply WhatsApp */}
                    <a
                      href={`https://wa.me/923008456789?text=Assalam-o-Alaikum,%20I%20need%20a%20${encodeURIComponent(visa.title)}%20visa%20assistance`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#1da851] flex items-center justify-center gap-2 text-xs touch-target transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Apply via WhatsApp Now
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Visa Inquiry Form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 p-5 sm:p-6">
            <h2 className="text-xl font-extrabold text-white">Visa Inquiry & Application Form</h2>
            <p className="text-sm text-emerald-200 mt-1">Submit your documents digitally. Our MOFA-approved team will process your file immediately.</p>
          </div>

          <div className="p-5 sm:p-6">
            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-700 mx-auto" />
                <h3 className="text-xl font-bold text-charcoal-900">Inquiry Received!</h3>
                <p className="text-sm text-charcoal-600">
                  Our visa consultant will call you within 2 business hours for document collection.
                </p>
                <button onClick={() => setFormSubmitted(false)} className="px-6 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-sm">
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">Full Name *</label>
                    <input
                      required type="text" placeholder="Muhammad Ali Khan"
                      value={inquiryForm.name} onChange={e => setInquiryForm({...inquiryForm, name: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      required type="tel" placeholder="0300 1234567"
                      value={inquiryForm.phone} onChange={e => setInquiryForm({...inquiryForm, phone: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">Visa Required *</label>
                    <select
                      required value={inquiryForm.visaType} onChange={e => setInquiryForm({...inquiryForm, visaType: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-emerald-700 text-sm"
                    >
                      <option value="">Select Visa Type...</option>
                      {VISA_SERVICES_DATA.map(v => <option key={v.id} value={v.id}>{v.flagEmoji} {v.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 mb-1">Passport Number</label>
                    <input
                      type="text" placeholder="AA1234567"
                      value={inquiryForm.passportNumber} onChange={e => setInquiryForm({...inquiryForm, passportNumber: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700 text-sm"
                    />
                  </div>
                </div>

                {/* File Upload UI */}
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Upload Passport Scan / Documents</label>
                  <div
                    onClick={() => showToast('File upload feature active! Attach your passport scan here.')}
                    className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-xl p-6 text-center cursor-pointer transition-all"
                  >
                    <Upload className="w-6 h-6 text-charcoal-400 mx-auto mb-2" />
                    <p className="text-sm text-charcoal-600 font-semibold">Click or drag files here to upload</p>
                    <p className="text-[11px] text-charcoal-400 mt-1">Supports PDF, JPG, PNG (max 10 MB each)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 mb-1">Additional Notes</label>
                  <textarea
                    rows={3} placeholder="Travel dates, number of travelers, special requests..."
                    value={inquiryForm.notes} onChange={e => setInquiryForm({...inquiryForm, notes: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-700 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-extrabold text-charcoal-950 bg-gold-500 hover:bg-gold-400 shadow-md flex items-center justify-center gap-2 text-sm touch-target"
                >
                  <Send className="w-4 h-4 text-emerald-950" />
                  Submit Visa Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
