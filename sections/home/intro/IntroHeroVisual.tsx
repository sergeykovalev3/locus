"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import StripeParallaxZone from "@/components/visuals/StripeParallaxZone";

const CIRCLE_TEXT_SPIN_S = 48;

export default function IntroHeroVisual() {
  const reduceSpin = useReducedMotion();

  return (
    <>
      <div className="absolute left-0 z-30 h-[8.0625rem] w-[8.0625rem] overflow-hidden rounded-full border border-grey15 max-md:bottom-[-3.0625rem] md:top-[5.9375rem] md:-left-[4.03125rem]">
        <motion.div
          className="absolute inset-0 origin-center will-change-transform"
          initial={{ rotate: 0 }}
          animate={{ rotate: reduceSpin ? 0 : 360 }}
          transition={
            reduceSpin
              ? { duration: 0 }
              : {
                  duration: CIRCLE_TEXT_SPIN_S,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
        >
          <Image
            src="/images/home/intro/circleText.png"
            alt="Discover Your Dream Property ✨"
            fill
            className="object-contain"
            sizes="130px"
          />
        </motion.div>
        <div className="absolute left-1/2 top-1/2 z-30 flex h-[3.625rem] w-[3.625rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-grey15 bg-grey10">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0.75 15.75L15.75 0.75M15.75 0.75L4.5 0.75M15.75 0.75V12"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <StripeParallaxZone
        className="flex-1 rounded-[0.75rem] max-md:border max-md:border-grey15 md:rounded-none"
        foregroundSrc="/images/home/intro/image.png"
        foregroundAlt=""
        priority
        stripeSizes="(max-width: 768px) 100vw, 50vw"
        foregroundSizes="(max-width: 768px) 100vw, 50vw"
      />
    </>
  );
}
