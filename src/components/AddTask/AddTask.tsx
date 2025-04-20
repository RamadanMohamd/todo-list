import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/Button";
import { DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { AddTaskForm } from "@/components/AddTask/Form";
import { useDialogStore } from "@/store/dialogs";

export function AddTask() {
  const { isAddDialogOpen, openCloseAddDialog } = useDialogStore();
  return (
    <Dialog open={isAddDialogOpen} onOpenChange={openCloseAddDialog}>
      <Button onClick={() => openCloseAddDialog(true)}> Add new task </Button>
      <DialogContent className="sm:w-[600px] w-full">
        <DialogHeader>
          <DialogTitle>Add</DialogTitle>
          <DialogDescription>
            Fill out the form below to add a new task to your list.
          </DialogDescription>
        </DialogHeader>
        <AddTaskForm />
      </DialogContent>
    </Dialog>
  );
}
