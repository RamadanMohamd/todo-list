import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Task } from "./Task";
import { ITask } from "@/interfaces/task";
import { useTaskStore } from "@/store/task";
import { useDialogStore } from "@/store/dialogs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("@/store/task", () => ({
  useTaskStore: jest.fn(),
}));

jest.mock("@/store/dialogs", () => ({
  useDialogStore: jest.fn(),
}));

describe("Task Component", () => {
  let queryClient: QueryClient;

  const mockUpdateTaskStore = jest.fn();
  const mockOpenCloseAddDialog = jest.fn();

  beforeEach(() => {
    queryClient = new QueryClient();

    (useTaskStore as unknown as jest.Mock).mockReturnValue({
      updateTaskStore: mockUpdateTaskStore,
    });

    (useDialogStore as unknown as jest.Mock).mockReturnValue({
      openCloseAddDialog: mockOpenCloseAddDialog,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Task {...task} />
      </QueryClientProvider>
    );
  });

  const task: ITask = {
    id: 1,
    text: "Sample Task",
    completed: false,
    deleted: false,
    createdAt: "2025-02-03T12:00:00Z",
  };

  test("renders the task with the correct structure", () => {
    const taskName = screen.getByText("Sample Task");
    const checkbox = screen.getByRole("checkbox");
    const deleteButton = screen.getByRole("button");
    expect(taskName).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  test("handles checkbox change correctly", () => {
    const mockMarkAsCompleted = jest.fn();
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockMarkAsCompleted).not.toHaveBeenCalled();
  });

  test("handles double-click to update the task", () => {
    const taskDiv = screen.getByText("Sample Task").closest("div");
    fireEvent.doubleClick(taskDiv!);

    expect(mockUpdateTaskStore).toHaveBeenCalledWith(task);
    expect(mockOpenCloseAddDialog).toHaveBeenCalledWith(true);
  });

  test("does not allow double-click to update the task if it is deleted", () => {
    const deletedTask = { ...task, deleted: true, id: 2 };
    render(
      <QueryClientProvider client={queryClient}>
        <Task {...deletedTask} />
      </QueryClientProvider>
    );

    const taskDiv = screen.getByTestId("task-2");
    fireEvent.doubleClick(taskDiv);

    expect(taskDiv).toHaveClass("bg-gray-100 cursor-not-allowed z-20");
  });
});
