import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";
import { describe, expect } from "vitest";

describe("TodoList", () => {
  it("renders all todos", () => {
    const todos = [
      { id: 1, text: "Learn React" },
      { id: 2, text: "Build a Todo App" },
    ];

    render(<TodoList todos={todos} />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });
});
