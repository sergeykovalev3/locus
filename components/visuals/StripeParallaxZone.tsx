"use client";

import Image from "next/image";
import clsx from "clsx";
import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MOUSE_MAX_SHIFT = 22;

const PARALLAX_SPRING = { stiffness: 72, damping: 20, mass: 0.82 };

const SCROLL_MAX_SHIFT = 40;

const SCROLL_DRIFT_X = 14;
const SCROLL_DRIFT_Y = 22;

type StripeParallaxZoneProps = {
  stripeSrc?: string;
  foregroundSrc?: string;
  foregroundAlt?: string;
  children?: ReactNode;
  className?: string;
  priority?: boolean;
  stripeSizes?: string;
  foregroundSizes?: string;
  foregroundClassName?: string;
  stripeClassName?: string;
};

export default function StripeParallaxZone({
  stripeSrc = "/images/global/abstractDesign.png",
  foregroundSrc,
  foregroundAlt = "",
  children,
  className,
  priority,
  stripeSizes,
  foregroundSizes,
  foregroundClassName = "object-fill",
  stripeClassName = "object-cover",
}: StripeParallaxZoneProps) {
  const mouseOffX = useRef(0);
  const mouseOffY = useRef(0);
  const scrollOffX = useRef(0);
  const scrollOffY = useRef(0);

  const combinedTargetX = useMotionValue(0);
  const combinedTargetY = useMotionValue(0);
  const springX = useSpring(combinedTargetX, PARALLAX_SPRING);
  const springY = useSpring(combinedTargetY, PARALLAX_SPRING);

  const pushCombined = useCallback(() => {
    combinedTargetX.set(mouseOffX.current + scrollOffX.current);
    combinedTargetY.set(mouseOffY.current + scrollOffY.current);
  }, [combinedTargetX, combinedTargetY]);

  const mouseFrameRef = useRef<number>(0);
  const scrollFrameRef = useRef<number>(0);
  const zoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return undefined;
    }

    const updateScrollParallax = () => {
      const el = zoneRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const scrollY = window.scrollY;
      const midY = rect.top + rect.height / 2;
      const normFromCenter = (midY - vh / 2) / vh;

      const vw = window.innerWidth || 1;
      const mix =
        scrollY * 0.0042 +
        normFromCenter * 4.5 +
        (rect.left / vw) * 2.8;

      const wobble =
        Math.sin(mix * 2.47) * SCROLL_MAX_SHIFT +
        Math.sin(mix * 5.03 + 0.7) * (SCROLL_MAX_SHIFT * 0.42);
      const wobbleY =
        Math.cos(mix * 1.91 - 0.4) * (SCROLL_MAX_SHIFT * 0.92) +
        Math.cos(mix * 4.22) * (SCROLL_MAX_SHIFT * 0.38);

      const driftX = (rect.left + rect.width / 2) / vw - 0.5;
      const driftY = normFromCenter;

      scrollOffX.current = wobble + driftX * 2 * SCROLL_DRIFT_X;
      scrollOffY.current = wobbleY + driftY * SCROLL_DRIFT_Y;
      pushCombined();
    };

    const scheduleScrollUpdate = () => {
      if (scrollFrameRef.current) return;
      scrollFrameRef.current = requestAnimationFrame(() => {
        scrollFrameRef.current = 0;
        updateScrollParallax();
      });
    };

    scheduleScrollUpdate();
    window.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
    window.addEventListener("resize", scheduleScrollUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleScrollUpdate);
      window.removeEventListener("resize", scheduleScrollUpdate);
      if (scrollFrameRef.current) cancelAnimationFrame(scrollFrameRef.current);
      scrollOffX.current = 0;
      scrollOffY.current = 0;
      pushCombined();
    };
  }, [pushCombined]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");

    const resetMouse = () => {
      mouseOffX.current = 0;
      mouseOffY.current = 0;
      pushCombined();
    };

    if (reduceMotion.matches || coarse.matches) {
      return undefined;
    }

    const onMove = (e: MouseEvent) => {
      if (mouseFrameRef.current) cancelAnimationFrame(mouseFrameRef.current);
      mouseFrameRef.current = requestAnimationFrame(() => {
        const el = zoneRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const { clientX: px, clientY: py } = e;
        const inside =
          px >= rect.left &&
          px <= rect.right &&
          py >= rect.top &&
          py <= rect.bottom;

        if (!inside) {
          resetMouse();
          return;
        }

        const halfW = rect.width / 2 || 1;
        const halfH = rect.height / 2 || 1;
        const cx = rect.left + halfW;
        const cy = rect.top + halfH;
        mouseOffX.current = ((px - cx) / halfW) * MOUSE_MAX_SHIFT;
        mouseOffY.current = ((py - cy) / halfH) * MOUSE_MAX_SHIFT;
        pushCombined();
      });
    };

    const onLeave = () => resetMouse();

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (mouseFrameRef.current) cancelAnimationFrame(mouseFrameRef.current);
      resetMouse();
    };
  }, [pushCombined]);

  return (
    <div ref={zoneRef} className={clsx("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-[-14%] z-10 will-change-transform"
        style={{ x: springX, y: springY }}
      >
        <Image
          src={stripeSrc}
          alt=""
          fill
          className={stripeClassName}
          priority={priority}
          sizes={stripeSizes}
        />
      </motion.div>
      {foregroundSrc ? (
        <Image
          src={foregroundSrc}
          alt={foregroundAlt}
          fill
          className={clsx("z-20", foregroundClassName)}
          priority={priority}
          sizes={foregroundSizes}
        />
      ) : (
        <div className="relative z-20">{children}</div>
      )}
    </div>
  );
}
