import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AddTask } from "./AddTask";

describe("AddTask Component", () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <AddTask />
      </QueryClientProvider>
    );
  });

  test("renders textarea field, submit and cancel button", () => {
    const addButton = screen.getByRole("button", { name: /Add new task/i });
    fireEvent.click(addButton);
    const textarea = screen.getByPlaceholderText(/type .../i);
    const button = screen.getByRole("button", { name: /Add Task/i });
    const cancelButton = screen.getByRole("button", { name: /Cancel/i });

    expect(textarea).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test("allows user to type in the textarea", () => {
    const textarea = screen.getByPlaceholderText(/type .../i);
    fireEvent.change(textarea, { target: { value: "New Task" } });
    expect(textarea).toHaveValue("New Task");
  });

  test("displays an error message if the input is empty", async () => {
    const button = screen.getByRole("button", { name: /Add Task/i });
    fireEvent.click(button);
    const errorMessage = await screen.findByText(/Text must be at least 2 characters./i);
    expect(errorMessage).toBeInTheDocument();
  });
});
