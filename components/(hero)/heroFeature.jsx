import { ICONS } from "@/config";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function HeroFeature({ feature, icon }) {
  const IconComponent = ICONS[icon];
  return (
  
    <Card className="flex flex-col items-center justify-center gap-2 rounded-none border-none bg-inherit p-3 text-center">
      {IconComponent && <IconComponent size="26" />}
      <p className="w-fit">{feature}</p>
    </Card>
  );
}
