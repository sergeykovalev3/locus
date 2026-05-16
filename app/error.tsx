"use client";

import Image from "next/image";
import { useEffect } from "react";

import { ButtonDark } from "@/components/btns/BtnDark";
import { ButtonPurple } from "@/components/btns/ButtonPurple";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-[min(100dvh,920px)] flex-col border-y border-grey15">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/images/home/start/abstractDesign.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-grey08/90 via-grey08/70 to-grey08"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 flex flex-1 flex-col items-center justify-center py-[60px] xl:py-[80px] 2xl:py-[100px]">
        <div className="w-full max-w-[720px] text-center">
          <p className="mb-[10px] text-[14px] font-medium uppercase tracking-[0.2em] text-purple60">
            Something went wrong
          </p>

          <div
            className="mb-[24px] flex items-center justify-center text-[clamp(4rem,16vw,8rem)] font-bold leading-none tracking-tight"
            aria-hidden
          >
            <span className="rounded-[12px] border border-purple60/50 bg-purple60/10 px-[0.35em] py-[0.08em] text-purple60">
              !
            </span>
          </div>

          <div className="mx-auto mb-[40px] rounded-[12px] border border-grey15 bg-grey10/80 p-[24px] backdrop-blur-sm md:p-[40px] xl:p-[48px]">
            <h1 className="mb-[12px] text-[26px] font-semibold leading-tight text-white md:text-[32px] xl:text-[38px] 2xl:text-[42px]">
              We couldn&apos;t load this page
            </h1>
            <p className="mx-auto max-w-[520px] text-[15px] font-medium leading-relaxed text-grey60 md:text-[16px] 2xl:text-[18px]">
              A temporary glitch or network issue may be to blame. Try again, or
              return home and keep exploring.
            </p>
            {process.env.NODE_ENV === "development" && error.message && (
              <p className="mt-[20px] rounded-[8px] border border-grey15 bg-grey08 p-[12px] text-left font-mono text-[12px] text-grey60 break-all">
                {error.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-stretch justify-center gap-[14px] xs:flex-row xs:flex-wrap xs:items-center xs:justify-center">
            <ButtonPurple className="min-w-[180px] xs:w-auto" onClick={reset}>
              Try again
            </ButtonPurple>
            <ButtonDark className="min-w-[180px] xs:w-auto" href="/">
              Back to home
            </ButtonDark>
          </div>
        </div>
      </div>
    </div>
  );
}
