import PricingCard from "./pricingCard";

export default function PricingSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-campaignBlue py-8 transition-all duration-300 lg:flex-row [&>*:nth-child(odd)]:scale-90 [&>*:nth-child(odd)]:opacity-80 hover:[&>*:nth-child(odd)]:scale-100 hover:[&>*:nth-child(odd)]:opacity-100">
      <PricingCard />
      <PricingCard />
      <PricingCard />
    </div>
  );
}
