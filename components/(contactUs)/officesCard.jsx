import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MdLocationPin } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { ICONS } from "@/config";
import { FaLocationPin } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
export default function OfficesCard({ city, address, phoneNumber }) {
  return (
    <Card className="flex w-full flex-col items-center justify-between gap-3 p-10 px-2 text-start text-campaignBlueDark duration-200 hover:-translate-y-3 hover:translate-x-2   hover:border-blue-400  hover:shadow-lg md:gap-5 lg:px-10">
      <div className="flex flex-row  justify-between gap-4 align-middle md:gap-6 lg:flex-col lg:items-center ">
        <div className="aspect-square h-[4rem] w-fit rounded-full bg-[#DCF1FF] p-4 lg:h-[5rem]">
          {<MdLocationPin size="100%" color="#029AFF" />}
        </div>
        <div className="flex flex-col items-start gap-2 lg:items-center  lg:gap-6">
          <div className="flex flex-col items-start gap-2 lg:items-center">
            <CardTitle className="flex flex-col gap-4 text-[1.2rem] ">
              {city}
            </CardTitle>
            <CardDescription className="   md:text-base">
              {address}
            </CardDescription>
          </div>
          <Card className="flex flex-col items-center border-none  bg-[#DCF1FF] p-3 text-center shadow-sm duration-300  hover:scale-105  hover:shadow-md lg:flex-row lg:gap-2   ">
            <button className="text-center text-[0.9rem] font-semibold tracking-tighter text-campaignBlue md:text-[1.05rem]">
              <Link href={`tel:+91${phoneNumber}`}>+91 - {phoneNumber}</Link>
            </button>
          </Card>
        </div>
      </div>
    </Card>
  );
}
