import { officielCampaignServices } from "@/app/utils/content";
import WhatWeDoCard from "../(whatWeDo)/whatWeDoCard";
import HeroFeatureCard from "./officielCampaignServices";

export default function OfficielCampaignServices() {
  return (
    <div className="md:mt-16 m-auto md:max-w-[64rem]">
      <div className=" flex flex-col gap-10 text-center  md:items-center">
        <h1 className="text-3xl font-bold">Officiel Campaign Services </h1>
        <p className="max-w-[42rem] text-xl font-medium   leading-normal text-[#00243B] opacity-90 ">
          Customize your marketing, reach worldwide, and fulfill your promises.
        </p>
      </div>
      <div className="lg:max-w-[80vw] m-auto mt-8 grid w-fit grid-cols-1 justify-center  gap-4 md:grid-cols-3">
        {officielCampaignServices.map((content, index) => (
          <HeroFeatureCard
            key={index}
            feature={content.title}
            featureDescription={content.description}
          />
        ))}
      </div>
    </div>
  );
}
