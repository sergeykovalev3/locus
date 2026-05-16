'use client';

import { useState } from 'react';
import clsx from 'clsx';

const fieldBaseClass =
  'w-full flex items-center gap-[12px] xl:gap-[16px] bg-grey10 border border-grey15 rounded-[6px] 2xl:rounded-[8px] px-[20px] py-[16px] 2xl:py-[24px] text-[14px] 2xl:text-[18px] outline-none transition-all duration-200 focus-within:border-purple60 focus-within:ring-2 focus-within:ring-purple60/20 hover:border-grey40';

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2.5C0 1.11929 1.11929 0 2.5 0H3.64302C4.36 0 4.98498 0.487964 5.15887 1.18354L6.08037 4.86952C6.23284 5.47942 6.00495 6.12129 5.50202 6.49849L4.424 7.307C4.31206 7.39096 4.28772 7.5139 4.31917 7.59974C5.26542 10.1829 7.3171 12.2346 9.90026 13.1808C9.9861 13.2123 10.109 13.1879 10.193 13.076L11.0015 11.998C11.3787 11.4951 12.0206 11.2672 12.6305 11.4196L16.3165 12.3411C17.012 12.515 17.5 13.14 17.5 13.857V15C17.5 16.3807 16.3807 17.5 15 17.5H13.125C5.87626 17.5 0 11.6237 0 4.375V2.5Z"
      fill="white"
    />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 4.09925V11.25C0 12.6307 1.11929 13.75 2.5 13.75H15C16.3807 13.75 17.5 12.6307 17.5 11.25V4.09925L10.0602 8.67756C9.25673 9.17203 8.24327 9.17203 7.43976 8.67756L0 4.09925Z"
      fill="white"
    />
    <path
      d="M17.5 2.63152V2.5C17.5 1.11929 16.3807 0 15 0H2.5C1.11929 0 0 1.11929 0 2.5V2.63152L8.09488 7.61299C8.49664 7.86022 9.00336 7.86022 9.40512 7.61299L17.5 2.63152Z"
      fill="white"
    />
  </svg>
);

export default function FormContactMethod() {
  const [preferred, setPreferred] = useState<'phone' | 'email'>('phone');

  return (
    <div className="flex flex-col gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
      <span className="text-[16px] 2xl:text-[20px] font-semibold">Preferred Contact Method</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] xl:gap-[20px] 2xl:gap-[24px]">
        <label
          className={clsx(
            fieldBaseClass,
            'cursor-pointer',
            preferred === 'phone' && 'border-purple60 ring-2 ring-purple60/20'
          )}
          onClick={() => setPreferred('phone')}
        >
          <PhoneIcon />
          <input
            type="tel"
            name="contactPhone"
            placeholder="Enter Your Number"
            className="flex-1 min-w-0 bg-transparent placeholder:text-grey40 text-white outline-none"
          />
          <span
            className={clsx(
              'shrink-0 grow-0 w-[10px] h-[10px] 2xl:w-[16px] 2xl:h-[16px] rounded-full border-1 border-purple60 flex items-center justify-center transition-colors',
              preferred === 'phone' && 'bg-purple60'
            )}
            aria-hidden
          ></span>
        </label>
        <label
          className={clsx(
            fieldBaseClass,
            'cursor-pointer',
            preferred === 'email' && 'border-purple60 ring-2 ring-purple60/20'
          )}
          onClick={() => setPreferred('email')}
        >
          <MailIcon />
          <input
            type="email"
            name="contactEmail"
            placeholder="Enter Your Email"
            className="flex-1 min-w-0 bg-transparent placeholder:text-grey40 text-white outline-none"
          />
          <span
            className={clsx(
              'shrink-0 grow-0 w-[10px] h-[10px] 2xl:w-[16px] 2xl:h-[16px] rounded-full border-1 border-purple60 flex items-center justify-center transition-colors',
              preferred === 'email' && 'bg-purple60'
            )}
            aria-hidden
          ></span>
        </label>
      </div>
      <input type="hidden" name="preferredContactMethod" value={preferred} />
    </div>
  );
}
