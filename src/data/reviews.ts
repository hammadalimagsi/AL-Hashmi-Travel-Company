import { ReviewItem } from '../types';

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Haji Mohammad Rizwan & Family',
    city: 'Lahore, Pakistan',
    pilgrimType: 'Family Pilgrim (5 Members)',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Al-Hashmi Travels delivered everything they promised and more! Our Fairmont Clock Tower room had an uninterrupted view of the Kaaba, and the private GMC Yukon was waiting right outside the terminal upon arrival. The scholar provided was patient and guided our elderly mother with immense care.',
    packageTaken: '5-Star Royal Clock Tower VIP Umrah',
    verified: true,
    avatarText: 'MR'
  },
  {
    id: 'rev-2',
    name: 'Dr. Tariq Mahmood & Begum',
    city: 'Islamabad, Pakistan',
    pilgrimType: 'Senior Couple',
    rating: 5,
    date: 'Last month',
    comment: 'Having performed Umrah multiple times over the years, I can confidently attest that Al-Hashmi’s on-ground team in Madinah is the most attentive. Dar Al Taqwa hotel was literally steps away from Gate 25. Wheelchair assistance was seamless throughout.',
    packageTaken: '5-Star Royal Clock Tower VIP Umrah',
    verified: true,
    avatarText: 'TM'
  },
  {
    id: 'rev-3',
    name: 'Zubair Ahmed Chaudhry',
    city: 'Karachi, Pakistan',
    pilgrimType: 'Group Tour Leader (14 Persons)',
    rating: 5,
    date: 'January 2026',
    comment: 'We booked the 4-Star Executive package for our business group. The hotels in both Makkah and Madinah were genuinely 3 minutes walk from the Haram. Our Umrah visas arrived in less than 36 hours. 100% genuine agency, DTS licensed and transparent.',
    packageTaken: '4-Star Executive Premium Umrah',
    verified: true,
    avatarText: 'ZC'
  },
  {
    id: 'rev-4',
    name: 'Syeda Maryam Gilani',
    city: 'Rawalpindi, Pakistan',
    pilgrimType: 'Solo Female Pilgrim with Mahram',
    rating: 5,
    date: 'November 2025',
    comment: 'Al-Hashmi’s female consultant guided us through every Nusuk permit slot for the Rawdah Sharif. The Ziyarat in both holy cities included detailed historical background which made the pilgrimage truly transformative spiritually.',
    packageTaken: '3-Star Economy Comfort Umrah',
    verified: true,
    avatarText: 'SG'
  },
  {
    id: 'rev-5',
    name: 'Engr. Faisal Naseer',
    city: 'Faisalabad, Pakistan',
    pilgrimType: 'Ramadan Pilgrim',
    rating: 5,
    date: 'Ramadan 2025',
    comment: 'Experiencing the 27th night of Ramadan in Makkah with Al-Hashmi was a dream come true. Even with intense crowds, their logistics team ensured we reached the train station and airports on time without any delay.',
    packageTaken: 'Ramadan Special: Last 10 Days',
    verified: true,
    avatarText: 'FN'
  }
];

export const COMPANY_STATS = [
  { label: 'Happy Pilgrims Served', value: '25,000+', description: 'Over 15 years of blessed journeys' },
  { label: 'Years of Excellence', value: '15+', description: 'Government DTS & IATA accredited' },
  { label: 'Visa Approval Rate', value: '99.8%', description: 'Fast-track MOFA verified clearance' },
  { label: 'On-Ground Mutawwifs', value: '50+', description: 'Dedicated round-the-clock ground team' },
];
