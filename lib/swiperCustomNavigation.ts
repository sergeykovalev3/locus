import { useId } from "react";

export function useSwiperCustomNav(instanceKey: string) {
  const raw = useId();
  const token = `${instanceKey}-${raw.replace(/\W/g, "")}`;
  return {
    navigation: {
      prevEl: `[data-locus-swiper-prev="${token}"]`,
      nextEl: `[data-locus-swiper-next="${token}"]`,
    },
    prevButtonProps: { "data-locus-swiper-prev": token } as const,
    nextButtonProps: { "data-locus-swiper-next": token } as const,
  };
}
