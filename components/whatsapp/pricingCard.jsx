"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Check } from "lucide-react";
export default function PricingCard() {
  return (
    <div className=" w-fit rounded-[36px] bg-white p-10 shadow-md">
      <div className="flex flex-col gap-6">
        <CardTitle className="text-4xl font-bold">Business</CardTitle>
        <CardDescription>Lorem Ipsum is dummy</CardDescription>
        <div className="flex flex-row items-center justify-evenly gap-2">
          <h2 className="text-3xl font-medium">$12.50</h2>
          <p className="opacity-80">USD/mo (annually)</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info fill="#029AFF" className="  text-white" />
              </TooltipTrigger>
              <TooltipContent className="bg-campaignBlue">
                <p className="text-white">Explain the feature</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button size="lg" className="w-fit">
          Start Free 14-Day Trial
        </Button>
        <ul
          className="list-disc space-y-2 "
          style={{ "list-style-position": "inside" }}
        >
          <li className="text-[1rem] ">Unlimited Creators</li>
          <li className="text-[1rem] ">Unlimited videos</li>
          <li className="text-[1rem] ">Unlimited Recording Length</li>
          <li className="text-[1rem] ">Upto 50 Creators Lite</li>
        </ul>
        <Separator />
        <div className="flex flex-col gap-3">
          <p className="text-[1rem]"> Everything in Starter, plus</p>
          <ul className=" space-y-2">
            <li className="flex flex-row items-center gap-4  text-[1rem]  ">
              <Check size={18} /> Lorem Ipsum is dummy text
            </li>
            <li className="flex flex-row items-center gap-4  text-[1rem]  ">
              <Check size={18} /> Lorem Ipsum is dummy text
            </li>
            <li className="flex  flex-row items-center gap-4  text-[1rem] ">
              <Check size={18} /> Lorem Ipsum is dummy text
            </li>
            <li className="flex  flex-row items-center gap-4  text-[1rem] ">
              <Check size={18} /> Lorem Ipsum is dummy text
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
