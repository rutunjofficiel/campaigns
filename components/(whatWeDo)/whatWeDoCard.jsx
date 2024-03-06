import { CardBody, CardTitle } from "react-bootstrap";
import { Card } from "../ui/card";
import { ICONS } from "@/config";

export default function WhatWeDoCard() {
  return (
    <>
      <Card className="flex w-fit flex-col gap-4 bg-[#029AFF] p-4 px-5 text-start text-white duration-300 hover:bg-[#00243B] md:gap-5">
        <CardTitle>
          <div className="h-8 w-8 rounded-full bg-white"></div>
        </CardTitle>

        <p className="text-[1rem] font-semibold">Expanding Your Business</p>
        <CardBody>
          <p className="text-[0.8rem]">
            Lorem Ipsum is aLorem Ipsum is a dummy text. Lorem Ipsum is a dummy
            text.
          </p>
        </CardBody>
      </Card>
    </>
  );
}
