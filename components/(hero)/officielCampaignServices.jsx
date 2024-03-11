import { officielCampaignServices } from "@/app/utils/content";
import WhatWeDoCard from "../(whatWeDo)/whatWeDoCard";
import HeroFeatureCard from "./heroFeatureCard";

export default function OfficielCampaignServices() {
  return (
    <div className="mx-auto flex h-[90vh] flex-col gap-8 align-middle md:max-w-[80vw]">
      <div className="my-auto">
        <div className=" flex flex-col gap-2 text-center  md:items-center">
          <h1 className="text-3xl font-bold">Officiel Campaign Services</h1>
          <p className=" text-xl opacity-90 ">
            Customize your marketing, reach worldwide, and fulfill your
            promises.
          </p>
        </div>
        <div className=" [&>*:nth-child(even)]:bg-campaignBlueDark  [&>*:nth-child(odd)]:bg-campaignBlue  lg:max-w-[80vw] m-auto mt-8 grid w-fit grid-cols-1 justify-center  gap-4 md:grid-cols-3">
          {officielCampaignServices.map((content, index) => (
            <HeroFeatureCard
              key={index}
              feature={content.title}
              featureDescription={content.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
