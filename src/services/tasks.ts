import apiClient from "@/services/client";
import { ITask } from "@/interfaces/task";

export async function getTasks(_page: number, _limit: number): Promise<ITask[]> {
  try {
    const response = await apiClient.get<ITask[]>("/tasks", {
      params: {
        _page,
        _limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

export async function deleteTask(id: number): Promise<void> {
  try {
    await apiClient.delete(`/tasks/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
}

export async function completeTask(id: number): Promise<void> {
  try {
    await apiClient.patch(`/tasks/${id}`, { completed: true });
  } catch (error) {
    console.error("Error completing task:", error);
    throw error;
  }
}
