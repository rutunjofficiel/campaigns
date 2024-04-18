import { create } from "zustand";

const data = [
  {
    srNo: 1,
    companyName: "DD Seth",
    phoneNumberId: 9978873333,
    fbManagerId: 9978878787,
    whatsappBusinessId: 9978878787,
    accessToken: 4434433434,
    apiKey: "253434324",
  },
  {
    srNo: 2,
    companyName: "MM Seth",
    phoneNumberId: 9978872212,
    fbManagerId: 9978843787,
    whatsappBusinessId: 9978823787,
    accessToken: 4434433884,
    apiKey: "253433244",
  },
];

export const useWhatsappSettingsStore = create((set) => ({
  whatsappSettings: null,
  // getWhatsappSettings: () =>
  //   "Call Api".then((res) => {
  //     set({ whatsappSettings: res.data });
  //   }),
  getWhatsappSettings: () => {
    set({ whatsappSettings: data });
  },
}));

export const useEmailSettingsStore = create((set) => ({
  emailSettings: null,
  getEmailSettings: () => {
    set({ emailSettings: data });
  },
}));
