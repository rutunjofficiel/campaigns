import { officielCampaignServices } from "@/app/utils/content";
import WhatWeDoCard from "../(whatWeDo)/whatWeDoCard";

export default function OfficielCampaignServices() {
  return (
    <>
      <div className="m-auto flex max-w-[42rem] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold">Officiel Campaign Services </h1>
        <p className="w-10/12 text-xl">
          Customize your marketing, reach worldwide, and fulfill your promises.
        </p>
      </div>
      <div className=" mx-auto grid grid-cols-2 justify-center gap-2 md:max-w-[64rem]  md:grid-cols-3 md:gap-4 ">
        {officielCampaignServices.map((content, index) => (
          <WhatWeDoCard
            key={index}
            title={content.title}
            description={content.description}
          />
        ))}
      </div>
    </>
  );
}
