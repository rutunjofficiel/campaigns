import { Card, CardTitle, CardContent, CardDescription } from "../ui/card";
import { ICONS } from "@/config";

export default function WhatWeDoCard({ title, description }) {
  return (
    <>
      <Card className="flex w-fit flex-col gap-2 bg-[#029AFF] p-2 px-5 py-4 text-start text-white duration-300 hover:bg-[#00243B] md:gap-5 md:p-4">
        <CardTitle className="flex flex-col gap-2">
          <div className="h-8 w-8 rounded-full  bg-white"></div>
          {title}
        </CardTitle>

        <CardDescription className="text-white">{description}</CardDescription>
      </Card>
    </>
  );
}
