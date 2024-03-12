import { ICONS } from "@/config";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function Feature({ feature, icon }) {
  const IconComponent = ICONS[icon];
  return (
    <Card className="flex flex-col items-center justify-center gap-2 rounded-none border-none bg-inherit  text-center">
      {IconComponent && <IconComponent color="#202020" size="40" />}
      <p className="sub-heading w-fit  text-[#202020] md:text-[1.4rem]">
        {feature}
      </p>
    </Card>
  );
}
