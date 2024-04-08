import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function SettingsBackButton() {
  return (
    <Button variant="ghost" className="w-fit rounded-lg px-1 opacity-80">
      <Link href="./" className="text-md flex flex-row items-center ">
        <ChevronLeft className="h-4 w-fit " />
        <span>Settings</span>
      </Link>
    </Button>
  );
}
