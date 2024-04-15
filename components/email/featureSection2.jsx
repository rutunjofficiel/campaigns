import { ArrowRight } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import emailFeatureSection2 from "../../public/images/emailFeatureSection2.png";
import Image from "next/image";
import { Button } from "../ui/button";
export default function FeatureSection2() {
  return (
    <div className="my-32 flex flex-col gap-16">
      <div className="mr-auto grid-cols-1 items-center lg:grid lg:w-[94%] lg:grid-cols-2 ">
        <div className="relative flex w-[74%] flex-col items-center justify-self-start">
          <Image src={emailFeatureSection2} alt="Hero image SMS" />
        </div>
        <div className="flex flex-col  gap-8">
          <h2 className="sub-heading">
            The what, why, and how of transactional emails
          </h2>

          <p className="w-[80%] text-[1.2rem] opacity-90">
            Transactional emails are unique emails that are usually triggered by
            some user action. More often than not, your customers are expecting
            these emails in their inbox within seconds of the trigger action.
            Pick the right delivery service and keep your customers happy.
          </p>
          <p className="text-[1.2rem] font-medium ">
            Our open rate has tripled and our click rate on links is up at least
            77%.
          </p>
          <Button className="w-fit rounded-lg lg:px-7">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
