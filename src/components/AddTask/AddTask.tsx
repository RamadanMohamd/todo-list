import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/Button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddTaskForm } from "@/components/AddTask/Form";
import { useDialogStore } from "@/store/dialogs";
import { PlusIcon } from "lucide-react";
import { useTaskStore } from "@/store/task";

export function AddTask() {
  const { isAddDialogOpen, openCloseAddDialog } = useDialogStore();
  const { updateTaskStore } = useTaskStore();

  const handleAddTaskClick = () => {
    updateTaskStore(null);
    openCloseAddDialog(true);
  };

  return (
    <Dialog open={isAddDialogOpen} onOpenChange={openCloseAddDialog}>
      <DialogTrigger asChild>
        <Button onClick={handleAddTaskClick}>
          <PlusIcon />
          Add new task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[600px] w-full">
        <DialogHeader>
          <DialogTitle>Add</DialogTitle>
          <DialogDescription>
            Complete the form below to add or update a task in your list.
          </DialogDescription>
        </DialogHeader>
        <AddTaskForm />
      </DialogContent>
    </Dialog>
  );
}
