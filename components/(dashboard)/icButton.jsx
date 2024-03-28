"use client";
import { ICONS } from "../../config";

export default function IcButton({ icon, text, large }) {
  const IconComponent = ICONS[icon];

  return (
    <span className="mb-2 flex flex-row items-center gap-2 ">
      {IconComponent && <IconComponent size={20} />}
      {large ? (
        <span className="font-white text-[1rem] font-medium ">{text}</span>
      ) : (
        <span className="sidenav-link">{text}</span>
      )}
    </span>
  );
}
