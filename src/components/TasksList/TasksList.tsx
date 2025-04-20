import { Task } from "@/components/Task/Task";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "@/services/tasks";
import { ITask } from "@/interfaces/task";
import { TaskSkeleton } from "@/components/TaskSkeleton";
import { usePaginationStore } from "@/store/pagination";
import { useEffect } from "react";

export function TasksList() {
  const { page, limit, updateTaksLength } = usePaginationStore();
  const {
    data: tasks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tasks", page],
    queryFn: () => getTasks(page, limit),
    staleTime: 300000,
  });

  useEffect(() => {
    if (tasks) {
      updateTaksLength(tasks.length);
    }
  }, [tasks, updateTaksLength]);

  if (isLoading) {
    return (
      <div className="grid gap-4">
        {[1, 2, 3, 4].map((id: number) => (
          <TaskSkeleton key={id} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div>Failed to load tasks. Please try again later.</div>;
  }

  return (
    <div className="grid gap-4">
      {tasks?.map((task: ITask) => <Task key={task.id} {...task} />)}
    </div>
  );
}
