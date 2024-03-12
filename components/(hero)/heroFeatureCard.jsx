import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ICONS } from "@/config";

export default function HeroFeatureCard({ feature, featureDescription, icon }) {
  const IconComponent = ICONS[icon];
  console.log("icon", icon);

  return (
    <>
      <Card className="  flex w-fit flex-col items-start justify-between gap-3 px-4 py-4 text-start text-white duration-200  hover:opacity-95 hover:shadow-lg md:gap-5 md:p-4 md:px-5">
        <div className="flex flex-col items-center gap-4 text-center align-middle md:flex-col md:gap-12 ">
          <div className="m-auto aspect-square h-12 w-fit">
            {IconComponent && <IconComponent size="100%" color="white" />}
          </div>

          <div className="flex flex-col gap-0.5 md:gap-2">
            <CardTitle className="flex flex-col gap-4 text-[1.2rem] text-white">
              {feature}
            </CardTitle>
            <CardDescription className="paragraph text-white md:text-base">
              {featureDescription}
            </CardDescription>
          </div>
        </div>
      </Card>
    </>
  );
}
