import { Button } from "../ui/button";
import indexIllustration2 from "../../public/images/indexIllustration2.png";
import Image from "next/image";
import HeroFeature from "./heroFeature";
import { emailContent, officielCampaignModules } from "@/app/utils/content";
export default function FeatureSection2() {
  return (
    <div className="m-auto flex w-[85%]   flex-col-reverse items-center justify-start   py-8 md:flex-row-reverse">
      <div className="flex flex-col items-start gap-4 md:gap-10">
        <h1 className="lg:text-3xl xl:text-4xl text-[1rem] font-semibold md:text-3xl">
          Open. Click. Convert. Make emails work for you with Officiel Mail.
        </h1>
        <ul className="grid grid-cols-2  text-[0.8rem]  md:text-[1rem] ">
          {emailContent.map((emailFeature) => (
            <li key={emailFeature.id}>
              <HeroFeature
                feature={emailFeature.feature}
                icon={emailFeature.icon}
              />
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
          src={indexIllustration2}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
