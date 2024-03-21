import Image from "next/image";
import DashLogo from "../../public/images/DashLogo.png";

import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  Accordion,
} from "../ui/accordion";
import { RxDashboard } from "react-icons/rx";
import { Separator } from "../ui/separator";
export default function SidePanel() {
  return (
    <aside className="w-fit bg-campaignBlue p-6 text-white">
      <div className="flex flex-col gap-8">
        <div className="relative aspect-auto w-36 ">
          <Image src={DashLogo} alt="DashLogo" />
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-1 align-middle">
            <RxDashboard size={20} />
            <p className="sidenav-link text-xl">Dashboard</p>
          </div>
          <div>
            <Accordion>
              <AccordionItem>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </aside>
  );
}
