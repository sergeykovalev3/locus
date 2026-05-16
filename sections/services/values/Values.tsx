import { ValuesSection, ValueItem } from '@/sections/shared/values/ValuesSection';

const headerInfo = {
  title: 'Unlock Property Value',
  subtitle: `Selling your property should be a rewarding experience, and at Locus, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey`,
};

const valuesItems: ValueItem[] = [
  {
    icon: (
      <svg
        width="26"
        height="28"
        viewBox="0 0 26 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.7812 0C20.3142 0 19.125 1.18924 19.125 2.65625V24.9688C19.125 26.4358 20.3142 27.625 21.7812 27.625H22.8438C24.3108 27.625 25.5 26.4358 25.5 24.9688V2.65625C25.5 1.18924 24.3108 0 22.8438 0H21.7812Z"
          fill="#A685FA"
        />
        <path
          d="M9.5625 9.03125C9.5625 7.56424 10.7517 6.375 12.2188 6.375H13.2812C14.7483 6.375 15.9375 7.56424 15.9375 9.03125V24.9688C15.9375 26.4358 14.7483 27.625 13.2812 27.625H12.2188C10.7517 27.625 9.5625 26.4358 9.5625 24.9688V9.03125Z"
          fill="#A685FA"
        />
        <path
          d="M0 15.4062C0 13.9392 1.18924 12.75 2.65625 12.75H3.71875C5.18576 12.75 6.375 13.9392 6.375 15.4062V24.9688C6.375 26.4358 5.18576 27.625 3.71875 27.625H2.65625C1.18924 27.625 0 26.4358 0 24.9688V15.4062Z"
          fill="#A685FA"
        />
      </svg>
    ),
    title: 'Valuation Mastery',
    description: 'Discover the true worth of your property with our expert valuation services.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 15.9375C0 9.48267 5.23267 4.25 11.6875 4.25C12.2743 4.25 12.75 4.7257 12.75 5.3125V14.875H22.3125C22.8993 14.875 23.375 15.3507 23.375 15.9375C23.375 22.3923 18.1423 27.625 11.6875 27.625C5.23267 27.625 0 22.3923 0 15.9375Z"
          fill="#A685FA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.875 1.0625C14.875 0.475697 15.3507 0 15.9375 0C22.3923 0 27.625 5.23267 27.625 11.6875C27.625 12.2743 27.1493 12.75 26.5625 12.75H15.9375C15.3507 12.75 14.875 12.2743 14.875 11.6875V1.0625Z"
          fill="#A685FA"
        />
      </svg>
    ),
    title: 'Strategic Marketing',
    description:
      'Selling a property requires more than just a listing; it demands a strategic marketing approach.',
  },
  {
    icon: (
      <svg
        width="26"
        height="30"
        viewBox="0 0 26 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5 6.90625C25.5 10.7205 19.7916 13.8125 12.75 13.8125C5.70837 13.8125 0 10.7205 0 6.90625C0 3.09203 5.70837 0 12.75 0C19.7916 0 25.5 3.09203 25.5 6.90625Z"
          fill="#A685FA"
        />
        <path
          d="M12.75 15.9375C16.554 15.9375 20.1032 15.1069 22.7777 13.6582C23.7552 13.1287 24.6851 12.4728 25.4642 11.697C25.4879 11.8693 25.5 12.0432 25.5 12.2188C25.5 16.033 19.7916 19.125 12.75 19.125C5.70837 19.125 0 16.033 0 12.2188C0 12.0432 0.0120863 11.8693 0.0358328 11.697C0.814904 12.4728 1.7448 13.1287 2.72229 13.6582C5.39678 15.1069 8.94598 15.9375 12.75 15.9375Z"
          fill="#A685FA"
        />
        <path
          d="M12.75 21.25C16.554 21.25 20.1032 20.4194 22.7777 18.9707C23.7552 18.4412 24.6851 17.7853 25.4642 17.0095C25.4879 17.1818 25.5 17.3557 25.5 17.5312C25.5 21.3455 19.7916 24.4375 12.75 24.4375C5.70837 24.4375 0 21.3455 0 17.5312C0 17.3557 0.0120863 17.1818 0.0358328 17.0095C0.814904 17.7853 1.7448 18.4412 2.72229 18.9707C5.39678 20.4194 8.94598 21.25 12.75 21.25Z"
          fill="#A685FA"
        />
        <path
          d="M12.75 26.5625C16.554 26.5625 20.1032 25.7319 22.7777 24.2832C23.7552 23.7537 24.6851 23.0978 25.4642 22.322C25.4879 22.4943 25.5 22.6682 25.5 22.8437C25.5 26.658 19.7916 29.75 12.75 29.75C5.70837 29.75 0 26.658 0 22.8437C0 22.6682 0.0120863 22.4943 0.0358328 22.322C0.814904 23.0978 1.7448 23.7537 2.72229 24.2832C5.39678 25.7319 8.94598 26.5625 12.75 26.5625Z"
          fill="#A685FA"
        />
      </svg>
    ),
    title: 'Negotiation Wizardry',
    description:
      'Negotiating the best deal is an art, and our negotiation experts are masters of it.',
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7275 2.96879C17.7933 4.14261 14.6508 4.90647 11.3701 5.18953C10.4245 5.27112 9.46725 5.31279 8.5 5.31279H7.4375C3.32988 5.31279 0 8.64267 0 12.7503C0 16.4331 2.67672 19.4907 6.19079 20.0838C6.66434 22.0232 7.32141 23.8906 8.1425 25.6666C8.79992 27.0886 10.5142 27.5367 11.8012 26.7936L12.731 26.2568C13.9778 25.537 14.3824 24.0005 13.8248 22.7603C13.4921 22.0203 13.1951 21.2607 12.9362 20.4839C15.6525 20.8494 18.2635 21.546 20.7275 22.5318C21.7556 19.4585 22.3125 16.1694 22.3125 12.7503C22.3125 9.33111 21.7556 6.04203 20.7275 2.96879Z"
          fill="#A685FA"
        />
        <path
          d="M22.6817 2.11211C23.82 5.44935 24.4375 9.02769 24.4375 12.7503C24.4375 16.4728 23.8199 20.0512 22.6817 23.3885C22.6035 23.6176 22.5232 23.8457 22.4402 24.0726C22.2385 24.6236 22.5217 25.2338 23.0727 25.4355C23.6237 25.6373 24.234 25.3541 24.4357 24.803C24.634 24.2611 24.8194 23.713 24.9914 23.1589C25.7333 20.7694 26.2264 18.2708 26.4406 15.6938C27.173 14.931 27.625 13.893 27.625 12.7503C27.625 11.6075 27.173 10.5696 26.4406 9.80682C26.2264 7.22978 25.7333 4.73119 24.9914 2.34164C24.8194 1.7876 24.634 1.23945 24.4357 0.697563C24.234 0.146518 23.6237 -0.136675 23.0727 0.0650333C22.5217 0.266742 22.2385 0.87697 22.4402 1.42801C22.5232 1.65485 22.6036 1.88297 22.6817 2.11211Z"
          fill="#A685FA"
        />
      </svg>
    ),
    title: 'Closing Success',
    description:
      'A successful sale is not complete until the closing. We guide you through the intricate closing process.',
  },
];

const cta = {
  title: 'Unlock the Value of Your Property Today',
  description:
    'Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.',
  buttonText: 'Learn More',
  buttonLink: '/contact',
};

export default function Values() {
  return (
    <ValuesSection id="expertise" headerInfo={headerInfo} items={valuesItems} cta={cta} />
  );
}
