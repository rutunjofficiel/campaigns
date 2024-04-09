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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/sidePanelTabs";
import { Button } from "../ui/button";
import {
  dashboardLinks,
  dashboardLinks2,
  dashboardSubLinks,
} from "@/dashboardConfig";
import IcButton from "./icButton";

export default function SidePanel() {
  return (
    <aside className="sticky top-0 z-40 h-screen w-[18%] bg-campaignBlue  text-white">
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col justify-between gap-8">
          <div className="relative m-auto ml-3 mt-8 aspect-auto w-36">
            <Image src={DashLogo} alt="DashLogo" />
          </div>
          <Separator />
          <div className="pl-2">
            <div className="gap- flex flex-col">
              <Tabs
                dashboard
                defaultValue="dashboard"
                className="w-full items-start text-start"
              >
                <TabsList className="grid w-full grid-cols-1">
                  <div className="mx-auto ">
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
                          <AccordionTrigger
                            className="my-2 py-0"
                            dashboard={true}
                            white
                          >
                            <IcButton
                              large={true}
                              text={category.category}
                              icon={category.icon}
                            />
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="ml-6">
                              {category.links.map((link, index) => (
                                <li key={index}>
                                  <TabsTrigger dashboard value={link.value}>
                                    <Link href={link.link}>{link.text}</Link>
                                  </TabsTrigger>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                  {dashboardLinks2.map((link, index) => {
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
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
        <div>
          {/* <UpgradeToProCard /> */}
          <Button className="m-auto mt-auto flex w-full flex-row justify-between rounded-md  p-0 px-2">
            <p className="sidenav-link">Logout</p>
            <IoLogOutOutline size={22} />
          </Button>
        </div>
      </div>
    </aside>
  );
}
