"use client";

import { useCallback, useEffect, useId, useRef, useState, startTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import { NavLink } from "../navigation/NavLink";
import { ButtonDark } from "../btns/BtnDark";

const MOBILE_NAV_LINK_CLASS =
  "flex w-full justify-between rounded-none border-0 border-b border-grey15 bg-transparent py-[20px] px-0 text-[18px] xl:text-[20px] hover:border-b-grey15 hover:bg-transparent";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-[18px] w-[22px]" aria-hidden>
      <span
        className={clsx(
          "absolute left-0 top-0 h-[2px] w-full origin-center rounded-full bg-white transition-transform duration-300 ease-out",
          open && "top-[8px] translate-y-0 rotate-45",
        )}
      />
      <span
        className={clsx(
          "absolute left-0 top-[8px] h-[2px] w-full rounded-full bg-white transition-opacity duration-200",
          open && "opacity-0",
        )}
      />
      <span
        className={clsx(
          "absolute left-0 top-[16px] h-[2px] w-[11px] rounded-full bg-white transition-all duration-300 ease-out",
          open && "top-[8px] w-full -rotate-45",
        )}
      />
    </span>
  );
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuOpenRef = useRef(menuOpen);

  const scrollLockActiveRef = useRef(false);
  const scrollLockRestoreRef = useRef<(() => void) | null>(null);

  const applyScrollLock = useCallback(() => {
    if (scrollLockActiveRef.current) return;

    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    const previousOverflow = html.style.overflow;
    const previousPaddingRight = html.style.paddingRight;

    html.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      html.style.paddingRight = `${scrollbarWidth}px`;
    }

    scrollLockActiveRef.current = true;
    scrollLockRestoreRef.current = () => {
      html.style.overflow = previousOverflow;
      html.style.paddingRight = previousPaddingRight;
      scrollLockRestoreRef.current = null;
      scrollLockActiveRef.current = false;
    };
  }, []);

  const releaseScrollLock = useCallback(() => {
    scrollLockRestoreRef.current?.();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      applyScrollLock();
    }
  }, [menuOpen, applyScrollLock]);

  useEffect(() => {
    return () => releaseScrollLock();
  }, [releaseScrollLock]);

  const handleMenuExitComplete = useCallback(() => {
    if (!menuOpenRef.current) {
      releaseScrollLock();
    }
  }, [releaseScrollLock]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) closeBtnRef.current?.focus();
  }, [menuOpen]);

  return (
    <header className="relative z-[100] bg-grey10 border-y border-grey15">
      <div className="container">
        <div className="py-1.25 xl:py-[14px] 2xl:py-1.25 flex justify-between items-center">
          <Link
            className="flex items-center gap-[6px] md:gap-[8px] xl:gap-[10px] text-[24px] font-semibold"
            href="/"
          >
            <Image
              src="/images/global/logo.png"
              alt="Logo"
              className="w-[28px] h-[28px] xl:w-[34px] xl:h-[34px]"
              width={48}
              height={48}
              priority
            />
            <span>Locus</span>
          </Link>
          <nav
            className="flex items-center gap-[4px] xl:gap-[6px] max-md:hidden"
            aria-label="Main"
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/properties">Properties</NavLink>
            <NavLink href="/services">Services</NavLink>
          </nav>
          <ButtonDark className="max-md:hidden" href="/contact">
            Contact us
          </ButtonDark>
          <button
            type="button"
            className="flex h-[44px] w-[44px] flex-none cursor-pointer items-center justify-center rounded-[10px] border border-grey15 bg-grey08 transition-colors hover:bg-grey15 md:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <AnimatePresence onExitComplete={handleMenuExitComplete}>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            id={menuId}
            className="fixed inset-0 z-[200] flex flex-col bg-grey08 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              aria-hidden
            >
              <Image
                src="/images/home/start/abstractDesign.png"
                alt=""
                fill
                className="object-cover opacity-[0.12]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-grey08 via-grey08/95 to-grey08" />
            </div>

            <motion.div
              className="relative flex min-h-0 flex-1 flex-col"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
            >
              <div className="flex shrink-0 items-center justify-between border-b border-grey15 bg-grey10/90 px-4 py-3 backdrop-blur-md supports-[backdrop-filter]:bg-grey10/75">
                <Link
                  href="/"
                  className="flex items-center gap-[8px] text-[20px] font-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  <Image
                    src="/images/global/logo.png"
                    alt=""
                    className="h-[28px] w-[28px]"
                    width={48}
                    height={48}
                  />
                  Locus
                </Link>
                <button
                  ref={closeBtnRef}
                  type="button"
                  className="flex h-[44px] w-[44px] items-center justify-center rounded-[10px] border border-grey15 bg-grey08 text-[14px] font-medium transition-colors hover:bg-grey15"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="relative block h-[18px] w-[18px]" aria-hidden>
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-white" />
                    <span className="absolute left-1/2 top-1/2 h-[2px] w-[18px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-white" />
                  </span>
                </button>
              </div>

              <nav
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pt-2 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
                aria-label="Mobile"
              >
                <div className="mx-auto flex max-w-md flex-col pt-4">
                  <NavLink href="/" className={MOBILE_NAV_LINK_CLASS} onClick={closeMenu}>
                    Home
                  </NavLink>
                  <NavLink href="/about" className={MOBILE_NAV_LINK_CLASS} onClick={closeMenu}>
                    About Us
                  </NavLink>
                  <NavLink href="/properties" className={MOBILE_NAV_LINK_CLASS} onClick={closeMenu}>
                    Properties
                  </NavLink>
                  <NavLink href="/services" className={MOBILE_NAV_LINK_CLASS} onClick={closeMenu}>
                    Services
                  </NavLink>
                </div>
              </nav>

              <div className="shrink-0 border-t border-grey15 bg-grey10/90 px-4 py-4 backdrop-blur-md supports-[backdrop-filter]:bg-grey10/75">
                <ButtonDark
                  className="w-full justify-center py-[14px] text-[16px]"
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact us
                </ButtonDark>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
