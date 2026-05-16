"use client";

import { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { ButtonGrey } from "../btns/ButtonGrey";

const VIEWPORT = { once: true, amount: 0.32 as const };
const EASE = [0.22, 1, 0.36, 1] as const;

type Info = {
  title: string;
  subtitle: string;
  linkTitle?: string;
  link?: string;
};

type Props = {
  className?: string;
  headerInfo: Info;
};

export default function SectionHeader({ className, headerInfo }: Props) {
  const { title, subtitle, linkTitle, link } = headerInfo;
  const prefersReducedMotion = useReducedMotion();
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    setReduce(prefersReducedMotion === true);
  }, [prefersReducedMotion]);

  const dur = reduce ? 0.2 : 0.52;
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleInView = useInView(titleRef, {
    amount: 0.2,
    once: false,
    margin: "0px 0px -12% 0px",
  });

  const root = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.09,
        delayChildren: reduce ? 0 : 0.03,
      },
    },
  };

  const textColumn = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.11,
      },
    },
  };

  const line = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: EASE },
    },
  };

  const decor = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: -6 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.45, ease: EASE },
    },
  };

  return (
    <motion.div
      className={clsx(
        "relative flex w-full items-end gap-1 z-20",
        link && linkTitle ? "justify-between" : "justify-start",
        className,
      )}
      variants={root}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <motion.div
        className="absolute top-[-40px] left-[-10px]"
        variants={decor}
      >
        <Image
          src="/images/global/sectionHeaderAbstract.png"
          alt="Section header abstract image"
          width={69}
          height={30}
        />
      </motion.div>
      <motion.div
        className="flex max-w-[1200px] flex-col gap-[6px] md:gap-[10px] xl:gap-[14px]"
        variants={textColumn}
      >
        <motion.h2
          ref={titleRef}
          variants={line}
          className="w-full max-w-full text-[28px] font-semibold text-white md:text-[38px] xl:text-[48px]"
        >
          {reduce ? (
            title
          ) : (
            <span
              className={clsx(
                "section-header-title-fill",
                titleInView && "section-header-title-fill--shimmer",
              )}
            >
              {title}
            </span>
          )}
        </motion.h2>
        <motion.h3
          className="text-[14px] font-medium text-grey60 md:text-[16px] xl:text-[18px]"
          variants={line}
        >
          {subtitle}
        </motion.h3>
      </motion.div>
      {link && linkTitle && (
        <motion.div className="hidden md:block" variants={line}>
          <ButtonGrey className="text-nowrap" href={link}>
            {linkTitle}
          </ButtonGrey>
        </motion.div>
      )}
    </motion.div>
  );
}
