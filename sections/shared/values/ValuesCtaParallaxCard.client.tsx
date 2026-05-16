"use client";

import WaveParallaxPanel from "@/components/visuals/WaveParallaxPanel.client";
import { ButtonDark } from "@/components/btns/BtnDark";

type ValuesCtaParallaxCardProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export default function ValuesCtaParallaxCard({
  title,
  description,
  buttonText,
  buttonLink,
}: ValuesCtaParallaxCardProps) {
  return (
    <WaveParallaxPanel
      stripeSrc="/images/global/abstractDesign2.png"
      className="flex flex-col gap-[20px] rounded-[10px] border border-grey15 p-[24px] md:col-span-2 2xl:gap-[30px] 2xl:rounded-[12px] xl:px-[50px] xl:py-[60px]"
    >
      <div className="flex max-xs:flex-col justify-between gap-[20px] xs:items-center xl:gap-[14px] 2xl:gap-[20px]">
        <h4 className="text-[20px] font-bold xl:text-[24px] 2xl:text-[30px]">{title}</h4>
        <ButtonDark href={buttonLink}>{buttonText}</ButtonDark>
      </div>
      <p className="text-[14px] font-medium text-grey60 xl:text-[16px] 2xl:text-[18px]">{description}</p>
    </WaveParallaxPanel>
  );
}
