import Benefits from "@/components/(benefits)/benefits";
import FeatureSection from "@/components/(hero)/featureSection";
import FeatureSection2 from "@/components/(hero)/featureSection2";
import WhatWeDo from "@/components/(hero)/officielCampaignServices";
import VideoSection from "@/components/(videoSection)/videoSection";
import CtaBottom from "@/components/cta-bottom";
import FeaturesChecklist from "@/components/smsFeatures";
import Footer from "@/components/footer";
import Hero from "@/components/(hero)/hero";
import indexIllustration from "../public/images/indexIllustration.png";

import Navbar from "@/components/navbar";
import SMSFeatures from "@/components/smsFeatures";
import Image from "next/image";
import OfficielCampaignServices from "@/components/(hero)/officielCampaignServices";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="m-auto flex w-[95%] flex-col justify-center gap-28 md:mb-20 md:w-[90%] ">
        <Hero />
        <FeatureSection />
        <FeatureSection2 />
        <VideoSection />
        <OfficielCampaignServices />
        <SMSFeatures />
        <Benefits />
        <div className="m-auto flex w-[80%] flex-col rounded-3xl bg-campaignBlue">
          <CtaBottom />
        </div>
      </div>
      <Footer />
    </>
  );
}
