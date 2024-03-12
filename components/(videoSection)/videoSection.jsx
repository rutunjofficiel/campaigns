import { Button } from "../ui/button";
import CampaignsDashboard from "../../public/images/Dashboard_Campaigns.png";
import Image from "next/image";
import { videoSection } from "@/app/utils/content";

import Feature from "./feature";

export default function VideoSection() {
  return (
    <div className="m-auto flex h-max w-[90%] flex-col items-center justify-start gap-6 rounded-2xl bg-slate-100 px-2 py-16  text-center shadow md:gap-8">
      <div className="flex flex-col items-center gap-10 md:gap-12">
        <h1 className="heading lg:text-7xl   text-[2.2rem] text-[#050505] md:text-3xl md:text-[5rem] ">
          Unify Your Marketing Efforts with <br />
          <span className="bg-gradient-to-r  from-[#029aff] via-blue-600 to-blue-700 bg-clip-text text-transparent">
            Officiel Campaign.
          </span>
        </h1>

        <>
          <ul className="lg:grid-cols-4 grid grid-cols-2 gap-2">
            {videoSection.map((feature) => (
              <li key={feature.id}>
                <Feature feature={feature.feature} icon={feature.icon} />
              </li>
            ))}
          </ul>
          <div className="flex  flex-row gap-2">
            <Button className="  bg-campaignBlue">Try it now</Button>
            <Button className="  " variant="outline">
              Subscribe
            </Button>
          </div>
        </>
      </div>
      <div className="  h-auto  w-full rounded-2xl border-black bg-slate-200 p-4 md:w-[50vw]">
        <Image
          objectFit="cover"
          alt="Campaigns Dashboard screenshot"
          src={CampaignsDashboard}
        />
      </div>
    </div>
  );
}
