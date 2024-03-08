import { Button } from "../ui/button";
import indexIllustration2 from "../../public/images/indexIllustration2.png";
import Image from "next/image";
import { email } from "@/app/utils/content";
import HeroFeature from "./heroFeature";

export default function FeatureSection2() {
  return (
    <div className="m-auto flex h-max max-w-[64rem] flex-col-reverse items-center justify-start bg-[#F3F3F3] px-2 py-8 md:flex-row-reverse md:gap-8">
      <div className="flex flex-col items-start gap-4 md:gap-10">
        <h1 className="lg:text-3xl xl:text-4xl text-[1.2rem] font-semibold md:text-3xl">
          Open. Click. Convert. Make emails work for you with Officiel Mail.
        </h1>
        <ul className="text-[0.8rem] md:text-[1rem]">
          {email.map((emailFeature, index) => (
            <li key={index}>
              <HeroFeature feature={emailFeature} />
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
