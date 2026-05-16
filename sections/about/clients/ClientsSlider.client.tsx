'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState } from 'react';

import Image from 'next/image';

import { useSwiperCustomNav } from '@/lib/swiperCustomNavigation';

import 'swiper/css';

type ClientsSliderProps = {
  slides: React.ReactNode[];
};

export default function ClientsSlider({ slides }: ClientsSliderProps) {
  const { navigation, prevButtonProps, nextButtonProps } = useSwiperCustomNav('clients');
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const totalSlides = slides.length;

  const btnsClass =
    'w-[44px] h-[44px] md:w-[58px] md:h-[58px] flex justify-center items-center flex-none border border-grey15 rounded-full cursor-pointer transition-colors';

  return (
    <div>
      <Swiper
        modules={[Navigation]}
        autoHeight={true}
        watchSlidesProgress
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        navigation={navigation}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex + 1);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div className="flex max-md:justify-end justify-between items-center gap-1 mt-[30px] md:mt-[40px] xl:mt-[50px] pt-[16px] md:pt-[20px] border-t border-grey15 ">
        <div className="text-[16px] md:text-[20px] text-grey60 font-medium max-md:hidden">
          <span className="text-white">{currentIndex} </span> of {totalSlides}
        </div>
        <div className="max-xs:w-full flex items-center max-xs:justify-between gap-[10px]">
          <button
            type="button"
            {...prevButtonProps}
            className={`${btnsClass} ${isBeginning ? 'bg-grey08' : 'bg-grey10 hover:bg-grey15'}`}
          >
            <Image
              className="rotate-180"
              src="/images/icons/arrowRight.svg"
              alt="Icon arrow prev"
              width={18}
              height={21}
            />
          </button>
          <div className="text-[16px] md:text-[20px] text-grey60 font-medium visible md:hidden">
            <span className="text-white">{currentIndex} </span> of {totalSlides}
          </div>
          <button
            type="button"
            {...nextButtonProps}
            className={`${btnsClass} ${isEnd ? 'bg-grey08' : 'bg-grey10 hover:bg-grey15'}`}
          >
            <Image
              src="/images/icons/arrowRight.svg"
              alt="Icon arrow next"
              width={18}
              height={21}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
