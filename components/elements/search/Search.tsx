'use client';

import clsx from 'clsx';

import { ButtonPurple } from '@/components/btns/ButtonPurple';

interface SearchProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

export default function Search({ className, value = '', onChange, onSubmit }: SearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        'w-full max-w-[1300px] flex items-center gap-[20px] 2xl:gap-[50px] p-[10px] xl:p-[16px] 2xl:p-[20px] pl-[18px] xl:pl-[20px] 2xl:pl-[24px] bg-grey08 border border-grey15 rounded-tl-[12px] rounded-tr-[12px] max-md:rounded-[12px] shadow-[0px_0px_0px_4px_rgba(25,25,25,1)] md:shadow-[0px_0px_0px_10px_rgba(25,25,25,1)] ',
        className
      )}
    >
      <input
        type="text"
        placeholder="Search For A Property"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-transparent  placeholder:text-grey60 outline-none text-[16px] xl:text-[20px] 2xl:text-[24px] text-white"
      />
      <ButtonPurple type="submit" className="flex items-center gap-[10px] text-nowrap">
        <span className="flex justify-center items-center w-[24px] h-[24px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 18.75L13.5533 13.5533M13.5533 13.5533C14.9105 12.1961 15.75 10.3211 15.75 8.25C15.75 4.10786 12.3921 0.75 8.25 0.75C4.10786 0.75 0.75 4.10786 0.75 8.25C0.75 12.3921 4.10786 15.75 8.25 15.75C10.3211 15.75 12.1961 14.9105 13.5533 13.5533Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="hidden md:block text-[14px] 2xl:text-[18px] font-medium text-white ">
          Find Property
        </span>
      </ButtonPurple>
    </form>
  );
}
