import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { DeleteTask } from "./DeleteTask";
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
  const task = {
    id: 5,
    text: "Sample Task",
    completed: false,
    deleted: false,
    createdAt: "2025-02-03T12:00:00Z",
  };

  const mockUpdateTaskStore = jest.fn();
  const mockOpenCloseDeleteDialog = jest.fn();

  beforeEach(() => {
    queryClient = new QueryClient();

    (useTaskStore as unknown as jest.Mock).mockReturnValue({
      updateTaskStore: mockUpdateTaskStore,
    });

    (useDialogStore as unknown as jest.Mock).mockReturnValue({
      openCloseConfirmDialog: mockOpenCloseDeleteDialog,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <DeleteTask {...task} />
      </QueryClientProvider>
    );
  });

  test("open confirm dialog when click delete", async () => {
    const deleteButton = screen.getByTestId("delete-5");
    fireEvent.click(deleteButton);

    const confirmDialogText = await screen.findByText("Are you sure you want to delete this task?");
    expect(confirmDialogText).toBeInTheDocument();
  });

  test("closes confirm dialog when cancel is clicked", async () => {
    const deleteButton = screen.getByTestId("delete-5");
    fireEvent.click(deleteButton);

    const cancelButton = await screen.findByRole("button", { name: /Cancel/i });
    fireEvent.click(cancelButton);

    expect(mockOpenCloseDeleteDialog).toHaveBeenCalledWith(false);
  });
});
