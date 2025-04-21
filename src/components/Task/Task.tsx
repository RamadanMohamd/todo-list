import { Checkbox } from "@/components/ui/Checkbox";
import { DeleteTask } from "@/components/DeleteTask";
import { TaskName } from "@/components/TaskName";
import { ITask } from "@/interfaces/task";
import { useMutation } from "@tanstack/react-query";
import { completeTask } from "@/services/tasks";
import { useTaskStore } from "@/store/task";
import { usePrefetchTasks } from "@/hooks/usePrefetchTasks";
import { useDialogStore } from "@/store/dialogs";

export function Task(task: ITask) {
  const { prefetchTasks } = usePrefetchTasks();
  const { openCloseAddDialog } = useDialogStore();
  const { updateTaskStore } = useTaskStore();
  const { mutate: markAsCompleted } = useMutation({
    mutationFn: completeTask,
    mutationKey: ["completeTask"],
    onSuccess: () => {
      prefetchTasks();
    },
  });

  const handleCheckboxChange = () => {
    if (task.deleted) return;
    markAsCompleted({ id: task.id, isCompleted: !task.completed });
  };

  const handleUpdateTask = () => {
    if (task.deleted) return;
    updateTaskStore(task);
    openCloseAddDialog(true);
  };

  return (
    <div
      data-testid={`task-${task.id}`}
      onDoubleClick={handleUpdateTask}
      className={`flex items-center space-x-4 rounded-md border px-4 py-2 hover:bg-gray-100 ${task.deleted ? "bg-gray-100 cursor-not-allowed z-20" : "cursor-pointer"}`}
    >
      <Checkbox onCheckedChange={handleCheckboxChange} checked={task.completed} />
      <TaskName {...task} />
      <DeleteTask {...task} />
    </div>
  );
}
