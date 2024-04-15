"use client";
import { ArrowRight } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import emailFeatureSection2 from "../../public/images/emailFeatureSection2.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Popsicle } from "lucide-react";
import { MessageSquare } from "lucide-react";
export default function FeatureSection3() {
  return (
    <div className="mx-auto my-16 flex w-[94%] flex-col gap-6 lg:w-[80%]">
      <h1 className="sub-heading">
        Great emails are personalized your email program should be too
      </h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-4 rounded-3xl bg-[#DCF1FF] px-6 py-12 duration-200 hover:scale-105">
          <div className="flex w-fit flex-col rounded-full bg-campaignBlue p-4 text-white">
            <Mail size={32} />
          </div>
          <p className="text-[1.2rem] font-semibold">Send</p>
          <p className="text-[1rem] font-medium opacity-60">
            Integrate email seamlessly into your systems with industry-leading
            reliability, compliance, and speed.
          </p>
        </div>

        <div className="flex flex-col  gap-4 rounded-3xl bg-[#DCF1FF] px-6 py-12 duration-200 hover:scale-105">
          <div className="flex w-fit flex-col rounded-full bg-campaignBlue p-4 text-white">
            <MessageSquare size={32} />
          </div>
          <p className="text-[1.2rem] font-semibold">Optimize</p>
          <p className="text-[1rem] font-medium opacity-60">
            Boost email engagement, avoid the spam folder, and increase your
            email ROI with tools that drive performance.
          </p>
        </div>

        <div className="flex flex-col  gap-4 rounded-3xl bg-[#DCF1FF] px-6 py-12 duration-200 hover:scale-105">
          <div className="flex w-fit flex-col rounded-full bg-campaignBlue p-4 text-white">
            <Popsicle size={32} />
          </div>
          <p className="text-[1.2rem] font-semibold">Validate</p>
          <p className="text-[1rem] font-medium opacity-60">
            Reach more customers and drive more conversions with the fastest
            email validation service on the market.
          </p>
        </div>
      </div>
    </div>
  );
}
