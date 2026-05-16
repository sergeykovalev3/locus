'use client';

import clsx from 'clsx';
import { useRef, useState, useEffect } from 'react';

type FilterOption = {
  value: string;
  label: string;
};

export type FilterItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
  options: FilterOption[];
  className?: string;
};

export type FilterItemProps = FilterItem & {
  value?: string | null;
  onChange?: (value: string | null) => void;
};

export default function FilterItem({
  id: _id,
  title,
  icon,
  options,
  className,
  value: controlledValue,
  onChange,
}: FilterItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<FilterOption | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledValue !== undefined;
  const selectedOption = isControlled
    ? (options.find((o) => o.value === controlledValue) ?? null)
    : internalSelected;
  const setSelected = (opt: FilterOption | null) => {
    if (!isControlled) setInternalSelected(opt);
    onChange?.(opt?.value ?? null);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const displayLabel = selectedOption ? selectedOption.label : title;

  return (
    <div
      ref={containerRef}
      className={clsx(
        'w-full flex items-center gap-[10px] 2xl:gap-[20px] bg-grey08 border border-grey15 rounded-[8px] 2xl:rounded-[12px]',
        className
      )}
    >
      <div className="w-full relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center cursor-pointer gap-[20px] 2xl:gap-[50px] px-[14px] py-[12px] 2xl:p-[20px] text-left overflow-hidden"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={title}
        >
          <div className="min-w-0 flex-1 flex gap-[8px] 2xl:gap-[10px] items-center">
            <span className="shrink-0 w-[20px] h-[20px] 2xl:w-[24px] 2xl:h-[24px]">{icon}</span>
            <span className="shrink-0 w-px min-h-[20px] bg-grey15" aria-hidden />
            <span
              className={clsx(
                'min-w-0 truncate text-[14px] 2xl:text-[18px] font-medium',
                selectedOption ? 'text-white' : 'text-grey60'
              )}
            >
              {displayLabel}
            </span>
          </div>
          <span
            className={clsx(
              'flex-none w-[28px] h-[28px] 2xl:w-[32px] 2xl:h-[32px] flex items-center justify-center rounded-full bg-grey10 p-[4px] transition-transform',
              isOpen && 'rotate-180'
            )}
          >
            <svg
              width="17"
              height="9"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M15.75 0.75L8.25 8.25L0.75 0.75"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div
            className="filter-item-dropdown absolute top-full left-0 right-0 z-10 mt-[4px] bg-grey08 border border-grey15 rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.4)] max-h-[180px] overflow-y-auto"
            role="listbox"
            aria-label={title}
          >
            {options.map((option) => (
              <button
                type="button"
                key={option.value}
                role="option"
                aria-selected={selectedOption?.value === option.value}
                onClick={() => {
                  const isAlreadySelected = selectedOption?.value === option.value;
                  setSelected(isAlreadySelected ? null : option);
                  setIsOpen(false);
                }}
                className={clsx(
                  'w-full px-[16px] py-[10px] 2xl:py-[12px] text-left text-[14px] 2xl:text-[16px] transition-colors',
                  'hover:bg-grey10 focus:bg-grey10 focus:outline-none cursor-pointer ',
                  selectedOption?.value === option.value && 'bg-grey10 text-white'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
