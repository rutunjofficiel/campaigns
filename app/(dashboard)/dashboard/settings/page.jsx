"use client";
import SectionHeader from "@/components/(dashboard)/sectionHeader";
import { ICONS } from "@/config";
import { Description } from "@radix-ui/react-dialog";
import Link from "next/link"; // Assuming you're using Next.js

const settings = [
  {
    "General Settings": {
      href: "settings/generalSettings",
      description: "Company Name, Description, API Tokens...",
      icon: "settings",
    },
  },
  {
    "Whatsapp Settings": {
      href: "settings/whatsappSettings",
      description: "Whatsapp Configuration Settings",
      icon: "whatsApp",
    },
  },
  {
    "Email Settings": {
      href: "settings/emailSettings",
      description: "Email Configuration Settings",
      icon: "email",
    },
  },
  {
    "Sms Settings": {
      href: "settings/smsSettings",
      description: "SMS Configuration Settings",
      icon: "sms",
    },
  },
  {
    "Domain Settings": {
      href: "settings/domainSettings",
      description: "Domain Configuration Settings",
      icon: "settings",
    },
  },
  {
    "Kyc Settings": {
      href: "settings/kycSettings",
      description: "KYC Status",
      icon: "kyc",
    },
  },
];

export default function Page() {
  return (
    <div className="tableSectionWrapper">
      <SectionHeader section="Settings" hideButtons={true} />
      <ul className="mx-auto grid w-[90%] grid-cols-1 justify-between gap-3 lg:grid-cols-2">
        {settings.map((setting, index) => {
          const settingName = Object.keys(setting)[0];

          const { href, icon, description } = setting[settingName];
          const IconComponent = ICONS[icon];
          return (
            <li
              key={index}
              className="mx-auto w-full rounded-md border-none bg-campaignBlue p-6"
            >
              <Link href={href}>
                <div className="flex w-full flex-row items-center gap-4 text-white">
                  <div className="flex aspect-square h-12 w-12 flex-col items-center justify-center rounded-full bg-white ">
                    {IconComponent && (
                      <IconComponent
                        color="#029AFF"
                        size="60%"
                        className="m-auto"
                      />
                    )}
                  </div>
                  <div className="flex w-full flex-col items-start text-start">
                    <h2 className="text-lg font-semibold">{settingName}</h2>
                    <p className="opacity-90">{description}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
