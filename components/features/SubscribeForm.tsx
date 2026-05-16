"use client";

import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";

type FormProps = {
  className?: string;
};

const SubscribeForm = ({ className }: FormProps) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    console.log(trimmed);
    setSuccess(true);
    setEmail("");
  };

  return (
    <div className={clsx("w-full", className)}>
      <form
        onSubmit={handleSubmit}
        className={clsx(
          "flex gap-[10px] px-[20px] py-[14px] 2xl:px-[24px] 2xl:py-[18px]",
          "rounded-[6px] border border-grey15 bg-grey08 2xl:rounded-[8px]",
          "outline-none transition-[border-color,box-shadow] duration-200",
          "hover:border-grey40",
          "focus-within:border-purple60 focus-within:ring-2 focus-within:ring-purple60/20",
          "focus-within:hover:border-purple60",
        )}
      >
        <Image
          src="/images/icons/mail.svg"
          width={20}
          height={18}
          alt=""
          aria-hidden
          className="shrink-0 opacity-80"
        />
        <input
          type="email"
          required
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (success) setSuccess(false);
          }}
          className="w-full min-w-0 bg-transparent text-[14px] text-white outline-none placeholder:text-grey40 2xl:text-[18px]"
        />
        <button
          type="submit"
          className="flex h-[24px] w-[24px] shrink-0 cursor-pointer items-center justify-center rounded-[4px] outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-purple60/40"
          aria-label="Subscribe"
        >
          <Image src="/images/icons/send.svg" width={30} height={30} alt="" aria-hidden />
        </button>
      </form>
      {success ? (
        <p
          className="mt-2 text-[13px] text-purple65 xl:text-[14px]"
          role="status"
          aria-live="polite"
        >
          {"You're subscribed successfully."}
        </p>
      ) : null}
    </div>
  );
};

export default SubscribeForm;
