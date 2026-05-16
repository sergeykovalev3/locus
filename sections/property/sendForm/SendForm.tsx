import SectionHeader from '@/components/layout/SectionHeader';
import { AUTHOR_GITHUB_URL } from '@/lib/site';
import { ButtonPurple } from '@/components/btns/ButtonPurple';
import FormInput from '@/components/elements/FormInput/FormInput';
import FormTextarea from '@/components/elements/FormTextarea/FormTextarea';

type SendFormProps = {
  locationName: string;
  locationAddress: string;
};

const headerInfo = {
  title: `Inquire About Seaside Serenity Villa`,
  subtitle: `Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.`,
};

export default function SendForm({ locationName, locationAddress }: SendFormProps) {
  const preferredLocation = [locationName, locationAddress].filter(Boolean).join(', ');
  return (
    <div className="py-[40px] xl:py-[60px] 2xl:py-[75px]">
      <div className="container">
        <div className="flex max-md:flex-col gap-[40px] xl:gap-[80px] 2xl:gap-[100px]">
          <div className="max-w-full md:max-w-[320px] xl:max-w-[420px] 2xl:max-w-[520px]">
            <SectionHeader headerInfo={headerInfo} />
          </div>
          <div className="w-full p-[20px] xl:p-[40px] 2xl:p-[50px] border border-grey15 rounded-[12px]">
            <form
              action="#"
              className="grid grid-auto-rows-auto gap-[20px] xl:gap-[30px] 2xl:gap-[50px]"
            >
              <div className="grid xs:grid-cols-2 gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
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
              </div>
              <div className="grid xs:grid-cols-2 gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="email" className="text-[16px] 2xl:text-[20px] font-semibold">
                    Email
                  </label>
                  <FormInput type="email" id="email" name="email" placeholder="Enter your Email" />
                </div>
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label htmlFor="phone" className="text-[16px] 2xl:text-[20px] font-semibold">
                    Phone
                  </label>
                  <FormInput type="tel" id="phone" name="phone" placeholder="Enter Phone Number" />
                </div>
              </div>

              <div className="grid gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
                <div className="flex flex-col items-start gap-[10px] xl:gap-[14px] 2xl:gap-[16px]">
                  <label
                    htmlFor="preferredLocation"
                    className="text-[16px] 2xl:text-[20px] font-semibold"
                  >
                    Preferred Location
                  </label>
                  <div className="relative w-full">
                    <FormInput
                      type="text"
                      id="preferredLocation"
                      name="preferredLocation"
                      value={preferredLocation}
                      readOnly
                      className="cursor-default bg-grey08 pr-[48px] hover:border-grey15! focus:border-grey15! focus:ring-0!"
                    />
                    <span className="absolute right-[16px] top-1/2 -translate-y-1/2 shrink-0 w-[20px] h-[20px] flex items-center justify-center text-grey60 pointer-events-none">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 17 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.78975 20.101C7.81995 20.1185 7.84369 20.1321 7.8605 20.1415L7.88843 20.1571C8.1113 20.2794 8.38776 20.2785 8.61084 20.1575L8.6395 20.1415C8.65631 20.1321 8.68005 20.1185 8.71025 20.101C8.77066 20.066 8.85697 20.015 8.9655 19.9482C9.18246 19.8146 9.48875 19.6176 9.85461 19.3591C10.5851 18.8431 11.5597 18.0774 12.5365 17.0773C14.4807 15.0868 16.5 12.0962 16.5 8.25C16.5 3.69365 12.8063 0 8.25 0C3.69365 0 0 3.69365 0 8.25C0 12.0962 2.01932 15.0868 3.96346 17.0773C4.94025 18.0774 5.91491 18.8431 6.64539 19.3591C7.01125 19.6176 7.31754 19.8146 7.5345 19.9482C7.64303 20.015 7.72934 20.066 7.78975 20.101ZM8.25 11.25C9.90685 11.25 11.25 9.90685 11.25 8.25C11.25 6.59315 9.90685 5.25 8.25 5.25C6.59315 5.25 5.25 6.59315 5.25 8.25C5.25 9.90685 6.59315 11.25 8.25 11.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
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
                <ButtonPurple className="sm:ml-auto">Send Your Message</ButtonPurple>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
