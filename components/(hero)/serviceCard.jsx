import { Button } from "../ui/button";
import { Card, CardTitle, CardContent, CardDescription } from "../ui/card";

import { ICONS } from "@/config";
export default function ServiceCard({ service, serviceDescription, icon }) {
  const IconComponent = ICONS[icon];
  return (
    <>
      <Card className=" flex w-full -translate-x-1 flex-col items-start justify-between   p-6 text-start  text-campaignBlueDark duration-200  hover:-translate-y-2 hover:shadow-lg md:gap-5">
        <div className="flex flex-row  gap-2 align-middle md:flex-row">
          <div className="blue-gradient relative aspect-square h-[3.7rem] w-fit rounded-full p-3    md:h-[4rem] md:p-4">
            {IconComponent && <IconComponent size="100%" color="#FCFCFC" />}
          </div>

          <div className="flex flex-col gap-0.5 md:gap-2">
            <CardTitle className="flex flex-col gap-4 text-[1.2rem] ">
              {service}
            </CardTitle>
            <CardDescription className="paragraph  md:text-base">
              {serviceDescription}
            </CardDescription>
          </div>
        </div>
      </Card>
    </>
  );
}
