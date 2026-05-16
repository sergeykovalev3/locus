import React from 'react';
import Image from 'next/image';

import SectionHeader from '@/components/layout/SectionHeader';
import {
  ACHIEVEMENT_CARD_DESC_HOVER,
  ACHIEVEMENT_CARD_HOVER_SHELL,
  ACHIEVEMENT_CARD_TITLE_HOVER,
} from '@/lib/slideCardHover';
import ValuesCtaParallaxCard from '@/sections/shared/values/ValuesCtaParallaxCard.client';

export type ValueItem = {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

type ValuesSectionProps = {
  id?: string;
  headerInfo: {
    title: string;
    subtitle: string;
  };
  items: ValueItem[];
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
};

export function ValuesSection({ id, headerInfo, items, cta }: ValuesSectionProps) {
  const topItems = items.slice(0, 3);
  const bottomItems = items.slice(3);

  return (
    <section
      id={id}
      className="pt-[80px] xl:pt-[120px] 2xl:pt-[150px] pb-[40px] xl:pb-[60px] 2xl:pb-[75px]"
    >
      <div className="container">
        <div className="flex flex-col gap-[40px] xl:gap-[60px] 2xl:gap-[80px]">
          <div>
            <SectionHeader headerInfo={headerInfo} />
          </div>
          <div className="flex flex-col gap-[20px] xl:gap-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] xl:gap-[30px]">
              {topItems.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className={`flex h-full flex-col gap-[16px] rounded-[10px] border border-grey15 bg-grey08 p-[24px] xl:gap-[20px] xl:p-[40px] 2xl:gap-[30px] 2xl:rounded-[12px] 2xl:p-[50px] ${ACHIEVEMENT_CARD_HOVER_SHELL}`}
                >
                  <div className="flex items-center gap-[10px] xl:gap-[16px] 2xl:gap-[20px]">
                    <div className="w-[48px] h-[48px] xl:w-[60px] xl:h-[60px] 2xl:w-[82px] 2xl:h-[82px] flex items-center justify-center relative">
                      <span className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px] 2xl:w-[30px] 2xl:h-[30px] flex items-center justify-center">
                        {icon &&
                          React.cloneElement(icon, {
                            width: '100%',
                            height: '100%',
                          })}
                      </span>
                      <Image
                        src="/images/global/sphere.png"
                        alt="Sphere"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4
                      className={`text-[18px] font-semibold xl:text-[20px] 2xl:text-[24px] ${ACHIEVEMENT_CARD_TITLE_HOVER}`}
                    >
                      {title}
                    </h4>
                  </div>
                  <p
                    className={`text-[14px] font-medium text-grey60 xl:text-[16px] 2xl:text-[18px] ${ACHIEVEMENT_CARD_DESC_HOVER}`}
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] xl:gap-[30px]">
              {bottomItems.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className={`flex h-full w-full flex-col gap-[16px] rounded-[10px] border border-grey15 bg-grey08 p-[24px] xl:gap-[20px] xl:p-[40px] 2xl:gap-[30px] 2xl:rounded-[12px] 2xl:p-[50px] ${ACHIEVEMENT_CARD_HOVER_SHELL}`}
                >
                  <div className="flex items-center gap-[10px] xl:gap-[16px] 2xl:gap-[20px]">
                    <div className="w-[48px] h-[48px] xl:w-[60px] xl:h-[60px] 2xl:w-[82px] 2xl:h-[82px] flex items-center justify-center relative">
                      <span className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px] 2xl:w-[30px] 2xl:h-[30px] flex items-center justify-center">
                        {icon &&
                          React.cloneElement(icon, {
                            width: '100%',
                            height: '100%',
                          })}
                      </span>
                      <Image
                        src="/images/global/sphere.png"
                        alt="Sphere"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4
                      className={`text-[18px] font-semibold xl:text-[20px] 2xl:text-[24px] ${ACHIEVEMENT_CARD_TITLE_HOVER}`}
                    >
                      {title}
                    </h4>
                  </div>
                  <p
                    className={`text-[14px] font-medium text-grey60 xl:text-[16px] 2xl:text-[18px] ${ACHIEVEMENT_CARD_DESC_HOVER}`}
                  >
                    {description}
                  </p>
                </div>
              ))}
              {cta && (
                <ValuesCtaParallaxCard
                  title={cta.title}
                  description={cta.description}
                  buttonText={cta.buttonText}
                  buttonLink={cta.buttonLink}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
