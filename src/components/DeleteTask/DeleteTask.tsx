import { TrashIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/Button";
import { deleteTask } from "@/services/tasks";
import { useDialogStore } from "@/store/dialogs";
import { useMutation } from "@tanstack/react-query";
import { usePrefetchTasks } from "@/hooks/usePrefetchTasks";
import { ITask } from "@/interfaces/task";
import { useTaskStore } from "@/store/task";
import { useAlertStore } from "@/store/alert";

export function DeleteTask(props: ITask) {
  const { showAlert } = useAlertStore();
  const { isConfirmDialogOpen, openCloseConfirmDialog } = useDialogStore();
  const { updateTaskStore, taskToUpdate } = useTaskStore();
  const { prefetchTasks } = usePrefetchTasks();
  const { mutate } = useMutation({
    mutationFn: deleteTask,
    onSuccess: async () => {
      showAlert("Task deleted successfully");
      await prefetchTasks();
      openCloseConfirmDialog(false);
    },
    onError: (error) => {
      console.error("Error deleting task:", error);
    },
  });

  const isDeleted = props.deleted;

  return (
    <AlertDialog open={isConfirmDialogOpen} onOpenChange={openCloseConfirmDialog}>
      <AlertDialogTrigger asChild>
        <Button
          data-testid={`delete-${props.id}`}
          onClick={() => updateTaskStore(props)}
          disabled={isDeleted}
          variant="destructive"
          className="my-4"
        >
          <TrashIcon className="size-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:w-[600px] w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this task?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button variant="outline" onClick={() => openCloseConfirmDialog(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              if (!taskToUpdate) return;
              mutate(taskToUpdate.id);
              openCloseConfirmDialog(false);
            }}
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
