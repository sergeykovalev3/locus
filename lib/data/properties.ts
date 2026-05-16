export type PropertyInfo = {
  id: string;
  name: string;
  adress: string;
  price: string;
  description: string;
  specifications: {
    bedrooms: number;
    bathrooms: number;
    area: number;
    type: string;
  };
  features: string[];
  tag: string;
  mainImage: string;
  gallery: { image: string }[];
  pricingDetails: {
    additionalFees: {
      propertyTransferTax: string;
      legalFees: string;
      homeInspection: string;
      propertyInsurance: string;
      mortgageFees: string;
    };
    monthlyCosts: {
      propertyTaxes: string;
      homeownersAssociationFee: string;
    };
    totalInitialCosts: {
      listingPrice: string;
      additionalFees: string;
      downPayment: string;
      mortgageAmount: string;
    };
    monthlyExpenses: {
      propertyTaxes: string;
      homeownersAssociationFee: string;
      mortgagePayment: string;
      propertyInsurance: string;
    };
  };
};

const availableImages = [
  { image: '/images/property/image1.png' },
  { image: '/images/property/image2.png' },
  { image: '/images/property/image3.png' },
  { image: '/images/property/image4.png' },
  { image: '/images/property/image5.png' },
  { image: '/images/property/image6.png' },
  { image: '/images/property/image7.png' },
  { image: '/images/property/image8.png' },
  { image: '/images/property/image9.png' },
  { image: '/images/property/image10.png' },
  { image: '/images/property/image11.png' },
  { image: '/images/property/image12.png' },
];

function randomGallery(mainImageIndex: number): { image: string }[] {
  const indices = availableImages.map((_, i) => i).filter((i) => i !== mainImageIndex);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const main = [availableImages[mainImageIndex]];
  const rest = indices.slice(0, 8).map((i) => availableImages[i]);
  return [...main, ...rest];
}

function parsePrice(s: string): number {
  return Number(s.replace(/[$,]/g, '')) || 0;
}

function formatPrice(n: number): string {
  return '$' + n.toLocaleString();
}

function makePricingDetails(priceStr: string): PropertyInfo['pricingDetails'] {
  const n = parsePrice(priceStr);
  const transferTax = Math.round(n * 0.02);
  const legalFees = Math.round(n * 0.005);
  const down = Math.round(n * 0.2);
  const mortgage = n - down;
  const addFees = transferTax + legalFees + 500 + Math.round(n * 0.001);
  const monthlyTax = Math.round((n * 0.012) / 12);
  const monthlyHoa = n > 1_500_000 ? 0 : Math.round(n * 0.002 / 12);
  const monthlyIns = Math.round((n * 0.001) / 12);
  return {
    additionalFees: {
      propertyTransferTax: formatPrice(transferTax),
      legalFees: formatPrice(legalFees),
      homeInspection: '$500',
      propertyInsurance: formatPrice(Math.round(n * 0.0012)),
      mortgageFees: 'Varies',
    },
    monthlyCosts: {
      propertyTaxes: formatPrice(monthlyTax),
      homeownersAssociationFee: formatPrice(monthlyHoa),
    },
    totalInitialCosts: {
      listingPrice: priceStr,
      additionalFees: formatPrice(addFees),
      downPayment: formatPrice(down),
      mortgageAmount: formatPrice(mortgage),
    },
    monthlyExpenses: {
      propertyTaxes: formatPrice(monthlyTax),
      homeownersAssociationFee: formatPrice(monthlyHoa),
      mortgagePayment: 'Varies based on terms and interest rate',
      propertyInsurance: formatPrice(monthlyIns),
    },
  };
}

const RANDOM_NAMES = [
  'Skyline Heights', 'Riverside Terrace', 'Oakwood Gardens', 'Harbor View Loft', 'Pine Crest Home',
  'Sunset Ridge', 'Maple Grove Estate', 'Bayfront Bungalow', 'Hilltop Haven', 'Park Avenue Suite',
  'Garden Gate House', 'Ocean Breeze Condo', 'Meadow Lane Ranch', 'Stone Creek Villa', 'Urban Nest',
  'Willow Creek Place', 'Lakeshore Retreat', 'Cedar Point Lodge', 'Downtown Studio', 'Mountain View Cabin',
  'Seaside Cottage', 'Twin Pines Manor', 'Riverside Penthouse', 'Green Valley Farm', 'Coastal View',
];
const RANDOM_ADDRESSES = [
  'Austin, Texas', 'Seattle, Washington', 'Portland, Oregon', 'Denver, Colorado', 'Boston, Massachusetts',
  'Philadelphia, Pennsylvania', 'Phoenix, Arizona', 'San Francisco, California', 'Atlanta, Georgia',
  'Nashville, Tennessee', 'Minneapolis, Minnesota', 'Raleigh, North Carolina', 'Tampa, Florida',
  'Las Vegas, Nevada', 'Salt Lake City, Utah', 'Charlotte, North Carolina', 'Columbus, Ohio',
  'Indianapolis, Indiana', 'Kansas City, Missouri', 'Milwaukee, Wisconsin', 'Jacksonville, Florida',
  'Albuquerque, New Mexico', 'Boise, Idaho', 'Spokane, Washington', 'Boulder, Colorado',
];
const RANDOM_TYPES = ['Apartment', 'Villa', 'Townhouse', 'Condo', 'Loft', 'Cottage', 'Studio', 'Penthouse', 'Bungalow', 'Ranch'];
const RANDOM_DESCRIPTIONS = [
  'Spacious and bright with modern finishes throughout. Ideal for families or professionals seeking comfort and style.',
  'Charming property in a prime location. Walking distance to shops, dining, and parks. Move-in ready.',
  'Stunning views and high-end finishes. Open floor plan with plenty of natural light and outdoor space.',
  'A perfect blend of classic architecture and contemporary amenities. Private and peaceful setting.',
  'Contemporary design with smart home features. Low maintenance and energy efficient. Great investment.',
];
const RANDOM_FEATURE_POOL = [
  'Hardwood floors', 'Stainless appliances', 'Walk-in closet', 'Private balcony', 'In-unit laundry',
  'Central AC', 'Parking included', 'Storage space', 'Pet friendly', 'Fitness center access',
  'Outdoor patio', 'Fireplace', 'Open floor plan', 'Granite counters', 'Updated bathrooms',
];
const RANDOM_TAGS = [
  'City Living', 'Suburban Comfort', 'Waterfront Views', 'Mountain Escape', 'Garden Oasis',
  'Urban Retreat', 'Family Home', 'Starter Dream', 'Luxury Living', 'Cozy Nest',
];

function pick<T>(arr: T[], i: number): T {
  return arr[i % arr.length];
}

function generateRandomProperty(index: number): PropertyInfo {
  const imgIdx = index % availableImages.length;
  const priceValues = [289000, 395000, 475000, 549000, 625000, 749000, 895000, 1100000, 1350000, 1690000, 2100000, 2750000, 3200000];
  const price = pick(priceValues, index * 7 + 11);
  const priceStr = formatPrice(price);
  const bedrooms = [1, 2, 2, 3, 3, 4, 4, 5][index % 8];
  const bathrooms = Math.max(1, bedrooms - (index % 2));
  const area = [850, 1100, 1400, 1750, 2100, 2600, 3200, 4000][index % 8];
  const name = pick(RANDOM_NAMES, index) + (index % 3 === 0 ? ' ' + (index % 5 + 1) : '');
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + '-' + index;
  const featureCount = 4 + (index % 3);
  const features = RANDOM_FEATURE_POOL.map((_, i) => [i, (index * 11 + i * 7) % RANDOM_FEATURE_POOL.length] as const)
    .sort((a, b) => a[1] - b[1])
    .slice(0, featureCount)
    .map(([i]) => RANDOM_FEATURE_POOL[i]);
  return {
    id: slug,
    name: name.trim(),
    adress: pick(RANDOM_ADDRESSES, index * 3),
    price: priceStr,
    description: pick(RANDOM_DESCRIPTIONS, index * 2),
    specifications: { bedrooms, bathrooms, area, type: pick(RANDOM_TYPES, index) },
    features,
    tag: pick(RANDOM_TAGS, index) + ' - Your Next Chapter',
    mainImage: availableImages[imgIdx].image,
    gallery: randomGallery(imgIdx),
    pricingDetails: makePricingDetails(priceStr),
  };
}

const PROPERTIES_COUNT = 37;

export const properties: PropertyInfo[] = [
  ...Array.from({ length: PROPERTIES_COUNT }, (_, i) => generateRandomProperty(i)),
];

export function getPropertyBySlug(slug: string): PropertyInfo | undefined {
  return properties.find((p) => p.id === slug);
}
