"use client";

import SectionHeader from "@/components/(dashboard)/sectionHeader";
import {
  AccordionContent,
  AccordionItem,
  Accordion,
  AccordionTrigger,
} from "@/components/ui/accordionSettings";
import { ICONS } from "@/config";
import { ArrowRight } from "lucide-react";
import { Settings } from "lucide-react";
import Link from "next/link";

const settings = {
  "General Settings": {
    icon: "settings",
    options: [
      "Company Information",
      "Company document",
      "Person document",
      "Address document",
      "Business person",
    ],
  },
  "Whatsapp Settings": {
    icon: "whatsApp",
    options: [
      "Company Information",
      "Company document",
      "Person document",
      "Address document",
      "Business person",
    ],
  },
  "Email Settings": {
    icon: "email",
    options: [
      "Company Information",
      "Company document",
      "Person document",
      "Address document",
      "Business person",
    ],
  },
  "Sms Settings": {
    icon: "sms",
    options: [
      "Company Information",
      "Company document",
      "Person document",
      "Address document",
      "Business person",
    ],
  },
  "Domain Settings": {
    icon: "settings",
    options: [
      "Company Information",
      "Company document",
      "Person document",
      "Address document",
      "Business person",
    ],
  },
  "Kyc Settings": {
    icon: "kyc",
    options: [
      "Company Information",
      "Company document",
      "Person document",
      "Address document",
      "Business person",
    ],
  },
};

export default function Page() {
  return (
    <div className="tableSectionWrapper">
      <SectionHeader section="Settings" hideButtons={true} />

      <Accordion
        type="single"
        collapsible
        className=" mx-auto  w-[90%] rounded-md border-none"
      >
        <ul className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {Object.keys(settings).map((settingKey, index) => {
            const IconComponent = ICONS[settings[settingKey].icon];
            return (
              <li key={index}>
                <AccordionItem value={`item-${index}`} className="shadow-md  ">
                  <AccordionTrigger
                    white="true"
                    className="w-[fit] rounded-md bg-campaignBlue p-4 hover:no-underline"
                  >
                    <div className="  flex flex-row items-center gap-4 text-white">
                      <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white ">
                        {IconComponent && (
                          <IconComponent
                            color="#029AFF"
                            size="60%"
                            className="m-auto"
                          />
                        )}
                      </div>
                      <div className=" flex flex-col items-start   text-start ">
                        {/* Displaying the setting name */}
                        <h2 className=" text-lg font-semibold">{settingKey}</h2>
                        <p>Dummy Description here</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="rounded-md ">
                    <ul>
                      <div className="mt-2 grid grid-cols-1 gap-1 px-4 md:grid-cols-2 lg:mx-auto lg:w-fit  lg:p-0">
                        {settings[settingKey].options.map(
                          (option, optionIndex) => (
                            <Link
                              href="#"
                              className="flex flex-row  items-center gap-1 p-2 font-medium text-[#6C757D]"
                            >
                              <div className="flex w-fit flex-col items-center rounded-full bg-campaignBlue stroke-white p-[4px]">
                                <ArrowRight size={16} color="#fff" />
                              </div>
                              <li key={optionIndex}>{option}</li>
                            </Link>
                          ),
                        )}
                      </div>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </li>
            );
          })}
        </ul>
      </Accordion>
    </div>
  );
}
