export type Currency = 'PKR' | 'SAR' | 'USD';

export interface ExchangeRates {
  PKR: number; // base reference 1 PKR
  SAR: number; // e.g. 0.0135 (approx 1 SAR ~ 74 PKR)
  USD: number; // e.g. 0.0036 (approx 1 USD ~ 278 PKR)
}

export type PackageCategory = 
  | 'All'
  | '3-Star Economy' 
  | '4-Star Premium' 
  | '5-Star Luxury' 
  | 'Custom VIP'
  | 'Ramadan Special';

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights?: string[];
}

export interface HotelInfo {
  name: string;
  city: 'Makkah' | 'Madinah';
  stars: number;
  distanceToHaram: string; // e.g. "50m from Haram" or "350m (Clock Tower)"
  walkingTime: string; // e.g. "2 min walk"
  amenities: string[];
  image: string;
}

export interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  category: PackageCategory;
  durationNights: number;
  badge?: string; // e.g. "Best Value", "Bestseller", "Luxury Pick"
  featured?: boolean;
  images: string[];
  makkahHotel: HotelInfo;
  madinahHotel: HotelInfo;
  pricing: {
    sharingQuad: { PKR: number; SAR: number; USD: number };
    sharingTriple: { PKR: number; SAR: number; USD: number };
    sharingDouble: { PKR: number; SAR: number; USD: number };
  };
  departureAirports: string[];
  airlines: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  rating: number;
  reviewCount: number;
}

export interface VisaService {
  id: string;
  country: string;
  countryCode: string;
  flagEmoji: string;
  title: string;
  bannerImage: string;
  category: 'Umrah & Hajj' | 'GCC' | 'International Tourist' | 'E-Visa';
  processingTime: string;
  validity: string;
  entryType: 'Single Entry' | 'Multiple Entry';
  fees: { PKR: number; SAR: number; USD: number };
  description: string;
  requirements: string[];
  requiredDocuments: {
    title: string;
    description: string;
    isMandatory: boolean;
    sampleDownloadName?: string;
  }[];
}

export interface FlightRoute {
  id: string;
  airline: string;
  airlineCode: string;
  flightNumber: string;
  airlineLogoText: string;
  origin: { code: string; city: string; airport: string };
  destination: { code: string; city: string; airport: string };
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  stopDetails?: string;
  cabin: 'Economy' | 'Business' | 'First';
  baggage: string;
  mealsIncluded: boolean;
  refundable: boolean;
  pricing: { PKR: number; SAR: number; USD: number };
}

export interface ReviewItem {
  id: string;
  name: string;
  city: string;
  pilgrimType: string;
  rating: number;
  date: string;
  comment: string;
  packageTaken: string;
  verified: boolean;
  avatarText: string;
}
