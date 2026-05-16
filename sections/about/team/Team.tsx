import Image from 'next/image';

import SectionHeader from '@/components/layout/SectionHeader';

const headerInfo = {
  title: 'Meet the Locus Team',
  subtitle: `At Locus, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.`,
};

const items = [
  {
    image: 'image1.png',
    name: 'Max Mitchell',
    role: 'Founder',
  },
  {
    image: 'image2.png',
    name: 'Sarah Johnson',
    role: 'Chief Real Estate Officer',
  },
  {
    image: 'image3.png',
    name: 'David Brown',
    role: 'Head of Property Management',
  },
  {
    image: 'image4.png',
    name: 'Michael Turner',
    role: 'Legal Counsel',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-[40px] xl:py-[60px] 2xl:py-[75px]">
      <div className="container">
        <div className="flex flex-col gap-[40px] xl:gap-[60px] 2xl:gap-[80px]">
          <div>
            <SectionHeader headerInfo={headerInfo} />
          </div>
          <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-4 gap-[20px] 2xl:gap-[30px]">
            {items.map(({ image, name, role }) => (
              <div
                key={name}
                className="w-full max-w-[320px] sm:max-w-[400px] max-lg:mx-auto flex flex-col justify-between gap-[40px] gap-[50px] p-[20px] xl:p-[24px] 2xl:p-[30px] rounded-[12px] border border-grey15"
              >
                <div className="relative">
                  <div className="w-full h-[233px] sm:h-[347px] lg:h-[220px] rounded-[12px] overflow-hidden relative">
                    <Image
                      className="object-cover"
                      src={`/images/about/team/${image}`}
                      alt="Team person image"
                      fill
                    />
                  </div>
                  <a
                    className="flex items-center justify-center w-[60px] h-[40px] 2xl:w-[76px] 2xl:h-[52px] absolute -bottom-[20px] 2xl:-bottom-[26px] left-1/2 -translate-x-1/2 bg-purple60 rounded-full transition-colors hover:bg-purple65"
                    href="mailto:sergey.kovalev_3@mail.ru"
                    target="_blank"
                  >
                    <svg
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.2918 16.2506C13.8371 16.2506 17.9652 9.99786 17.9652 4.57716C17.9652 4.40138 17.9613 4.22169 17.9535 4.04591C18.7566 3.46516 19.4496 2.74582 20 1.92169C19.2521 2.25444 18.458 2.47176 17.6449 2.56622C18.5011 2.05303 19.1421 1.24684 19.4492 0.297083C18.6438 0.774408 17.763 1.11112 16.8445 1.29279C16.2257 0.635244 15.4075 0.199874 14.5164 0.0539862C13.6253 -0.0919016 12.711 0.059819 11.9148 0.485691C11.1186 0.911562 10.4848 1.58786 10.1115 2.41004C9.73825 3.23221 9.64619 4.15446 9.84961 5.03419C8.21874 4.95235 6.62328 4.5287 5.16665 3.79069C3.71002 3.05269 2.42474 2.01681 1.39414 0.750208C0.870333 1.65331 0.710047 2.72198 0.945859 3.73902C1.18167 4.75606 1.79589 5.64515 2.66367 6.2256C2.01219 6.20491 1.37498 6.02951 0.804688 5.71388V5.76466C0.804104 6.7124 1.13175 7.6311 1.73192 8.36458C2.3321 9.09807 3.16777 9.60108 4.09687 9.7881C3.49338 9.95322 2.85999 9.97727 2.2457 9.85841C2.50788 10.6735 3.01798 11.3864 3.70481 11.8976C4.39164 12.4088 5.22093 12.6928 6.07695 12.71C4.62369 13.8515 2.82848 14.4707 0.980469 14.4678C0.652739 14.4673 0.325333 14.4472 0 14.4076C1.87738 15.6121 4.06128 16.2518 6.2918 16.2506Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-col gap-[16px] xl:gap-[20px] 2xl:gap-[24px]">
                  <div className="flex flex-col items-center gap-[2px] gap-[4px] gap-[6px]">
                    <span className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold text-center">
                      {name}
                    </span>
                    <span className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-grey60 text-center">
                      {role}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-[20px] p-[8px] pl-[24px] xl:p-[10px] xl:pl-[20px] 2xl:p-[14px] 2xl:pl-[24px] bg-grey10 border border-grey15 rounded-full">
                    <span className="text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium">
                      Say Hello 👋
                    </span>
                    <a
                      className="w-[48px] h-[48px] xl:w-[36px] xl:h-[36px] 2xl:w-[44px] 2xl:h-[44px] flex items-center justify-center rounded-full bg-purple60 transition-colors hover:bg-purple65"
                      href="mailto:sergey.kovalev_3@mail.ru"
                      target="_blank"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.1895 0.481916C15.7729 0.0560822 15.1562 -0.101418 14.5812 0.0652488L1.17285 3.93942C0.566184 4.10775 0.136183 4.58858 0.0203501 5.19858C-0.0979832 5.82025 0.31535 6.61025 0.85535 6.94025L5.04785 9.50025C5.47785 9.76358 6.03285 9.69775 6.38868 9.34108L11.1895 4.54025C11.4312 4.28942 11.8312 4.28942 12.0729 4.54025C12.3145 4.78108 12.3145 5.17358 12.0729 5.42358L7.26368 10.2244C6.90702 10.5811 6.84035 11.1344 7.10285 11.5652L9.66452 15.7736C9.96452 16.2727 10.4812 16.5569 11.0479 16.5569C11.1145 16.5569 11.1895 16.5569 11.2562 16.5477C11.9062 16.4652 12.4229 16.0227 12.6145 15.3977L16.5895 2.09025C16.7645 1.52358 16.6062 0.906915 16.1895 0.481916Z"
                          fill="white"
                        />
                        <path
                          opacity="0.4"
                          d="M6.20998 14.2852C6.45331 14.5294 6.45331 14.9252 6.20998 15.1694L5.07165 16.3069C4.94998 16.4294 4.78998 16.4902 4.62998 16.4902C4.46998 16.4902 4.30998 16.4294 4.18831 16.3069C3.94415 16.0627 3.94415 15.6677 4.18831 15.4236L5.32581 14.2852C5.56998 14.0419 5.96582 14.0419 6.20998 14.2852ZM5.5569 11.1286C5.80023 11.3727 5.80023 11.7686 5.5569 12.0127L4.41856 13.1502C4.2969 13.2727 4.1369 13.3336 3.9769 13.3336C3.8169 13.3336 3.6569 13.2727 3.53523 13.1502C3.29107 12.9061 3.29107 12.5111 3.53523 12.2669L4.67273 11.1286C4.9169 10.8852 5.31273 10.8852 5.5569 11.1286ZM2.42256 10.1349C2.6659 10.3791 2.6659 10.7749 2.42256 11.0191L1.28423 12.1566C1.16257 12.2791 1.00257 12.3399 0.842565 12.3399C0.682565 12.3399 0.522565 12.2791 0.400898 12.1566C0.156732 11.9124 0.156732 11.5174 0.400898 11.2732L1.5384 10.1349C1.78256 9.89156 2.1784 9.89156 2.42256 10.1349Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
