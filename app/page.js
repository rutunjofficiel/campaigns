import Benefits from "@/components/(benefits)/benefits";
import FeatureSection from "@/components/(hero)/featureSection";
import FeatureSection2 from "@/components/(hero)/featureSection2";
import WhatWeDo from "@/components/(hero)/officielCampaignServices";
import VideoSection from "@/components/(videoSection)/videoSection";
import CtaBottom from "@/components/cta-bottom";
import FeaturesChecklist from "@/components/featuresChecklist";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <>
      <div className="m-auto flex w-[85%] flex-col justify-center gap-8">
        <Navbar />
        <Hero />

        <FeatureSection />
      </div>
      <div className="bg-[#f3f3f3]">
        <FeatureSection2 />
      </div>
      <div className="m-auto flex w-[85%] flex-col justify-center gap-8">
        <WhatWeDo />
        <VideoSection />
        <FeaturesChecklist />

        <Benefits />
      </div>
      <div className="bg-campaignBlue mt-24 flex w-full flex-col  gap-8">
        <CtaBottom />
      </div>

      <Footer />
    </>
  );
}
