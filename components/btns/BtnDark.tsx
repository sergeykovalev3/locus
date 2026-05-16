"use client";

import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonDark({
  children,
  href,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const baseClasses = clsx(
    "inline-flex items-center justify-center px-[20px] py-[14px] xl:py-1 xl:px-1.5 bg-grey-08 text-[14px] xl:text-[18px] text-white bg-grey08 border border-grey15 rounded-lg cursor-pointer hover:bg-grey15 transition-colors",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
