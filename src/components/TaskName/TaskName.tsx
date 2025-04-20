import { ITask } from "@/interfaces/task";

export function TaskName(props: ITask) {
  const isCompleted = props.completed;

  return (
    <div className="flex-1 space-y-1">
      <p
        className={`text-sm font-medium leading-none ${
          isCompleted ? "line-through text-gray-500" : ""
        }`}
      >
        {props.text}
      </p>
    </div>
  );
}
