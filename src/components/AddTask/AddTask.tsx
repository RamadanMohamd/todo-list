import { useState } from "react";
import { Dialog, DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../ui/Button";
import { DialogContent, DialogDescription, DialogHeader } from "../ui/dialog";
import { AddTaskForm } from "./Form";

export function AddTask() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(true)}> Add new task </Button>
      <DialogContent className="sm:w-[600px] w-full">
        <DialogHeader>
          <DialogTitle>Add</DialogTitle>
          <DialogDescription>
            Fill out the form below to add a new task to your list.
          </DialogDescription>
        </DialogHeader>
        <AddTaskForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
