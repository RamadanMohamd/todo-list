import { Checkbox } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import { TrashIcon } from "lucide-react";

const tasks = [
  "Finish the frontend architecture",
  "Complete the backend API",
  "Write unit tests for the new feature",
  "Update the documentation",
  "Fix bugs if you find any",
];

export function TasksList() {
  return (
    <div className="grid gap-4">
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center space-x-4 rounded-md border px-4">
          <Checkbox />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{task}</p>
          </div>
          <Button variant={"destructive"} className="my-4">
            <TrashIcon className="size-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}
