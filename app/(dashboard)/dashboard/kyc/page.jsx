import { Button } from "@/components/ui/button";
import { Formik } from "formik";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";

export default function Page() {
  return (
    <div className="  flex w-[50%] flex-row gap-6">
      <h1>Steps</h1>
      <h1>Form</h1>
      <div className="flex flex-col gap-2">
        <Button size="icon">
          <ChevronUp />
        </Button>
        <Button size="icon">
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
}
