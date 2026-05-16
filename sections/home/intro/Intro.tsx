import Stats from "@/components/elements/Stats";
import Features from "@/sections/shared/features/Features";
import { ButtonDark } from "@/components/btns/BtnDark";
import { ButtonPurple } from "@/components/btns/ButtonPurple";
import IntroHeroVisual from "@/sections/home/intro/IntroHeroVisual";

export default function Intro() {
  return (
    <div id="hero" className="w-full min-h-dvh pb-[40px] xl:pb-[60px] 2xl:pb-[75px]">
      <div className="relative min-h-dvh">
        <div className="absolute z-10 flex w-full min-h-dvh flex-col gap-[3.5rem] px-[0.9375rem] pt-[2.5rem] md:flex-row md:gap-[3.75rem] md:px-0 md:pt-0 2xl:gap-[5rem]">
          <div className="order-2 flex-1 md:order-1" />

          <div className="relative order-1 flex flex-1 rounded-[0.75rem] bg-grey10 md:order-2 md:rounded-none">
            <IntroHeroVisual />
          </div>
        </div>

        <div className="container relative z-20 flex min-h-dvh items-center pt-[calc(100dvh-50dvh)] md:pt-0">
          <div className="flex w-full max-w-[47.5rem] flex-col gap-[2.5rem] pt-[3.5rem] md:w-1/2 md:pt-0 md:gap-[3.125rem] 2xl:gap-[3.75rem]">
            <div className="flex flex-col gap-[1rem] md:gap-[1.25rem]">
              <h1 className="text-[1.75rem] font-semibold text-white md:text-[2.875rem] 2xl:text-[3.75rem]">
                Discover Your Dream Property with Locus
              </h1>
              <h2 className="text-[0.875rem] font-medium text-grey60 md:text-[1rem] 2xl:text-[1.125rem]">
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </h2>
            </div>

            <div className="flex flex-col gap-[1rem] sm:flex-row md:gap-[1.25rem]">
              <ButtonDark href="/about">Learn More</ButtonDark>
              <ButtonPurple href="/properties">Browse Properties</ButtonPurple>
            </div>

            <Stats />
          </div>
        </div>
      </div>

      <Features />
    </div>
  );
}
