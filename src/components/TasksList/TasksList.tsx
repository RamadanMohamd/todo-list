import { Task } from "../Task/Task";

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
        <Task key={index} task={task} />
      ))}
    </div>
  );
}
