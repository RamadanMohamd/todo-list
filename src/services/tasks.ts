import apiClient from "@/services/client";
import { IAddTask, ITask, ITaskCount } from "@/interfaces/task";

export async function getTasksCount(): Promise<ITaskCount> {
  try {
    const response = await apiClient.get<ITaskCount>("/counts");
    return response.data;
  } catch {
    throw new Error("Error fetching task count");
  }
}

export async function getTasks(_page: number, _limit: number): Promise<ITask[]> {
  try {
    const response = await apiClient.get<ITask[]>("/tasks", {
      params: {
        _page,
        _limit,
      },
    });
    return response.data;
  } catch {
    throw new Error("Error fetching tasks");
  }
}

export async function addTask(task: IAddTask): Promise<ITask> {
  try {
    const response = await apiClient.post<ITask>("/tasks", task);
    return response.data;
  } catch {
    throw new Error("Error adding task");
  }
}

export async function updateTask(task: ITask): Promise<ITask> {
  try {
    const response = await apiClient.put<ITask>(`/tasks/${task.id}`, task);
    return response.data;
  } catch {
    throw new Error("Error updating task");
  }
}

export async function deleteTask(id: number): Promise<void> {
  try {
    await apiClient.delete(`/tasks/${id}`);
  } catch {
    throw new Error("Error deleting task");
  }
}

export async function completeTask({
  id,
  isCompleted,
}: {
  id: number;
  isCompleted: boolean;
}): Promise<void> {
  try {
    await apiClient.patch(`/tasks/${id}`, { completed: isCompleted });
  } catch {
    throw new Error("Error completing task");
  }
}
