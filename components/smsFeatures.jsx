import Image from "next/image";
import { Button } from "./ui/button";
import HeroFeature from "./(hero)/heroFeature";
import smsIllustration from ".././public/images/smsIllustration.png";
import { officielSMS } from "@/app/utils/content";

import { officielCampaignModules } from "@/app/utils/content";
import Feature from "./(videoSection)/feature";
export default function SMSFeatures() {
  return (
    <div className="m-auto flex w-full flex-col items-center justify-around py-8   lg:flex-row lg:items-stretch  ">
      <div className="image-container">
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
      <div className="flex w-fit flex-col items-center gap-4 md:gap-8  lg:w-[50%] lg:items-start lg:gap-16">
        <h2 className="sub-heading ">
          Leave internet worries behind, experience, and use{" "}
          <span className="bg-gradient-to-r  from-[#029aff] via-blue-600 to-blue-700 bg-clip-text text-transparent">
            Officiel SMS
          </span>{" "}
          to shoot your shots.
        </h2>{" "}
        <ul class=" grid-cols-auto grid gap-1  text-sm md:gap-5   lg:grid-cols-2 ">
          {officielSMS.map((feature, id) => (
            <li key={id}>
              <Feature feature={feature.feature} icon={feature.icon} />
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
    </div>
  );
}
