import { Button } from "../ui/button";
import CampaignsDashboard from "../../public/images/Dashboard_Campaigns.png";
import Image from "next/image";
import { videoSection } from "@/app/utils/content";

import Feature from "./feature";

export default function VideoSection() {
  return (
    <div className="m-auto flex h-max w-full flex-col items-center justify-start gap-6 px-2 py-2 pt-14 text-center   md:gap-8">
      <div className="sub-heading flex flex-col items-center gap-10 md:gap-12">
        <div>
          <span className="campaign-gradient sub-heading-lg">
            Officiel <span className="campaign-gradientViolet"> Campaign</span>
          </span>
          <h1 className="sub-heading-md flex flex-col items-center   ">
            Unify your marketing efforts
          </h1>
        </div>
        {/* <div className="hidden flex-row  gap-2 md:flex">
          <Button size="xl" className="bg-campaignBlue ">
            Try it now
          </Button>
          <Button
            size="xl"
            className="text-lg   font-semibold md:h-14  md:px-9 md:py-3"
            variant="outline"
          >
            Subscribe
          </Button>
        </div> */}
        <div className="flex flex-row items-center gap-2 md:hidden">
          <Button size="lg" className="bg-campaignBlue font-semibold ">
            Try it now
          </Button>
          <Button size="lg" variant="outlineLg" className="font-semibold">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="w-full p-1 md:p-2 lg:w-[50vw]">
        <Image
          objectFit="cover"
          alt="Campaigns Dashboard screenshot"
          src={CampaignsDashboard}
          className="rounded-xl "
        />
      </div>
    </div>
  );
}
