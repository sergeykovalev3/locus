import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

const inputBaseClass =
  'w-full bg-grey10 border border-grey15 rounded-[6px] 2xl:rounded-[8px] px-[20px] py-[16px] 2xl:py-[24px] text-[14px] 2xl:text-[18px] placeholder:text-grey40 outline-none transition-all duration-200 focus:border-purple60 focus:ring-2 focus:ring-purple60/20 hover:border-grey40';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export default function FormInput({ className, ...props }: FormInputProps) {
  return <input className={clsx(inputBaseClass, className)} {...props} />;
}
