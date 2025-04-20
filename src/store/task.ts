import { ITask } from "@/interfaces/task";
import { create } from "zustand";

interface TaskState {
  taskToUpdate: ITask | null;
  updateTaskStore: (taskToUpdate: ITask) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  taskToUpdate: null,
  updateTaskStore: (taskToUpdate: ITask) => set({ taskToUpdate }),
}));
