"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "py-[12px] px-[20px] xl:px-[24px] xl:py-[14px] border border-transparent rounded-[10px] text-[14px] xl:text-[18px] font-medium transition-colors hover:border-grey15 hover:bg-grey08",
        isActive && "border-grey15!  bg-grey08",
        className,
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
