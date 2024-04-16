import { ArrowRight } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import emailFeatureSection2 from "../../public/images/emailFeatureSection2.png";
import Image from "next/image";
import { Button } from "../ui/button";
export default function FeatureSection2() {
  return (
    <div className="my-32  ">
      <div className="mr-auto w-full grid-cols-1 items-center space-y-10 lg:grid lg:w-[94%] lg:grid-cols-2 lg:gap-0 ">
       <div className="absolute "> </div> <div className="relative flex w-[74%] flex-col items-center justify-self-start">
          <Image src={emailFeatureSection2} alt="Hero image SMS" />
        </div>
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <h2 className="sub-heading text-center  ">
            The what, why, and how of transactional emails
          </h2>

          <p className=" mx-auto w-[94%] text-center text-[1.2rem] opacity-90 lg:mr-0 ">
            Transactional emails are unique emails that are usually triggered by
            some user action. More often than not, your customers are expecting
            these emails in their inbox within seconds of the trigger action.
            Pick the right delivery service and keep your customers happy.
          </p>
          <p className="text-center text-[1.2rem] font-medium  ">
            Our open rate has tripled and our click rate on links is up at least
            77%.
          </p>
          <Button className="w-fit rounded-lg lg:px-7">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
