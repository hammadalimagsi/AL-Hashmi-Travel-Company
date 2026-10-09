import { FlightRoute } from '../types';

export const FLIGHTS_DATA: FlightRoute[] = [
  {
    id: 'sv-735-jed',
    airline: 'Saudia Airlines',
    airlineCode: 'SV',
    flightNumber: 'SV-735',
    airlineLogoText: '🇸🇦 Saudia',
    origin: { code: 'LHE', city: 'Lahore', airport: 'Allama Iqbal International Airport' },
    destination: { code: 'JED', city: 'Jeddah', airport: 'King Abdulaziz International Airport' },
    departureTime: '06:15 AM',
    arrivalTime: '09:45 AM',
    duration: '5h 30m',
    stops: 0,
    cabin: 'Economy',
    baggage: '2 x 23 kg Check-in + 7 kg Cabin + 5L Zamzam',
    mealsIncluded: true,
    refundable: true,
    pricing: {
      PKR: 165000,
      SAR: 2235,
      USD: 593
    }
  },
  {
    id: 'pk-759-med',
    airline: 'PIA (Pakistan International)',
    airlineCode: 'PK',
    flightNumber: 'PK-759',
    airlineLogoText: '🇵🇰 PIA',
    origin: { code: 'ISB', city: 'Islamabad', airport: 'Islamabad International Airport' },
    destination: { code: 'MED', city: 'Madinah', airport: 'Prince Mohammad Bin Abdulaziz' },
    departureTime: '10:30 AM',
    arrivalTime: '02:15 PM',
    duration: '5h 45m',
    stops: 0,
    cabin: 'Economy',
    baggage: '2 x 20 kg + 7 kg Hand Carry + Free Zamzam',
    mealsIncluded: true,
    refundable: true,
    pricing: {
      PKR: 158000,
      SAR: 2140,
      USD: 568
    }
  },
  {
    id: 'xy-882-jed',
    airline: 'Flynas',
    airlineCode: 'XY',
    flightNumber: 'XY-882',
    airlineLogoText: '⚡ Flynas',
    origin: { code: 'KHI', city: 'Karachi', airport: 'Jinnah International Airport' },
    destination: { code: 'JED', city: 'Jeddah', airport: 'King Abdulaziz International Airport' },
    departureTime: '03:45 AM',
    arrivalTime: '06:30 AM',
    duration: '4h 45m',
    stops: 0,
    cabin: 'Economy',
    baggage: '30 kg + 7 kg Hand Carry + Zamzam',
    mealsIncluded: false,
    refundable: false,
    pricing: {
      PKR: 128000,
      SAR: 1735,
      USD: 460
    }
  },
  {
    id: 'ek-621-jed',
    airline: 'Emirates',
    airlineCode: 'EK',
    flightNumber: 'EK-621 / EK-803',
    airlineLogoText: '🇦🇪 Emirates',
    origin: { code: 'LHE', city: 'Lahore', airport: 'Allama Iqbal International Airport' },
    destination: { code: 'JED', city: 'Jeddah', airport: 'King Abdulaziz International Airport' },
    departureTime: '09:20 AM',
    arrivalTime: '04:15 PM',
    duration: '8h 55m',
    stops: 1,
    stopDetails: '1h 45m layover in Dubai (DXB)',
    cabin: 'Economy',
    baggage: '2 x 23 kg + 7 kg Hand Carry',
    mealsIncluded: true,
    refundable: true,
    pricing: {
      PKR: 198000,
      SAR: 2680,
      USD: 712
    }
  },
  {
    id: 'qr-615-med',
    airline: 'Qatar Airways',
    airlineCode: 'QR',
    flightNumber: 'QR-615 / QR-1174',
    airlineLogoText: '🇶🇦 Qatar Airways',
    origin: { code: 'ISB', city: 'Islamabad', airport: 'Islamabad International Airport' },
    destination: { code: 'MED', city: 'Madinah', airport: 'Prince Mohammad Bin Abdulaziz' },
    departureTime: '04:50 AM',
    arrivalTime: '11:40 AM',
    duration: '8h 50m',
    stops: 1,
    stopDetails: '2h 10m connection in Hamad Int (DOH)',
    cabin: 'Economy',
    baggage: '2 x 23 kg + 7 kg Hand Carry',
    mealsIncluded: true,
    refundable: true,
    pricing: {
      PKR: 205000,
      SAR: 2775,
      USD: 737
    }
  },
  {
    id: 'pa-470-jed',
    airline: 'Airblue',
    airlineCode: 'PA',
    flightNumber: 'PA-470',
    airlineLogoText: '✈️ Airblue',
    origin: { code: 'PEW', city: 'Peshawar', airport: 'Bacha Khan International Airport' },
    destination: { code: 'JED', city: 'Jeddah', airport: 'King Abdulaziz International' },
    departureTime: '01:10 PM',
    arrivalTime: '05:00 PM',
    duration: '5h 50m',
    stops: 0,
    cabin: 'Economy',
    baggage: '30 kg + 7 kg Hand Carry',
    mealsIncluded: true,
    refundable: true,
    pricing: {
      PKR: 142000,
      SAR: 1920,
      USD: 510
    }
  }
];

export const AIRPORT_CITIES = [
  { code: 'LHE', city: 'Lahore (LHE)', country: 'Pakistan' },
  { code: 'KHI', city: 'Karachi (KHI)', country: 'Pakistan' },
  { code: 'ISB', city: 'Islamabad (ISB)', country: 'Pakistan' },
  { code: 'PEW', city: 'Peshawar (PEW)', country: 'Pakistan' },
  { code: 'MUX', city: 'Multan (MUX)', country: 'Pakistan' },
  { code: 'SKT', city: 'Sialkot (SKT)', country: 'Pakistan' },
  { code: 'JED', city: 'Jeddah (JED)', country: 'Saudi Arabia' },
  { code: 'MED', city: 'Madinah (MED)', country: 'Saudi Arabia' },
  { code: 'RUH', city: 'Riyadh (RUH)', country: 'Saudi Arabia' },
  { code: 'DXB', city: 'Dubai (DXB)', country: 'United Arab Emirates' },
];
