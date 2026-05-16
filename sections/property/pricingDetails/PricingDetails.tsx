'use client';

import { ButtonDark } from '@/components/btns/BtnDark';
import SectionHeader from '@/components/layout/SectionHeader';

type PricingDetailsType = {
  propertyName: string;
  price: string;
  additionalFees: {
    propertyTransferTax: string;
    legalFees: string;
    homeInspection: string;
    propertyInsurance: string;
    mortgageFees: string;
  };
  monthlyCosts: {
    propertyTaxes: string;
    homeownersAssociationFee: string;
  };
  totalInitialCosts: {
    listingPrice: string;
    additionalFees: string;
    downPayment: string;
    mortgageAmount: string;
  };
  monthlyExpenses: {
    propertyTaxes: string;
    homeownersAssociationFee: string;
    mortgagePayment: string;
    propertyInsurance: string;
  };
};

function getHeaderInfo(propertyName: string) {
  return {
    title: 'Comprehensive Pricing Details',
    subtitle: `At Locus, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for ${propertyName} to help you make an informed decision`,
  };
}

function PricingDetailsItemRowAdditionalInfo({ value }: { value: string }) {
  return (
    <span className="px-[12px] 2xl:px-[14px] py-[6px] 2xl:py-[8px] bg-grey15 rounded-[6px] xl:rounded-[28px] text-[14px] 2xl:text-[18px] font-medium text-grey60">
      {value}
    </span>
  );
}

function PricingDetailsItemRowItem({
  title,
  value,
  additionalInfo,
}: {
  title: string;
  value: string;
  additionalInfo?: string;
}) {
  return (
    <div className="w-full flex flex-col gap-[10px] xl:gap-[12px] 2xl:gap-[16px]">
      <span className="text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium text-grey60">
        {title}
      </span>
      <div className="flex items-center gap-[12px] 2xl:gap-[16px]">
        <span className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">{value}</span>
        {additionalInfo && <PricingDetailsItemRowAdditionalInfo value={additionalInfo} />}
      </div>
    </div>
  );
}

function PricingDetailsItemRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-md:flex-col gap-[20px] xl:gap-[30px] 2xl:gap-[40px]">{children}</div>
  );
}

function PricingDetailsItemDivider() {
  return <div className="w-full h-[1px] bg-grey15"></div>;
}

function PricingDetailsItem({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col gap-[20px] xl:gap-[30px] 2xl:gap-[40px] p-[20px] xl:p-[40px] 2xl:p-[50px] border border-grey15 rounded-[12px]">
      <div className="flex items-center justify-between gap-[40px]">
        <span className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">{title}</span>
        <ButtonDark href={href}>Learn more</ButtonDark>
      </div>
      <PricingDetailsItemDivider />
      <div className="flex flex-col gap-[20px] xl:gap-[30px] 2xl:gap-[40px]">{children}</div>
    </div>
  );
}

export default function PricingDetails({
  propertyName,
  price,
  additionalFees,
  monthlyCosts,
  totalInitialCosts,
  monthlyExpenses,
}: PricingDetailsType) {
  return (
    <div className="pt-[20px] 2xl:pt-[30px] pb-[40px] xl:pb-[60px] 2xl:pb-[75px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="mt-[40px] xl:mt-[60px] 2xl:mt-[80px]">
            <SectionHeader headerInfo={getHeaderInfo(propertyName)} />
          </div>
          <div className="flex max-md:flex-col md:items-center gap-[20px] xl:gap-[32px] 2xl:gap-[40px] mt-[30px] xl:mt-[40px] 2xl:mt-[50px] px-[20px] xl:px-[40px] 2xl:px-[50px] py-[24px] xl:py-[20px] 2xl:py-[30px] rounded-[8px] 2xl:rounded-[12px] bg-grey10 border border-grey15">
            <div className="relative">
              <span className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">Note</span>
              <span className="pointer-events-none absolute bottom-[-10px] md:top-0 max-md:left-0 md:-right-[10px] xl:-right-[16px] 2xl:-right-[20px] w-full md:w-[2px] h-[1px] md:h-[100%] bg-grey15"></span>
            </div>
            <span className="text-[14px] 2xl:text-[18px] font-medium text-grey60">
              The figures provided above are estimates and may vary depending on the property,
              location, and individual circumstances.
            </span>
          </div>
          <div className="flex max-md:flex-col gap-[20px] xl:gap-[40px] 2xl:gap-[50px] mt-[20px] xl:mt-[40px] 2xl:mt-[50px]">
            <div className="flex flex-col gap-[2px]">
              <span className="text-[14px] xl:text-[16px] 2xl:text-[20px] font-medium text-grey60">
                Listing Price
              </span>
              <span className="text-[24px] xl:text-[30px] 2xl:text-[40px] font-semibold">
                {price}
              </span>
            </div>
            <div className="w-full flex flex-col gap-[20px] xl:gap-[40px] 2xl:gap-[50px]">
              <PricingDetailsItem title="Additional Fees" href="/contact">
                <PricingDetailsItemRow>
                  <PricingDetailsItemRowItem
                    title="Property Transfer Tax"
                    value={additionalFees.propertyTransferTax}
                    additionalInfo="Based on the sale price and local regulations"
                  />
                  <div className="max-md:w-full md:w-[2px] max-md:h-[1px] self-stretch bg-grey15 shrink-0"></div>
                  <PricingDetailsItemRowItem
                    title="Legal Fees"
                    value={additionalFees.legalFees}
                    additionalInfo="Approximate cost for legal services, including title transfer"
                  />
                </PricingDetailsItemRow>
                <PricingDetailsItemDivider />
                <PricingDetailsItemRow>
                  <PricingDetailsItemRowItem
                    title="Home Inspection"
                    value={additionalFees.homeInspection}
                    additionalInfo="Recommended for due diligence"
                  />
                  <div className="max-md:w-full md:w-[2px] max-md:h-[1px] self-stretch bg-grey15 shrink-0"></div>
                  <PricingDetailsItemRowItem
                    title="Property Insurance"
                    value={additionalFees.propertyInsurance}
                    additionalInfo="Annual cost for comprehensive property insurance"
                  />
                </PricingDetailsItemRow>
                <PricingDetailsItemDivider />
                <PricingDetailsItemRow>
                  <PricingDetailsItemRowItem
                    title="Mortgage Fees"
                    value={additionalFees.mortgageFees}
                    additionalInfo="If applicable, consult with your lender for specific details"
                  />
                </PricingDetailsItemRow>
              </PricingDetailsItem>
              <PricingDetailsItem title="Monthly Costs" href="/contact">
                <PricingDetailsItemRow>
                  <PricingDetailsItemRowItem
                    title="Property Taxes"
                    value={monthlyCosts.propertyTaxes}
                    additionalInfo="Approximate monthly property tax based on the sale price and local rates"
                  />
                </PricingDetailsItemRow>
                <PricingDetailsItemDivider />
                <PricingDetailsItemRow>
                  <PricingDetailsItemRowItem
                    title="Homeowners' Association Fee"
                    value={monthlyCosts.homeownersAssociationFee}
                    additionalInfo="Monthly fee for common area maintenance and security"
                  />
                </PricingDetailsItemRow>
              </PricingDetailsItem>
              <PricingDetailsItem title="Total Initial Costs" href="/contact">
                <PricingDetailsItemRow>
                  <PricingDetailsItemRowItem
                    title="Listing Price"
                    value={totalInitialCosts.listingPrice}
                  />
                  <div className="max-md:w-full md:w-[2px] max-md:h-[1px] self-stretch bg-grey15 shrink-0"></div>
                  <PricingDetailsItemRowItem
                    title="Additional Fees"
                    value={totalInitialCosts.additionalFees}
                    additionalInfo="Property transfer tax, legal fees, inspection, insurance"
                  />
                </PricingDetailsItemRow>
                <PricingDetailsItemDivider />
                <PricingDetailsItemRow>
                  <PricingDetailsItemRowItem
                    title="Down Payment"
                    value={totalInitialCosts.downPayment}
                    additionalInfo="20%"
                  />
                  <div className="max-md:w-full md:w-[2px] max-md:h-[1px] self-stretch bg-grey15 shrink-0"></div>
                  <PricingDetailsItemRowItem
                    title="Mortgage Amount"
                    value={totalInitialCosts.mortgageAmount}
                    additionalInfo="If applicable"
                  />
                </PricingDetailsItemRow>
              </PricingDetailsItem>
              <PricingDetailsItem title="Monthly Expenses" href="/contact">
                <PricingDetailsItemRow>
                  <PricingDetailsItemRowItem
                    title="Property Taxes"
                    value={monthlyExpenses.propertyTaxes}
                  />
                  <div className="max-md:w-full md:w-[2px] max-md:h-[1px] self-stretch bg-grey15 shrink-0"></div>
                  <PricingDetailsItemRowItem
                    title="Homeowners' Association Fee"
                    value={monthlyExpenses.homeownersAssociationFee}
                  />
                </PricingDetailsItemRow>
                <PricingDetailsItemDivider />
                <PricingDetailsItemRow>
                  <PricingDetailsItemRowItem
                    title="Mortgage Payment"
                    value={monthlyExpenses.mortgagePayment}
                    additionalInfo="If applicable"
                  />
                  <div className="max-md:w-full md:w-[2px] max-md:h-[1px] self-stretch bg-grey15 shrink-0"></div>
                  <PricingDetailsItemRowItem
                    title="Property Insurance"
                    value={monthlyExpenses.propertyInsurance}
                    additionalInfo="Approximate monthly cost"
                  />
                </PricingDetailsItemRow>
              </PricingDetailsItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
