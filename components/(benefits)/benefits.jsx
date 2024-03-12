import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import indexIllustration from "../../public/images/indexIllustration.png";
import { boostContent } from "@/app/utils/content";
import BenefitCard from "./benefitCard";
import boostIllustration from "../../public/images/boostIllustration.png";

export default function Benefits() {
  return (
    <div className="m-auto flex h-max flex-col-reverse items-center justify-center md:flex-row">
      <div className="flex  flex-col gap-4 text-start items-center md:gap-6 ">
        <h1 className="sub-heading lg:text-3xl xl:text-4xl text-center text-[1.2rem] md:text-start  md:text-3xl  ">
          With{" "}
          <span className="heading  bg-gradient-to-r from-[#029aff] via-blue-600 to-blue-700 bg-clip-text     text-transparent  ">
            Officiel{" "}
          </span>
          , boost your business growth, and experience maximum revenue.
        </h1>

        {boostContent.map((benefit, index) => {
          return <BenefitCard benefit={benefit} key={index} />;
        })}
      </div>
      <div className="lg:m-0 relative m-auto h-[50vh] w-[70vw]">
        <Image
          fill={true}
          quality={100}
          style={{
            objectFit: "contain",
          }}
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
          src={boostIllustration}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
