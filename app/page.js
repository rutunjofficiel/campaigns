import Benefits from "@/components/(benefits)/benefits";
import FeatureSection from "@/components/(hero)/featureSection";
import FeatureSection2 from "@/components/(hero)/featureSection2";
import WhatWeDo from "@/components/(hero)/fficielCampaignServices";
import VideoSection from "@/components/(videoSection)/videoSection";
import CtaBottom from "@/components/cta-bottom";
import FeaturesChecklist from "@/components/featuresChecklist";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <div className=" flex flex-col justify-center gap-8">
      <Navbar />
      <Hero />
      <div className="flex w-full flex-col justify-center gap-12">
        <FeatureSection />
        <div className="w-full bg-[#F3F3F3]">
          <FeatureSection2 />
        </div>
        <WhatWeDo />
        <VideoSection />
        <div className="w-full ">
          <FeaturesChecklist />
        </div>
        <Benefits />
      </div>
      <div className="relative mt-24 w-full bg-[#029AFF] py-16 ">
        <CtaBottom />
      </div>
    </div>
  );
}
