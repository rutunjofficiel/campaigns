import { Button } from "../ui/button";
import indexIllustration2 from "../../public/images/indexIllustration2.png";
import Image from "next/image";
import HeroFeature from "./heroFeature";
import { emailContent, officielCampaignModules } from "@/app/utils/content";
import Feature from "../(videoSection)/feature";
export default function FeatureSection2() {
  return (
    <div className="m-auto flex flex-col-reverse items-center justify-start py-24 md:flex-row-reverse md:gap-12">
      <div className="flex flex-col items-center gap-4 md:items-start md:gap-12">
        <h1 className="sub-heading lg:text-3xl xl:text-4xl text-center text-[1.2rem] md:text-start md:text-3xl">
          <span className="heading  bg-gradient-to-r from-[#029aff] via-blue-600 to-blue-700 bg-clip-text     text-transparent  ">
            Open. Click. Convert.
          </span>{" "}
          <br /> Make emails work for you with Officiel Mail.
        </h1>

        <ul className="grid grid-cols-2 gap-4 text-[0.8rem]  md:text-[1rem] ">
          {emailContent.map((emailFeature) => (
            <li key={emailFeature.id}>
              <Feature
                feature={emailFeature.feature}
                icon={emailFeature.icon}
              />
            </li>
          ))}
        </ul>
        <Button size="lg" className="w-fit">
          Optimize your email
        </Button>
      </div>
      <div className="lg:m-0 relative m-auto aspect-square w-[60vw] md:w-[32vw]">
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
