'use client';

import { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';

export type FormSelectOption = {
  value: string;
  label: string;
};

type FormSelectProps = {
  id: string;
  name: string;
  placeholder: string;
  options: FormSelectOption[];
  className?: string;
};

const ChevronDown = () => (
  <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.75 0.75L8.25 8.25L0.75 0.75"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FormSelect({
  id,
  name,
  placeholder,
  options,
  className = '',
}: FormSelectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<FormSelectOption | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (containerRef.current && containerRef.current.contains(target)) return;
      if (target.tagName === 'LABEL' && target.getAttribute('for') === id) return;
      setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, id]);

  const displayLabel = selected ? selected.label : placeholder;

  return (
    <div ref={containerRef} className={clsx('relative w-full', className)}>
      <input type="hidden" name={name} value={selected?.value ?? ''} />
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center gap-[12px] xl:gap-[16px] bg-grey10 border border-grey15 rounded-[6px] 2xl:rounded-[8px] px-[20px] py-[16px] 2xl:py-[24px] text-left text-[14px] 2xl:text-[18px] outline-none transition-all duration-200 focus:border-purple60 focus:ring-2 focus:ring-purple60/20 hover:border-grey40 cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={placeholder}
      >
        <span className={clsx('flex-1 min-w-0 truncate', selected ? 'text-white' : 'text-grey40')}>
          {displayLabel}
        </span>
        <span
          className={clsx(
            'shrink-0 w-[20px] h-[20px] flex items-center justify-center text-grey60 transition-transform',
            isOpen && 'rotate-180'
          )}
        >
          <ChevronDown />
        </span>
      </button>

      {isOpen && (
        <ul
          className="filter-item-dropdown absolute top-full left-0 right-0 z-10 mt-[4px] py-[8px] bg-grey10 border border-grey15 rounded-[6px] 2xl:rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.4)] max-h-[200px] overflow-y-auto"
          role="listbox"
          aria-label={placeholder}
        >
          {options.map((option) => (
            <li key={option.value} role="option" aria-selected={selected?.value === option.value}>
              <button
                type="button"
                className={clsx(
                  'w-full px-[20px] py-[12px] 2xl:py-[14px] text-left text-[14px] 2xl:text-[18px] transition-colors',
                  'hover:bg-grey15 focus:bg-grey15 focus:outline-none cursor-pointer',
                  selected?.value === option.value && 'bg-grey15 text-white'
                )}
                onClick={() => {
                  if (selected?.value === option.value) {
                    setSelected(null);
                  } else {
                    setSelected(option);
                  }
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
