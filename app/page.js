import FeatureSection from "@/components/(hero)/featureSection";
import FeatureSection2 from "@/components/(hero)/featureSection2";
import WhatWeDo from "@/components/(hero)/whatWeDo";
import VideoSection from "@/components/(videoSection)/videoSection";
import FeaturesChecklist from "@/components/featuresChecklist";
import Hero from "@/components/hero";

export default function Page() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <div className="w-full bg-[#F3F3F3]">
        <FeatureSection2 />
      </div>
      <WhatWeDo />
      <VideoSection />
      <FeaturesChecklist />
    </>
  );
}
