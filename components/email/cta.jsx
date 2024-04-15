"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
export default function Cta() {
  return (
    <div className="bg-[#1E1E1E] py-24 my-16">
      <div className="mx-auto grid grid-cols-2 items-center bg-[#1E1E1E] lg:w-[94%]">
        <div className=" flex flex-col gap-12 ">
          <h2 className="sub-heading-white">
            Join forces with your favorite business tools
          </h2>
          <p className=" text-white opacity-80">
            awareness through email became a must-have, and our ESP wasn't
            cutting
          </p>
          <Button className="w-fit text-white" size="lg">
            See imagradtions <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
