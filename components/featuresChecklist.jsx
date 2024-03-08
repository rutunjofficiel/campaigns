import Image from "next/image";
import { Button } from "./ui/button";
import HeroFeature from "./(hero)/heroFeature";
import smsIllustration from ".././public/images/smsIllustration.png";
import { officielSMS } from "@/app/utils/content";

import { officielCampaignModules } from "@/app/utils/content";
export default function FeaturesChecklist() {
  return (
    <div className="m-auto flex h-max max-w-[64rem] flex-col-reverse items-center justify-start px-2 py-8  md:flex-row-reverse md:gap-8">
      <div className="flex flex-col items-start gap-4 md:gap-10">
        <h1 className="lg:text-3xl xl:text-4xl text-[1rem] font-semibold md:text-3xl">
          Leave internet worries behind, experience, and use Officiel SMS to
          shoot your shots.
        </h1>
        <ul className="text-[0.8rem] md:text-[1rem]">
          {officielCampaignModules.map((feature, index) => (
            <li key={index}>
              <HeroFeature feature={feature} />
            </li>
          ))}
        </ul>
        <div className="flex w-fit flex-row gap-2">
          <Button className="lg:h-14 lg:rounded-full lg:px-12 lg:text-lg bg-[#029AFF]">
            Try it now
          </Button>
          <Button
            className="lg:h-14 lg:rounded-full lg:px-12 lg:text-lg"
            variant="outline"
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className="lg:m-0 relative m-auto aspect-square w-[94vw] md:w-[80vw]">
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
