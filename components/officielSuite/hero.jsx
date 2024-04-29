"use client";
import { FaCheckCircle } from "react-icons/fa";
import officielSuiteHeroImage from "../../public/images/officielSuiteHeroImage.png";
import { Button } from "../../components/ui/button";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="mx-auto grid grid-cols-1  place-items-center lg:mt-8   lg:grid-cols-2 ">
      <div className="lg:gap flex flex-col justify-evenly gap-8 lg:gap-12">
        <div className="flex flex-col gap-4">
          <p className="font-medium text-campaignBlue">ONE STOP SOLUTION</p>
          <h1 className="  text-[48px]  font-medium leading-none lg:text-[64px]">
            Unlock The Power Of Customer Experiences
          </h1>
        </div>
        <p className="leading-tighter  text-lg font-medium  tracking-wide opacity-70">
          A unique and powerful software suite to transform the way you work.
          Designed for businesses of all sizes, built by a company that values
          your privacy.
        </p>
        <div className="flex  flex-row gap-4">
          <Button className="rounded-xl" size="lg">
            Start Free Trial
          </Button>
          <Button className="rounded-xl" size="lg" variant="outline">
            Get a live demo
          </Button>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flow-row flex items-center gap-2">
            <FaCheckCircle size={20} color="#44C587" />
            <p className="text-lg font-medium">Lorem Ipsum is dummy</p>
          </div>
          <div className="flow-row flex items-center gap-2">
            <FaCheckCircle size={20} color="#44C587" />
            <p className="text-lg font-medium">Lorem Ipsum is dummy</p>
          </div>
        </div>
      </div>
      <div className="image-container-suite  place-self-end">
        <Image
          fill={true}
          quality={100}
          style={{
            objectFit: "contain",
          }}
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 33vw"
          src={officielSuiteHeroImage}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
