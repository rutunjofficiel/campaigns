"use client";
import Image from "next/image";
import heroImageEmail from "@/public/images/heroImageEmail.png";
import { Button } from "@/components/ui/button";
import Hero from "@/components/email/hero";
import FeatureSection from "@/components/email/featureSection";
import FeatureSection2 from "@/components/email/featureSection2";
import FeatureSection3 from "@/components/email/featureSection3";
import Cta from "@/components/email/cta";
import HeroStats from "@/components/email/heroStats";
import PricingSection from "@/components/whatsapp/pricingSection";

export default function Page() {
  return (
    <>
      <Hero />
      <HeroStats />
      <FeatureSection />
      <FeatureSection2 />
      <FeatureSection3 />
      <Cta />
      <PricingSection />
    </>
  );
}
