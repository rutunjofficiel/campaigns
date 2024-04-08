"use client";
import SectionHeader from "@/components/(dashboard)/sectionHeader";
import { ICONS } from "@/config";
import Link from "next/link"; // Assuming you're using Next.js

const settings = [
  {
    "General Settings": {
      href: "settings/generalSettings",
      icon: "settings",
    },
  },
  {
    "Whatsapp Settings": {
      href: "settings/whatsappSettings",
      icon: "whatsApp",
    },
  },
  {
    "Email Settings": {
      href: "settings/emailSettings",
      icon: "email",
    },
  },
  {
    "Sms Settings": {
      href: "settings/smsSettings",
      icon: "sms",
    },
  },
  {
    "Domain Settings": {
      href: "settings/domainSettings",
      icon: "settings",
    },
  },
  {
    "Kyc Settings": {
      href: "settings/kycSettings",
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
          const { href, icon } = setting[settingName];
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
                    <p>Dummy Description here</p>
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
