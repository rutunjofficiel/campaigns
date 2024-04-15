"use client";
import Image from "next/image";
import heroImageEmail from "@/public/images/heroImageEmail.png";
import { Button } from "@/components/ui/button";
import Hero from "@/components/email/hero";
import HeroStats from "@/components/email/heroStats"
export default function Page() {
  return (
    <>
      <Hero />
      <HeroStats />
      
    </>
  );
}
