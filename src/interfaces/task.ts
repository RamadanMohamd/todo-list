export interface ITask {
  id: number;
  text: string;
  completed: boolean;
  deleted: boolean;
  createdAt: string;
}

export type IAddTask = Omit<ITask, "id">;
export interface ITasksResponse {
  tasks: ITask[];
}

export interface ITaskPayload {
  description: string;
}

export interface ITaskCount {
  uncompleted: number;
  completed: number;
  deleted: number;
}
