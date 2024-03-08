import { ICONS } from "@/config";
export default function HeroFeature({ feature, icon }) {
  return (
    <div className="flex flex-row gap-1">
      <ICONS.check color="#029AFF" className="md:w-12 w-6" />
      <p>{feature}</p>
    </div>
  );
}
