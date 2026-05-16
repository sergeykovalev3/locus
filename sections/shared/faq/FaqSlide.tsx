import { ButtonGrey } from "@/components/btns/ButtonGrey";
import { SLIDE_CARD_HOVER } from "@/lib/slideCardHover";

type SlideProps = {
  title: string;
  description: string;
  link: string;
};

export default function FaqSlide({ title, description, link }: SlideProps) {
  return (
    <div
      className={`flex h-full flex-col justify-between gap-[20px] rounded-[12px] border border-grey15 p-[30px] xl:gap-[24px] xl:p-[40px] 2xl:gap-[30px] 2xl:p-[50px] ${SLIDE_CARD_HOVER}`}
    >
      <div>
        <h4 className="text-[18px] text-[20px] text-[24px] font-semibold">
          {title}
        </h4>
      </div>
      <div>
        <span className="text-[14px] text-[16px] text-[18px] font-medium text-grey60">
          {description}
        </span>
      </div>
      <div>
        <ButtonGrey
          href={link}
          className="transition-colors duration-300 hover:border-purple60/45 hover:text-purple65"
        >
          Read more
        </ButtonGrey>
      </div>
    </div>
  );
}
