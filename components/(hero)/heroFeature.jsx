import { ICONS } from "@/config";
import { Card, CardContent, CardFooter } from "../ui/card";

export default function HeroFeature({ feature, icon }) {
  const IconComponent = ICONS[icon];
  return (
    <Card className="flex flex-col items-center justify-center gap-2 rounded-none border-none bg-inherit  text-center">
      {IconComponent && <IconComponent color="#050505" size="36" />}
      <p className="w-fit">{feature}</p>
    </Card>
  );
}
