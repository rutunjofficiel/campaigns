"use client";
import { ICONS } from "@/config";
import { Card, CardContent, CardFooter } from "../ui/card";
import rewards from "/public/images/rewards.png";
import Image from "next/image";

export default function Feature({ feature, icon, horizontal, bg }) {
  const IconComponent = ICONS[icon];
  return (
    <Card
      className={`flex flex-col items-center ${bg ? `bg-[${bg}]` : "bg-slate-50"}  p-3 text-center shadow-sm duration-300  hover:scale-105  hover:shadow-md ${horizontal ? " flex-row" : " flex-col"} text-campaignBlueDark lg:gap-2 lg:text-start`}
    >
      <div className="blue-gradient relative flex aspect-square w-[3rem] items-center rounded-full  ">
        {IconComponent && (
          <IconComponent color="#fcfcfc" size="60%" className="m-auto" />
        )}
      </div>
      <p className="text-start font-semibold tracking-tighter text-campaignBlueDark md:text-[1.05rem]">
        {feature}
      </p>
    </Card>
  );
}
