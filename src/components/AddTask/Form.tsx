import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DialogFooter } from "../ui/dialog";
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useDialogStore } from "@/store/dialogs";
import { useTaskStore } from "@/store/task";
import { usePrefetchTasks } from "@/hooks/usePrefetchTasks";
import { useMutation } from "@tanstack/react-query";
import { addTask, updateTask } from "@/services/tasks";
import { useAlertStore } from "@/store/alert"
interface IText {
  text: string;
}

const formSchema = z.object({
  text: z.string().min(2, {
    message: "Text must be at least 2 characters.",
  }),
});

export function AddTaskForm() {
  const { showAlert } = useAlertStore();
  const { taskToUpdate } = useTaskStore();
  const { openCloseAddDialog } = useDialogStore();
  const submitButtonText = taskToUpdate ? "Update Task" : "Add Task";

  const { prefetchTasks } = usePrefetchTasks();
  const { mutate: addTaskMutation } = useMutation({
    mutationFn: addTask,
    mutationKey: ["addTask"],
    onSuccess: () => {
      showAlert("Task added successfully");
      prefetchTasks();
      openCloseAddDialog(false);
    },
  });

  const { mutate: updateTaskMutation } = useMutation({
    mutationFn: updateTask,
    mutationKey: ["updateTask"],
    onSuccess: () => {
      showAlert("Task updated successfully");
      prefetchTasks();
      openCloseAddDialog(false);
    },
  });

  const onSubmit = (data: IText) => {
    if (!taskToUpdate) {
      addTaskMutation({
        text: data.text,
        completed: false,
        deleted: false,
        createdAt: new Date().toISOString(),
      });
    } else {
      updateTaskMutation({
        id: taskToUpdate.id,
        text: data.text,
        completed: taskToUpdate.completed,
        deleted: taskToUpdate.deleted,
        createdAt: taskToUpdate.createdAt,
      });
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: taskToUpdate?.text || "",
    },
  });

  const handleCancel = () => {
    openCloseAddDialog(false);
  };

  
  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="add-task-form">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Textarea placeholder="type ..." className="resize-none" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <DialogFooter>
        <Button type="button" variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
        <Button type="submit" form="add-task-form">
          {submitButtonText}
        </Button>
      </DialogFooter>
    </div>
  );
}
