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
    <div className="m-auto flex flex-col justify-center gap-8">
      <Navbar />
      <Hero />
      <div className=" w-full">
        <FeatureSection />
      </div>
      <div className="w-full bg-[#F3F3F3]">
        <FeatureSection2 />
      </div>
      <WhatWeDo />
      <VideoSection />
      <FeaturesChecklist />
      <Benefits />
      <div className="relative w-full bg-[#029AFF] py-16 ">
        <CtaBottom />
      </div>
    </div>
  );
}
