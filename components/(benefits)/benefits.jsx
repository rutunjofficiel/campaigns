import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import indexIllustration from "../../public/images/indexIllustration.png";
import { boostContent } from "@/app/utils/content";
import BenefitCard from "../(hero)/serviceCard";
import boostIllustration from "../../public/images/boostIllustration.png";
import { Check } from "lucide-react";
import { CiMoneyBill } from "react-icons/ci";
import HeroFeatureCard from "../(hero)/heroFeatureCard";

export default function Benefits() {
  return (
    <div className="m-auto flex h-max flex-col-reverse items-center justify-around md:flex-row">
      <div className="flex w-fit flex-col items-center gap-4 md:gap-8  lg:w-[50%] lg:items-start lg:gap-16">
        <h2 className="sub-heading">
          With{" "}
          <span className="bg-gradient-to-r from-[#029aff] via-blue-600 to-blue-700 bg-clip-text text-transparent">
            Officiel{" "}
          </span>
          , boost your business growth, and experience maximum revenue.
        </h2>
        <ul className="flex w-3/4 flex-col gap-2">
          {boostContent.map((benefit, index) => {
            return (
              <li key={index}>
                <Card className="flex w-full flex-row items-start justify-between gap-3      p-6 text-start text-campaignBlueDark duration-200 hover:scale-105 hover:shadow-lg md:gap-5 lg:p-8 lg:pl-0">
                  <div className="flex flex-row items-center  gap-4 md:gap-6 ">
                    <div className="transition:300ms relative -inset-x-[1rem]  aspect-square h-[1rem] w-fit  rounded-full  bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 lg:h-[2rem]"></div>

                    <div className="flex flex-col gap-0.5 md:gap-2">
                      <CardTitle className="flex flex-col  gap-4 text-[1.2rem] opacity-90 ">
                        {benefit.benefit}
                      </CardTitle>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="image-container">
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
