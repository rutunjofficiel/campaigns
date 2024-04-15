import Image from "next/image";
import feature from "@/public/images/feature.png";
import { Button } from "../ui/button";
export default function FeatureSection1() {
  return (
    <div className="mx-auto my-16 flex w-[94%] flex-col items-center md:w-[90%] lg:grid lg:h-min lg:grid-cols-2  lg:justify-between ">
      <div className="flex flex-col gap-8 lg:gap-10">
        <h2 className="sub-heading">Create marketing campaigns that convert</h2>
        <p className="leading-tighter  text-xl opacity-90">
          Send promotions, offers, and back-in-stock alerts while respecting
          customer permissions
        </p>
        <p className="leading-tighter  text-xl opacity-90">
          Set up campaigns, send abandonment notifications, appointment alerts
          and re-buy reminders
        </p>
        <p className="leading-tighter  text-xl opacity-90">
          Trigger order and booking confirmations, subscription reminders,
          delivery updates and more
        </p>

        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-center gap-1 text-[#32D851] lg:items-start ">
            <h1 h1 className="text-4xl font-medium ">
              2X
            </h1>
            <p className="text-lg ">Sales Growth</p>
          </div>
          <div className="flex flex-col  items-center gap-1 text-campaignBlue lg:items-start ">
            <h1 className="text-4xl font-medium ">89%</h1>
            <p className="text-lg">More Engagement</p>
          </div>
        </div>
        <Button size="xl" className="w-fit">
          Get Started
        </Button>
      </div>
      <div className="relative h-full w-[100%] ">
        <Image
          fill={true}
          style={{
            objectFit: "contain",
          }}
          src={feature}
          alt="4 feaures "
        />
      </div>
    </div>
  );
}
