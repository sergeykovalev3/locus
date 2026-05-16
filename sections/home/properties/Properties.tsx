'use client';

import dynamic from 'next/dynamic';

import SectionHeader from '@/components/layout/SectionHeader';
import { PropertySlide } from './PropertySlide';
import { properties } from '@/lib/data/properties';

const PropertiesSlider = dynamic(
  () => import('@/sections/home/properties/PropertiesSlider.client'),
  { ssr: false }
);

const headerInfo = {
  title: 'Featured Properties',
  subtitle: `Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Locus. Click "View Details" for more information.`,
  linkTitle: 'View All Properties',
  link: '/properties',
};

const slides = properties.map((property) => (
  <PropertySlide
    key={property.id}
    image={property.mainImage}
    title={property.name}
    description={property.description}
    price={property.price}
    link={`/property/${property.id}`}
    stats={{
      type: property.specifications.type,
      bedroom: property.specifications.bedrooms,
      bathroom: property.specifications.bathrooms,
    }}
  />
));

export default function Properties() {
  return (
    <div id="properties" className="py-[40px] xl:py-[60px] 2xl:py-[75px]">
      <div className="container">
        <div>
          <SectionHeader className="mb-[40px] md:mb-[60px] xl:mb-5" headerInfo={headerInfo} />
          <PropertiesSlider
            slides={slides}
            linkTitle={headerInfo.linkTitle}
            link={headerInfo.link}
          />
        </div>
      </div>
    </div>
  );
}
