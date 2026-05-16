"use client";

import Image from "next/image";
import Link from "next/link";

import SubscribeForm from "../features/SubscribeForm";
import { AUTHOR_GITHUB_URL } from "@/lib/site";
import clsx from "clsx";

const footerLinkUnderline =
  "relative inline-block pb-[3px] text-white transition-colors duration-300 ease-out after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:origin-left after:scale-x-0 after:bg-purple60 after:transition-transform after:duration-300 after:ease-out hover:text-purple65 hover:after:scale-x-100";

const footerNavLinkClass = `${footerLinkUnderline} text-[14px] xl:text-[16px] 2xl:text-[18px]`;

const footerLegalLinkClass = `${footerLinkUnderline} text-[14px] xl:text-[18px]`;

const footerIconLinkClass =
  "flex h-[60px] w-[60px] items-center justify-center rounded-full bg-grey08 p-0.75 transition-all duration-300 ease-out hover:scale-105 hover:bg-grey15 hover:ring-2 hover:ring-purple60/25 md:h-[40px] md:w-[40px] xl:h-[52px] xl:w-[52px]";

const footerCols = [
  {
    title: "Home",
    links: [
      { href: "/#hero", label: "Hero Section" },
      { href: "/#features", label: "Features" },
      { href: "/#properties", label: "Properties" },
      { href: "/#reviews", label: "Testimonials" },
      { href: "/#faq", label: "FAQ’s" },
    ],
  },
  {
    title: "About Us",
    links: [
      { href: "/about#story", label: "Our Story" },
      { href: "/about#clients", label: "Our Works" },
      { href: "/about#steps", label: "How It Works" },
      { href: "/about#team", label: "Our Team" },
      { href: "/about#clients", label: "Our Clients" },
    ],
  },
  {
    title: "Properties",
    links: [
      { href: "/properties", label: "Portfolio" },
      { href: "/properties", label: "Categories" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#expertise", label: "Valuation Mastery" },
      { href: "/services#expertise", label: "Strategic Marketing" },
      { href: "/services#investment", label: "Negotiation Wizardry" },
      { href: "/services#investment", label: "Closing Success" },
      { href: "/services#management", label: "Property Management" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { href: "/contact#contact-form", label: "Contact Form" },
      { href: "/contact#offices", label: "Our Offices" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    src: "/images/icons/facebook.svg",
    alt: "Facebook icon",
  },
  {
    href: "https://linkedin.com",
    src: "/images/icons/linkedin.svg",
    alt: "LinkedIn icon",
  },
  {
    href: "https://twitter.com",
    src: "/images/icons/twitter.svg",
    alt: "Twitter icon",
  },
  {
    href: "https://youtube.com",
    src: "/images/icons/youtube.svg",
    alt: "YouTube icon",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-grey08 py-[50px] xl:py-[80px] 2xl:py-[100px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between gap-5 xl:gap-8">
            <div className="flex flex-col items-start gap-[20px] xl:gap-[24px] 2xl:gap-[30px] max-w-[540px]">
              <Link
                className="group flex items-center gap-[6px] text-[24px] font-semibold transition-colors duration-300 md:gap-[8px] xl:gap-[10px] hover:text-purple65"
                href="/"
              >
                <Image
                  src="/images/global/logo.png"
                  alt="Logo"
                  className="h-[28px] w-[28px] transition-transform duration-300 ease-out group-hover:scale-105 xl:h-[34px] xl:w-[34px]"
                  width={48}
                  height={48}
                  priority
                />
                <span className="transition-colors duration-300">Locus</span>
              </Link>
              <SubscribeForm className="w-full max-w-[423px]" />
            </div>
            <nav className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-[15px] md:gap-[30px] lg:gap-[60px] xl:gap-[90px] 2xl:gap-[100px]">
              {footerCols.map((col, index) => (
                <div
                  key={index}
                  className={clsx(
                    `order-${index}`,
                    index === 3 && "md:order-last",
                  )}
                >
                  <h4 className="mb-1 xl:mb-[24] 2xl:mb-[30px] text-grey60 text-[16px] xl:text-[18px] 2xl:text-[1.25rem] font-medium">
                    {col.title}
                  </h4>

                  <ul className="flex flex-col gap-[8px] xl:gap-[16px] 2xl:gap-[20px]">
                    {col.links.map((link) => (
                      <li key={`${link.href}-${link.label}`}>
                        <Link href={link.href} className={footerNavLinkClass}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-grey10">
        <div className="container">
          <div className="flex max-md:flex-col justify-between items-center gap-1 py-1">
            <div className="flex max-md:flex-col justify-center items-center gap-[10px] md:gap-[20px] 2xl:gap-[38px] py-0.5 max-md:order-2">
              <span className="text-[14px] xl:text-[18px] text-white">
                © 2026 Locus. All rights reserved.
              </span>
              <Link
                href={AUTHOR_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={footerLegalLinkClass}
              >
                Terms & Conditions
              </Link>
            </div>
            <div className="flex justify-center items-center gap-0.5 max-md:order-1">
              {socialLinks.map(({ href, src, alt }) => (
                <Link
                  key={href}
                  href={href}
                  className={footerIconLinkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={24}
                    height={24}
                    className="w-1.5 h-1.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
