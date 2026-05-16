"use client";

import clsx from "clsx";
import type { ReactNode } from "react";

import StripeParallaxZone from "@/components/visuals/StripeParallaxZone";

type WaveParallaxPanelProps = {
  stripeSrc: string;
  className?: string;
  children: ReactNode;
};

export default function WaveParallaxPanel({ stripeSrc, className, children }: WaveParallaxPanelProps) {
  return (
    <StripeParallaxZone
      stripeSrc={stripeSrc}
      className={clsx(className)}
      stripeSizes="100vw"
      stripeClassName="object-cover"
    >
      {children}
    </StripeParallaxZone>
  );
}
