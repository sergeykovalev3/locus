import SectionHeader from "@/components/layout/SectionHeader";
import StripeParallaxZone from "@/components/visuals/StripeParallaxZone";
import Stats from "@/components/elements/Stats";

const headerInfo = {
  title: "Our Journey",
  subtitle: `Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.`,
};

export default function Intro() {
  return (
    <section id="story" className="pb-[40px] xl:pb-[60px] 2xl:pb-[75px] pt-[50px] xl:pt-[70px] 2xl:pt-[100px]">
      <div className="container">
        <div className="flex max-md:flex-col max-md:items-center gap-[60px] xl:gap-[60px] 2xl:gap-[80px] py-0 md:py-[50px]">
          <div className="flex-1 flex flex-col gap-[40px] xl:gap-[50px] 2xl:gap-[80px] max-md:order-2 xl:py-[55.5px] 2xl:py-[67.5px]">
            <SectionHeader headerInfo={headerInfo} />
            <Stats />
          </div>
          <div className="max-md:w-full min-h-[310px] max-md:max-w-[400px] max-md:order-1 flex-1 border border-grey15 rounded-[12px]">
            <StripeParallaxZone
              className="h-full min-h-[310px] w-full rounded-[12px]"
              foregroundSrc="/images/about/intro/image.png"
              foregroundAlt="About intro image"
              stripeSizes="(max-width: 768px) 100vw, 50vw"
              foregroundSizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
