'use client';

import {
  useRef,
  useCallback,
  type InputEventHandler,
  type TextareaHTMLAttributes,
} from 'react';
import clsx from 'clsx';

const textareaBaseClass =
  'w-full bg-grey10 border border-grey15 rounded-[6px] 2xl:rounded-[8px] px-[20px] py-[16px] 2xl:py-[24px] text-[14px] 2xl:text-[18px] placeholder:text-grey40 outline-none transition-all duration-200 focus:border-purple60 focus:ring-2 focus:ring-purple60/20 hover:border-grey40 resize-none overflow-y-auto';

type FormTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

export default function FormTextarea({ className, onInput, ...props }: FormTextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 400)}px`;
  }, []);

  const handleInput = useCallback<InputEventHandler<HTMLTextAreaElement>>(
    (e) => {
      adjustHeight();
      onInput?.(e);
    },
    [adjustHeight, onInput],
  );

  return (
    <textarea
      ref={ref}
      className={clsx(
        textareaBaseClass,
        'min-h-[90px] xl:min-h-[122px] 2xl:min-h-[170px] max-h-[400px]',
        className
      )}
      onInput={handleInput}
      {...props}
    />
  );
}
