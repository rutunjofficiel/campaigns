import { Button } from "../ui/button";
import indexIllustration from "../../public/images/indexIllustration.png";
import Image from "next/image";
import HeroFeature from "./heroFeature";
import { officielCampaignModules } from "@/app/utils/content";
import Feature from "../(videoSection)/feature";

export default function FeatureSection() {
  return (
    <div className="flex w-full flex-col items-center py-8   md:py-2 lg:flex-row lg:justify-around lg:py-12">
      <div className="image-container">
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
      <div className="flex flex-col items-center gap-8 lg:w-[50%]  lg:items-start">
        <h2 className="sub-heading ">
          Make your learning easy with all these modules, and experience the
          ease of navigation.
        </h2>

        <ul class=" grid-cols-auto grid w-full grid-cols-2 gap-1 text-sm md:gap-5 md:text-base lg:grid-cols-2">
          {officielCampaignModules.map((feature, id) => (
            <li key={id}>
              <Feature feature={feature.feature} icon={feature.icon} />
            </li>
          ))}
        </ul>
        <Button size="lg" className="w-fit">
          Get Started
        </Button>
      </div>
    </div>
  );
}
