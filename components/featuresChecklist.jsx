import Image from "next/image";
import { Button } from "./ui/button";
import HeroFeature from "./(hero)/heroFeature";
import smsIllustration from ".././public/images/smsIllustration.png";
import { officielSMS } from "@/app/utils/content";

export default function FeaturesChecklist() {
  return (
    <div className="  m-auto flex h-max max-w-[64rem] flex-col-reverse items-center   justify-start px-2 py-8  md:flex-row">
      <div className="flex  flex-col gap-4 text-start md:gap-6 ">
        <h1 className="text-3xl font-bold">
          Leave internet worries behind, experience, and use Officiel SMS to
          shoot your shots.
        </h1>
        <div className="flex w-fit flex-row gap-2">
          <Button className="lg:h-14 lg:rounded-full lg:px-12 lg:text-lg bg-[#029AFF]">
            Try it now
          </Button>
          <Button
            className="lg:h-14 lg:rounded-full lg:px-12 lg:text-lg "
            variant="outline"
          >
            Subscribe
          </Button>
        </div>
        <ul className="gap-2 text-[0.8rem] md:text-[1rem]">
          {officielSMS.map((feature, index) => (
            <li key={index}>
              <HeroFeature feature={feature} />
            </li>
          ))}
        </ul>
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
      </div>{" "}
    </div>
  );
}
