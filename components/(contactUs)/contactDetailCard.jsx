"use client";
import { ICONS } from "@/config";
import { Card, CardContent, CardFooter } from "../ui/card";
import rewards from "/public/images/rewards.png";
import Image from "next/image";
import Link from "next/link";

export default function ContactDetailCard({
  detail,
  icon,
  horizontal,
  bg,
  number,
  mail,
}) {
  const IconComponent = ICONS[icon];

  return (
    <Card
      className={`flex flex-col items-center ${bg ? `bg-[${bg}]` : "bg-slate-50"} p-3 py-2 text-center shadow-sm duration-300 hover:scale-105 hover:shadow-md ${horizontal ? " flex-row" : " flex-col"} gap-2 text-campaignBlueDark lg:gap-1 lg:text-start`}
    >
      <div className="blue-gradient relative flex aspect-square w-[2.5rem] items-center rounded-full">
        {IconComponent && (
          <IconComponent color="#fcfcfc" size="60%" className="m-auto" />
        )}
      </div>
      {number ? (
        <p className="text-start font-medium tracking-tighter text-campaignBlueDark md:text-[1rem]">
          <Link href={`tel:+91${number}`}>+91 - {number}</Link>{" "}
          {/* Wrap number in Link */}
        </p>
      ) : mail ? (
        <p className="text-start font-medium tracking-tighter text-campaignBlueDark md:text-[1rem]">
          <Link href={`mailto:${mail}`}> {mail} </Link>{" "}
        </p>
      ) : (
        <p className="text-start font-medium tracking-tighter text-campaignBlueDark md:text-[1rem]">
          {detail}
        </p>
      )}
    </Card>
  );
}
