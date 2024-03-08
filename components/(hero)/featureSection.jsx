import { Button } from "../ui/button";
import indexIllustration from "../../public/images/indexIllustration.png";
import Image from "next/image";
import HeroFeature from "./heroFeature";
import { officielCampaignModules } from "@/app/utils/content";
export default function FeatureSection() {
  return (
    <div className="  m-auto flex h-max max-w-[64rem] flex-col-reverse items-center   justify-start px-2 py-8  md:flex-row">
      <div className="flex flex-col items-start gap-4 md:gap-10">
        <h1 className="lg:text-3xl xl:text-4xl text-[1rem] font-semibold md:text-3xl">
          Make your learning easy with all these modules, and experience the
          ease of navigation.
        </h1>
        <ul className="text-[0.8rem] md:text-[1rem]">
          {officielCampaignModules.map((feature, index) => (
            <li key={index}>
              <HeroFeature feature={feature} />
            </li>
          ))}
        </ul>
        <Button className="w-fit">Optimize your email</Button>
      </div>
      <div className="lg:m-0 relative m-auto aspect-square w-[94vw] md:w-[80vw]">
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
