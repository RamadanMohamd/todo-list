import { Checkbox } from "../ui/Checkbox";
import { DeleteTask } from "../DeleteTask";
import { TaskName } from "../TaskName";

export function Task({ task }: { task: string }) {
  return (
    <div className="flex items-center space-x-4 rounded-md border px-4">
      <Checkbox />
      <TaskName task={task} />
      <DeleteTask />
    </div>
  );
}
