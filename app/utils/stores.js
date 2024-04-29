import axios from "axios";
import { create } from "zustand";

// const data = [
//   {
//     srNo: 1,
//     companyName: "DD Seth",
//     phoneNumberId: 9978873333,
//     fbManagerId: 9978878787,
//     whatsappBusinessId: 9978878787,
//     accessToken: 4434433434,
//     apiKey: "253434324",
//   },
//   {
//     srNo: 2,
//     companyName: "MM Seth",
//     phoneNumberId: 9978872212,
//     fbManagerId: 9978843787,
//     whatsappBusinessId: 9978823787,
//     accessToken: 4434433884,
//     apiKey: "253433244",
//   },
// ];

export const useWhatsappSettingsStore = create((set) => ({
  whatsappSettings: null,
  getWhatsappSettings: async () => {
    try {
      const response = await axios.get("/api/settings"); // Replace with your API endpoint
      set({ whatsappSettings: response.data });
    } catch (error) {
      console.error("Error fetching WhatsApp settings:", error);
    }
  },
}));

export const useUserDetailsStore = create((set) => ({
  CustId: null,
  setUserDetails: (newDetails) => set({ CustId: newDetails.CustId }),
}));

export const useSettingsStore = create((set) => ({
  settings: null,
  getSettings: async () => {
    try {
      const response = await axios.get("/api/settings");

      set({ settings: response.data });
      console.log("SETTINGS:", response.data);
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  },
}));
