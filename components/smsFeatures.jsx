import Image from "next/image";
import { Button } from "./ui/button";
import HeroFeature from "./(hero)/heroFeature";
import smsIllustration from ".././public/images/smsIllustration.png";
import { officielSMS } from "@/app/utils/content";

import { officielCampaignModules } from "@/app/utils/content";
import Feature from "./(videoSection)/feature";
export default function SMSFeatures() {
  return (
    <div className="m-auto flex h-max flex-col-reverse items-center justify-start px-2 py-8  md:flex-row-reverse md:gap-8">
      <div className="flex flex-col items-center gap-4  md:items-start md:gap-10">
        <h1 className="sub-heading lg:text-3xl xl:text-4xl text-center text-[1.2rem] md:text-start  md:text-3xl  ">
          Leave internet worries behind, experience, and use{" "}
          <span className="heading  bg-gradient-to-r from-[#029aff] via-purple-600 to-purple-700 bg-clip-text     text-transparent  ">
            Officiel SMS{" "}
          </span>{" "}
          to shoot your shots.
        </h1>
        <ul className="grid  grid-cols-2 gap-4 text-[0.8rem] md:text-[1rem] ">
          {officielSMS.map((feature, index) => (
            <li key={index}>
              <Feature icon={feature.icon} feature={feature.feature} />
            </li>
          ))}
        </ul>
        <div className="flex w-fit flex-row gap-2">
          <Button size="lg">Try it now</Button>
          <Button size="lg" variant="outline">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="lg:m-0 relative m-auto aspect-square w-[60vw] md:w-[50vw]">
        <Image
          fill={true}
          quality={100}
          style={{
            objectFit: "contain",
          }}
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
          src={smsIllustration}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
