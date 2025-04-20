import { create } from "zustand";

interface DialogState {
  isAddDialogOpen: boolean;
  isConfirmDialogOpen: boolean;
  openCloseAddDialog: (value: boolean) => void;
  openCloseConfirmDialog: (value: boolean) => void;
}

export const useDialogStore = create<DialogState>((set) => ({
  isAddDialogOpen: false,
  isConfirmDialogOpen: false,
  openCloseAddDialog: (isAddDialogOpen: boolean) => set({ isAddDialogOpen }),
  openCloseConfirmDialog: (isConfirmDialogOpen: boolean) => set({ isConfirmDialogOpen }),
}));
