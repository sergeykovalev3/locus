import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import HeadInfo from '@/sections/property/headInfo/HeadInfo';
import Gallery from '@/sections/property/gallery/Gallery';
import Info from '@/sections/property/info/Info';
import SendForm from '@/sections/property/sendForm/SendForm';
import PricingDetails from '@/sections/property/pricingDetails/PricingDetails';
import Faq from '@/sections/shared/faq/Faq';
import Start from '@/sections/shared/start/Start';
import { getPropertyBySlug } from '@/lib/data/properties';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) {
    return { title: 'Property' };
  }
  return {
    title: property.name,
    description: property.description.slice(0, 160),
    keywords: ['property', 'real estate', 'locus', property.name, property.adress],
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const propertyInfo = getPropertyBySlug(slug);

  if (!propertyInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <HeadInfo {...propertyInfo} />
      <Gallery gallery={propertyInfo.gallery} />
      <Info
        description={propertyInfo.description}
        specifications={propertyInfo.specifications}
        features={propertyInfo.features}
      />
      <SendForm locationName={propertyInfo.name} locationAddress={propertyInfo.adress} />
      <PricingDetails
        propertyName={propertyInfo.name}
        price={propertyInfo.price}
        additionalFees={propertyInfo.pricingDetails.additionalFees}
        monthlyCosts={propertyInfo.pricingDetails.monthlyCosts}
        totalInitialCosts={propertyInfo.pricingDetails.totalInitialCosts}
        monthlyExpenses={propertyInfo.pricingDetails.monthlyExpenses}
      />
      <Faq />
      <Start />
    </div>
  );
}
