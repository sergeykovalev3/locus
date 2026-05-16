'use client';

import { useState, type ReactNode } from 'react';
import clsx from 'clsx';

import SectionHeader from '@/components/layout/SectionHeader';
import { ButtonGrey } from '@/components/btns/ButtonGrey';
import { ButtonPurple } from '@/components/btns/ButtonPurple';

type IconKeys = 'mail' | 'phone' | 'location';

type OfficeType = {
  title: string;
  value: string;
};

type OfficeTag = {
  icon: ReactNode;
  title: string;
  link: string;
};

type OfficeItem = {
  type: string;
  name: string;
  adress: string;
  description: string;
  link: string;
  tags: OfficeTag[];
};

const headerInfo = {
  title: 'Discover Our Office Locations',
  subtitle: `Locus is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Locus office nearest to you`,
};

const icons: Record<IconKeys, ReactNode> = {
  mail: (
    <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 4.9191V13.5C0 15.1569 1.34315 16.5 3 16.5H18C19.6569 16.5 21 15.1569 21 13.5V4.9191L12.0723 10.4131C11.1081 11.0064 9.89193 11.0064 8.92771 10.4131L0 4.9191Z"
        fill="white"
      />
      <path
        d="M21 3.15783V3C21 1.34315 19.6569 0 18 0H3C1.34315 0 0 1.34315 0 3V3.15783L9.71386 9.13558C10.196 9.43227 10.804 9.43227 11.2861 9.13558L21 3.15783Z"
        fill="white"
      />
    </svg>
  ),
  phone: (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3C0 1.34315 1.34315 0 3 0H4.37163C5.232 0 5.98197 0.585557 6.19064 1.42025L7.29644 5.84343C7.47941 6.5753 7.20594 7.34555 6.60242 7.79818L5.3088 8.7684C5.17447 8.86915 5.14527 9.01668 5.183 9.11969C6.31851 12.2195 8.78051 14.6815 11.8803 15.817C11.9833 15.8547 12.1309 15.8255 12.2316 15.6912L13.2018 14.3976C13.6545 13.7941 14.4247 13.5206 15.1566 13.7036L19.5798 14.8094C20.4144 15.018 21 15.768 21 16.6284V18C21 19.6569 19.6569 21 18 21H15.75C7.05151 21 0 13.9485 0 5.25V3Z"
        fill="white"
      />
    </svg>
  ),
  location: (
    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.78975 20.101C7.81995 20.1185 7.84369 20.1321 7.8605 20.1415L7.88843 20.1571C8.1113 20.2794 8.38776 20.2785 8.61084 20.1575L8.6395 20.1415C8.65631 20.1321 8.68005 20.1185 8.71025 20.101C8.77066 20.066 8.85697 20.015 8.9655 19.9482C9.18246 19.8146 9.48875 19.6176 9.85461 19.3591C10.5851 18.8431 11.5597 18.0774 12.5365 17.0773C14.4807 15.0868 16.5 12.0962 16.5 8.25C16.5 3.69365 12.8063 0 8.25 0C3.69365 0 0 3.69365 0 8.25C0 12.0962 2.01932 15.0868 3.96346 17.0773C4.94025 18.0774 5.91491 18.8431 6.64539 19.3591C7.01125 19.6176 7.31754 19.8146 7.5345 19.9482C7.64303 20.015 7.72934 20.066 7.78975 20.101ZM8.25 11.25C9.90685 11.25 11.25 9.90685 11.25 8.25C11.25 6.59315 9.90685 5.25 8.25 5.25C6.59315 5.25 5.25 6.59315 5.25 8.25C5.25 9.90685 6.59315 11.25 8.25 11.25Z"
        fill="white"
      />
    </svg>
  ),
};

const officesTypes: OfficeType[] = [
  {
    title: 'All',
    value: 'all',
  },
  {
    title: 'Regional',
    value: 'regional',
  },
  {
    title: 'International',
    value: 'international',
  },
];

const officesItems: OfficeItem[] = [
  {
    type: 'regional',
    name: 'Main Headquarters',
    adress: '123 Locus Plaza, City Center, Metropolis',
    description:
      'Our main headquarters serve as the heart of Locus. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.',
    link: 'https://maps.app.goo.gl/567890',
    tags: [
      { icon: icons.mail, title: 'info@locus.com', link: 'mailto:info@locus.com' },
      { icon: icons.phone, title: '+1 (123) 456-7890', link: 'tel:+11234567890' },
      {
        icon: icons.location,
        title: 'Metropolis',
        link: 'https://maps.app.goo.gl/567890',
      },
    ],
  },
  {
    type: 'international',
    name: 'Regional Offices',
    adress: '456 Urban Avenue, Downtown District, Metropolis',
    description: `Locus's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.`,
    link: 'https://maps.app.goo.gl/567890',
    tags: [
      { icon: icons.mail, title: 'info@locus.com', link: 'mailto:info@locus.com' },
      { icon: icons.phone, title: '+1 (123) 456-7890', link: 'tel:+11234567890' },
      {
        icon: icons.location,
        title: 'Metropolis',
        link: 'https://maps.app.goo.gl/567890',
      },
    ],
  },
];

export default function Offices() {
  const [activeTab, setActiveTab] = useState<string>(officesTypes[0].value);
  const filteredOffices = officesItems.filter(
    (office) => activeTab === 'all' || office.type === activeTab
  );

  return (
    <div
      id="offices"
      className="pt-[80px] xl:pt-[120px] 2xl:pt-[150px] pb-[40px] xl:pb-[60px] 2xl:pb-[75px]"
    >
      <div className="container">
        <div>
          <div>
            <SectionHeader className="mb-[40px] md:mb-[60px] xl:mb-5" headerInfo={headerInfo} />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[30px] xl:gap-[40px] 2xl:gap-[50px]">
          <div className="flex gap-[10px] p-[10px] bg-grey10 rounded-[8px] 2xl:rounded-[12px]">
            {officesTypes.map((officeType) => (
              <ButtonGrey
                type="button"
                className={clsx('inline-flex', activeTab === officeType.value && 'bg-grey15')}
                key={officeType.value}
                onClick={() => setActiveTab(officeType.value)}
              >
                {officeType.title}
              </ButtonGrey>
            ))}
          </div>
          <div className="flex flex-wrap justify-between gap-[30px]">
            {filteredOffices.map(({ type: _type, name, adress, description, link, tags }) => (
              <div
                key={name}
                className="w-full md:w-[48%] flex flex-col justify-between gap-[24px] xl:gap-[30px] 2xl:gap-[40px] border border-grey15 rounded-[8px] 2xl:rounded-[12px] p-[24px] xl:p-[40px] 2xl:p-[50px]"
              >
                <div className="flex flex-col">
                  <span className="text-[14px] 2xl:text-[18px] font-medium">{name}</span>
                  <span className="mt-[4px] xl:mt-[6px] 2xl:mt-[10px] text-[20px] xl:text-[24px] 2xl:text-[30px] font-semibold">
                    {adress}
                  </span>
                  <p className="mt-[8px] xl:mt-[10px] 2xl:mt-[14px] text-[14px] xl:text-[16px] 2xl:text-[20px] text-grey60 font-medium">
                    {description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-[8px] 2xl:gap-[10px]">
                  {tags.map(({ icon, title, link }) => (
                    <a
                      key={title}
                      href={link}
                      className="flex items-center gap-[4px] 2xl:gap-[6px] px-[16px] py-[10px] 2xl:px-[20px] 2xl:py-[14px] bg-grey10 border border-grey15 rounded-[28px]"
                    >
                      <span className="flex h-[20px] w-[20px] items-center justify-center 2xl:h-[24px] 2xl:w-[24px] [&_svg]:h-full [&_svg]:w-full [&_svg]:max-h-full [&_svg]:max-w-full">
                        {icon}
                      </span>
                      <span className="text-[14px] 2xl:text-[18px] font-medium">{title}</span>
                    </a>
                  ))}
                </div>
                <div className="w-full">
                  <ButtonPurple href={link} className="w-full">
                    Get Direction
                  </ButtonPurple>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
