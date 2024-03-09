import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ICONS } from "@/config";

export default function HeroFeatureCard({ feature, featureDescription }) {
  return (
    <>
      <Card className="flex w-fit flex-col justify-between gap-3 px-4 py-4 text-start shadow-sm duration-200 hover:bg-[#F4FAFF] md:gap-5 md:p-4 md:px-5">
        <div className="flex flex-row md:flex-col md:gap-12">
          <div className="flex flex-col gap-2">
            <CardTitle className="flex flex-col gap-4 text-[1.2rem] text-[#050505] ">
              {/* <div className="h-8 w-8 rounded-full bg-white"></div> */}
              {feature}
            </CardTitle>
            <CardDescription className="paragraph md:text-sm ">
              {featureDescription}
            </CardDescription>
          </div>
        </div>
      </Card>
    </>
  );
}
4;
