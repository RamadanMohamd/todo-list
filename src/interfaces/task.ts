export interface ITask {
  id: number;
  text: string;
  completed: boolean;
  deleted: boolean;
  createdAt: string;
}

export interface ITasksResponse {
  tasks: ITask[];
}

export interface ITaskPayload {
  description: string;
}
