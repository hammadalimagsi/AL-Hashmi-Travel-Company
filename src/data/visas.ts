import { VisaService } from '../types';

export const VISA_SERVICES_DATA: VisaService[] = [
  {
    id: 'saudi-umrah-tourist-evisa',
    country: 'Saudi Arabia',
    countryCode: 'SA',
    flagEmoji: '🇸🇦',
    title: 'Saudi Umrah & 1-Year Multiple Entry Tourist eVisa',
    bannerImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80',
    category: 'Umrah & Hajj',
    processingTime: '24 - 48 Hours (Express Available)',
    validity: '1 Year (Multiple Entry, 90 Days Per Stay)',
    entryType: 'Multiple Entry',
    fees: {
      PKR: 42500,
      SAR: 575,
      USD: 153
    },
    description: 'Official Ministry of Foreign Affairs (MOFA) verified eVisa authorized for performing Umrah, tourism, and attending events across all Saudi cities without sponsor requirement.',
    requirements: [
      'Original Passport with minimum 6 months validity from date of travel',
      'Recent high-resolution white background passport photograph (2x2 inches)',
      'Valid email address and Pakistani CNIC / Residence Card copy',
      'Confirmed return ticket or travel itinerary',
      'Mandatory COVID & comprehensive health medical insurance (included in our fee)'
    ],
    requiredDocuments: [
      {
        title: 'Clear Passport Bio-Data Scan',
        description: 'First two pages showing photo, full name, passport number and expiry date in high resolution PDF or JPG.',
        isMandatory: true,
        sampleDownloadName: 'Sample_Passport_Bio_Requirements.pdf'
      },
      {
        title: 'White Background Digital Photograph',
        description: 'Taken within the last 3 months, neutral expression, without dark glasses, 600x600 px min.',
        isMandatory: true,
        sampleDownloadName: 'Photo_Specification_Guide.pdf'
      },
      {
        title: 'CNIC / National Identity Card Copy',
        description: 'Both front and back sides in color format.',
        isMandatory: true
      },
      {
        title: 'Previous Visa / Entry Stamps (If any)',
        description: 'Copy of previous GCC, US, UK, or Schengen visas to speed up approval.',
        isMandatory: false
      }
    ]
  },
  {
    id: 'uae-dubai-tourist-visa',
    country: 'United Arab Emirates (Dubai)',
    countryCode: 'AE',
    flagEmoji: '🇦🇪',
    title: 'Dubai / UAE 30 & 60 Days Tourist Visa',
    bannerImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    category: 'GCC',
    processingTime: '2 - 3 Working Days',
    validity: '60 Days Entry Window (30 / 60 Days Stay)',
    entryType: 'Single Entry',
    fees: {
      PKR: 28500,
      SAR: 385,
      USD: 102
    },
    description: 'Direct GDRFA / ICP approved Dubai visit visa for family holidays, business trips, and stopovers to Saudi Arabia with quick turnaround.',
    requirements: [
      'Valid passport copy (first page and signature page)',
      'Clear digital passport-size photograph with white background',
      'CNIC copy (front and back)',
      'For children: Birth certificate / Form B copy'
    ],
    requiredDocuments: [
      {
        title: 'Color Scanned Passport',
        description: 'Must have at least 6 months validity remaining.',
        isMandatory: true,
        sampleDownloadName: 'Dubai_Visa_Checklist.pdf'
      },
      {
        title: 'Digital Studio Photograph',
        description: 'Strictly white background, 80% face view.',
        isMandatory: true
      },
      {
        title: 'Confirmed Round-Trip Flight Booking',
        description: 'Flight reservation provided by Al-Hashmi Travels.',
        isMandatory: true
      }
    ]
  },
  {
    id: 'turkey-evisa-sticker-visa',
    country: 'Turkey',
    countryCode: 'TR',
    flagEmoji: '🇹🇷',
    title: 'Turkey Tourist eVisa & Sticker Visa Assistance',
    bannerImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80',
    category: 'International Tourist',
    processingTime: 'Instant eVisa (3 hrs) / Sticker (10 - 15 Days)',
    validity: '180 Days Validity (30 Days Stay)',
    entryType: 'Single Entry',
    fees: {
      PKR: 26000,
      SAR: 350,
      USD: 94
    },
    description: 'Instant eVisa for valid US, UK, Schengen or Ireland visa/residence permit holders. Full file preparation and submission assistance for standard sticker visas.',
    requirements: [
      'Original Passport valid for at least 6 months',
      'Supporting valid visa (USA, UK, Schengen, or Ireland) for eVisa eligibility',
      'Bank statement (Last 6 months maintaining PKR 500,000+ balance)',
      'Employment letter / Business NTN registration certificate',
      'Travel health insurance covering min €30,000'
    ],
    requiredDocuments: [
      {
        title: 'Official Bank Account Maintenance Certificate',
        description: 'Stamped and signed by branch manager with 6 months transaction history.',
        isMandatory: true,
        sampleDownloadName: 'Bank_Statement_Template.pdf'
      },
      {
        title: 'Supporting Valid Visa (For eVisa route)',
        description: 'Valid non-expired US/UK/Schengen visa copy.',
        isMandatory: false
      },
      {
        title: 'Cover Letter / Travel Plan',
        description: 'Drafted professionally by Al-Hashmi visa department.',
        isMandatory: true
      }
    ]
  },
  {
    id: 'malaysia-evisa-tourist',
    country: 'Malaysia',
    countryCode: 'MY',
    flagEmoji: '🇲🇾',
    title: 'Malaysia e-Visa (30 Days Single Entry)',
    bannerImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80',
    category: 'International Tourist',
    processingTime: '2 - 4 Working Days',
    validity: '3 Months (30 Days Maximum Stay)',
    entryType: 'Single Entry',
    fees: {
      PKR: 19500,
      SAR: 265,
      USD: 70
    },
    description: 'Official Malaysian Immigration electronic visa authorization for Pakistani passport holders traveling for vacation or business.',
    requirements: [
      'Color copy of passport with minimum 6 months validity',
      'Passport size photograph with studio white background (35mm x 50mm)',
      'Confirmed return flight tickets',
      'Hotel accommodation booking voucher',
      'Last 3 months verified bank statement'
    ],
    requiredDocuments: [
      {
        title: 'Passport Bio-Data & Last Entry Page',
        description: 'Clear scan showing clear text and barcode.',
        isMandatory: true
      },
      {
        title: 'Digital Studio Photo (35x50mm)',
        description: 'Specification strictly matching Malaysian Immigration rules.',
        isMandatory: true,
        sampleDownloadName: 'Malaysia_Photo_Sample.pdf'
      }
    ]
  },
  {
    id: 'azerbaijan-baku-evisa',
    country: 'Azerbaijan',
    countryCode: 'AZ',
    flagEmoji: '🇦🇿',
    title: 'Azerbaijan (Baku) ASAN e-Visa',
    bannerImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1000&q=80',
    category: 'E-Visa',
    processingTime: 'Standard 3 Days / Urgent 3 Hours',
    validity: '90 Days (30 Days Stay)',
    entryType: 'Single Entry',
    fees: {
      PKR: 14500,
      SAR: 195,
      USD: 52
    },
    description: 'Fast electronic visa through the official ASAN Visa portal for exploring Baku, Gabala, and Shahdag resorts.',
    requirements: [
      'Color scan of valid passport bio-data page',
      'Hotel reservation voucher in Baku',
      'Active email address for eVisa delivery'
    ],
    requiredDocuments: [
      {
        title: 'Passport Copy (Min 3 months validity after departure)',
        description: 'High quality color scan.',
        isMandatory: true
      }
    ]
  },
  {
    id: 'oman-gcc-tourist-visa',
    country: 'Sultanate of Oman',
    countryCode: 'OM',
    flagEmoji: '🇴🇲',
    title: 'Oman 10 & 30 Days Royal Police eVisa',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
    category: 'GCC',
    processingTime: '24 - 48 Hours',
    validity: '30 Days from date of issue',
    entryType: 'Single Entry',
    fees: {
      PKR: 24000,
      SAR: 325,
      USD: 86
    },
    description: 'Fast-track Oman tourist visa approved by Royal Oman Police for exploring Muscat, Salalah, and GCC transit journeys.',
    requirements: [
      'Passport valid for at least 6 months',
      'Passport sized photograph on white background',
      'Return air ticket and hotel confirmation'
    ],
    requiredDocuments: [
      {
        title: 'Color Scanned Passport Bio Page',
        description: 'PDF or JPG under 5MB.',
        isMandatory: true
      }
    ]
  }
];
