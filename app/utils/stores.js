import { create } from "zustand";
export const useWhatsappSettingsStore = create((set) => ({
  whatsappSetting: null,
  getWhatsappNumber: () =>
    "Call Api".then((res) => {
      set({ whatsappSetting: res.data });
    }),
  setWhatsappNumber: (newNumber) => set({ whatsappSetting: newNumber }),
}));
