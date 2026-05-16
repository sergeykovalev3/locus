"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

import Image from "next/image";

import { ButtonGrey } from "@/components/btns/ButtonGrey";
import { useSwiperCustomNav } from "@/lib/swiperCustomNavigation";

import "swiper/css";

type PropertiesSliderProps = {
  slides: React.ReactNode[];
  linkTitle: string;
  link: string;
};

export default function ReviewsSlider({
  slides,
  linkTitle,
  link,
}: PropertiesSliderProps) {
  const { navigation, prevButtonProps, nextButtonProps } = useSwiperCustomNav("reviews");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const totalSlides = slides.length;

  const btnsClass =
    "w-[58px] h-[58px] flex justify-center items-center border border-grey15 rounded-full cursor-pointer transition-colors";

  return (
    <>
      <Swiper
        modules={[Navigation]}
        autoHeight={true}
        watchSlidesProgress
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
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
      <div className="flex justify-between md:justify-end items-center md:items-start gap-1 mt-[30px] md:mt-[40px] xl:mt-[50px] pt-[16px] md:pt-[20px] border-t border-grey15">
        <div className="md:hidden">
          <ButtonGrey href={link}>{linkTitle}</ButtonGrey>
        </div>
        <div className="text-[16px] md:text-[20px] text-grey60 font-medium hidden md:visible">
          <span className="text-white">{currentIndex} </span> of {totalSlides}
        </div>
        <div className="flex items-center gap-[10px]">
          <button
            type="button"
            {...prevButtonProps}
            className={`${btnsClass} ${isBeginning ? "bg-grey08" : "bg-grey10 hover:bg-grey15"}`}
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
            className={`${btnsClass} ${isEnd ? "bg-grey08" : "bg-grey10 hover:bg-grey15"}`}
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
    </>
  );
}
