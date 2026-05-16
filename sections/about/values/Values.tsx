import clsx from "clsx";

import SectionHeader from "@/components/layout/SectionHeader";

const headerInfo = {
  title: "Our Values",
  subtitle: `Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.`,
};

const itemsImage = [
  <svg
    key="values-icon-0"
    width="29"
    height="27"
    viewBox="0 0 29 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3187 1.14532C12.9539 -0.381772 15.1171 -0.381773 15.7523 1.14532L18.7018 8.23675L26.3576 8.85051C28.0062 8.98268 28.6747 11.0401 27.4186 12.1161L21.5857 17.1126L23.3678 24.5833C23.7515 26.1921 22.0014 27.4636 20.5899 26.6015L14.0355 22.5981L7.48108 26.6015C6.06962 27.4636 4.31948 26.1921 4.70324 24.5833L6.48528 17.1126L0.652378 12.1161C-0.603696 11.0401 0.0647912 8.98268 1.71342 8.85051L9.36921 8.23675L12.3187 1.14532Z"
      fill="#A685FA"
    />
  </svg>,
  <svg
    key="values-icon-1"
    width="32"
    height="27"
    viewBox="0 0 32 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.369 0.088875C15.6402 -0.029625 15.9486 -0.029625 16.2198 0.088875C21.4881 2.39071 26.4812 5.20457 31.1361 8.46742C31.473 8.70355 31.6433 9.11292 31.5733 9.5183C31.5033 9.92368 31.2055 10.2522 30.809 10.3617C29.8387 10.6295 28.8768 10.918 27.9235 11.2254C24.0545 12.4732 20.3301 14.0432 16.7819 15.9038L16.7773 15.9062C16.6164 15.9906 16.4559 16.0756 16.2958 16.1612C15.9829 16.3283 15.6072 16.3283 15.2943 16.1612C15.1327 16.0748 14.9706 15.989 14.8082 15.9038C13.0537 14.9838 11.2561 14.1348 9.41931 13.3607V13.0438C9.41931 12.8577 9.51482 12.6926 9.6626 12.6031C11.7949 11.3113 13.9943 10.1194 16.2543 9.03381C16.7833 8.77974 17.0061 8.14498 16.7521 7.61603C16.498 7.08708 15.8632 6.86425 15.3343 7.11832C13.012 8.23377 10.7522 9.45842 8.56151 10.7856C7.91922 11.1747 7.48744 11.8116 7.34541 12.5251C6.13427 12.0592 4.90721 11.6252 3.66523 11.2247C2.71205 10.9173 1.7501 10.6295 0.779833 10.3617C0.383279 10.2522 0.0855473 9.92366 0.0155347 9.51828C-0.054478 9.1129 0.115812 8.70353 0.45268 8.46741C5.10762 5.20456 10.1007 2.3907 15.369 0.088875Z"
      fill="#A685FA"
    />
    <path
      d="M17.2972 18.0354C20.7523 16.1893 24.3823 14.6287 28.1559 13.3847C28.346 15.389 28.4675 17.4133 28.5178 19.455C28.5286 19.893 28.2693 20.2928 27.865 20.4616C23.8258 22.148 19.9839 24.2129 16.3836 26.6123C16.0267 26.85 15.562 26.85 15.2051 26.6123C11.6048 24.2129 7.76285 22.148 3.72374 20.4616C3.31937 20.2928 3.06012 19.893 3.07092 19.455C3.12122 17.4131 3.24266 15.3887 3.43287 13.3843C4.73761 13.8143 6.02519 14.2823 7.29431 14.7868V16.5865C6.65915 16.9539 6.23181 17.6407 6.23181 18.4272C6.23181 19.1289 6.57192 19.7512 7.09629 20.1382C6.96948 20.6774 6.7818 21.205 6.53323 21.7103C7.17455 22.013 7.81038 22.3254 8.44053 22.6474C8.79943 21.9175 9.05965 21.1513 9.22118 20.3691C9.96401 20.0379 10.4818 19.293 10.4818 18.4272C10.4818 17.6407 10.0545 16.9539 9.41931 16.5865V15.6731C11.0788 16.3982 12.7043 17.1866 14.2929 18.0354C15.2316 18.5369 16.3586 18.5369 17.2972 18.0354Z"
      fill="#A685FA"
    />
    <path
      d="M5.11579 23.6863C5.70957 23.0925 6.18226 22.4237 6.53323 21.7103C7.17455 22.013 7.81038 22.3254 8.44053 22.6474C7.98925 23.5652 7.38163 24.4257 6.6184 25.1889C6.20346 25.6038 5.53073 25.6038 5.11579 25.1889C4.70086 24.774 4.70086 24.1012 5.11579 23.6863Z"
      fill="#A685FA"
    />
  </svg>,
  <svg
    key="values-icon-2"
    width="30"
    height="27"
    viewBox="0 0 30 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5625 5.3125C9.5625 2.37849 11.941 0 14.875 0C17.809 0 20.1875 2.37849 20.1875 5.3125C20.1875 8.24651 17.809 10.625 14.875 10.625C11.941 10.625 9.5625 8.24651 9.5625 5.3125Z"
      fill="#A685FA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.1875 9.5625C20.1875 7.21529 22.0903 5.3125 24.4375 5.3125C26.7847 5.3125 28.6875 7.21529 28.6875 9.5625C28.6875 11.9097 26.7847 13.8125 24.4375 13.8125C22.0903 13.8125 20.1875 11.9097 20.1875 9.5625Z"
      fill="#A685FA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.0625 9.5625C1.0625 7.21529 2.96529 5.3125 5.3125 5.3125C7.65971 5.3125 9.5625 7.21529 9.5625 9.5625C9.5625 11.9097 7.65971 13.8125 5.3125 13.8125C2.96529 13.8125 1.0625 11.9097 1.0625 9.5625Z"
      fill="#A685FA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.81397 17.1665C8.5111 14.5129 11.4868 12.75 14.875 12.75C18.2636 12.75 21.2396 14.5133 22.9367 17.1675C24.1099 19.0024 24.6175 21.2149 24.3794 23.3721C24.3422 23.7092 24.1462 24.0083 23.8521 24.1771C21.2067 25.695 18.1405 26.5625 14.875 26.5625C11.6095 26.5625 8.54333 25.695 5.89793 24.1771C5.60375 24.0083 5.40784 23.7092 5.37063 23.3721C5.13249 21.2145 5.64033 19.0016 6.81397 17.1665Z"
      fill="#A685FA"
    />
    <path
      d="M5.0749 15.9427C5.05784 15.9689 5.04089 15.9952 5.02403 16.0216C3.6563 18.1601 3.03036 20.707 3.22251 23.2178C2.36111 23.0869 1.52532 22.8765 0.723106 22.5939L0.560249 22.5366C0.263158 22.432 0.0555722 22.1622 0.0305872 21.8482L0.0168911 21.6761C0.00569095 21.5353 0 21.3932 0 21.25C0 18.3956 2.25115 16.067 5.0749 15.9427Z"
      fill="#A685FA"
    />
    <path
      d="M26.528 23.2177C26.7201 20.7074 26.0945 18.1611 24.7272 16.0228C24.7101 15.996 24.6929 15.9693 24.6756 15.9427C27.4991 16.0673 29.75 18.3958 29.75 21.25C29.75 21.3932 29.7443 21.5353 29.7331 21.6761L29.7194 21.8482C29.6944 22.1622 29.4868 22.432 29.1898 22.5366L29.0269 22.5939C28.2248 22.8764 27.3892 23.0868 26.528 23.2177Z"
      fill="#A685FA"
    />
  </svg>,
];

const items = [
  {
    image: 0,
    title: "Trust",
    description:
      "Trust is the cornerstone of every successful real estate transaction.",
  },
  {
    image: 1,
    title: "Excellence",
    description:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    image: 2,
    title: "Client-Centric",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    image: 0,
    title: "Our Commitment",
    description:
      "We are dedicated to providing you with the highest level of service, professionalism, and support.",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-[40px] xl:py-[60px] 2xl:py-[75px]">
      <div className="container">
        <div className="flex max-md:flex-col md:items-center gap-[40px] xl:gap-[60px] 2xl:gap-[80px]">
          <div className="md:w-[33%]">
            <SectionHeader headerInfo={headerInfo} />
          </div>
          <div className="md:w-[67%]">
            <div className="grid sm:grid-rows-2 sm:grid-cols-2 gap-[20px] sm:gap-[40px] xl:gap-[48px] 2xl:gap-[60px] p-[24px] xl:p-[50px] 2xl:p-[60px] border border-grey15 rounded-[12px] relative shadow-[0_0_0_6px_rgba(25,25,25,1)] xl:shadow-[0_0_0_8px_rgba(25,25,25,1)] 2xl:shadow-[0_0_0_10px_rgba(25,25,25,1)]">
              {items.map(({ image, title, description }, index) => (
                <div
                  key={title}
                  className={clsx(
                    "group relative flex flex-col gap-[14px] rounded-[10px] p-[12px] xl:gap-[16px] xl:gap-[20px] xl:p-[14px] 2xl:p-[16px]",
                    "transition-[background-color,box-shadow] duration-300 ease-out",
                    "hover:bg-purple60/[0.09] hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-purple60)_42%,transparent),0_12px_40px_-12px_color-mix(in_oklab,var(--color-purple60)_35%,transparent)]",
                    index !== items.length - 1 &&
                      "max-sm:pb-[20px] max-sm:border-b max-sm:border-grey15",
                  )}
                >
                  <div className="flex items-center gap-[8px] xl:gap-[10px] 2xl:gap-[14px]">
                    <div
                      className={clsx(
                        "flex h-[52px] w-[52px] items-center justify-center rounded-full border border-purple60 p-[14px] xl:h-[60px] xl:w-[60px] xl:p-[16px] 2xl:h-[74px] 2xl:w-[74px] 2xl:p-[20px]",
                        "transition-[border-color,background-color,box-shadow] duration-300 ease-out",
                        "group-hover:border-purple65 group-hover:bg-purple60/15 group-hover:shadow-[0_0_20px_-4px_color-mix(in_oklab,var(--color-purple60)_55%,transparent)]",
                      )}
                    >
                      {itemsImage[image]}
                    </div>
                    <h4 className="text-[18px] font-semibold transition-colors duration-300 ease-out xl:text-[20px] 2xl:text-[24px] group-hover:text-purple65">
                      {title}
                    </h4>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-grey60 transition-colors duration-300 ease-out xl:text-[16px] 2xl:text-[18px] group-hover:text-grey40">
                      {description}
                    </p>
                  </div>
                  {(index === 0 || index === 2) && (
                    <div className="max-sm:hidden w-[1px] h-[100%] absolute right-[-20px] xl:right-[-24px] 2xl:right-[-30px] bg-grey15"></div>
                  )}
                </div>
              ))}
              <div className="max-sm:hidden sm:w-[calc(100%-48px)] xl:w-[calc(100%-100px)] 2xl:w-[calc(100%-120px)] h-[1px] bg-grey15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
