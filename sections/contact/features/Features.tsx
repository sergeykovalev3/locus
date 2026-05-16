"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Feature = {
  id: string;
  icon: ReactNode;
  link?: string;
  title?: string;
  links?: { link: string; title: string }[];
};

const FEATURES: Feature[] = [
  {
    id: "email",
    icon: (
      <svg
        width="30"
        height="24"
        viewBox="0 0 30 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 6.96872V19.125C0 21.4722 1.90279 23.375 4.25 23.375H25.5C27.8472 23.375 29.75 21.4722 29.75 19.125V6.96872L17.1024 14.7519C15.7364 15.5925 14.0136 15.5925 12.6476 14.7519L0 6.96872Z"
          fill="#A685FA"
        />
        <path
          d="M29.75 4.47359V4.25C29.75 1.90279 27.8472 0 25.5 0H4.25C1.90279 0 0 1.90279 0 4.25V4.47359L13.7613 12.9421C14.4443 13.3624 15.3057 13.3624 15.9887 12.9421L29.75 4.47359Z"
          fill="#A685FA"
        />
      </svg>
    ),
    link: "mailto:hello@locus.dev",
    title: "hello@locus.dev",
  },
  {
    id: "phone",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 4.25C0 1.90279 1.90279 0 4.25 0H6.19314C7.412 0 8.47446 0.829539 8.77008 2.01201L10.3366 8.27819C10.5958 9.31501 10.2084 10.4062 9.35343 11.0474L7.5208 12.4219C7.3305 12.5646 7.28913 12.7736 7.34258 12.9196C8.95122 17.3109 12.4391 20.7988 16.8304 22.4074C16.9764 22.4609 17.1854 22.4195 17.3281 22.2292L18.7026 20.3966C19.3438 19.5416 20.435 19.1542 21.4718 19.4134L27.738 20.9799C28.9205 21.2755 29.75 22.338 29.75 23.5569V25.5C29.75 27.8472 27.8472 29.75 25.5 29.75H22.3125C9.98965 29.75 0 19.7604 0 7.4375V4.25Z"
          fill="#A685FA"
        />
      </svg>
    ),
    link: "tel:11234567890",
    title: "+1 (123) 456-7890",
  },
  {
    id: "hq",
    icon: (
      <svg
        width="24"
        height="29"
        viewBox="0 0 24 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.0355 28.4765C11.0783 28.5013 11.1119 28.5204 11.1357 28.5338L11.1753 28.5559C11.491 28.7292 11.8827 28.7279 12.1987 28.5564L12.2393 28.5338C12.2631 28.5204 12.2967 28.5013 12.3395 28.4765C12.4251 28.4269 12.5474 28.3546 12.7011 28.2599C13.0085 28.0707 13.4424 27.7916 13.9607 27.4254C14.9955 26.6944 16.3763 25.6097 17.7601 24.1929C20.5143 21.373 23.375 17.1362 23.375 11.6875C23.375 5.23267 18.1423 0 11.6875 0C5.23267 0 0 5.23267 0 11.6875C0 17.1362 2.86071 21.373 5.6149 24.1929C6.99869 25.6097 8.37946 26.6944 9.4143 27.4254C9.9326 27.7916 10.3665 28.0707 10.6739 28.2599C10.8276 28.3546 10.9499 28.4269 11.0355 28.4765ZM11.6875 15.9375C14.0347 15.9375 15.9375 14.0347 15.9375 11.6875C15.9375 9.34029 14.0347 7.4375 11.6875 7.4375C9.34029 7.4375 7.4375 9.34029 7.4375 11.6875C7.4375 14.0347 9.34029 15.9375 11.6875 15.9375Z"
          fill="#A685FA"
        />
      </svg>
    ),
    link: "https://maps.app.goo.gl/567890",
    title: "Main Headquarters",
  },
  {
    id: "social",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 28C6.26889 28 0 21.7311 0 14H14V28Z" fill="#A685FA" />
        <path d="M0 0C7.73111 0 14 6.26889 14 14H0V0Z" fill="#A685FA" />
        <path d="M14 28C21.7311 28 28 21.7311 28 14H14V28Z" fill="#A685FA" />
        <path d="M28 14C28 6.26889 21.7311 0 14 0V14H28Z" fill="#A685FA" />
      </svg>
    ),
    links: [
      { link: "https://www.instagram.com/", title: "Instagram" },
      { link: "https://www.linkedin.com/", title: "LinkedIn" },
      { link: "https://www.facebook.com/", title: "Facebook" },
    ],
  },
];

const cardSpring = {
  type: "spring" as const,
  stiffness: 72,
  damping: 22,
  mass: 1.15,
};

const cardVariants = {
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
    transition: { type: "spring" as const, stiffness: 400, damping: 28 },
  },
};

const cardClassName =
  "group relative flex w-full flex-col items-center justify-between gap-[0.875rem] overflow-hidden rounded-[0.75rem] border border-grey15 bg-grey10 px-[0.875rem] py-[1.25rem] outline-none ring-purple60/0 transition-shadow focus-visible:ring-2 focus-visible:ring-purple60/55 md:gap-[1rem] md:px-[1rem] md:py-[1.875rem] 2xl:gap-[1.25rem] 2xl:px-[1.25rem] 2xl:py-[2.5rem]";

type CardShellProps = {
  href?: string;
  children: React.ReactNode;
};

function CardShell({ href, children }: CardShellProps) {
  const motionProps = {
    className: cardClassName,
    initial: "rest" as const,
    whileHover: "hover" as const,
    whileTap: "tap" as const,
    animate: "rest" as const,
    variants: cardVariants,
  };

  if (href) {
    const external = href.startsWith("http");
    return (
      <motion.a
        href={href}
        {...motionProps}
        {...(external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {})}
      >
        {children}
      </motion.a>
    );
  }

  return <motion.div {...motionProps}>{children}</motion.div>;
}

function CardDecorations() {
  return (
    <>
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
    </>
  );
}

function SphereBlock({ icon }: { icon: ReactNode }) {
  return (
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
      <span className="relative z-20 flex h-[1.25rem] w-[1.25rem] items-center justify-center md:h-[1.5rem] md:w-[1.5rem] 2xl:h-[2.125rem] 2xl:w-[2.125rem] [&_svg]:h-full [&_svg]:w-full [&_svg]:max-h-full [&_svg]:max-w-full">
        {icon}
      </span>
    </div>
  );
}

function CornerArrow() {
  return (
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
  );
}

const linkTitleClass =
  "relative z-10 text-center text-[0.875rem] font-semibold text-white transition-colors duration-500 ease-out group-hover:text-purple65 md:text-[1rem] 2xl:text-[1.25rem]";

export default function Features() {
  return (
    <div className="relative z-10 mx-[0.25rem] grid max-w-[120rem] grid-cols-4 gap-[0.625rem] border border-grey15 p-[0.625rem] shadow-[0_0_0_0.25rem_rgba(25,25,25,1)] max-md:mx-1 max-md:grid-cols-2 max-md:mt-[2.5rem] max-md:rounded-[0.75rem] md:gap-[1.25rem] md:shadow-[0_0_0_0.625rem_rgba(25,25,25,1)] 2xl:p-[1.25rem] mx-auto">
      {FEATURES.map(({ id, icon, title, link, links }) => (
        <CardShell key={id} href={link}>
          <CardDecorations />
          <SphereBlock icon={icon} />

          {title && <span className={linkTitleClass}>{title}</span>}

          {links && (
            <div className="relative z-10 flex flex-wrap justify-center gap-[10px] xl:gap-[20px] 2xl:gap-[30px]">
              {links.map(({ link: itemHref, title: itemTitle }) => (
                <a
                  key={`${id}-${itemTitle}`}
                  href={itemHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.875rem] font-medium text-white underline-offset-2 transition-colors duration-300 hover:text-purple65 hover:underline md:text-[1rem]"
                >
                  {itemTitle}
                </a>
              ))}
            </div>
          )}

          <CornerArrow />
        </CardShell>
      ))}
    </div>
  );
}
