import { ButtonPurple } from "@/components/btns/ButtonPurple";
import StripeParallaxZone from "@/components/visuals/StripeParallaxZone";

export default function Start() {
  return (
    <StripeParallaxZone
      stripeSrc="/images/home/start/abstractDesign.png"
      className="relative border-y border-grey15 py-[50px] xl:py-[60px] 2xl:py-[100px]"
      stripeSizes="100vw"
      stripeClassName="object-cover"
    >
      <div className="container">
        <div className="flex max-md:flex-col justify-between gap-1 md:items-center">
          <div className="flex max-w-[1155px] flex-col gap-[6px] xl:gap-[10px] 2xl:gap-[14px]">
            <h2 className="text-[28px] font-semibold xl:text-[38px] 2xl:text-[48px]">
              Start Your Real Estate Journey Today
            </h2>
            <p className="text-[14px] font-medium text-grey60 xl:text-[16px] 2xl:text-[18px]">
              Your dream property is just a click away. Whether you&apos;re looking for a new home, a
              strategic investment, or expert real estate advice, Locus is here to assist you every step
              of the way. Take the first step towards your real estate goals and explore our available
              properties or get in touch with our team for personalized assistance.
            </p>
          </div>
          <div className="w-full max-w-full xs:max-w-[192px]">
            <ButtonPurple className="w-full" href="/properties">
              Explore Properties
            </ButtonPurple>
          </div>
        </div>
      </div>
    </StripeParallaxZone>
  );
}
