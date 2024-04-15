import Image from "next/image";
import smsFeatureSection1 from "@/public/images/smsFeatureSection1.png";
import { Button } from "../ui/button";
export default function SMSFeatureSection1() {
  return (
    <div className="mx-auto my-16 flex w-[94%]  flex-col items-center md:w-[90%] lg:grid lg:h-min lg:grid-cols-2  lg:justify-between">
      <div className="relative h-full w-[100%]">
        <Image
          fill={true}
          style={{
            objectFit: "contain",
          }}
          src={smsFeatureSection1}
          alt="smsFeatureSection1 "
        />
      </div>
      <div className="flex  flex-col  gap-8 lg:gap-10">
        <h2 className="sub-heading">
          Enhance customer experience with smart SMS campaigns and alerts
        </h2>
        <p className="leading-tighter  text-lg opacity-90">
          Reach your audience at scale with personalized bulk messages and send
          relevant launches, offers, deals and discount codes
        </p>
        <p className="leading-tighter  text-lg opacity-90">
          Ensure mission-critical messages such as OTPs, transaction alerts are
          always on time with a prioritizing system to handle peak loads
        </p>

        <Button size="xl" className="w-fit">
          Get Started
        </Button>
      </div>
    </div>
  );
}
