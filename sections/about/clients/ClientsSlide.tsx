import { ButtonGrey } from "@/components/btns/ButtonGrey";
import { SLIDE_CARD_HOVER_CLIENTS } from "@/lib/slideCardHover";

type SlideProps = {
  from: string;
  name: string;
  link: string;
  domain: string;
  category: string;
  description: string;
};

export default function ClientsSlide({
  from,
  name,
  link,
  domain,
  category,
  description,
}: SlideProps) {
  return (
    <div
      className={`flex h-full flex-col justify-between gap-[30px] rounded-[12px] border border-grey15 p-[24px] shadow-[0_0_0_6px_rgba(25,25,25,1)] xl:p-[40px] xl:shadow-[0_0_0_8px_rgba(25,25,25,1)] 2xl:gap-[40px] 2xl:p-[50px] ${SLIDE_CARD_HOVER_CLIENTS}`}
    >
      <div className="flex justify-between items-center gap-[20px] 2xl:gap-[30px]">
        <div className="flex flex-col gap-[2px] xl:gap-[4px] 2xl:gap-[6px]">
          <span className="text-[14px] text-[16px] text-[18px] font-medium text-grey60">
            {from}
          </span>
          <span className="text-[20px] xl:text-[24px] 2xl:text-[30px] font-semibold">{name}</span>
        </div>
        <ButtonGrey href={link}>Visit Website</ButtonGrey>
      </div>
      <div className="flex items-start justify-between gap-[32px] xl:gap-[40px] 2xl:gap-[60px] relative">
        <div className="flex-1">
          <div className="flex items-center gap-[2px] xl:gap-[4px] 2xl:gap-[6px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 3C0.75 1.75736 1.75736 0.75 3 0.75H5.25C6.49264 0.75 7.5 1.75736 7.5 3V5.25C7.5 6.49264 6.49264 7.5 5.25 7.5H3C1.75736 7.5 0.75 6.49264 0.75 5.25V3Z"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.75 12.75C0.75 11.5074 1.75736 10.5 3 10.5H5.25C6.49264 10.5 7.5 11.5074 7.5 12.75V15C7.5 16.2426 6.49264 17.25 5.25 17.25H3C1.75736 17.25 0.75 16.2426 0.75 15V12.75Z"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 3C10.5 1.75736 11.5074 0.75 12.75 0.75H15C16.2426 0.75 17.25 1.75736 17.25 3V5.25C17.25 6.49264 16.2426 7.5 15 7.5H12.75C11.5074 7.5 10.5 6.49264 10.5 5.25V3Z"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 12.75C10.5 11.5074 11.5074 10.5 12.75 10.5H15C16.2426 10.5 17.25 11.5074 17.25 12.75V15C17.25 16.2426 16.2426 17.25 15 17.25H12.75C11.5074 17.25 10.5 16.2426 10.5 15V12.75Z"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[12px] xl:text-[14px] 2xl:text-[18px] text-grey60 font-medium">
              Domain
            </span>
          </div>
          <span className="text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium">{domain}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-[2px] xl:gap-[4px] 2xl:gap-[6px]">
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 12L11.25 0.75L9 9H17.25L6.75 20.25L9 12H0.75Z"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[12px] xl:text-[14px] 2xl:text-[18px] text-grey60 font-medium">
              Category
            </span>
          </div>
          <span>{category}</span>
        </div>
        <div className="absolute top-0 right-1/2 -translate-x-1/2 w-[1px] h-full bg-grey15"></div>
      </div>
      <div className="flex flex-col gap-[8px] xl:gap-[10px] 2xl:gap-[14px] p-[20px] xl:p-[24px] 2xl:p-[30px] rounded-[12px] border border-grey15">
        <span className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-grey60">
          What They Said 🤗
        </span>
        <p className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium">{description}</p>
      </div>
    </div>
  );
}
