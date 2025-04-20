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
import { Input } from "@/components/ui/input";
import { useDialogStore } from "@/store/dialogs";

interface IText {
  text: string;
}

const formSchema = z.object({
  text: z.string().min(2, {
    message: "Text must be at least 2 characters.",
  }),
});

export function AddTaskForm() {
  const { openCloseAddDialog } = useDialogStore();

  const onSubmit = (data: IText) => {
    console.log(data);
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="add-task-form">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Text</FormLabel>
                <FormControl>
                  <Input placeholder="type ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <DialogFooter>
        <Button type="button" variant="outline" onClick={() => openCloseAddDialog(false)}>
          Cancel
        </Button>
        <Button type="submit" form="add-task-form">
          Add Task
        </Button>
      </DialogFooter>
    </>
  );
}
