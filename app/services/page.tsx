import { Metadata } from 'next';

import IntroShort from '@/sections/shared/introShort/IntroShort';
import Features from '@/sections/shared/features/Features';
import Values from '@/sections/services/values/Values';
import Management from '@/sections/services/management/Management';
import Decisions from '@/sections/services/decisions/Decisions';
import Start from '@/sections/shared/start/Start';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Discover the comprehensive range of services designed to meet your unique needs and dreams. From expert guidance to tailored solutions, we are here to help you achieve your real estate goals.',
  keywords: ['services', 'real estate', 'locus', 'expert guidance', 'tailored solutions'],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <IntroShort
        title="Elevate Your Real Estate Experience"
        description="Welcome to Locus, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams. "
      />
      <Features />
      <Values />
      <Management />
      <Decisions />
      <Start />
    </div>
  );
}
