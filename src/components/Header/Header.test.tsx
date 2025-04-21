import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./Header";

const queryClient = new QueryClient();
beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  );
});

describe("Header Component", () => {
  test("renders title in the header", () => {
    const heading = screen.getByRole("heading", { name: /Task Manager/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders Add New Task Button", () => {
    const button = screen.getByRole("button", { name: /Add new task/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Add new task");
  });

  test("render 3 Badge components", () => {
    const badges = screen.getAllByTestId("badge");
    expect(badges).toHaveLength(3);
  });
});
