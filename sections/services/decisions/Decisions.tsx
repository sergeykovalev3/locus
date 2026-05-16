import Image from 'next/image';
import React from 'react';

import WaveParallaxPanel from '@/components/visuals/WaveParallaxPanel.client';
import SectionHeader from '@/components/layout/SectionHeader';
import { ButtonDark } from '@/components/btns/BtnDark';
import {
  ACHIEVEMENT_CARD_DESC_HOVER,
  ACHIEVEMENT_CARD_HOVER_SHELL,
  ACHIEVEMENT_CARD_TITLE_HOVER,
} from '@/lib/slideCardHover';

const headerInfo = {
  title: 'Smart Investments, Informed Decisions',
  subtitle: `Building a real estate portfolio requires a strategic approach. Locus's Investment Advisory Service empowers you to make smart investments and informed decisions.`,
};

const decisionsItems = [
  {
    icon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.375 0C14.3395 0 13.5 0.839466 13.5 1.875V17.625C13.5 18.6605 14.3395 19.5 15.375 19.5H16.125C17.1605 19.5 18 18.6605 18 17.625V1.875C18 0.839466 17.1605 0 16.125 0H15.375Z"
          fill="#A685FA"
        />
        <path
          d="M6.75 6.375C6.75 5.33947 7.58947 4.5 8.625 4.5H9.375C10.4105 4.5 11.25 5.33947 11.25 6.375V17.625C11.25 18.6605 10.4105 19.5 9.375 19.5H8.625C7.58947 19.5 6.75 18.6605 6.75 17.625V6.375Z"
          fill="#A685FA"
        />
        <path
          d="M0 10.875C0 9.83947 0.839466 9 1.875 9H2.625C3.66053 9 4.5 9.83947 4.5 10.875V17.625C4.5 18.6605 3.66053 19.5 2.625 19.5H1.875C0.839466 19.5 0 18.6605 0 17.625V10.875Z"
          fill="#A685FA"
        />
      </svg>
    ),
    title: 'Market Insight',
    description:
      'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
  },
  {
    icon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.96335 0.301656C9.84158 0.13836 9.65862 0.0316192 9.45654 0.00597177C9.25446 -0.0196757 9.05064 0.0379768 8.89194 0.165676C7.02176 1.6705 5.7174 3.85363 5.35322 6.34224C4.69665 5.86628 4.11999 5.28639 3.6476 4.62668C3.51764 4.4452 3.3136 4.33103 3.09095 4.31521C2.8683 4.2994 2.65017 4.38358 2.49587 4.54487C0.950469 6.16028 0 8.3527 0 10.7655C0 15.7361 4.02944 19.7655 9 19.7655C13.9706 19.7655 18 15.7361 18 10.7655C18 7.10463 15.8143 3.95586 12.6798 2.54993C11.5706 2.00843 10.6547 1.22871 9.96335 0.301656ZM12.75 12.2659C12.75 14.337 11.0711 16.0159 9 16.0159C6.92893 16.0159 5.25 14.337 5.25 12.2659C5.25 11.8566 5.31559 11.4626 5.43682 11.0938C6.06529 11.5584 6.78769 11.9032 7.57031 12.0945C7.78619 10.6937 8.48657 9.45282 9.49489 8.54828C11.3321 8.79049 12.75 10.3626 12.75 12.2659Z"
          fill="#A685FA"
        />
      </svg>
    ),
    title: 'ROI Assessment',
    description:
      'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
  },
  {
    icon: (
      <svg
        width="17"
        height="23"
        viewBox="0 0 17 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.25 0C3.69365 0 0 3.69365 0 8.25C0 11.3008 1.65631 13.9638 4.11516 15.3905C4.80062 15.7882 5.22985 16.3984 5.24928 17.0126C5.25999 17.3513 5.49656 17.6408 5.8264 17.7187C6.17778 17.8018 6.53585 17.8671 6.89959 17.9139C7.22319 17.9555 7.50018 17.6962 7.50018 17.37V12.7089C7.1809 12.6736 6.86803 12.616 6.56324 12.5375C6.1621 12.4343 5.92061 12.0254 6.02385 11.6243C6.1271 11.2231 6.53599 10.9816 6.93713 11.0849C7.35594 11.1927 7.79576 11.2502 8.25018 11.2502C8.7046 11.2502 9.14443 11.1927 9.56324 11.0849C9.96438 10.9816 10.3733 11.2231 10.4765 11.6243C10.5798 12.0254 10.3383 12.4343 9.93713 12.5375C9.63233 12.616 9.31946 12.6736 9.00018 12.7089V17.3699C9.00018 17.6962 9.27718 17.9554 9.60079 17.9138C9.9644 17.8671 10.3223 17.8018 10.6736 17.7187C11.0034 17.6408 11.24 17.3513 11.2507 17.0126C11.2701 16.3984 11.6994 15.7882 12.3848 15.3905C14.8437 13.9638 16.5 11.3008 16.5 8.25C16.5 3.69365 12.8063 0 8.25 0Z"
          fill="#A685FA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.26314 19.1497C5.34034 18.7427 5.73282 18.4754 6.13978 18.5526C6.82274 18.6821 7.5281 18.75 8.25 18.75C8.97191 18.75 9.67726 18.6821 10.3602 18.5526C10.7672 18.4754 11.1597 18.7427 11.2369 19.1497C11.3141 19.5566 11.0467 19.9491 10.6398 20.0263C9.86512 20.1732 9.06618 20.25 8.25 20.25C7.43383 20.25 6.63489 20.1732 5.86022 20.0263C5.45327 19.9491 5.18594 19.5566 5.26314 19.1497Z"
          fill="#A685FA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.00407 21.594C6.04717 21.182 6.41607 20.883 6.82803 20.9261C7.29511 20.9749 7.7695 21 8.25 21C8.7305 21 9.20489 20.9749 9.67197 20.9261C10.0839 20.883 10.4528 21.182 10.4959 21.594C10.539 22.0059 10.24 22.3748 9.82803 22.4179C9.3092 22.4722 8.78272 22.5 8.25 22.5C7.71728 22.5 7.1908 22.4722 6.67197 22.4179C6.26 22.3748 5.96097 22.0059 6.00407 21.594Z"
          fill="#A685FA"
        />
      </svg>
    ),
    title: 'Customized Strategies',
    description:
      'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs',
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.75 0C10.1642 0 10.5 0.335786 10.5 0.75V3C10.5 3.41421 10.1642 3.75 9.75 3.75C9.33579 3.75 9 3.41421 9 3V0.75C9 0.335786 9.33579 0 9.75 0Z"
          fill="#A685FA"
        />
        <path
          d="M5.25 9.75C5.25 7.26472 7.26472 5.25 9.75 5.25C12.2353 5.25 14.25 7.26472 14.25 9.75C14.25 12.2353 12.2353 14.25 9.75 14.25C7.26472 14.25 5.25 12.2353 5.25 9.75Z"
          fill="#A685FA"
        />
        <path
          d="M16.6443 3.91634C16.9372 3.62344 16.9372 3.14857 16.6443 2.85568C16.3514 2.56278 15.8766 2.56278 15.5837 2.85568L13.9927 4.44667C13.6998 4.73956 13.6998 5.21444 13.9927 5.50733C14.2856 5.80022 14.7605 5.80022 15.0534 5.50733L16.6443 3.91634Z"
          fill="#A685FA"
        />
        <path
          d="M19.5 9.75C19.5 10.1642 19.1642 10.5 18.75 10.5H16.5C16.0858 10.5 15.75 10.1642 15.75 9.75C15.75 9.33579 16.0858 9 16.5 9H18.75C19.1642 9 19.5 9.33579 19.5 9.75Z"
          fill="#A685FA"
        />
        <path
          d="M15.5836 16.6443C15.8765 16.9371 16.3513 16.9371 16.6442 16.6443C16.9371 16.3514 16.9371 15.8765 16.6442 15.5836L15.0532 13.9926C14.7603 13.6997 14.2855 13.6997 13.9926 13.9926C13.6997 14.2855 13.6997 14.7604 13.9926 15.0533L15.5836 16.6443Z"
          fill="#A685FA"
        />
        <path
          d="M9.75 15.75C10.1642 15.75 10.5 16.0858 10.5 16.5V18.75C10.5 19.1642 10.1642 19.5 9.75 19.5C9.33579 19.5 9 19.1642 9 18.75V16.5C9 16.0858 9.33579 15.75 9.75 15.75Z"
          fill="#A685FA"
        />
        <path
          d="M5.5075 15.0533C5.8004 14.7604 5.8004 14.2855 5.5075 13.9926C5.21461 13.6997 4.73974 13.6997 4.44684 13.9926L2.85585 15.5836C2.56296 15.8765 2.56296 16.3514 2.85585 16.6443C3.14875 16.9372 3.62362 16.9372 3.91651 16.6443L5.5075 15.0533Z"
          fill="#A685FA"
        />
        <path
          d="M3.75 9.75C3.75 10.1642 3.41421 10.5 3 10.5H0.75C0.335786 10.5 0 10.1642 0 9.75C4.47035e-08 9.33579 0.335786 9 0.75 9H3C3.41421 9 3.75 9.33579 3.75 9.75Z"
          fill="#A685FA"
        />
        <path
          d="M4.44673 5.50732C4.73962 5.80021 5.2145 5.80021 5.50739 5.50732C5.80028 5.21443 5.80028 4.73955 5.50739 4.44666L3.9164 2.85567C3.62351 2.56278 3.14863 2.56278 2.85574 2.85567C2.56285 3.14856 2.56285 3.62344 2.85574 3.91633L4.44673 5.50732Z"
          fill="#A685FA"
        />
      </svg>
    ),
    title: 'Diversification Mastery',
    description:
      'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
  },
];

export default function Decisions() {
  return (
    <section
      id="investment"
      className="pt-[80px] xl:pt-[120px] 2xl:pt-[150px] pb-[40px] xl:pb-[60px] 2xl:pb-[75px]"
    >
      <div className="container">
        <div className="flex max-md:flex-col gap-[40px] xl:gap-[60px] 2xl:gap-[80px]">
          <div className="max-md:w-full md:w-[32.5%] flex flex-col gap-[30px] xl:gap-[40px] 2xl:gap-[50px]">
            <SectionHeader headerInfo={headerInfo} />
            <WaveParallaxPanel
              stripeSrc="/images/global/abstractDesign3.png"
              className="flex flex-col gap-[20px] rounded-[10px] border border-grey15 bg-grey10 p-[24px] 2xl:gap-[30px] 2xl:rounded-[12px] xl:px-[50px] xl:py-[60px]"
            >
              <h4 className="text-[20px] font-bold xl:text-[24px] 2xl:text-[30px]">
                Unlock Your Investment Potential
              </h4>
              <p className="text-[14px] font-medium text-grey60 xl:text-[16px] 2xl:text-[18px]">
                Explore our Property Management Service categories and let us handle the
                complexities while you enjoy the benefits of property ownership.
              </p>
              <ButtonDark href="/contact" className="self-start">
                Learn More
              </ButtonDark>
            </WaveParallaxPanel>
          </div>
          <div className="max-md:w-full md:w-[67.5%] grid xs:grid-cols-2 xs:grid-rows-2 gap-[10px] p-[10px] bg-grey10 rounded-[12px]">
            {decisionsItems.map(({ icon, title, description }) => (
              <div
                key={title}
                className={`flex h-full flex-col gap-[16px] rounded-[10px] border border-grey15 bg-grey08 p-[24px] xl:gap-[24px] xl:p-[40px] 2xl:gap-[30px] 2xl:rounded-[12px] 2xl:p-[50px] ${ACHIEVEMENT_CARD_HOVER_SHELL}`}
              >
                <div className="flex items-center gap-[12px] xl:gap-[16px] 2xl:gap-[20px]">
                  <div className="relative flex h-[48px] w-[48px] items-center justify-center xl:h-[60px] xl:w-[60px] 2xl:h-[82px] 2xl:w-[82px]">
                    <Image
                      src="/images/global/sphere.png"
                      alt="Sphere"
                      fill
                      className="object-cover"
                    />
                    <span className="flex h-[20px] w-[20px] items-center justify-center xl:h-[24px] xl:w-[24px] 2xl:h-[30px] 2xl:w-[30px]">
                      {icon &&
                        React.cloneElement(icon, {
                          width: '100%',
                          height: '100%',
                        })}
                    </span>
                  </div>
                  <h4
                    className={`text-[18px] font-semibold xl:text-[20px] 2xl:text-[24px] ${ACHIEVEMENT_CARD_TITLE_HOVER}`}
                  >
                    {title}
                  </h4>
                </div>
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
