"use client";

import clsx from "clsx";
import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, startTransition } from "react";

type IntroStat = {
  subtitle: string;
  end: number;
  format: (n: number) => string;
};

const INTRO_STATS: IntroStat[] = [
  { end: 200, format: (n) => `${Math.round(n)}+`, subtitle: "Happy Customers" },
  {
    end: 10000,
    format: (n) => `${Math.floor(n / 1000)}k+`,
    subtitle: "Properties For Clients",
  },
  { end: 16, format: (n) => `${Math.round(n)}+`, subtitle: "Years of Experience" },
];

const DURATION_MS = 1600;
const STAGGER_MS = 120;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function AnimatedStat({
  end,
  format,
  subtitle,
  index,
  groupInView,
}: IntroStat & { index: number; groupInView: boolean }) {
  const reducedMotion = useReducedMotion();
  const [label, setLabel] = useState(() => (reducedMotion ? format(end) : format(0)));

  useEffect(() => {
    if (!groupInView) return;

    if (reducedMotion) {
      startTransition(() => {
        setLabel(format(end));
      });
      return;
    }

    const delay = index * STAGGER_MS;
    let raf = 0;
    const timeout = window.setTimeout(() => {
      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(elapsed / DURATION_MS, 1);
        const eased = easeOutCubic(t);
        const value = eased * end;
        setLabel(format(value));
        if (t < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [groupInView, end, format, index, reducedMotion]);

  return (
    <>
      <h3 className="text-center text-[1.5rem] font-bold text-white xs:text-left md:text-[1.875rem] 2xl:text-[2.5rem] tabular-nums">
        {label}
      </h3>
      <h4 className="text-center text-[0.875rem] font-medium text-grey60 xs:text-left md:text-[1rem] 2xl:text-[1.125rem]">
        {subtitle}
      </h4>
    </>
  );
}

export default function Stats() {
  const rootRef = useRef<HTMLDivElement>(null);
  const groupInView = useInView(rootRef, { once: true, amount: 0.35 });

  return (
    <div
      ref={rootRef}
      className="flex flex-wrap gap-[0.75rem] xs:flex-nowrap md:gap-[1rem] 2xl:gap-[1.25rem]"
    >
      {INTRO_STATS.map(({ end, format, subtitle }, index) => (
        <div
          key={subtitle}
          className={clsx(
            "flex flex-col gap-[0.125rem] rounded-[0.75rem] border border-grey15 bg-grey10 p-[1rem] xs:px-[1.25rem] xs:py-[0.9rem] md:max-w-[15rem] 2xl:px-[1.5rem] 2xl:py-[1rem]",
            {
              "max-xs:w-[48%]": index === 0 || index === 1,
              "max-xs:w-full": index === 2,
            },
          )}
        >
          <AnimatedStat
            end={end}
            format={format}
            subtitle={subtitle}
            index={index}
            groupInView={groupInView}
          />
        </div>
      ))}
    </div>
  );
}
