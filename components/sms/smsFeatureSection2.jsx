import Image from "next/image";
import smsFeatureSection1 from "@/public/images/smsFeatureSection1.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function SMSFeatureSection2() {
  return (
    <div className="gradient-violet-logo flex flex-col items-center gap-6 py-16">
      <div className="flex w-[80%] flex-col items-center gap-2">
        <h2 className="sub-heading-white">How it Works</h2>
        <p className=" text-center text-lg  text-white opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore et dolore magna aliqua. enim minim veniam
        </p>
      </div>
      <div className="justfiy-between flex w-[80%] flex-col gap-4 lg:flex-row">
        <div className="flex flex-col gap-4 rounded-2xl  bg-white p-4 duration-200 hover:scale-105">
          <div className="aspect-square w-[40px] rounded-full bg-violet-500 py-3"></div>
          <h2 className="text-[1.2rem] font-medium">STEP 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod
            tempor incidiunt ut labore
          </p>
          <Link
            href="#"
            className="flex flex-row gap-2 font-medium text-campaignBlue"
          >
            Read More <ArrowRight />
          </Link>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl   bg-white p-4 duration-200 hover:scale-105">
          <div className="aspect-square w-[40px] rounded-full bg-violet-500 py-3"></div>
          <h2 className="text-[1.2rem] font-medium">STEP 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod
            tempor incidiunt ut labore
          </p>
          <Link
            href="#"
            className="flex flex-row gap-2 font-medium text-campaignBlue"
          >
            Read More <ArrowRight />
          </Link>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl  bg-white p-4 duration-200 hover:scale-105">
          <div className="aspect-square w-[40px] rounded-full bg-violet-500 py-3"></div>
          <h2 className="text-[1.2rem] font-medium">STEP 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod
            tempor incidiunt ut labore
          </p>
          <Link
            href="#"
            className="flex flex-row gap-2 font-medium text-campaignBlue"
          >
            Read More <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
