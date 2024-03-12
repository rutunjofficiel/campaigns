import Benefits from "@/components/(benefits)/benefits";
import FeatureSection from "@/components/(hero)/featureSection";
import FeatureSection2 from "@/components/(hero)/featureSection2";
import WhatWeDo from "@/components/(hero)/officielCampaignServices";
import VideoSection from "@/components/(videoSection)/videoSection";
import CtaBottom from "@/components/cta-bottom";
import FeaturesChecklist from "@/components/featuresChecklist";
import Footer from "@/components/footer";
import Hero from "@/components/(hero)/hero";
import Navbar from "@/components/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="m-auto flex max-w-[95%] flex-col justify-center gap-28 md:mb-20 md:w-[85%] ">
        <Hero />
        <FeatureSection />
      </div>
      <div className="max-w-[100vw] bg-[#f3f3f3] md:my-28">
        <div className="m-auto flex max-w-[95%] flex-col justify-center md:w-[85%]">
          <FeatureSection2 />
        </div>
      </div>
      <div className="m-auto my-24 flex w-[95%]  max-w-[100vw] flex-col justify-center md:mb-20 md:w-[85%] md:gap-20">
        <VideoSection />
        <FeaturesChecklist />
        <Benefits />
      </div>
      <div className="bg-campaignBlue py-18 mt-24 flex w-full flex-col  md:py-28">
        <CtaBottom />
      </div>
      <Footer />
    </>
  );
}
