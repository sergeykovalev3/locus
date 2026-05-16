type IntroShortProps = {
  title: string;
  description: string;
};

export default function IntroShort({ title, description }: IntroShortProps) {
  return (
    <div className="py-[50px] xl:pt-[100px] xl:pb-[130px] xl:pt-[150px] xl:pb-[160px] border-b border-grey15 bg-[linear-gradient(64deg,rgba(38,38,38,1)_0%,rgba(38,38,38,0)_53%,rgba(38,38,38,0)_100%))]">
      <div className="container">
        <div className="">
          <div className="xl:max-w-[1160px] 2xl:max-w-[1400px] flex flex-col gap-[10px] 2xl:gap-[14px]">
            <h1 className="text-[28px] md:text-[38px] xl:text-[48px] font-semibold">{title}</h1>
            <p className="text-[14px] md:text-[16px] xl:text-[18px] font-medium text-grey60">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
