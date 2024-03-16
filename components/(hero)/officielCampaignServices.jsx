import { officielCampaignServices } from "@/app/utils/content";
import WhatWeDoCard from "../(whatWeDo)/whatWeDoCard";
import HeroFeatureCard from "./heroFeatureCard";
import ServiceCard from "./serviceCard";

export default function OfficielCampaignServices() {
  return (
    <section
      id="services"
      className="mx-auto  flex flex-col items-center gap-8 align-middle md:max-w-[80vw] lg:my-24"
    >
      <div className=" flex flex-col gap-2 text-center md:items-center">
        <div className="flex flex-col text-center md:items-center lg:gap-4">
          <span className="campaign-gradient sub-heading-lg">
            Officiel Campaign Services
          </span>{" "}
          <h1 className="sub-title lg:w-3/4 ">
            Customize your marketing, reach worldwide, and fulfill your
            promises.
          </h1>
        </div>
      </div>
      <div className="m-auto mt-8 grid w-fit grid-cols-1 justify-center gap-2 md:grid-cols-2 md:gap-4 lg:max-w-[80vw] lg:grid-cols-3">
        {officielCampaignServices.map((content, index) => (
          <ServiceCard
            key={index}
            icon={content.icon}
            service={content.title}
            serviceDescription={content.description}
          />
        ))}
      </div>
    </section>
  );
}
