"use client";

import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonGrey({
  children,
  href,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = clsx(
    "inline-flex items-center justify-center px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[18px] bg-grey-08 text-[14px] 2xl:text-[18px] text-white bg-grey10 border border-grey15 rounded-lg cursor-pointer hover:bg-grey15 transition-colors",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
