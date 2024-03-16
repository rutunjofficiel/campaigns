import { Button } from "../ui/button";
import indexIllustration2 from "../../public/images/indexIllustration2.png";
import Image from "next/image";
import indexIllustration from "../../public/images/indexIllustration.png";

import HeroFeature from "./heroFeature";
import { emailContent, officielCampaignModules } from "@/app/utils/content";
import Feature from "../(videoSection)/feature";
import { Check } from "lucide-react";
export default function FeatureSection2() {
  return (
    <div className="m-auto flex w-full flex-col-reverse items-center justify-around rounded-2xl bg-slate-200 bg-opacity-75 px-1  py-8   shadow-sm md:px-3 md:py-2 lg:flex-row lg:items-stretch lg:py-12">
      <div className="flex w-fit flex-col items-center gap-4 md:gap-8  lg:w-[50%] lg:items-start ">
        {/* <div className="flex flex-col gap-8"> */}
        <h2 className="sub-heading">
          <span className="bg-gradient-to-r from-[#029aff] via-blue-600 to-blue-700 bg-clip-text text-transparent">
            Open. Click. Convert.
          </span>
          <br />
          Make emails work for you with Officiel Mail.
        </h2>
        <ul className=" grid w-full grid-cols-2   gap-1 text-sm md:gap-5 md:text-base lg:grid-cols-2">
          {emailContent.map((feature, id) => (
            <li key={id}>
              <Feature feature={feature.feature} icon={feature.icon} />
            </li>
          ))}
        </ul>
        {/* </div> */}
        <Button size="xl" className="w-fit">
          Get Started
        </Button>
      </div>

      <div className="image-container ">
        <Image
          fill={true}
          quality={100}
          style={{
            objectFit: "contain",
          }}
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
          src={indexIllustration2}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
