import PricingCard from "./pricingCard";

export default function PricingSection() {
  return (
    <div className="flex flex-col items-center gap-8 bg-campaignBlue py-16 lg:gap-16 ">
      <h1 className="text-5xl font-semibold  text-white lg:text-6xl">
        Pricing
      </h1>
      <div className="flex w-full flex-col items-center justify-center transition-all duration-300 lg:flex-row [&>*:nth-child(odd)]:scale-90 [&>*:nth-child(odd)]:opacity-80 hover:[&>*:nth-child(odd)]:scale-100 hover:[&>*:nth-child(odd)]:opacity-100">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}
