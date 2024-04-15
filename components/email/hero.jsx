import Image from "next/image";
import { Button } from "../ui/button";
import heroImageEmail from "../../public/images/heroImageEmail.png";
export default function Hero() {
  return (
    <>
      <div className="gradient-violet-logo absolute inset-0 top-0 -z-50 w-full"></div>
      <div className="my-16 ml-auto flex flex-col items-baseline gap-2 lg:grid lg:w-[94%] lg:grid-cols-2 lg:place-items-end lg:gap-0">
        <div className="flex flex-col items-center gap-3 place-self-center lg:items-start lg:gap-6">
          <h1 className="text-[42px] font-medium leading-tight tracking-tighter text-white lg:text-[64px]">
            Flexible, scalable, and results driven email sending platform
          </h1>
          <p className="line-clamp-4 text-xl tracking-wide text-white opacity-90">
            Build with the platform that enables you to send, track, and
            optimize emails effortlessly
          </p>
          <div className="flex flex-row  gap-2 ">
            <Button size="xl">Get Started</Button>
            <Button
              size="xl"
              className="bg-white text-[#A900A4] hover:bg-[#A900A4] hover:text-white"
            >
              Talk to an expert
            </Button>
          </div>
        </div>
        <div className="relative flex w-[80%] flex-col items-center">
          <Image src={heroImageEmail} alt="Hero image SMS" />
        </div>
      </div>
    </>
  );
}
