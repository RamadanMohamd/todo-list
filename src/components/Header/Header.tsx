import { TasksStatus } from "@/components/TaskStatus/TaskStatus";
import { AddTask } from "@/components/AddTask";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full px-6 py-2 text-white shadow-md">
      <h1 className="text-xl font-bold tracking-wide text-gray-900 dark:text-gray-100">
        Task Manager
      </h1>
      <TasksStatus />
      <AddTask />
    </header>
  );
}
