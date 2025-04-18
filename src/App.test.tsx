import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders Vite and React logos", () => {
    render(<App />);
    const viteLogo = screen.getByAltText(/vite logo/i);
    const reactLogo = screen.getByAltText(/react logo/i);
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test("renders heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /vite \+ react/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders button with initial count", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is 0/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("count is 0");
  });

  test("renders paragraph with read the docs instruction", () => {
    render(<App />);
    const readTheDocs = screen.getByText(/click on the vite and react logos to learn more/i);
    expect(readTheDocs).toBeInTheDocument();
  });

  test("increments count when button is clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /count is 0/i });
    expect(button).toHaveTextContent("count is 0");
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 2");
  });
});