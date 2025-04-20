import { useState } from "react";
import { Dialog, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/Button";
import { DialogContent, DialogHeader } from "../ui/dialog";
import { AddTaskForm } from "./Form";

export function AddTask() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button> Add new task </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[600px] w-full">
        <DialogHeader>
          <DialogTitle>Add</DialogTitle>
        </DialogHeader>
        <AddTaskForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
