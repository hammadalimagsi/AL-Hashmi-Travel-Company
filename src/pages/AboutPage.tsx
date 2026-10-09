import React from 'react';
import { ShieldCheck, Award, Users, Star, CheckCircle2 } from 'lucide-react';

const teamMembers = [
  {
    name: 'Haji Abdul Hashmi',
    role: 'Founder & Managing Director',
    experience: '25+ Years',
    bio: 'Founder of Al-Hashmi Travels with over 25 years of sacred pilgrim management. Personally supervised 15,000+ Umrah and Hajj pilgrims.',
    avatarText: 'AH',
    accreditations: ['Govt DTS License Holder', 'Saudi Ministry Approved', 'IATA Accredited']
  },
  {
    name: 'Muhammad Zubair Hashmi',
    role: 'Director Operations – Saudi Arabia',
    experience: '18+ Years',
    bio: 'Based full-time in Jeddah. Oversees all Makkah & Madinah hotel operations, Mutawwif teams, and VIP airport facilitation.',
    avatarText: 'ZH',
    accreditations: ['Saudi Residency Iqama', 'Licensed Saudi Tour Guide', 'Multilingual (Arabic/Urdu/English)']
  },
  {
    name: 'Ms. Farah Aslam',
    role: 'Head of Visa Processing',
    experience: '12+ Years',
    bio: 'MOFA and DTS certified visa specialist handling Saudi eVisa, UAE, Turkey and EU visa applications with 99.8% documented success rate.',
    avatarText: 'FA',
    accreditations: ['MOFA Authorized Agent', 'UAE ICP Approved', 'EU Consulate Relations']
  },
  {
    name: 'Syed Asim Raza',
    role: 'Chief Flight Operations & IATA',
    experience: '14+ Years',
    bio: 'IATA-accredited ticketing specialist managing confirmed group blocks on Saudia, PIA, Emirates and Qatar Airways.',
    avatarText: 'AR',
    accreditations: ['IATA #27-3-9482', 'BSP Pakistan Member', 'Direct Airline Contracts']
  },
];

const accreditations = [
  { name: 'Government DTS License', detail: '#3842 Ministry of Religious Affairs Pakistan', icon: '🏛️' },
  { name: 'IATA Accredited Agency', detail: 'Code #27-3-9482 BSP Pakistan', icon: '✈️' },
  { name: 'Saudi Ministry Approved', detail: 'Ministry of Hajj & Umrah Quota Authorization', icon: '🇸🇦' },
  { name: 'SECP Registered Company', detail: 'Securities & Exchange Commission #0093841', icon: '📋' },
  { name: 'Pakistan Tourism Board', detail: 'Authorized Outbound Travel Company', icon: '🌍' },
  { name: 'Nusuk Saudi Platform', detail: 'Official Umrah service provider on Nusuk.sa', icon: '🕌' },
];

export const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-50 pb-28 lg:pb-10">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="text-xs text-gold-400 font-bold uppercase tracking-widest">
              Al-Hashmi Travels › About Us
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              15+ Years of Sacred<br />
              <span className="text-gold-300">Pilgrimage Excellence</span>
            </h1>
            <p className="text-sm sm:text-base text-emerald-200 leading-relaxed max-w-lg">
              Al-Hashmi Travels & Tours (Pvt) Ltd. is Pakistan's most trusted Government-licensed Hajj, Umrah, and global visa management company — serving over 25,000 pilgrims since 2009.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-900/70 border border-gold-500/30 text-gold-300 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" /> DTS License #3842
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-900/70 border border-gold-500/30 text-gold-300 text-xs font-bold">
                <Award className="w-4 h-4" /> IATA #27-3-9482
              </span>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80"
              alt="Masjid Al-Haram Makkah"
              className="w-full h-72 object-cover rounded-2xl shadow-2xl border-2 border-gold-500/30"
            />
            <div className="absolute -bottom-4 -left-4 bg-gold-500 text-charcoal-950 rounded-2xl p-4 shadow-gold-glow">
              <p className="text-3xl font-black">25K+</p>
              <p className="text-xs font-bold uppercase tracking-wide">Happy Pilgrims</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
        {/* Mission & Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
              Our Mission & Story
            </h2>
            <div className="space-y-3 text-sm text-charcoal-700 leading-relaxed">
              <p>
                Founded in 2009 by Haji Abdul Hashmi, Al-Hashmi Travels was born from a personal vision: to make the sacred journey of Umrah and Hajj accessible, dignified, and spiritually fulfilling for every Muslim family in Pakistan — regardless of budget.
              </p>
              <p>
                From our humble origins as a single-office operation in Gulberg Lahore, we have grown into a multi-city certified agency with offices in Lahore, Islamabad, and Karachi, a permanent team stationed in Jeddah and Madinah, and direct hotel and airline contracts that allow us to offer unbeatable Haram-proximity stays.
              </p>
              <p>
                Today, with over 25,000+ pilgrims served and a 99.8% visa approval rate, Al-Hashmi Travels continues to set the standard for transparent, affordable, and compassionate pilgrimage management in Pakistan.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-extrabold text-lg text-charcoal-900 mb-2">Our Core Values</h3>
              {[
                { icon: '🤝', title: 'Amanah (Trust)', desc: 'Full transparency in pricing, hotel distances, and service scope. Zero hidden charges.' },
                { icon: '❤️', title: 'Khidmat (Service)', desc: 'Treating every pilgrim like a personal guest — with warmth, dignity, and patience.' },
                { icon: '📋', title: 'Itqan (Excellence)', desc: 'Meticulous attention to Nusuk permits, hotel proximity, and flight timing.' },
              ].map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{v.icon}</span>
                  <div>
                    <h4 className="font-bold text-sm text-charcoal-900">{v.title}</h4>
                    <p className="text-xs text-charcoal-600">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Leadership Team
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
              Meet Our Expert Travel Advisors
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 text-center space-y-3 hover:shadow-luxury transition-all">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-gold-300 text-xl font-black shadow-md border-2 border-gold-400/30">
                  {member.avatarText}
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-charcoal-900">{member.name}</h3>
                  <p className="text-xs font-bold text-emerald-700 mt-0.5">{member.role}</p>
                  <span className="text-[10px] font-semibold text-charcoal-500">{member.experience} Experience</span>
                </div>
                <p className="text-[11px] text-charcoal-600 leading-relaxed">{member.bio}</p>
                <div className="space-y-1 pt-2 border-t border-slate-100">
                  {member.accreditations.map((a, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-gold-500" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Government Accreditations */}
        <section>
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-100 px-3 py-1 rounded-full border border-gold-300">
              Official Certifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900">
              Government & Industry Accreditations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {accreditations.map((acc, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-start gap-4 hover:border-gold-400 transition-all">
                <span className="text-3xl shrink-0">{acc.icon}</span>
                <div>
                  <h3 className="font-extrabold text-sm text-charcoal-900">{acc.name}</h3>
                  <p className="text-xs text-charcoal-600 mt-0.5">{acc.detail}</p>
                  <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified & Active
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
