import { Button } from "../ui/button";
import CampaignsDashboard from "../../public/images/Dashboard_Campaigns.png";
import Image from "next/image";
import { videoSection } from "@/app/utils/content";

import Feature from "./feature";

export default function VideoSection() {
  return (
    <div className="m-auto flex h-max w-full flex-col items-center justify-start gap-6 px-2 py-2 pt-14 text-center   md:gap-8">
      <div className="flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center">
          <span className="bg-gradient-to-r from-[#029aff] via-blue-600 to-blue-700 bg-clip-text text-[3rem] font-semibold text-transparent md:text-[4.2rem]">
            Officiel Campaign
          </span>{" "}
          <h1 className="sub-heading ">Unify Your Marketing Efforts</h1>
        </div>

        <div className="flex  flex-row gap-2">
          <Button className="bg-campaignBlue text-lg font-semibold md:h-14 md:px-9 md:py-3">
            Try it now
          </Button>
          <Button
            className="text-lg   font-semibold md:h-14  md:px-9 md:py-3"
            variant="outline"
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className="rounded- w-[70vw] p-1 md:p-2">
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
