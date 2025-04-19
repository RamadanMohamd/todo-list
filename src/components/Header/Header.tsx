import { TasksStatus } from "@/components/TaskStatus/TaskStatus";

/**
 * Header component for the application.
 * It contains the title, task status.
 *
 * @returns {JSX.Element} The rendered header component.
 */

export function Header() {
  return (
    <header className="flex items-center justify-between w-full px-6 py-2 bg-gray-800 text-white shadow-md">
      <h1 className="text-xl font-bold tracking-wide">Task Manager</h1>
      <TasksStatus />
    </header>
  );
}
