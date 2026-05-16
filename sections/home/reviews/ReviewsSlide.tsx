import Image from "next/image";

import { SLIDE_CARD_HOVER } from "@/lib/slideCardHover";

type SlideProps = {
  count: number;
  title: string;
  description: string;
  name: string;
  location: string;
  avatar: string;
};

export default function ReviewsSlide({
  count,
  title,
  description,
  name,
  location,
  avatar,
}: SlideProps) {
  return (
    <div
      className={`flex h-full flex-col justify-between gap-[40px] rounded-[12px] border border-grey15 p-[30px] xl:p-[40px] 2xl:p-[50px] ${SLIDE_CARD_HOVER}`}
    >
      <div className="flex flex-col gap-[24px] xl:gap-[30px] 2xl:gap-[40px]">
        <div className="flex gap-[8px] 2xl:gap-[10px]">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="w-[30px] h-[30px] xl:w-[38px] xl:h-[38px] 2xl:w-[44px] 2xl:h-[44px] flex-none flex items-center justify-center rounded-full bg-grey10 border border-grey15 p-[6px] xl:p-[8px] 2xl:p-[10px]"
            >
              <Image src="/images/icons/star.svg" alt="Star icon" width={24} height={24} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[6px] xl:gap-[10px] 2xl:gap-[14px]">
          <h4 className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">{title}</h4>
          <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-[10px] 2xl:gap-[12px]">
        <div className="h-[50px] w-[50px] overflow-hidden rounded-full 2xl:h-[60px] 2xl:w-[60px]">
          <Image src={`/images/home/reviews/${avatar}`} alt="Avatar image" width={60} height={60} />
        </div>
        <div className="flex flex-col 2xl:gap-[2px]">
          <span className="text-[14px] xl:text-[18px] 2xl:text-[20px] font-medium">{name}</span>
          <span className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-grey60">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
}
