import { Checkbox } from "../ui/Checkbox";
import { DeleteTask } from "../DeleteTask";
import { TaskName } from "../TaskName";
import { ITask } from "@/interfaces/task";

export function Task(task: ITask) {
  return (
    <div className="flex items-center space-x-4 rounded-md border px-4">
      <Checkbox />
      <TaskName task={task.text} />
      <DeleteTask {...task} />
    </div>
  );
}
