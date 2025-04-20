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
    markAsCompleted({ id: task.id, isCompleted: !task.completed });
  };

  const handleUpdateTask = () => {
    updateTaskStore(task);
    openCloseAddDialog(true);
  };

  return (
    <div
      onDoubleClick={handleUpdateTask}
      className="flex items-center space-x-4 rounded-md border px-4 cursor-pointer py-2 hover:bg-gray-100"
    >
      <Checkbox onCheckedChange={handleCheckboxChange} checked={task.completed} />
      <TaskName {...task} />
      <DeleteTask {...task} />
    </div>
  );
}
