'use client';

import dynamic from 'next/dynamic';

import SectionHeader from '@/components/layout/SectionHeader';
import FaqSlide from './FaqSlide';

const FaqSlider = dynamic(() => import('@/sections/shared/faq/FaqSlider.client'), { ssr: false });

const headerInfo = {
  title: 'Frequently Asked Questions',
  subtitle: `Find answers to common questions about Locus's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`,
  linkTitle: 'View All FAQ’s',
  link: '/contact',
};

const slidesInfo = [
  {
    title: 'How do I search for properties?',
    description:
      'Use the filters on our Properties page to narrow by location, price, and type. For a tailored search, contact our team and we’ll send matching listings.',
    link: '/contact',
  },
  {
    title: 'What do I need to list my property for sale?',
    description:
      'You’ll need proof of ownership, ID, and any relevant permits. Our agents will send you a full checklist—reach out via the Contact page to get started.',
    link: '/contact',
  },
  {
    title: 'How do I get in touch with an agent?',
    description:
      'Visit our Contact page to send a message, find office addresses, or request a callback. We’re here to answer any property or process question.',
    link: '/contact',
  },
  {
    title: 'Do you help with mortgages and financing?',
    description:
      'We can connect you with trusted lenders and explain financing options. Contact us to discuss your budget and the best way to structure your purchase.',
    link: '/contact',
  },
  {
    title: 'Can I schedule a property viewing?',
    description:
      'Yes. Tell us which listing you’re interested in and your availability—we’ll arrange a viewing. Get in touch via the Contact page or by phone.',
    link: '/contact',
  },
  {
    title: 'What areas do you cover?',
    description:
      'We work across multiple regions and can help with local and out-of-area moves. Reach out to describe your target area and we’ll outline how we can help.',
    link: '/contact',
  },
  {
    title: 'How long does the buying or selling process take?',
    description:
      'Timelines depend on the market and your situation. Our agents will give you a realistic estimate after learning your goals—contact us to get started.',
    link: '/contact',
  },
  {
    title: 'Is there a fee for using your services as a buyer?',
    description:
      'Our fee structure depends on the type of transaction. We’ll explain all costs clearly before you commit. Send a message on the Contact page for details.',
    link: '/contact',
  },
];

const slides = slidesInfo.map((slide) => <FaqSlide key={slide.title} {...slide} />);

export default function Faq() {
  return (
    <div id="faq" className="py-[40px] xl:py-[60px] 2xl:py-[75px]">
      <div className="container">
        <div>
          <SectionHeader className="mb-[40px] md:mb-[60px] xl:mb-5" headerInfo={headerInfo} />
          <FaqSlider slides={slides} linkTitle={headerInfo.linkTitle} link={headerInfo.link} />
        </div>
      </div>
    </div>
  );
}
