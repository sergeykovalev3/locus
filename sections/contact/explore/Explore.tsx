'use client';

import Image from 'next/image';

import SectionHeader from '@/components/layout/SectionHeader';
import StripeParallaxZone from '@/components/visuals/StripeParallaxZone';

const headerInfo = {
  title: `Explore Locus's World`,
  subtitle: `Step inside the world of Locus, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.`,
};

const images = {
  image1: '/images/contact/explore/image1.png',
  image2: '/images/contact/explore/image2.png',
  image3: '/images/contact/explore/image3.png',
  image4: '/images/contact/explore/image4.png',
  image5: '/images/contact/explore/image5.png',
  image6: '/images/contact/explore/image6.png',
};

export default function Explore() {
  return (
    <div
      id="explore"
      className="pt-[80px] xl:pt-[120px] 2xl:pt-[150px] pb-[40px] xl:pb-[60px] 2xl:pb-[75px]"
    >
      <div className="container">
        <StripeParallaxZone
          stripeSrc="/images/global/abstractDesign.png"
          className="p-[24px] xl:p-[60px] 2xl:p-[80px] bg-grey10 border border-grey15 rounded-[12px]"
          stripeSizes="100vw"
          stripeClassName="object-cover"
        >
          <div className="flex w-full min-w-0 flex-col gap-[10px] xl:gap-[20px]">
            <div className="flex gap-[10px] xl:gap-[20px]">
              <div className="w-full rounded-[10px] overflow-hidden relative z-20">
                <Image src={images.image1} alt="Image 1" width={1000} height={1000} />
              </div>
              <div className="w-full rounded-[10px] overflow-hidden relative z-20">
                <Image src={images.image2} alt="Image 2" width={1000} height={1000} />
              </div>
            </div>
            <div className="flex gap-[10px] xl:gap-[20px]">
              <div className="w-full rounded-[10px] overflow-hidden relative z-20">
                <Image src={images.image3} alt="Image 3" width={1000} height={1000} />
              </div>
              <div className="w-full flex gap-[10px] xl:gap-[20px]">
                <div className="w-full rounded-[10px] overflow-hidden relative z-20">
                  <Image src={images.image4} alt="Image 4" width={1000} height={1000} />
                </div>
                <div className="w-full rounded-[10px] overflow-hidden relative z-20">
                  <Image src={images.image5} alt="Image 5" width={1000} height={1000} />
                </div>
              </div>
            </div>
            <div className="flex max-xl:flex-col items-center max-xl:pt-[40px] gap-[10px] xl:gap-[20px]">
              <div className="w-full flex flex-col justify-center items-center">
                <SectionHeader headerInfo={headerInfo} />
              </div>
              <div className="w-full rounded-[10px] overflow-hidden relative z-20">
                <Image src={images.image3} alt="Image 3" width={2000} height={2000} />
              </div>
            </div>
          </div>
        </StripeParallaxZone>
      </div>
    </div>
  );
}
