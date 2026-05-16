'use client';

import { useState, type FormEvent } from 'react';

import SectionHeader from '@/components/layout/SectionHeader';
import { AUTHOR_GITHUB_URL } from '@/lib/site';
import FormInput from '@/components/elements/FormInput/FormInput';
import FormSelect from '@/components/elements/FormSelect/FormSelect';
import FormTextarea from '@/components/elements/FormTextarea/FormTextarea';

import { ButtonPurple } from '@/components/btns/ButtonPurple';

const headerInfo = {
  title: `Let's Connect`,
  subtitle: `We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Locus. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.`,
};

const inquiryTypes = [
  { value: 'buy', label: 'Buy' },
  { value: 'sell', label: 'Sell' },
  { value: 'rent', label: 'Rent' },
  { value: 'invest', label: 'Invest' },
  { value: 'other', label: 'Other' },
];

const howDidYouHearAboutUs = [
  { value: 'website', label: 'Website' },
  { value: 'socialMedia', label: 'Social Media' },
  { value: 'referral', label: 'Referral' },
  { value: 'other', label: 'Other' },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Contact form submission:', data);
    setSubmitted(true);
    form.reset();
  }

  return (
    <div id="contact-form" className="pt-[150px] xl:pt-[120px] 2xl:pt-[80px] pb-[75px] xl:pb-[60px] 2xl:pb-[40px]">
      <div className="container">
        <div>
          <div>
            <SectionHeader className="mb-[40px] md:mb-[60px] xl:mb-5" headerInfo={headerInfo} />
          </div>
          <div className="p-[20px] xl:p-[50px] 2xl:p-[100px] border border-grey15 rounded-[12px]">
            <form
              onSubmit={handleSubmit}
              className="grid grid-auto-rows-auto gap-[20px] xl:gap-[30px] 2xl:gap-[50px]"
            >
              <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="firstName" className="text-[16px] 2xl:text-[20px] font-semibold">
                    First Name
                  </label>
                  <FormInput
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="lastName" className="text-[16px] 2xl:text-[20px] font-semibold">
                    Last Name
                  </label>
                  <FormInput
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="email" className="text-[16px] 2xl:text-[20px] font-semibold">
                    Email
                  </label>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="phone" className="text-[16px] 2xl:text-[20px] font-semibold">
                    Phone
                  </label>
                  <FormInput type="tel" id="phone" name="phone" placeholder="Enter Phone Number" />
                </div>
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label
                    htmlFor="inquiryType"
                    className="text-[16px] 2xl:text-[20px] font-semibold"
                  >
                    Inquiry Type
                  </label>
                  <FormSelect
                    id="inquiryType"
                    name="inquiryType"
                    placeholder="Select Inquiry Type"
                    options={inquiryTypes}
                  />
                </div>
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label
                    htmlFor="howDidYouHearAboutUs"
                    className="text-[16px] 2xl:text-[20px] font-semibold"
                  >
                    How Did You Hear About Us?
                  </label>
                  <FormSelect
                    id="howDidYouHearAboutUs"
                    name="howDidYouHearAboutUs"
                    placeholder="Select"
                    options={howDidYouHearAboutUs}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="message" className="text-[16px] 2xl:text-[20px] font-semibold">
                    Message
                  </label>
                  <FormTextarea
                    name="message"
                    id="message"
                    placeholder="Enter your Message here.."
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] xl:gap-[20px]">
                <label className="flex items-center gap-[6px] 2xl:gap-[10px] cursor-pointer group">
                  <span className="relative shrink-0">
                    <input
                      type="checkbox"
                      name="terms"
                      required
                      className="peer absolute w-[24px] h-[24px] 2xl:w-[28px] 2xl:h-[28px] opacity-0 cursor-pointer"
                    />
                    <span className="flex w-[24px] h-[24px] 2xl:w-[28px] 2xl:h-[28px] rounded border-2 border-grey15 bg-grey10 transition-colors peer-checked:border-purple60 peer-checked:bg-purple60 peer-checked:[&_svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-purple60/20 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-grey08">
                      <svg
                        className="w-full h-full p-[2px] opacity-0 transition-opacity text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                  </span>
                  <span className="inline text-[14px] xl:text-[16px] 2xl:text-[18px] text-grey60">
                    I agree with I agree to the
                    <a
                      href={AUTHOR_GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-[3px] underline transition-colors hover:text-purple60"
                    >
                      Terms of Use
                    </a>
                    and
                    <a
                      href={AUTHOR_GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-[3px] underline transition-colors hover:text-purple60"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
                <ButtonPurple type="submit" className="sm:ml-auto">
                  Send Your Message
                </ButtonPurple>
              </div>
            </form>
            {submitted ? (
              <p
                className="mt-[20px] xl:mt-[30px] text-[14px] xl:text-[16px] leading-relaxed text-grey40"
                role="status"
                aria-live="polite"
              >
                Thank you for your message. Your submission has been received successfully. A member of
                our team will review your enquiry and respond at the earliest opportunity.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
