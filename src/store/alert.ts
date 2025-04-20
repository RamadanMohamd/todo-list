import { create } from "zustand";

interface AlertState {
  message: string;
  showAlert: (value: string) => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  message: "",
  showAlert: (message: string) => {
    set({ message });
    setTimeout(() => {
      set({ message: "" });
    }, 5000);
  },
}));
