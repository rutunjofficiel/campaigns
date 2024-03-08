import { CardBody, CardTitle } from "react-bootstrap";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import indexIllustration from "../../public/images/indexIllustration.png";
import { boostContent } from "@/app/utils/content";
import BenefitCard from "./benefitCard";
import boostIllustration from "../../public/images/boostIllustration.png";

export default function Benefits({ benefit, benefitDescription }) {
  return (
    <div className="m-auto flex h-max max-w-[64rem] flex-col-reverse items-center justify-center md:flex-row">
      <div className="flex  flex-col gap-4 text-start md:gap-6 ">
        <h1 className="lg:text-3xl xl:text-4xl text-[1rem] font-semibold md:text-3xl">
          With Officiel, boost your business growth, and experience maximum
          revenue.  
        </h1>
        {boostContent.map((benefit, index) => {
          return <BenefitCard benefit={benefit} key={index} />;
        })}
      </div>
      <div className="lg:m-0 relative m-auto h-[50vh] w-[60vw]">
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
