import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

describe("App Component", () => {
  const queryClient = new QueryClient();

  test("renders a div with text 'Tasks'", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    const tasksDiv = screen.getByText("Tasks");
    expect(tasksDiv).toBeInTheDocument();
  });
});
