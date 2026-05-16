"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Feature = {
  id: string;
  icon: string;
  title: string;
  href: string;
};

const FEATURES: Feature[] = [
  {
    id: "dream-home",
    icon: "home.svg",
    title: "Find Your Dream Home",
    href: "/properties",
  },
  {
    id: "property-value",
    icon: "property.svg",
    title: "Unlock Property Value",
    href: "/services",
  },
  {
    id: "management",
    icon: "management.svg",
    title: "Effortless Property Management",
    href: "/contact",
  },
  {
    id: "investments",
    icon: "sun.svg",
    title: "Smart Investments, Informed Decisions",
    href: "/about",
  },
];

const cardSpring = {
  type: "spring" as const,
  stiffness: 72,
  damping: 22,
  mass: 1.15,
};

const MotionLink = motion.create(Link);

export default function Features() {
  return (
    <div
      id="features"
      className="relative z-10 mx-[0.25rem] grid max-w-[120rem] grid-cols-4 gap-[0.625rem] border border-grey15 p-[0.625rem] shadow-[0_0_0_0.25rem_rgba(25,25,25,1)] max-md:grid-cols-2 max-md:mt-[2.5rem] max-md:rounded-[0.75rem] md:gap-[1.25rem] md:shadow-[0_0_0_0.625rem_rgba(25,25,25,1)] 2xl:p-[1.25rem] max-md:mx-1 mx-auto"
    >
      {FEATURES.map(({ id, icon, title, href }) => (
        <MotionLink
          key={id}
          href={href}
          className="group relative flex w-full flex-col items-center justify-between gap-[0.875rem] overflow-hidden rounded-[0.75rem] border border-grey15 bg-grey10 px-[0.875rem] py-[1.25rem] outline-none ring-purple60/0 transition-shadow focus-visible:ring-2 focus-visible:ring-purple60/55 md:gap-[1rem] md:px-[1rem] md:py-[1.875rem] 2xl:gap-[1.25rem] 2xl:px-[1.25rem] 2xl:py-[2.5rem]"
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          animate="rest"
          variants={{
            rest: {
              y: 0,
              scale: 1,
              borderColor: "rgba(38, 38, 38, 1)",
              boxShadow: "0 0 0 0 rgba(112, 59, 247, 0)",
            },
            hover: {
              y: -6,
              scale: 1,
              borderColor: "rgba(112, 59, 247, 0.45)",
              boxShadow:
                "0 0 0 1px rgba(112, 59, 247, 0.2), 0 18px 48px -16px rgba(112, 59, 247, 0.35)",
              transition: cardSpring,
            },
            tap: {
              y: -3,
              scale: 0.99,
              transition: { type: "spring", stiffness: 400, damping: 28 },
            },
          }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
            variants={{
              rest: { opacity: 0 },
              hover: {
                opacity: 1,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            aria-hidden
          >
            <motion.div
              className="absolute inset-[-40%] bg-[conic-gradient(from_120deg_at_50%_50%,rgba(112,59,247,0.22)_0deg,rgba(130,84,248,0.12)_90deg,transparent_200deg,rgba(112,59,247,0.18)_280deg,rgba(112,59,247,0.22)_360deg)]"
              variants={{
                rest: { rotate: 0 },
                hover: {
                  rotate: 360,
                  transition: {
                    delay: 0.15,
                    duration: 6.5,
                    ease: "linear",
                    repeat: Infinity,
                  },
                },
              }}
            />
            <div className="absolute inset-[1px] rounded-[calc(0.75rem-1px)] bg-grey10/92 backdrop-blur-[2px]" />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-[2] overflow-hidden rounded-[inherit]"
            variants={{
              rest: { opacity: 0 },
              hover: {
                opacity: 1,
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 },
              },
            }}
            aria-hidden
          >
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-purple60/35 to-transparent blur-sm"
              variants={{
                rest: { x: "-120%", skewX: -12 },
                hover: {
                  x: "220%",
                  transition: {
                    delay: 0.2,
                    duration: 1.35,
                    ease: [0.25, 0.9, 0.35, 1],
                  },
                },
              }}
            />
          </motion.div>

          <div className="relative z-10 flex h-[3rem] w-[3rem] items-center justify-center md:h-[3.75rem] md:w-[3.75rem] 2xl:h-[5.125rem] 2xl:w-[5.125rem]">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-0 z-10"
                variants={{
                  rest: { rotate: 0 },
                  hover: {
                    rotate: 360,
                    transition: {
                      delay: 0.18,
                      duration: 6.2,
                      ease: "linear",
                      repeat: Infinity,
                    },
                  },
                }}
              >
                <Image
                  src="/images/global/sphere.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 48px, 82px"
                />
              </motion.div>
            </div>
            <Image
              src={`/images/icons/${icon}`}
              alt=""
              width={34}
              height={34}
              className="relative z-20 h-[1.25rem] w-[1.25rem] md:h-[1.5rem] md:w-[1.5rem] 2xl:h-[2.125rem] 2xl:w-[2.125rem]"
            />
          </div>

          <h5 className="relative z-10 text-center text-[0.875rem] font-semibold text-white transition-colors duration-500 ease-out group-hover:text-purple65 md:text-[1rem] 2xl:text-[1.25rem]">
            {title}
          </h5>

          <motion.div
            className="absolute right-[1.625rem] top-[1.625rem] z-10 text-[#4D4D4D] transition-colors duration-[0.55s] ease-out group-hover:text-purple60"
            variants={{
              rest: { x: 0, y: 0 },
              hover: {
                x: 5,
                y: -6,
                transition: {
                  type: "spring",
                  stiffness: 140,
                  damping: 15,
                  mass: 0.65,
                },
              },
            }}
            aria-hidden
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[1.375rem] w-[1.375rem] 2xl:h-[2.125rem] 2xl:w-[2.125rem]"
              aria-hidden
            >
              <path
                d="M1 22.25L22.25 1M22.25 1L6.3125 1M22.25 1V16.9375"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </MotionLink>
      ))}
    </div>
  );
}
