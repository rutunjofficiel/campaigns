import Hero from "@/components/sms/hero";
import HeroFeatures from "@/components/sms/heroFeatures";
import SMSFeatureSection1 from "@/components/sms/smsFeatureSection1";
import SMSFeatureSection2 from "@/components/sms/smsFeatureSection2";
import SMSFeatureSection3 from "@/components/sms/smsFeatureSection3";
import PricingSection from "@/components/whatsapp/pricingSection";
export default function Page() {
  return (
    <div>
      <Hero />
      <HeroFeatures />
      <SMSFeatureSection1 />
      <SMSFeatureSection2 />
      <SMSFeatureSection3 />
      <PricingSection />
    </div>
  );
}
