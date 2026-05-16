'use client';

import dynamic from 'next/dynamic';

import SectionHeader from '@/components/layout/SectionHeader';
import ReviewsSlide from './ReviewsSlide';

const ReviewsSlider = dynamic(() => import('@/sections/home/reviews/ReviewsSlider.client'), {
  ssr: false,
});

const headerInfo = {
  title: 'What Our Clients Say',
  subtitle: `Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Locus for their real estate needs.`,
  linkTitle: 'View All Testimonials',
  link: '/#reviews',
};

const slidesInfo = [
  {
    count: 5,
    title: 'Exceptional Service!',
    description:
      "Our experience with Locus was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: 'Wade Warren',
    location: 'USA, California',
    avatar: 'avatar1.png',
  },
  {
    count: 5,
    title: 'Efficient and Reliable',
    description:
      "Locus provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: 'Emelie Thomson',
    location: 'USA, Florida',
    avatar: 'avatar2.png',
  },
  {
    count: 5,
    title: 'Trusted Advisors',
    description:
      'The Locus team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!',
    name: 'John Mans',
    location: 'USA, Nevada',
    avatar: 'avatar3.png',
  },
  {
    count: 5,
    title: 'Exceptional Service!',
    description:
      "Our experience with Locus was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: 'Wade Warren',
    location: 'USA, California',
    avatar: 'avatar1.png',
  },
  {
    count: 5,
    title: 'Efficient and Reliable',
    description:
      "Locus provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: 'Emelie Thomson',
    location: 'USA, Florida',
    avatar: 'avatar2.png',
  },
  {
    count: 5,
    title: 'Trusted Advisors',
    description:
      'The Locus team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!',
    name: 'John Mans',
    location: 'USA, Nevada',
    avatar: 'avatar3.png',
  },
  {
    count: 5,
    title: 'Exceptional Service!',
    description:
      "Our experience with Locus was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: 'Wade Warren',
    location: 'USA, California',
    avatar: 'avatar1.png',
  },
  {
    count: 5,
    title: 'Efficient and Reliable',
    description:
      "Locus provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: 'Emelie Thomson',
    location: 'USA, Florida',
    avatar: 'avatar2.png',
  },
  {
    count: 5,
    title: 'Trusted Advisors',
    description:
      'The Locus team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!',
    name: 'John Mans',
    location: 'USA, Nevada',
    avatar: 'avatar3.png',
  },

];

const slides = slidesInfo.map((slide, i) => (
  <ReviewsSlide key={`${slide.name}-${slide.avatar}-${i}`} {...slide} />
));

export default function Reviews() {
  return (
    <div id="reviews" className="py-[40px] xl:py-[60px] 2xl:py-[75px]">
      <div className="container">
        <div>
          <SectionHeader className="mb-[40px] md:mb-[60px] xl:mb-5" headerInfo={headerInfo} />
          <ReviewsSlider slides={slides} linkTitle={headerInfo.linkTitle} link={headerInfo.link} />
        </div>
      </div>
    </div>
  );
}
