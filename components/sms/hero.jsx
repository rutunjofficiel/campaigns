import Image from "next/image";
import heroImage from "@/public/images/heroImageSMS.png";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
export default function Hero() {
  return (
    <div className="mx-auto flex w-[94%] flex-col items-center gap-2 md:w-[90%] lg:grid lg:grid-cols-2 lg:items-center lg:gap-0">
      <div className="flex flex-col items-center gap-3 lg:items-start lg:gap-6">
        <h1 className="text-[48px]  font-medium leading-tight tracking-tighter lg:text-[64px]">
          Scale your customer engagement with a reliable and proven SMS API
        </h1>
        <p className="line-clamp-4 text-xl tracking-wide opacity-90">
          Send and receive text messages without latency, with a superior
          network of direct carrier connections in over 225 countries
        </p>
        <div className="flex flex-row gap-2 ">
          <Button size="xl">Get Started</Button>
          <Button size="xl" className="bg-[#A900A4] text-white">
            Talk to an expert
          </Button>
        </div>
       
      </div>
      <div className="relative flex w-full flex-col items-center">
        <Image className=" mx-auto" src={heroImage} alt="Hero image SMS" />
      </div>
    </div>
  );
}
