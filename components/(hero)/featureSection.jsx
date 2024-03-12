import { Button } from "../ui/button";
import indexIllustration from "../../public/images/indexIllustration.png";
import Image from "next/image";
import HeroFeature from "./heroFeature";
import { officielCampaignModules } from "@/app/utils/content";
import Feature from "../(videoSection)/feature";
export default function FeatureSection() {
  return (
    <div className="m-auto flex h-max flex-col-reverse items-center rounded-2xl py-8 md:flex-row md:justify-start md:py-2">
      <div className="flex flex-col items-center gap-4 md:items-start md:gap-12">
        <h1 className="sub-heading lg:text-3xl xl:text-4xl text-center text-[1.2rem] md:text-start  md:text-3xl  ">
          Make your learning easy with all these modules, and experience the
          ease of navigation.
        </h1>
        <ul className="relative grid grid-cols-3 gap-4 text-[0.8rem] md:text-[1rem]">
          <li key={1}>
            <Feature
              feature={officielCampaignModules[0].feature}
              icon={officielCampaignModules[0].icon}
            />
          </li>
          <li key={2}>
            <Feature
              feature={officielCampaignModules[1].feature}
              icon={officielCampaignModules[1].icon}
            />
          </li>
          <li key={3}>
            <Feature
              feature={officielCampaignModules[2].feature}
              icon={officielCampaignModules[2].icon}
            />
          </li>
          <li key={4}>
            <Feature
              feature={officielCampaignModules[3].feature}
              icon={officielCampaignModules[3].icon}
            />
          </li>
          <li key={5}>
            <Feature
              feature={officielCampaignModules[4].feature}
              icon={officielCampaignModules[4].icon}
            />
          </li>
          <li className="grid-center-placeholder"></li>
        </ul>
        <Button size="lg" className="w-fit">
          Get Started
        </Button>
      </div>
      <div className="lg:m-0 relative m-auto aspect-square w-[60vw] md:w-[50vw]">
        <Image
          fill={true}
          quality={100}
          style={{
            objectFit: "contain",
          }}
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
          src={indexIllustration}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
