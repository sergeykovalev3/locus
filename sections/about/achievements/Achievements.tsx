import clsx from "clsx";

import SectionHeader from "@/components/layout/SectionHeader";
import {
  ACHIEVEMENT_CARD_DESC_HOVER,
  ACHIEVEMENT_CARD_HOVER_SHELL,
  ACHIEVEMENT_CARD_TITLE_HOVER,
} from "@/lib/slideCardHover";

const headerInfo = {
  title: "Our Achievements",
  subtitle: `Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.`,
};

const items = [
  {
    title: "3+ Years of Excellence",
    description:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
  },
  {
    title: "Happy Clients",
    description:
      "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    title: "Industry Recognition",
    description:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-[40px] xl:py-[60px] 2xl:py-[75px]">
      <div className="container">
        <div className="flex flex-col gap-[40px] xl:gap-[60px] 2xl:gap-[80px]">
          <div>
            <SectionHeader headerInfo={headerInfo} />
          </div>
          <div className="flex max-md:flex-col max-md:items-center max-md:justify-center gap-[20px] xl:gap-[30px] 2xl:gap-[40px]">
            {items.map(({ title, description }) => (
              <div
                key={title}
                className={clsx(
                  "flex max-md:max-w-[420px] flex-1 flex-col gap-[16px] rounded-[10px] border border-grey15 bg-grey08 p-[30px] xl:gap-[24px] xl:p-[40px] 2xl:gap-[30px] 2xl:p-[50px]",
                  ACHIEVEMENT_CARD_HOVER_SHELL,
                )}
              >
                <h4
                  className={`text-[20px] font-semibold xl:text-[24px] 2xl:text-[30px] ${ACHIEVEMENT_CARD_TITLE_HOVER}`}
                >
                  {title}
                </h4>
                <p
                  className={`text-[14px] font-medium text-grey60 xl:text-[16px] 2xl:text-[18px] ${ACHIEVEMENT_CARD_DESC_HOVER}`}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
