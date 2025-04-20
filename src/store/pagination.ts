import { create } from "zustand";

interface PaginationState {
  page: number;
  limit: number;
  tasksLength: number;
  updatePage: (page: number) => void;
  updateTaksLength: (length: number) => void;
}

export const usePaginationStore = create<PaginationState>((set) => ({
  page: 1,
  limit: 3,
  tasksLength: 0,
  updatePage: (page: number) => set({ page }),
  updateTaksLength: (length: number) => set({ tasksLength: length }),
}));
