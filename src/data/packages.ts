import { PackageItem } from '../types';

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: '5-star-royal-vip-14n',
    title: '5-Star Royal Clock Tower VIP Umrah',
    subtitle: 'Ultra-luxury stay directly facing the Holy Kaaba courtyard with private GMC transfers',
    category: '5-Star Luxury',
    durationNights: 14,
    badge: 'Bestseller Luxury',
    featured: true,
    rating: 4.95,
    reviewCount: 384,
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80', // Makkah Haram
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80', // Madinah Prophet Mosque
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80', // Luxury Hotel Room
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80', // Hotel lobby
    ],
    makkahHotel: {
      name: 'Makkah Clock Royal Tower, A Fairmont Hotel',
      city: 'Makkah',
      stars: 5,
      distanceToHaram: '0m (Direct Haram Courtyard Access)',
      walkingTime: '1 min walk',
      amenities: ['Kaaba View Available', 'Free High-Speed Wi-Fi', 'Complimentary Buffet Breakfast', 'Private Lift Access to Haram'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    madinahHotel: {
      name: 'Dar Al Taqwa Hotel Madinah',
      city: 'Madinah',
      stars: 5,
      distanceToHaram: '20m from Prophet’s Mosque Women & Men Gates',
      walkingTime: '2 min walk',
      amenities: ['Direct Courtyard Access', 'Gourmet Tea Lounge', '24/7 Room Service', 'Executive Lounge'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    pricing: {
      sharingQuad: { PKR: 395000, SAR: 5350, USD: 1420 },
      sharingTriple: { PKR: 445000, SAR: 6020, USD: 1600 },
      sharingDouble: { PKR: 520000, SAR: 7035, USD: 1870 }
    },
    departureAirports: ['Karachi (KHI)', 'Lahore (LHE)', 'Islamabad (ISB)', 'Peshawar (PEW)', 'Multan (MUX)'],
    airlines: ['Saudia Arabian Airlines', 'Pakistan International Airlines (PIA)', 'Emirates', 'Qatar Airways'],
    highlights: [
      'Direct Haram views from Clock Tower & Dar Al Taqwa Madinah',
      'VIP luxury GMC Yukon private transport for all city & Ziyarat transfers',
      'Electronic Umrah e-Visa with comprehensive medical insurance included',
      '24/7 English/Urdu speaking licensed Mutawwif guidance & support',
      'Deluxe Haramain High-Speed Train First-Class ticket between Makkah & Madinah'
    ],
    inclusions: [
      '7 Nights in Makkah at Fairmont Clock Royal Tower (Breakfast included)',
      '7 Nights in Madinah at Dar Al Taqwa 5-Star (Breakfast included)',
      'Saudi Umrah e-Visa with Medical & Emergency Insurance coverage',
      'Direct Return Flights on prime carriers (PIA / Saudia)',
      'Private luxury vehicle pickup from Jeddah Airport to Makkah Hotel',
      'Haramain High Speed Bullet Train First-Class tickets (Makkah - Madinah)',
      'Comprehensive Historical Ziyarat in Makkah (Ghar Hira, Thawr, Mina, Arafat, Muzdalifah)',
      'Comprehensive Historical Ziyarat in Madinah (Masjid Quba, Qiblatayn, Mount Uhud, Martyrs Cemetery)',
      'Complimentary Zamzam water container (5 Liters) per pilgrim at departure airport',
      'Exclusive Al-Hashmi travel kit: Luxury Ihram / Hijab, luggage tags, Dua guidebook, shoe pouch'
    ],
    exclusions: [
      'Lunch and Dinner (can be customized upon request)',
      'Personal expenses, laundry, and telephone charges',
      'Excess luggage beyond airline ticket allowance (usually 2 x 23kg)',
      'Additional voluntary Umrah trips outside standard itinerary'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah & Transfer to Makkah Al-Mukarramah',
        location: 'Jeddah to Makkah',
        description: 'Warm welcome by Al-Hashmi VIP representative at King Abdulaziz International Airport terminal. Private transfer in GMC Yukon to Fairmont Clock Royal Tower hotel. Check-in, freshen up, and perform your first Umrah under the step-by-step guidance of our licensed scholar.',
        highlights: ['Meet & assist at airport', 'Check-in at Clock Tower', 'Guided Umrah rituals']
      },
      {
        day: 2,
        title: 'Spiritual Reflections & Prayers at Masjid Al-Haram',
        location: 'Masjid Al-Haram, Makkah',
        description: 'Dedicated day for continuous prayers, Nawafil, and Tawaf at the Holy Kaaba. Enjoy immediate access to the Haram courtyard just an elevator ride away.',
        highlights: ['Unrestricted Haram access', 'Private scholar consultation']
      },
      {
        day: 3,
        title: 'Makkah Historical Sites Ziyarat',
        location: 'Makkah Sacred Sites',
        description: 'Morning historical tour visiting Jabal al-Nour (Cave Hira), Jabal Thawr, Mina tent city, Muzdalifah plain, and the Mount of Mercy (Jabal al-Rahmah) in Arafat.',
        highlights: ['Cave Hira view', 'Arafat & Muzdalifah', 'Educational historical narrations']
      },
      {
        day: 4,
        title: 'Personal Worship & Optional Second Umrah',
        location: 'Masjid Al-Haram & Masjid Aisha (Taneem)',
        description: 'Pilgrims wishing to perform an additional Umrah for deceased relatives or loved ones will be provided escorted transport to Masjid Aisha in Taneem.',
        highlights: ['Masjid Aisha visit', 'Second Umrah opportunity']
      },
      {
        day: 5,
        title: 'Museum of Makkah & Kiswa Factory Tour',
        location: 'Makkah Outskirts',
        description: 'Visit the exhibition of the Two Holy Mosques Architecture and learn the sacred art of Kaaba Kiswa weaving.',
        highlights: ['Exhibition tour', 'Historical Quranic manuscripts']
      },
      {
        day: 6,
        title: 'Devotions and Tawaf-e-Wida Preparation',
        location: 'Makkah',
        description: 'Special evening congregation for collective Dua and spiritual discourse on spiritual purification.',
        highlights: ['Congregational dua', 'Islamic reminders']
      },
      {
        day: 7,
        title: 'Tawaf Al-Wida & High-Speed Bullet Train to Madinah',
        location: 'Makkah to Madinah',
        description: 'Perform farewell Tawaf in the morning. Board the state-of-the-art Haramain High Speed Train (First Class) reaching the City of the Prophet in just 2 hours 15 minutes. Check in to Dar Al Taqwa Hotel.',
        highlights: ['Farewell Tawaf', 'First-class Bullet Train', 'Check-in opposite Prophet’s Mosque']
      },
      {
        day: 8,
        title: 'Salam at Rawdah Rasool (SAW) & Riyad-ul-Jannah',
        location: 'Masjid An-Nabawi, Madinah',
        description: 'Present respectful greetings at the sacred chamber of Prophet Muhammad (SAW) and his noble companions Hazrat Abu Bakr (RA) and Hazrat Umar (RA). Confirmed Nusuk permit for Riyad-ul-Jannah.',
        highlights: ['Rawdah Sharif visit', 'Guaranteed Nusuk permit booking assistance']
      },
      {
        day: 9,
        title: 'Madinah Historical Sites Ziyarat',
        location: 'Madinah Sacred Sites',
        description: 'Guided tour to Masjid Quba (where praying 2 Rakaat equals the reward of an Umrah), Mount Uhud and the blessed Shuhada cemetery, and Masjid Al-Qiblatayn.',
        highlights: ['Masjid Quba prayers', 'Uhud Martyrs', 'Masjid Al-Qiblatayn']
      },
      {
        day: 10,
        title: 'Seven Mosques & Date Gardens (Bagh-e-Azeeziah)',
        location: 'Madinah',
        description: 'Explore the site of the Battle of the Trench (Khandaq), followed by an authentic visit to the famed Ajwa Date Palms orchard in Madinah.',
        highlights: ['Battle of Khandaq site', 'Authentic Ajwa date sampling']
      },
      {
        day: 11,
        title: 'Jannat Al-Baqi Visit & Masjid An-Nabawi Devotions',
        location: 'Madinah',
        description: 'Morning visit to Jannat Al-Baqi cemetery right adjacent to the Mosque. Spend the afternoon and evening in profound worship under the retractable umbrellas.',
        highlights: ['Jannat Al-Baqi', 'Deep spiritual reflection']
      },
      {
        day: 12,
        title: 'Quran Printing Complex Tour',
        location: 'King Fahd Quran Complex',
        description: 'Exclusive visit to the world renowned King Fahd Complex for the Printing of the Holy Quran with gift copy presentations.',
        highlights: ['World largest Quran printing press', 'Rare calligraphy display']
      },
      {
        day: 13,
        title: 'Farewell Salam & Personal Souvenir Shopping',
        location: 'Madinah City',
        description: 'Time allocated for acquiring authentic Saudi dates, prayer mats, and attar from the Old Madinah souks. Evening farewell salam at the Rawdah.',
        highlights: ['Souk shopping', 'Farewell prayers at Nabawi']
      },
      {
        day: 14,
        title: 'Departure via Prince Mohammad Bin Abdulaziz Airport',
        location: 'Madinah to Pakistan',
        description: 'Private airport drop-off in luxury transport. Complete flight boarding with pre-packaged Zamzam water provided at check-in counter.',
        highlights: ['VIP airport transfer', 'Assistance with 5L Zamzam canister']
      }
    ]
  },
  {
    id: '4-star-premium-15n',
    title: '4-Star Executive Premium Umrah',
    subtitle: 'Exceptional comfort and walking proximity to both holy courtyards at unbeatable executive value',
    category: '4-Star Premium',
    durationNights: 15,
    badge: 'Best Value',
    featured: true,
    rating: 4.88,
    reviewCount: 247,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
    ],
    makkahHotel: {
      name: 'Swissôtel Al Maqam Makkah',
      city: 'Makkah',
      stars: 4,
      distanceToHaram: '80m from Haram Perimeter',
      walkingTime: '3 min walk',
      amenities: ['Direct Ibrahim Al-Khalil Street Access', 'Free Wi-Fi', 'Breakfast Buffet', 'Shopping Mall Connected'],
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    },
    madinahHotel: {
      name: 'Anwar Al Madinah Mövenpick',
      city: 'Madinah',
      stars: 4,
      distanceToHaram: '120m from Mosque Courtyard',
      walkingTime: '3 min walk',
      amenities: ['Central Markazia Location', 'Underground Mall', 'On-site Restaurants', 'Air Conditioning'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    pricing: {
      sharingQuad: { PKR: 295000, SAR: 4000, USD: 1060 },
      sharingTriple: { PKR: 335000, SAR: 4540, USD: 1205 },
      sharingDouble: { PKR: 395000, SAR: 5350, USD: 1420 }
    },
    departureAirports: ['Karachi (KHI)', 'Lahore (LHE)', 'Islamabad (ISB)', 'Sialkot (SKT)'],
    airlines: ['PIA', 'Airblue', 'Flynas', 'Saudia'],
    highlights: [
      'Short 3-minute walking distance to both Haram Sharif courtyards',
      'Comfortable AC bus or coaster transfers between cities and airports',
      'Umrah Visa issuance within 48-72 hours with medical coverage',
      'Complete guided Ziyarat in Makkah and Madinah with Islamic scholar',
      'High-speed train upgrade available'
    ],
    inclusions: [
      '8 Nights in Makkah at Swissôtel Al Maqam',
      '7 Nights in Madinah at Anwar Al Madinah Mövenpick',
      'Saudi Umrah electronic visa with health insurance',
      'Confirmed return flight tickets',
      'Full ground transportation in modern air-conditioned coasters',
      'Complete historical Ziyarat tours in both Holy Cities',
      'Complimentary Zamzam 5L token per passenger',
      'Luggage tags and Al-Hashmi travel guides'
    ],
    exclusions: [
      'Daily meals unless specified in room booking',
      'Room service and personal telephone bills',
      'Tipping for drivers and porters'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah & Transfer to Makkah',
        location: 'Jeddah to Makkah',
        description: 'Arrival at Jeddah Airport, immigration clearance, transfer to Swissôtel Al Maqam, followed by guided group Umrah.',
        highlights: ['Airport pickup', 'Checked into hotel', 'Performance of Umrah']
      },
      {
        day: 2,
        title: 'Masjid Al-Haram Daily Worship',
        location: 'Makkah',
        description: 'Rest and perform all five daily congregational prayers inside the Holy Mosque.',
        highlights: ['Prayers at Haram', 'Spiritual reflection']
      },
      {
        day: 3,
        title: 'Comprehensive Makkah Ziyarat',
        location: 'Makkah',
        description: 'Visit Cave of Hira, Cave of Thawr, Arafat, Muzdalifah, and Mina accompanied by an experienced religious guide.',
        highlights: ['Sacred locations tour', 'Informative Urdu/English guidance']
      },
      {
        day: 8,
        title: 'Transfer to Blessed Madinah',
        location: 'Makkah to Madinah',
        description: 'Check out of Makkah and journey toward Madinah Al-Munawwarah via comfortable luxury coach.',
        highlights: ['Journey to Madinah', 'Check-in at Mövenpick']
      },
      {
        day: 9,
        title: 'Salam at Rawdah Sharif & Madinah Ziyarat',
        location: 'Madinah',
        description: 'Visit the Prophet’s Mosque, present Salam, and visit Masjid Quba and Mount Uhud.',
        highlights: ['Rawdah visitation', 'Quba Mosque prayer']
      },
      {
        day: 15,
        title: 'Departure Flight Back Home',
        location: 'Madinah to Pakistan',
        description: 'Assisted checkout and transfer to Madinah Airport for return flight with Zamzam.',
        highlights: ['Airport drop-off', 'Safe arrival back home']
      }
    ]
  },
  {
    id: '3-star-economy-14n',
    title: '3-Star Economy Comfort Umrah',
    subtitle: 'Affordable, reliable, and convenient pilgrimage package designed for families and small groups',
    category: '3-Star Economy',
    durationNights: 14,
    badge: 'Budget Friendly',
    featured: true,
    rating: 4.72,
    reviewCount: 419,
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
    ],
    makkahHotel: {
      name: 'Al Kiswah Towers Hotel Makkah',
      city: 'Makkah',
      stars: 3,
      distanceToHaram: '900m (24/7 Free Dedicated Shuttle Service)',
      walkingTime: '3 min shuttle ride',
      amenities: ['Continuous 24/7 Free Bus Service', 'Clean Ensuite Rooms', 'Free Wi-Fi in Lobby', 'Launderette'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    madinahHotel: {
      name: 'Diyar Al Taqwa / Al Mukhtara International',
      city: 'Madinah',
      stars: 3,
      distanceToHaram: '350m from Prophet’s Mosque Northern Courtyard',
      walkingTime: '5 min walk',
      amenities: ['Close to North Gates', '24/7 Reception', 'Air Conditioned', 'Convenience Stores Nearby'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    pricing: {
      sharingQuad: { PKR: 215000, SAR: 2915, USD: 775 },
      sharingTriple: { PKR: 245000, SAR: 3320, USD: 880 },
      sharingDouble: { PKR: 285000, SAR: 3860, USD: 1025 }
    },
    departureAirports: ['Karachi (KHI)', 'Lahore (LHE)', 'Islamabad (ISB)', 'Faisalabad (LYP)'],
    airlines: ['Flynas', 'Airblue', 'Serene Air', 'PIA'],
    highlights: [
      'Exceptional balance of low price and clean, dependable accommodation',
      '24/7 dedicated free shuttle drops off directly at Haram gates',
      'Quick electronic Umrah visa clearance',
      'Group transport between Jeddah, Makkah, and Madinah',
      'Standard historical tours included'
    ],
    inclusions: [
      '7 Nights in Makkah at Al Kiswah Towers',
      '7 Nights in Madinah at Diyar Al Taqwa',
      'Complete Saudi Umrah Visa with mandatory insurance',
      'Round-trip airline flight tickets',
      'Full AC bus transportation',
      'Ziyarat in Makkah and Madinah with guide',
      'Free 5L Zamzam canister at airport'
    ],
    exclusions: [
      'Daily food and beverages',
      'Porterage and room gratuities',
      'Private car upgrades'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah & First Umrah',
        location: 'Jeddah to Makkah',
        description: 'Flight arrival, group bus transfer to Al Kiswah Towers, orientation and Umrah completion.',
        highlights: ['Shuttle orientation', 'Umrah completion']
      },
      {
        day: 3,
        title: 'Makkah Ziyarat Tour',
        location: 'Makkah',
        description: 'Bus excursion to Cave Hira, Cave Thawr, and Mina/Arafat.',
        highlights: ['Historical tour']
      },
      {
        day: 8,
        title: 'Intercity Bus Transfer to Madinah',
        location: 'Makkah to Madinah',
        description: 'Air-conditioned bus journey to Madinah hotel, evening prayer at the Prophet’s Mosque.',
        highlights: ['Madinah arrival', 'Evening prayer']
      },
      {
        day: 14,
        title: 'Return Flight to Pakistan',
        location: 'Madinah/Jeddah to Pakistan',
        description: 'Assisted check-out and transport to airport for homebound flight.',
        highlights: ['Home journey', 'Blessings fulfilled']
      }
    ]
  },
  {
    id: 'custom-vip-family-10n',
    title: 'Custom VIP Family & Senior Citizen Umrah',
    subtitle: 'Tailored luxury for families traveling with children or elders requiring wheelchair assistance',
    category: 'Custom VIP',
    durationNights: 10,
    badge: 'Tailored for Families',
    featured: false,
    rating: 4.98,
    reviewCount: 162,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    ],
    makkahHotel: {
      name: 'Raffles Makkah Palace',
      city: 'Makkah',
      stars: 5,
      distanceToHaram: '0m (Direct Haram Gate Access)',
      walkingTime: '30 seconds',
      amenities: ['Personal Butler Service', 'Panoramic Kaaba Suites', 'Wheelchair Friendly', 'Kids Club & Gourmet Dining'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    madinahHotel: {
      name: 'The Oberoi Madinah',
      city: 'Madinah',
      stars: 5,
      distanceToHaram: '20m from Prophet’s Mosque Courtyard',
      walkingTime: '1 min walk',
      amenities: ['Legendary Oberoi Hospitality', 'Steps to Ladies Gate', 'Luxury Spa & Suites', 'Private Dining'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    pricing: {
      sharingQuad: { PKR: 580000, SAR: 7850, USD: 2085 },
      sharingTriple: { PKR: 650000, SAR: 8800, USD: 2340 },
      sharingDouble: { PKR: 760000, SAR: 10290, USD: 2735 }
    },
    departureAirports: ['Karachi (KHI)', 'Lahore (LHE)', 'Islamabad (ISB)'],
    airlines: ['Saudia Arabian Airlines', 'Emirates Business/Economy'],
    highlights: [
      'Private Mercedes Benz V-Class / GMC Yukon for all movements',
      'Dedicated personal Mutawwif companion assisting seniors & children',
      'Seamless wheelchair facilitation throughout Haram rituals',
      'Zero walking fatigue with hotel lobbies opening directly into courtyards'
    ],
    inclusions: [
      '5 Nights at Raffles Makkah Palace (Kaaba View Suite)',
      '5 Nights at The Oberoi Madinah',
      'Fast-track Saudi Tourist / Umrah Visa with full coverage',
      'Round-trip scheduled flights on tier-one carriers',
      'Exclusive private luxury transport throughout the journey',
      'Personalized Ziyarat schedule tailored to family pace'
    ],
    exclusions: ['Additional city excursions', 'Personal shopping'],
    itinerary: [
      {
        day: 1,
        title: 'VIP Airport Reception & Smooth Makkah Transfer',
        location: 'Jeddah to Makkah',
        description: 'VIP airport baggage handling and direct luxury van transfer to Raffles Makkah Palace.',
        highlights: ['Fast-track airport clearance', 'Butler welcome']
      },
      {
        day: 5,
        title: 'Private Bullet Train to Madinah',
        location: 'Makkah to Madinah',
        description: 'Comfortable transfer to Madinah, check-in at The Oberoi Madinah directly facing the sacred mosque.',
        highlights: ['Smooth train journey', 'Oberoi hospitality']
      },
      {
        day: 10,
        title: 'Private Departure Transfer',
        location: 'Madinah to Pakistan',
        description: 'Private chauffeur drop off at Madinah airport with boarding coordination.',
        highlights: ['Door-to-door escort']
      }
    ]
  },
  {
    id: 'ramadan-special-last-10-days',
    title: 'Ramadan Special: Last 10 Days & Laylatul Qadr',
    subtitle: 'Witness the blessed last ten nights of Ramadan, Laylatul Qadr and Eid prayers in the Holy Sanctuary',
    category: 'Ramadan Special',
    durationNights: 12,
    badge: 'Limited Availability',
    featured: true,
    rating: 4.97,
    reviewCount: 198,
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    makkahHotel: {
      name: 'Pullman Zamzam Makkah',
      city: 'Makkah',
      stars: 5,
      distanceToHaram: '50m (Abraj Al Bait Complex)',
      walkingTime: '1 min walk',
      amenities: ['Direct Courtyard Access', 'Iftar & Sahoor Buffets Available', 'Audio Link to Haram Prayers', 'Elevator to Mall'],
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    },
    madinahHotel: {
      name: 'Madinah Hilton Hotel',
      city: 'Madinah',
      stars: 5,
      distanceToHaram: '80m from Main Courtyard',
      walkingTime: '2 min walk',
      amenities: ['Art Deco Decor', 'Direct Courtyard View', 'Sahoor Service', 'Multilingual Concierge'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    pricing: {
      sharingQuad: { PKR: 620000, SAR: 8390, USD: 2230 },
      sharingTriple: { PKR: 710000, SAR: 9610, USD: 2550 },
      sharingDouble: { PKR: 840000, SAR: 11370, USD: 3020 }
    },
    departureAirports: ['Karachi (KHI)', 'Lahore (LHE)', 'Islamabad (ISB)'],
    airlines: ['Saudia Arabian Airlines', 'PIA', 'Qatar Airways'],
    highlights: [
      'Spend the 27th night of Ramadan (Laylatul Qadr) & Khatam-ul-Quran inside Masjid Al-Haram',
      'Sahoor & Iftar arrangements facilitated directly by hotel',
      'Optional Itikaf registration assistance in Makkah & Madinah',
      'Celebrate joyous Eid-ul-Fitr prayers before departure'
    ],
    inclusions: [
      '8 Nights in Makkah at Pullman Zamzam',
      '4 Nights in Madinah at Madinah Hilton',
      'Ramadan Umrah Visa with mandatory insurance',
      'Return flights on scheduled airlines',
      'Intercity train / VIP bus transport',
      'Zamzam 5L per person'
    ],
    exclusions: ['Optional daily laundry', 'Personal gratuities'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Makkah for Ramadan Nights',
        location: 'Jeddah to Makkah',
        description: 'Arrive before Taraweeh, settle into Pullman Zamzam, perform blessed Umrah.',
        highlights: ['First Ramadan Taraweeh', 'Kaaba courtyard']
      },
      {
        day: 7,
        title: 'Laylatul Qadr & Khatam-ul-Quran Night',
        location: 'Masjid Al-Haram',
        description: 'Immerse in the historic 27th Night gathering of millions of faithful under the leadership of the Imams of Haram.',
        highlights: ['Unforgettable congregational Dua', 'Spiritual pinnacle']
      },
      {
        day: 9,
        title: 'Eid Day Prayers in Haram & Transfer to Madinah',
        location: 'Makkah to Madinah',
        description: 'Perform Eid prayer in Makkah, followed by celebratory journey to Madinah.',
        highlights: ['Eid prayers at Kaaba', 'Haramain Train to Madinah']
      },
      {
        day: 12,
        title: 'Return Home with Divine Blessings',
        location: 'Madinah to Pakistan',
        description: 'Depart from Madinah airport with fulfilled heart and memories.',
        highlights: ['Return home blessed']
      }
    ]
  },
  {
    id: 'economy-saver-10n',
    title: 'Short Saver Umrah Tour (10 Nights)',
    subtitle: 'Perfect for working professionals seeking a swift, spiritually enriching journey on a budget',
    category: '3-Star Economy',
    durationNights: 10,
    badge: 'Quick Trip',
    featured: false,
    rating: 4.70,
    reviewCount: 155,
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    makkahHotel: {
      name: 'Rawabi Al Shamkha Makkah',
      city: 'Makkah',
      stars: 3,
      distanceToHaram: '650m (Easy 7 min walk)',
      walkingTime: '7 min walk',
      amenities: ['Direct Walkway', 'Air Conditioning', 'Free Wi-Fi', '24h Desk'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    madinahHotel: {
      name: 'Emaar Taiba Hotel Madinah',
      city: 'Madinah',
      stars: 3,
      distanceToHaram: '250m from Prophet’s Mosque',
      walkingTime: '4 min walk',
      amenities: ['Near Northern Courtyard', 'Clean Linens', 'Elevators', 'Luggage Storage'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    pricing: {
      sharingQuad: { PKR: 185000, SAR: 2510, USD: 665 },
      sharingTriple: { PKR: 215000, SAR: 2915, USD: 775 },
      sharingDouble: { PKR: 255000, SAR: 3455, USD: 915 }
    },
    departureAirports: ['Karachi (KHI)', 'Lahore (LHE)', 'Islamabad (ISB)'],
    airlines: ['Airblue', 'Flynas', 'PIA'],
    highlights: [
      'Compact 10 nights package with no wasted vacation days',
      'Walking distance hotel in Madinah (250m)',
      'Guaranteed Umrah visa approval with insurance',
      'Affordable all-inclusive price'
    ],
    inclusions: [
      '5 Nights in Makkah',
      '5 Nights in Madinah',
      'Umrah Electronic Visa',
      'Return Air Tickets',
      'AC Bus Transport',
      '5L Zamzam Canister'
    ],
    exclusions: ['Meals', 'Personal items'],
    itinerary: [
      {
        day: 1,
        title: 'Direct Arrival & First Umrah',
        location: 'Jeddah to Makkah',
        description: 'Arrival, hotel check in, Umrah rituals.',
        highlights: ['Umrah performed']
      },
      {
        day: 6,
        title: 'Madinah Journey',
        location: 'Makkah to Madinah',
        description: 'Transfer to Madinah, check in and visit Rawdah.',
        highlights: ['Rawdah visit']
      },
      {
        day: 10,
        title: 'Return Flight',
        location: 'Madinah to Pakistan',
        description: 'Flight return.',
        highlights: ['Safe journey home']
      }
    ]
  }
];
