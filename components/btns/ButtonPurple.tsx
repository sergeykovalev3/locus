"use client";

import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonPurple({
  children,
  href,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = clsx(
    "inline-flex items-center justify-center px-1 xl:px-[1.25rem] 2xl:px-[1.5rem] py-[14px] 2xl:py-1 bg-purple60 text-[14px] xl:text-[16px] 2xl:text-[18px] text-white text-center border border-purple60 rounded-lg cursor-pointer hover:bg-purple65 transition-colors duration-200",
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
