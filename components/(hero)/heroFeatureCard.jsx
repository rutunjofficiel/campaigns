import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ICONS } from "@/config";
import rewards from "../../public/icons/rewards.png";
export default function HeroFeatureCard({ feature, featureDescription, icon }) {
  const IconComponent = ICONS[icon];
  return (
    <>
      <Card className=" hover:-translate-y-3 flex w-full flex-col items-start justify-between gap-3 p-10 text-start text-campaignBlueDark  duration-200  hover:scale-105 hover:opacity-95 hover:shadow-lg md:gap-5">
        <div className="flex flex-col gap-4 align-middle md:flex-col md:gap-6 ">
          <div className=" blue-gradient aspect-square h-[4rem] w-fit rounded-full p-4 group-hover:scale-110 lg:h-[5rem]">
            {IconComponent && <IconComponent size="100%" color="#FCFCFC" />}
          </div>

          <div className="flex flex-col gap-0.5 md:gap-2">
            <CardTitle className="flex flex-col gap-4 text-[1.2rem] ">
              {feature}
            </CardTitle>
            <CardDescription className="paragraph  md:text-base">
              {featureDescription}
            </CardDescription>
          </div>
        </div>
      </Card>
    </>
  );
}
