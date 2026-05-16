import { Metadata } from 'next';

import IntroShort from '@/sections/shared/introShort/IntroShort';
import Filters from '@/sections/properties/filters/Filters';
import SendForm from '@/sections/properties/sendForm/SendForm';
import Start from '@/sections/shared/start/Start';

export const metadata: Metadata = {
  title: 'Properties',
  description:
    'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Locus. Click "View Details" for more information.',
  keywords: ['properties', 'real estate', 'locus', 'featured', 'view details'],
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen">
      <IntroShort
        title="Find Your Dream Property"
        description="Welcome to Locus, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
      />
      <Filters />
      <SendForm />
      <Start />
    </div>
  );
}
