"use client";
import { ICONS } from "@/config";
import { Card, CardContent, CardFooter } from "../ui/card";
import rewards from "/public/images/rewards.png";
import Image from "next/image";

export default function Feature({ feature, icon }) {
  const IconComponent = ICONS[icon];
  return (
    <Card className="flex flex-col items-center border-none bg-[#EDF3F7] p-2 px-3 text-center shadow-sm outline-none duration-300 hover:scale-110 hover:shadow-md lg:flex-row lg:text-start ">
      <div className="  w-[3rem]  rounded-[0.5rem] md:w-[4rem]">
        {IconComponent && (
          <IconComponent color="#013659" size="60%" className="m-auto" />
        )}
      </div>
      <p className="text-start font-semibold  tracking-tighter  text-campaignBlueDark md:text-[1.05rem]">
        {feature}
      </p>
    </Card>
  );
}
