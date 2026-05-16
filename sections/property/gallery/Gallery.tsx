'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { IMAGE_HOVER_GLOW } from '@/lib/slideCardHover';

type GalleryProps = {
  gallery: {
    image: string;
  }[];
};

const MAX_DOTS = 5;

const arrowBtnBase =
  'w-[44px] h-[44px] 2xl:w-[58px] 2xl:h-[58px] flex items-center justify-center rounded-full border border-grey15 transition-colors cursor-pointer disabled:pointer-events-none';
const arrowBtnActive = 'bg-grey10 hover:bg-grey15';
const arrowBtnInactive = 'bg-grey08';

const dotBase =
  'w-[11px] h-[3px] 2xl:w-[20px] 2xl:h-[5px] rounded-full transition-colors cursor-pointer';
const dotActive = 'bg-purple60';
const dotInactive = 'bg-grey30 hover:bg-grey40';

export default function Gallery({ gallery }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [realIndex, setRealIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (!gallery?.length) return null;

  const totalSlides = gallery.length;
  const totalDots = Math.min(MAX_DOTS, totalSlides);

  const activeDotIndex =
    totalDots <= 1 ? 0 : Math.min(Math.floor((realIndex / totalSlides) * totalDots), totalDots - 1);

  const goToDot = (dotIndex: number) => {
    if (!mainSwiper || totalDots <= 0) return;
    const segmentSize = totalSlides / totalDots;
    const targetRealIndex = Math.min(Math.floor(dotIndex * segmentSize), totalSlides - 1);
    mainSwiper.slideTo(targetRealIndex);
  };

  return (
    <div>
      <div className="container">
        <div className="flex flex-col p-[20px] xl:p-[40px] 2xl:p-[50px] bg-grey10 border border-grey15 rounded-[12px]">
          <div className="order-2 md:order-1 p-[10px] 2xl:p-[20px] max-md:mt-[20px] md:mb-[20px] 2xl:mb-[30px] bg-grey08 border border-grey15 rounded-[12px] overflow-hidden">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              breakpoints={{
                640: { slidesPerView: 5, spaceBetween: 10 },
                1024: { slidesPerView: 6, spaceBetween: 10 },
                1280: { slidesPerView: 8, spaceBetween: 20 },
              }}
              className="overflow-visible!"
            >
              {gallery.map(({ image }, index) => (
                <SwiperSlide key={`thumb-${index}`} className="h-auto!">
                  <div
                    className={`relative z-10 aspect-video cursor-pointer overflow-hidden rounded-[6px] transition-colors 2xl:rounded-[8px] [.swiper-slide-thumb-active>&]:border-purple60 ${IMAGE_HOVER_GLOW}`}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, (max-width: 1280px) 16vw, 12vw"
                    />
                    <div className="absolute inset-0 z-20 bg-[#0A0A0A] opacity-50 transition-opacity duration-300 hover:opacity-0 in-[.swiper-slide-thumb-active]:opacity-0"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div id="property-gallery-main" className="order-1 md:order-2">
            <Swiper
              modules={[Thumbs, FreeMode]}
              thumbs={{ swiper: thumbsSwiper, multipleActiveThumbs: false }}
              watchSlidesProgress
              onSwiper={(swiper) => {
                setMainSwiper(swiper);
                setRealIndex(swiper.realIndex);
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setRealIndex(swiper.realIndex);
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              spaceBetween={16}
              slidesPerView={2}
              className="overflow-visible!"
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
            >
              {gallery.map(({ image }, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`relative aspect-video w-full overflow-hidden rounded-[8px] bg-grey08 ${IMAGE_HOVER_GLOW}`}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="order-3 mx-auto inline-flex items-center justify-between md:justify-center gap-[10px] mt-[20px] 2xl:mt-[40px] p-[8px] 2xl:p-[10px] bg-grey08 rounded-[100px]">
            <button
              type="button"
              aria-label="Previous"
              disabled={isBeginning}
              onClick={() => mainSwiper?.slidePrev()}
              className={`${arrowBtnBase} ${isBeginning ? arrowBtnInactive : arrowBtnActive}`}
            >
              <Image
                className="rotate-180"
                src="/images/icons/arrowRight.svg"
                alt=""
                width={18}
                height={21}
              />
            </button>
            <div className="flex items-center gap-[3px] 2xl:gap-[4px]">
              {Array.from({ length: totalDots }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide group ${i + 1}`}
                  onClick={() => goToDot(i)}
                  className={`${dotBase} ${i === activeDotIndex ? dotActive : dotInactive}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next"
              disabled={isEnd}
              onClick={() => mainSwiper?.slideNext()}
              className={`${arrowBtnBase} ${isEnd ? arrowBtnInactive : arrowBtnActive}`}
            >
              <Image src="/images/icons/arrowRight.svg" alt="" width={18} height={21} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
