"use client";
import { Button } from "../../components/ui/button";
export default function Cta() {
  return (
    <div className="mx-auto flex w-[75%] flex-col items-center gap-6">
      <h2 className="text-center text-[36px] leading-tight text-white lg:text-start lg:text-[48px]">
        Ready to do your best work?
      </h2>
      <Button className=" bg-white text-black opacity-90 duration-200 hover:bg-white hover:shadow-lg">
        Sign Up Now
      </Button>
    </div>
  );
}
