import Image from "next/image";
import DashLogo from "../../public/images/DashLogo.png";
import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  Accordion,
} from "../ui/accordion";
import { IoLogOutOutline } from "react-icons/io5";

import { Separator } from "../ui/separator";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { dashboardLinks, dashboardSubLinks } from "@/dashboardConfig";
import IcButton from "./icButton";
import { ICONS } from "@/config";

export default function SidePanel() {
  return (
    <aside className="h-screen w-[18%] bg-campaignBlue py-6 pl-2 text-white">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col justify-between gap-8">
          <div className="relative my-auto ml-3 aspect-auto w-36 ">
            <Image src={DashLogo} alt="DashLogo" />
          </div>
          <Separator />
          <div>
            <div className="flex flex-col gap-2">
              <Tabs
                dashboard
                defaultValue="dashboard"
                className="w-full items-start text-start"
              >
                <TabsList className="grid w-full grid-cols-1">
                  <div className="mx-auto mb-8">
                    {dashboardLinks.map((link, index) => {
                      return (
                        <TabsTrigger
                          key={index}
                          dashboard="true"
                          value={link.value}
                        >
                          <Link href={link.link}>
                            <IcButton
                              large={true}
                              text={link.text}
                              icon={link.icon}
                            />
                          </Link>
                        </TabsTrigger>
                      );
                    })}
                  </div>

                  <Accordion type="single" collapsible>
                    {dashboardSubLinks.map((category, index) => {
                      return (
                        <AccordionItem
                          key={index}
                          dashboard
                          value={category.value}
                        >
                          <AccordionTrigger white>
                            <IcButton
                              large={true}
                              text={category.category}
                              icon={category.icon}
                            />
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="ml-6">
                              {category.links.map((link) => (
                                <li>
                                  <TabsTrigger dashboard value={link.value}>
                                    <Link
                                      href={link.link}
                                      className="sidenav-link"
                                    >
                                      {link.text}
                                    </Link>
                                  </TabsTrigger>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
        <div>
          <Button className="flex w-full flex-row content-around justify-around p-0">
            <p className="sidenav-link">Logout</p>
            <IoLogOutOutline size={22} />
          </Button>
        </div>
      </div>
    </aside>
  );
}
