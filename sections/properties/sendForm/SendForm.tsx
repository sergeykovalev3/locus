'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/layout/SectionHeader';
import FormInput from '@/components/elements/FormInput/FormInput';
import FormSelect from '@/components/elements/FormSelect/FormSelect';
import FormContactMethod from '@/components/elements/FormContactMethod/FormContactMethod';
import FormTextarea from '@/components/elements/FormTextarea/FormTextarea';
import { ButtonPurple } from '@/components/btns/ButtonPurple';
import { getFormSelectOptionsFromProperties } from '@/lib/getPropertyFormOptions';
import { AUTHOR_GITHUB_URL } from '@/lib/site';

const PHONE_MAX_LENGTH = 10;
const PHONE_ALLOWED = /^[0-9+\s\-()]*$/;

const headerInfo = {
  title: `Let's Make it Happen`,
  subtitle: `Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.`,
};

const formOptions = getFormSelectOptionsFromProperties();

const SUCCESS_MESSAGE_DURATION_MS = 4000;

export default function SendForm() {
  const [phone, setPhone] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (!showSuccess) return;
    const timer = setTimeout(() => setShowSuccess(false), SUCCESS_MESSAGE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [showSuccess]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const filtered = raw.replace(/[^0-9+\s\-()]/g, '').slice(0, PHONE_MAX_LENGTH);
    setPhone(filtered);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = phone.trim();
    const phoneValid = trimmed.length >= 10 && PHONE_ALLOWED.test(trimmed);

    if (!phoneValid && trimmed.length > 0) {
      const form = e.currentTarget;
      const phoneInput = form.elements.namedItem('phone') as HTMLInputElement;
      phoneInput?.setCustomValidity(
        'At least 10 characters (digits, +, spaces, dashes, parentheses)'
      );
      phoneInput?.reportValidity();
      return;
    }
    const form = e.currentTarget;
    const phoneInput = form.elements.namedItem('phone') as HTMLInputElement;
    phoneInput?.setCustomValidity('');

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);

    setPhone('');
    setFormKey((k) => k + 1);
    setShowSuccess(true);
  };

  return (
    <div className="py-[40px] xl:py-[60px] 2xl:py-[75px]">
      <div className="container">
        <div>
          <div>
            <SectionHeader className="mb-[40px] md:mb-[60px] xl:mb-5" headerInfo={headerInfo} />
          </div>
          <div className="p-[20px] xl:p-[50px] 2xl:p-[100px] border border-grey15 rounded-[12px] relative">
            <AnimatePresence initial={false}>
              {showSuccess && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginBottom: 24 }}
                  exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div
                    role="status"
                    aria-live="polite"
                    className="rounded-[8px] bg-grey10 border border-purple60/50 px-5 py-4 text-[18px] 2xl:text-[20px] text-white text-center"
                  >
                    Form successfully submitted
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <form
              key={formKey}
              action="#"
              onSubmit={handleSubmit}
              className="grid grid-auto-rows-auto gap-[20px] xl:gap-[30px] 2xl:gap-[50px]"
            >
              <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="firstName" className="text-[16px] 2xl:text-[20px] font-semibold">
                    First Name
                  </label>
                  <FormInput
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
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
                    Email <span className="text-grey40 font-normal">(required)</span>
                  </label>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="phone" className="text-[16px] 2xl:text-[20px] font-semibold">
                    Phone <span className="text-grey40 font-normal">(required)</span>
                  </label>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                    maxLength={PHONE_MAX_LENGTH}
                  />
                </div>
              </div>
              <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label
                    htmlFor="preferredLocation"
                    className="text-[16px] 2xl:text-[20px] font-semibold"
                  >
                    Preferred Location
                  </label>
                  <FormSelect
                    id="preferredLocation"
                    name="preferredLocation"
                    placeholder="Select Location"
                    options={formOptions.locations}
                  />
                </div>
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label
                    htmlFor="propertyType"
                    className="text-[16px] 2xl:text-[20px] font-semibold"
                  >
                    Property Type
                  </label>
                  <FormSelect
                    id="propertyType"
                    name="propertyType"
                    placeholder="Select Property Type"
                    options={formOptions.propertyTypes}
                  />
                </div>
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="bathrooms" className="text-[16px] 2xl:text-[20px] font-semibold">
                    No. of Bathrooms
                  </label>
                  <FormSelect
                    id="bathrooms"
                    name="bathrooms"
                    placeholder="Select no. of Bathrooms"
                    options={formOptions.bathrooms}
                  />
                </div>
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="bedrooms" className="text-[16px] 2xl:text-[20px] font-semibold">
                    No. of Bedrooms
                  </label>
                  <FormSelect
                    id="bedrooms"
                    name="bedrooms"
                    placeholder="Select no. of Bedrooms"
                    options={formOptions.bedrooms}
                  />
                </div>
              </div>
              <div className="grid xs:grid-cols-2 gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="budget" className="text-[16px] 2xl:text-[20px] font-semibold">
                    Budget
                  </label>
                  <FormSelect
                    id="budget"
                    name="budget"
                    placeholder="Select Budget"
                    options={formOptions.budget}
                  />
                </div>
                <FormContactMethod />
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
                      className="underline hover:text-purple60 transition-colors mx-[3px]"
                    >
                      Terms of Use
                    </a>
                    and
                    <a
                      href={AUTHOR_GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" underline hover:text-purple60 transition-colors mx-[3px]"
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
          </div>
        </div>
      </div>
    </div>
  );
}
