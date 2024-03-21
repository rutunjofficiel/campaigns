import Benefits from "@/components/(benefits)/benefits";
import FeatureSection from "@/components/(hero)/featureSection";
import FeatureSection2 from "@/components/(hero)/featureSection2";
import VideoSection from "@/components/(videoSection)/videoSection";
import CtaBottom from "@/components/cta-bottom";
import Hero from "@/components/(hero)/hero";

import SMSFeatures from "@/components/smsFeatures";
import OfficielCampaignServices from "@/components/(hero)/officielCampaignServices";

export default function Page() {
  return (
    <>
      <div className="m-auto flex w-[98%] flex-col justify-center gap-28 scroll-smooth md:w-[90%]">
        <Hero />
        <FeatureSection />
        <FeatureSection2 />
        <VideoSection />

        <OfficielCampaignServices />
        <SMSFeatures />
        <Benefits />
        <CtaBottom />
      </div>
    </>
  );
}
