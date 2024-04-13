"use client";
import Image from "next/image";
import featureSection3 from "../../public/images/featureSection3.png";
import { Button } from "../ui/button";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function FeatureSection3() {
  return (
    <div className="mx-auto w-[94%] py-8 md:w-[90%] lg:py-12">
      <div className="mx-auto h-full">
        <div className="my-16 flex w-full flex-col items-center gap-6 lg:grid lg:h-min lg:grid-cols-2 lg:justify-between  lg:gap-0 ">
          <div className="relative mx-auto aspect-[5/4] w-[85%]">
            <div className="absolute inset-0 z-20 aspect-[5/4] w-full">
              <Image
                src={featureSection3}
                fill={true}
                style={{
                  objectFit: "contain",
                }}
                alt="backdrop"
              />
            </div>
            <div className="border-1 absolute bottom-0 z-10 aspect-[4/3] h-full w-full rounded-2xl border-campaignBlue bg-[#DDF1FF] "></div>
          </div>
          <div className="flex flex-col gap-8 lg:gap-10">
            <h2 className="sub-heading ">
              Everything you need to Send WhatsApps
            </h2>
            <p className="leading-tighter text-lg opacity-90">
              Sending and receiving WhatsApp messages was never so easy before.
              We offer a high quality service with a fair pricing.
            </p>
            <ul className="grid grid-cols-2 gap-2 ">
              {features.map((feature) => {
                return (
                  <p className="text-md flex flex-row items-center gap-1 lg:text-lg">
                    <IoCheckmarkCircleOutline
                      size={24}
                      className="text-campaignBlue"
                    />
                    {feature}
                  </p>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  "Poweful API",
  "Full Privacy",
  "High Availability",
  "Easy Payment",
  "SSL Protected",
  "Automatic Updates",
];
