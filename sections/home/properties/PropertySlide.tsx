"use client";

import Image from "next/image";
import Link from "next/link";
import { useId } from 'react';

import { ButtonPurple } from "@/components/btns/ButtonPurple";
import { IMAGE_HOVER_GLOW, SLIDE_CARD_HOVER } from "@/lib/slideCardHover";

type SlideProps = {
  image: string;
  title: string;
  description: string;
  price: string;
  link: string;
  stats?: {
    type: string;
    bedroom: number;
    bathroom: number;
  };
};

const statPillClass =
  "group/stat flex items-center gap-[4px] rounded-full border border-grey15 bg-grey10 px-[14px] py-[8px] text-white transition-colors duration-300 ease-out hover:border-purple60/45 hover:bg-purple60/8 hover:text-purple65";

function clipSuffix(raw: string) {
  return raw.replace(/[^a-zA-Z0-9_-]/g, "_");
}

function StatBedroomIcon({ className }: { className?: string }) {
  const uid = clipSuffix(useId());
  const clipId = `bed-${uid}`;
  return (
    <svg
      className={className}
      width={22}
      height={17}
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M11.0119 15.4597C8.01369 15.4597 5.01627 15.4597 2.01806 15.4597C1.71493 15.4597 1.57479 15.5984 1.57479 15.8977C1.57479 15.9752 1.57872 16.0527 1.574 16.1295C1.5677 16.2225 1.55825 16.3155 1.54093 16.4062C1.47637 16.7372 1.15907 17.0023 0.779568 16.9984C0.398493 16.9946 0.0827672 16.7116 0.025291 16.3481C0.0119061 16.2628 0.00482004 16.1752 0.00482004 16.0891C0.00403269 14.3279 -0.00777748 12.5659 0.00875676 10.8046C0.0182049 9.77829 0.397705 8.88527 1.12521 8.14186C1.56691 7.69069 2.09207 7.36976 2.69282 7.16511C3.16522 7.00465 3.65338 6.95581 4.15098 6.95581C8.76246 6.95736 13.3739 6.95348 17.9854 6.95891C19.3365 6.96046 20.4309 7.4969 21.2419 8.56356C21.6403 9.08837 21.8781 9.68449 21.9592 10.3357C21.9867 10.555 21.9985 10.7783 21.9993 11C22.0025 12.7101 22.0017 14.4202 22.0009 16.1302C22.0009 16.3977 21.934 16.6411 21.7104 16.8178C21.4741 17.0046 21.2104 17.0535 20.9293 16.9395C20.66 16.8295 20.49 16.6271 20.4514 16.338C20.4317 16.1922 20.4341 16.0426 20.4301 15.8953C20.4238 15.6574 20.3238 15.5139 20.1239 15.4698C20.0798 15.4597 20.0333 15.4605 19.9876 15.4605C16.9965 15.4605 14.0054 15.4605 11.0135 15.4605L11.0119 15.4597Z"
          fill="currentColor"
        />
        <path
          d="M10.9025 0C12.8472 0 14.7912 0 16.7351 0C17.3862 0 17.9949 0.143411 18.52 0.539535C19.1956 1.04884 19.59 1.71938 19.6231 2.56124C19.6514 3.27519 19.6388 3.9907 19.642 4.70543C19.6444 5.16589 19.642 5.62636 19.642 6.08682C19.642 6.12791 19.6396 6.17132 19.6286 6.21085C19.5948 6.33566 19.5263 6.38527 19.3971 6.36124C19.2562 6.33488 19.12 6.27829 18.979 6.26279C18.6476 6.22713 18.3153 6.20233 17.9823 6.18527C17.7602 6.17364 17.6917 6.13411 17.6602 5.91938C17.5595 5.23876 16.9194 4.62636 16.1005 4.63566C15.1872 4.64574 14.2739 4.63798 13.3613 4.63798C12.6819 4.63798 12.1016 5.03643 11.8709 5.66434C11.8378 5.75426 11.8252 5.85194 11.8079 5.94651C11.7756 6.11628 11.7119 6.17984 11.5402 6.18217C11.1804 6.18605 10.8198 6.18605 10.46 6.18217C10.2946 6.18062 10.2293 6.11628 10.1994 5.92791C10.1576 5.66357 10.0537 5.42791 9.88364 5.22093C9.57579 4.84574 9.17739 4.64186 8.68609 4.63953C7.74363 4.63488 6.80118 4.63721 5.85794 4.63876C5.06587 4.63953 4.44623 5.24884 4.34545 5.91783C4.31317 6.13411 4.24782 6.17209 4.02579 6.18605C3.6581 6.21008 3.29041 6.24419 2.92351 6.28295C2.81092 6.29457 2.70305 6.34264 2.59125 6.36124C2.47078 6.38062 2.41488 6.34031 2.38103 6.22403C2.36764 6.17829 2.36134 6.12946 2.36134 6.0814C2.36055 4.97674 2.3456 3.87209 2.36449 2.76744C2.38418 1.61163 2.92666 0.762016 3.988 0.248062C4.40844 0.0457364 4.86431 0 5.3257 0C7.18462 0 9.04354 0 10.9025 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="22" height="17" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function StatBathroomIcon({ className }: { className?: string }) {
  const uid = clipSuffix(useId());
  const clipId = `bath-${uid}`;
  return (
    <svg
      className={className}
      width={22}
      height={21}
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M1.26946 13.7616H11.11V15.5697H17.2615V13.7655H19.7054C19.8637 15.9158 19.8761 17.8304 17.6707 19.2897C17.6437 19.3075 17.6221 19.3318 17.5623 19.385C17.8335 19.6103 18.1009 19.8329 18.3655 20.0529C18.0082 20.3945 17.7212 20.669 17.3922 20.9842C17.1019 20.6848 16.7879 20.3373 16.4458 20.0207C16.3453 19.9275 16.1673 19.8894 16.0215 19.8802C15.7831 19.8657 15.5414 19.9045 15.301 19.9052C12.1057 19.9071 8.91048 19.9065 5.71457 19.9065C5.56154 19.9065 5.398 19.936 5.25679 19.8933C4.83054 19.7653 4.55994 19.9629 4.30642 20.2684C4.09034 20.5284 3.84405 20.7629 3.61877 21.0007C3.31468 20.6808 3.03949 20.3918 2.73474 20.0707C2.939 19.89 3.19843 19.6602 3.49004 19.4014C3.28906 19.2576 3.13866 19.1577 2.99614 19.0474C1.92821 18.2244 1.3509 17.1329 1.27537 15.7924C1.23793 15.1284 1.2688 14.4604 1.2688 13.7616H1.26946Z"
          fill="currentColor"
        />
        <path
          d="M1.27554 8.78709C1.27029 8.66821 1.26109 8.56116 1.26109 8.4541C1.26044 6.71363 1.25847 4.97381 1.26109 3.23333C1.26372 1.32078 2.59108 -0.0138086 4.50101 -1.61554e-05C5.14203 0.00458133 5.80275 -0.00855435 6.41882 0.136595C7.5117 0.394711 8.20001 1.15264 8.53235 2.22057C8.59671 2.42811 8.68012 2.5286 8.90803 2.59034C10.194 2.93909 11.0964 4.141 11.1128 5.48216C11.1155 5.69824 11.1128 5.91432 11.1128 6.14879H5.02578C4.73548 4.61389 5.56959 3.02973 7.31335 2.53517C7.15573 1.85014 6.48121 1.27217 5.7732 1.24722C5.23792 1.22817 4.70067 1.2262 4.16539 1.24722C3.24261 1.28334 2.50044 2.13059 2.4965 3.14663C2.48994 4.89762 2.49453 6.64926 2.49453 8.40025C2.49453 8.51978 2.49453 8.63932 2.49453 8.78644H1.27423L1.27554 8.78709Z"
          fill="currentColor"
        />
        <path
          d="M11.0931 12.5327C10.9644 12.5327 10.8678 12.5327 10.7713 12.5327C7.64366 12.5327 4.5154 12.5334 1.38779 12.5321C0.714591 12.5321 0.230541 12.2135 0.0604342 11.6697C-0.195711 10.8514 0.384229 10.0632 1.26826 10.0514C2.20877 10.0389 3.14929 10.0481 4.0898 10.0481C6.29922 10.0481 8.50799 10.0481 10.7174 10.0481C10.8356 10.0481 10.9538 10.0481 11.0931 10.0481V12.5321V12.5327Z"
          fill="currentColor"
        />
        <path
          d="M16.0237 14.3711H12.3634C12.3575 14.2555 12.3477 14.1504 12.3477 14.0453C12.3464 12.7771 12.3464 11.5082 12.3477 10.2399C12.3483 9.32242 12.8494 8.81801 13.763 8.81407C14.1019 8.81275 14.4408 8.80553 14.7797 8.81604C15.5409 8.84034 16.0381 9.35197 16.0401 10.1152C16.044 11.4386 16.0414 12.7613 16.0401 14.0848C16.0401 14.1708 16.0309 14.2562 16.0237 14.3711Z"
          fill="currentColor"
        />
        <path
          d="M17.2832 12.5209V10.0482C17.8782 10.0482 18.4648 10.0462 19.0506 10.0488C19.356 10.0501 19.668 10.0252 19.9668 10.0744C20.619 10.1821 21.0433 10.7161 21.0164 11.3394C20.9901 11.9509 20.5389 12.4756 19.8985 12.5091C19.0394 12.5544 18.1764 12.5203 17.2839 12.5203L17.2832 12.5209Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="21.0171" height="21" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function StatVillaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={17}
      height={20}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.2 17.4V1.8H0.9C0.402944 1.8 0 1.39706 0 0.9C0 0.402944 0.402944 0 0.9 0H15.9C16.3971 0 16.8 0.402944 16.8 0.9C16.8 1.39706 16.3971 1.8 15.9 1.8H15.6V17.4H15.9C16.3971 17.4 16.8 17.8029 16.8 18.3C16.8 18.7971 16.3971 19.2 15.9 19.2H11.7C11.2029 19.2 10.8 18.7971 10.8 18.3V15.3C10.8 14.8029 10.3971 14.4 9.9 14.4H6.9C6.40294 14.4 6 14.8029 6 15.3V18.3C6 18.7971 5.59706 19.2 5.1 19.2H0.9C0.402944 19.2 0 18.7971 0 18.3C0 17.8029 0.402944 17.4 0.9 17.4H1.2ZM4.8 4.2C4.8 3.86863 5.06863 3.6 5.4 3.6H6.6C6.93137 3.6 7.2 3.86863 7.2 4.2V5.4C7.2 5.73137 6.93137 6 6.6 6H5.4C5.06863 6 4.8 5.73137 4.8 5.4V4.2ZM5.4 8.4C5.06863 8.4 4.8 8.66863 4.8 9V10.2C4.8 10.5314 5.06863 10.8 5.4 10.8H6.6C6.93137 10.8 7.2 10.5314 7.2 10.2V9C7.2 8.66863 6.93137 8.4 6.6 8.4H5.4ZM9.6 4.2C9.6 3.86863 9.86863 3.6 10.2 3.6H11.4C11.7314 3.6 12 3.86863 12 4.2V5.4C12 5.73137 11.7314 6 11.4 6H10.2C9.86863 6 9.6 5.73137 9.6 5.4V4.2ZM10.2 8.4C9.86863 8.4 9.6 8.66863 9.6 9V10.2C9.6 10.5314 9.86863 10.8 10.2 10.8H11.4C11.7314 10.8 12 10.5314 12 10.2V9C12 8.66863 11.7314 8.4 11.4 8.4H10.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

const statIconClass = "h-[20px] w-[20px] shrink-0 2xl:h-[24px] 2xl:w-[24px]";

export function PropertySlide({ image, title, description, price, link, stats }: SlideProps) {
  return (
    <div
      className={`flex h-full flex-col justify-between rounded-[12px] border border-grey15 p-[24px] md:max-w-[512px] xl:p-[30px] 2xl:p-[40px] ${SLIDE_CARD_HOVER}`}
    >
      <Link
        href={link}
        className={`group/img relative block h-[320px] w-full overflow-hidden rounded-[10px] outline-none focus-visible:ring-2 focus-visible:ring-purple60/55 ${IMAGE_HOVER_GLOW}`}
        aria-label={`View property: ${title}`}
      >
        <Image
          src={image}
          fill
          alt=""
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/img:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 512px"
        />
      </Link>

      <div className="mt-[16px] flex flex-col gap-[6px] xl:mt-[20px] 2xl:mt-[30px]">
        <h4 className="text-[18px] font-semibold xl:text-[20px] 2xl:text-[24px]">{title}</h4>
        <div className="relative">
          {description.length > 80 ? (
            <p className="text-[14px] font-medium text-grey60 xl:text-[16px] 2xl:text-[18px]">
              {description.slice(0, 75)}...
              <Link
                href={link}
                className="ml-[0.25rem] text-[14px] font-medium text-white underline decoration-white/40 underline-offset-2 transition-colors duration-300 hover:text-purple65 hover:decoration-purple65/50 xl:text-[16px] 2xl:text-[18px]"
              >
                Read More
              </Link>
            </p>
          ) : (
            <p className="text-[14px] font-medium text-grey60 xl:text-[16px] 2xl:text-[18px]">
              {description}
            </p>
          )}
        </div>
      </div>

      {stats && (
        <div className="mt-[20px] flex flex-wrap gap-[10px] xl:mt-[24px] 2xl:mt-[30px]">
          {stats.bedroom ? (
            <div className={statPillClass}>
              <StatBedroomIcon className={statIconClass} />
              <span className="text-[14px] font-medium text-nowrap 2xl:text-[18px]">
                {stats.bedroom}-Bedroom
              </span>
            </div>
          ) : null}
          {stats.bathroom ? (
            <div className={statPillClass}>
              <StatBathroomIcon className={statIconClass} />
              <span className="text-[14px] font-medium text-nowrap 2xl:text-[18px]">
                {stats.bathroom}-Bathroom
              </span>
            </div>
          ) : null}
          {stats.type ? (
            <div className={statPillClass}>
              <StatVillaIcon className={statIconClass} />
              <span className="text-[14px] font-medium text-nowrap 2xl:text-[18px]">{stats.type}</span>
            </div>
          ) : null}
        </div>
      )}

      <div className="flex items-center justify-between gap-[30px] xl:gap-[40px] 2xl:gap-[50px] mt-[20px] xl:mt-[24px] 2xl:mt-[30px]">
        <div className="flex flex-col 2xl:gap-[2px]">
          <span className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-grey60">
            Price
          </span>
          <span className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">{price}</span>
        </div>
        <ButtonPurple className="w-full max-w-[280px]" href={link}>
          View Property Details
        </ButtonPurple>
      </div>
    </div>
  );
}
