import clsx from 'clsx';

import SectionHeader from '@/components/layout/SectionHeader';

const headerInfo = {
  title: 'Navigating the Locus Experience',
  subtitle: `At Locus, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.`,
};

const items = [
  {
    step: 'Step 01',
    title: 'Discover a World of Possibilities',
    description:
      'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.',
  },
  {
    step: 'Step 02',
    title: 'Narrowing Down Your Choices',
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    step: 'Step 03',
    title: 'Personalized Guidance',
    description:
      'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.',
  },
  {
    step: 'Step 04',
    title: 'See It for Yourself',
    description:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    step: 'Step 05',
    title: 'Making Informed Decisions',
    description:
      'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.',
  },
  {
    step: 'Step 06',
    title: 'Getting the Best Deal',
    description:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

export default function Steps() {
  return (
    <section id="steps" className="py-[40px] xl:py-[60px] 2xl:py-[75px]">
      <div className="container">
        <div className="flex flex-col gap-[40px] xl:gap-[60px] 2xl:gap-[80px]">
          <div>
            <SectionHeader headerInfo={headerInfo} />
          </div>
          <div>
            <div className="grid xs:grid-cols-2 xs:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-x-[20px] 2xl:gap-x-[30px] gap-y-[30px] xl:gap-y-[40px] 2xl:gap-y-[50px]">
              {items.map(({ step, title, description }) => (
                <div key={step} className="group flex flex-col">
                  <div
                    className={clsx(
                      'border-l border-purple60 px-[16px] py-[14px] transition-[border-color] duration-300 ease-out 2xl:px-[20px] 2xl:py-[16px]',
                      'group-hover:border-purple65',
                    )}
                  >
                    <span className="text-[16px] font-medium transition-colors duration-300 ease-out 2xl:text-[20px] group-hover:text-purple65">
                      {step}
                    </span>
                  </div>
                  <div
                    className={clsx(
                      'about-step-item relative flex flex-1 flex-col overflow-hidden rounded-[10px] rounded-tl-none p-[30px] xl:gap-[16px] xl:p-[40px] 2xl:gap-[20px] 2xl:p-[50px]',
                      'gap-[14px] transition-[box-shadow] duration-300 ease-out',
                      'group-hover:shadow-[0_12px_48px_-14px_color-mix(in_oklab,var(--color-purple60)_38%,transparent),0_0_0_1px_color-mix(in_oklab,var(--color-purple60)_35%,transparent)]',
                    )}
                  >
                    <div className="relative z-[1] flex flex-col gap-[14px] xl:gap-[16px] 2xl:gap-[20px]">
                      <h4 className="text-[20px] font-semibold transition-colors duration-300 ease-out 2xl:text-[26px] group-hover:text-purple65">
                        {title}
                      </h4>
                      <p className="text-[14px] font-medium text-grey60 transition-colors duration-300 ease-out xl:text-[16px] 2xl:text-[18px] group-hover:text-grey40">
                        {description}
                      </p>
                    </div>
                    <div
                      className={clsx(
                        'pointer-events-none absolute -left-[30%] -top-[30%] h-full w-full origin-top-left',
                        'bg-[linear-gradient(130deg,rgba(112,59,247,1)_0%,rgba(112,59,247,0)_40%)]',
                        'transition-transform duration-300 ease-out will-change-transform',
                        'group-hover:scale-[1.14]',
                      )}
                      aria-hidden
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
