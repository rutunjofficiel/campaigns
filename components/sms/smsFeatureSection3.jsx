import Image from "next/image";
import smsFeatureSection3 from "@/public/images/smsFeatureSection3.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function SMSFeatureSection3() {
  return (
    <div className="mx-auto flex w-[94%] flex-col place-items-center items-center gap-6 py-16   md:w-[90%]   lg:grid lg:grid-cols-2  ">
      <div className="flex flex-col gap-6">
        <h2 className="sub-heading ">
          Enjoy reliable, low latency delivery-worldwide
        </h2>
        <p className="text-[1.2rem] opacity-90">
          Communicate on-time with our enterprise grade platform and automatic
          fallback to voice, WhatsApp after a specified time
        </p>
        <p className="text-[1.2rem] opacity-90">
          Monitor and troubleshoot message delivery, track your global SMS sends
          and responses with a live monitoring dashboard
        </p>
      </div>
      <div className="relative mx-auto aspect-square w-[80%] ">
        <Image
          fill={true}
          style={{
            objectFit: "contain",
          }}
          alt="Sms Feature Section 3"
          src={smsFeatureSection3}
        />
      </div>
    </div>
  );
}
