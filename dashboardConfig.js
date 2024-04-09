export const dashboardLinks = [
  {
    link: "/dashboard",
    text: "Dashboard",
    icon: "dashboard",
    value: "dashboard",
  },

  {
    link: "/dashboard/campaignMaster",
    text: "Campaign Master",
    icon: "campaignMaster",
    value: "campaignMaster",
  },
  {
    link: "/dashboard/settings",
    text: "Settings",
    icon: "settings",
    value: "settings",
  },
];

export const dashboardSubLinks = [
  {
    category: "Automation",
    icon: "automation",
    value: "automation",
    links: [
      {
        link: "/dashboard/automation/whatsapp",
        text: "Whatsapp",
        icon: "",
        value: "whatsappAutomation",
      },
      {
        link: "/dashboard/automation/email",
        text: "Mail",
        icon: "",
        value: "mailAutomation",
      },
      {
        link: "/dashboard/automation/sms",
        text: "SMS",
        icon: "",
        value: "smsAutomation",
      },
    ],
  },
  {
    category: "Content",
    icon: "content",
    value: "content",
    links: [
      {
        link: "#",
        text: "Whatsapp",
        icon: " ",
        value: "whatsappContent",
      },
      { link: "#", text: "Mail", icon: " ", value: "mailContent" },
      { link: "#", text: "SMS", icon: " ", value: "smsContent" },
    ],
  },
];
