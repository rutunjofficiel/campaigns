import { Card, CardTitle, CardBody } from "../ui/card";
import { ICONS } from "@/config";

export default function WhatWeDoCard({ title, description }) {
  return (
    <>
      <Card className="flex w-fit flex-col gap-4 bg-[#029AFF] p-2 px-5 text-start text-white duration-300 hover:bg-[#00243B] md:gap-5 md:p-4">
        <CardTitle>
          <div className="h-8 w-8 rounded-full  bg-white"></div>
        </CardTitle>

        <p className="text-[1rem] font-semibold">{title}</p>
        <CardBody>
          <p className="text-[0.8rem]">{description}</p>
        </CardBody>
      </Card>
    </>
  );
}
