'use client';

import dynamic from 'next/dynamic';

import SectionHeader from '@/components/layout/SectionHeader';
import ClientsSlide from './ClientsSlide';

const ClientsSlider = dynamic(() => import('@/sections/about/clients/ClientsSlider.client'), {
  ssr: false,
});

const headerInfo = {
  title: 'Our Valued Clients',
  subtitle: `At Locus, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving.`,
};

const slidesInfo = [
  {
    from: 'Since 2019',
    name: 'ABC Corporation',
    link: 'https://github.com/sergeykovalev3',
    domain: 'Commercial Real Estate',
    category: 'Luxury Home Development',
    description:
      "Locus's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    from: 'Since 2018',
    name: 'GreenTech Enterprises',
    link: 'https://github.com/sergeykovalev3',
    domain: 'Commercial Real Estate',
    category: 'Retail Space',
    description:
      "Locus's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
  {
    from: 'Since 2019',
    name: 'ABC Corporation',
    link: 'https://github.com/sergeykovalev3',
    domain: 'Commercial Real Estate',
    category: 'Luxury Home Development',
    description:
      "Locus's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    from: 'Since 2018',
    name: 'GreenTech Enterprises',
    link: 'https://github.com/sergeykovalev3',
    domain: 'Commercial Real Estate',
    category: 'Retail Space',
    description:
      "Locus's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
];

const slides = slidesInfo.map((slide, index) => (
  <ClientsSlide key={`${slide.name}-${index}`} {...slide} />
));

export default function Clients() {
  return (
    <div id="clients" className="py-[40px] xl:py-[60px] 2xl:py-[75px]">
      <div className="container">
        <div>
          <SectionHeader className="mb-[40px] md:mb-[60px] xl:mb-5" headerInfo={headerInfo} />
          <ClientsSlider slides={slides} />
        </div>
      </div>
    </div>
  );
}
