import clsx from 'clsx';

type headerInfoProps = {
  name: string;
  adress: string;
  price: string;
};

const addressBadgeBase =
  'flex gap-[8px] 2xl:gap-[10px] p-[8px] 2xl:p-[10px] border border-grey15 rounded-[6px] 2xl:rounded-[8px]';

function AddressBadge({ adress, className }: { adress: string; className?: string }) {
  return (
    <div className={clsx(addressBadgeBase, className)}>
      <span className="flex justify-center items-center w-[20px] h-[20px] 2xl:w-[24px] 2xl:h-[24px] shrink-0">
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.49146 16.7509C6.51663 16.7655 6.53641 16.7767 6.55042 16.7846L6.57369 16.7976C6.75941 16.8995 6.9898 16.8988 7.1757 16.7979L7.19958 16.7846C7.21359 16.7767 7.23337 16.7655 7.25854 16.7509C7.30888 16.7217 7.38081 16.6792 7.47125 16.6235C7.65205 16.5122 7.90729 16.348 8.21218 16.1326C8.82091 15.7026 9.63312 15.0645 10.4471 14.2311C12.0672 12.5724 13.75 10.0801 13.75 6.875C13.75 3.07804 10.672 0 6.875 0C3.07804 0 0 3.07804 0 6.875C0 10.0801 1.68277 12.5724 3.30288 14.2311C4.11688 15.0645 4.92909 15.7026 5.53782 16.1326C5.84271 16.348 6.09795 16.5122 6.27875 16.6235C6.36919 16.6792 6.44112 16.7217 6.49146 16.7509ZM6.875 9.375C8.25571 9.375 9.375 8.25571 9.375 6.875C9.375 5.49429 8.25571 4.375 6.875 4.375C5.49429 4.375 4.375 5.49429 4.375 6.875C4.375 8.25571 5.49429 9.375 6.875 9.375Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="text-[14px] 2xl:text-[18px] font-medium">{adress}</span>
    </div>
  );
}

export default function HeadInfo({ name, adress, price }: headerInfoProps) {
  return (
    <div className="py-[30px] xl:py-[40px] 2xl:py-[50px]">
      <div className="container">
        <div className="flex max-md:flex-col md:items-center md:justify-between gap-[10px] xl:gap-[20px] 2xl:gap-[30px]">
          <div className="flex items-center gap-[20px]">
            <h1 className="text-[20px] xl:text-[24px] 2xl:text-[30px] font-semibold">{name}</h1>
            <AddressBadge adress={adress} className="max-md:hidden" />
          </div>
          <div className="flex items-center gap-[20px]">
            <AddressBadge adress={adress} className="flex md:hidden" />
            <div className="flex md:flex-col max-md:items-center gap-[4px] xl:gap-[2px]">
              <span className="text-[14px] 2xl:text-[18px] font-medium text-grey60">Price</span>
              <span className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">
                {price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
