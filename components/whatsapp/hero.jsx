import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Companies from "@/components/whatsapp/companies";
import netflix from "@/public/images/whatsappLogos/netflix.png";
import amazon from "@/public/images/whatsappLogos/amazon.png";
import forbes from "@/public/images/whatsappLogos/forbes.png";
import entrepreneur from "@/public/images/whatsappLogos/entrepreneur.png";
import sej from "@/public/images/whatsappLogos/sej.png";
import heroBackdrop from "@/public/images/heroBackdrop.png";
import FeatureSection1 from "@/components/whatsapp/featureSection1";
import whatsappHero from "@/public/images/whatsappHero.png";

import Image from "next/image";
export default function Hero() {
  return (
    <div className="mx-auto flex w-[94%] flex-col items-center md:w-[90%]  lg:items-start">
      <div className="mx-auto my-16 flex flex-col justify-center gap-3 align-middle lg:flex-row lg:items-center">
        <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:gap-12 lg:text-start">
          <h1 className=" text-[48px] font-medium leading-tight tracking-tighter lg:text-[80px]">
            WhatsApp API For Everyone
          </h1>
          <p className="line-clamp-4 text-xl tracking-wide opacity-90">
            We offer a simple and performant API to interact with WhatsApp.
            Connect your personal WhatsApp phone number with our service and be
            able to control WhatsApp automatically via HTTP requests.
          </p>
          <div className="flex w-fit flex-col gap-2 lg:flex-row ">
            <Button size="lg">Get Started</Button>
            <Button size="lg" className="bg-[#32d851]">
              <Plus /> Link you Whatsapp Account
            </Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full ">
          <div className="absolute inset-0 aspect-square w-full">
            <Image
              src={heroBackdrop}
              fill={true}
              style={{
                objectFit: "contain",
              }}
              alt="backdrop"
            />
          </div>
          <div className="absolute bottom-0 aspect-[4/3] w-full ">
            <Image
              src={whatsappHero}
              fill={true}
              style={{
                objectFit: "contain",
              }}
              alt="hero-whatsapp"
            />
          </div>
        </div>
      </div>

      {/* <div className="flex w-full flex-col items-center gap-4">
        <h1 className="sub-heading">
          Trusted by leading consumer brands globally
        </h1>
        <div className="grid w-full grid-cols-2 gap-3 rounded-md bg-[#E5F5FF] px-3 py-2 shadow-lg    md:grid-cols-5 md:grid-rows-1 lg:w-[90%] ">
          <div className="relative mx-auto aspect-video w-[120px] md:w-[100px] lg:w-[120px] ">
            <Image
              src={forbes}
              fill={true}
              style={{
                objectFit: "contain",
              }}
              alt="forbes-logo"
            />
          </div>
          <div className="relative  mx-auto aspect-video w-[120px] md:w-[100px] lg:w-[120px]">
            <Image
              src={sej}
              fill={true}
              style={{
                objectFit: "contain",
              }}
              alt="forbes-logo"
            />
          </div>
          <div className="relative  mx-auto aspect-video w-[120px]  md:w-[100px] lg:w-[120px]">
            <Image
              src={entrepreneur}
              fill={true}
              style={{
                objectFit: "contain",
              }}
              alt="forbes-logo"
            />
          </div>
          <div className="relative mx-auto aspect-video w-[120px]  md:w-[100px] lg:w-[120px]">
            <Image
              src={amazon}
              fill={true}
              style={{
                objectFit: "contain",
              }}
              alt="forbes-logo"
            />
          </div>
          <div className="relative col-span-2 mx-auto aspect-video w-[120px] md:col-span-1 md:w-[100px] lg:w-[120px]">
            <Image
              src={netflix}
              fill={true}
              style={{
                objectFit: "contain",
              }}
              alt="forbes-logo"
            />
          </div>
        </div>
      </div> */}
      <Companies />
    </div>
  );
}
