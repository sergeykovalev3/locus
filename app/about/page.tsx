import { Metadata } from 'next';

import Intro from '@/sections/about/intro/Intro';
import Values from '@/sections/about/values/Values';
import Achievements from '@/sections/about/achievements/Achievements';
import Steps from '@/sections/about/steps/Steps';
import Team from '@/sections/about/team/Team';
import Clients from '@/sections/about/clients/Clients';
import Start from '@/sections/shared/start/Start';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about Locus - your trusted partner in real estate. Discover our story, mission, and commitment to excellence.',
  keywords: ['about', 'company', 'real estate', 'locus', 'story', 'mission'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Intro />
      <Values />
      <Achievements />
      <Steps />
      <Team />
      <Clients />
      <Start />
    </div>
  );
}
