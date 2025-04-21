import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TaskName } from "./TaskName"; // Adjust the import path as needed
import { ITask } from "@/interfaces/task";

describe("TaskName Component", () => {
  test("renders the task name", () => {
    const props: ITask = {
      text: "Sample task",
      id: 1,
      deleted: false,
      completed: false,
      createdAt: "2025-02-03T12:00:00Z",
    };
    render(<TaskName {...props} />);
    const taskName = screen.getByText("Sample task");
    expect(taskName).toBeInTheDocument();
  });

  test("renders the task name", () => {
    const props: ITask = {
      text: "Sample task",
      id: 1,
      deleted: false,
      completed: true,
      createdAt: "2025-02-03T12:00:00Z",
    };
    render(<TaskName {...props} />);
    const taskName = screen.getByText("Sample task");
    expect(taskName).toBeInTheDocument();
    expect(taskName).toHaveClass("line-through text-gray-500");
  });
});
