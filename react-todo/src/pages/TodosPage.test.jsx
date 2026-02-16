import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../test/test-utils";
import { TodosPage } from "./TodosPage";

describe("TodosPage", () => {
  it("adds a new todo when user types and clicks Add Todo", async () => {
    const user = userEvent.setup();

    const onAddTodo = vi.fn();

    renderWithProviders(
      <TodosPage
        todos={[
          { id: 1, text: "Learn React" },
          { id: 2, text: "Build a Todo App" },
        ]}
        loadingTodos={false}
        todoError=""
        newTodoText=""
        setNewTodoText={() => {}}
        addingTodo={false}
        onAddTodo={onAddTodo}
      />,
    );

    // 1) type
    const input = screen.getByPlaceholderText("Add a new todo");
    await user.type(input, "Ship unit tests");

    // 2) click
    await user.click(screen.getByRole("button", { name: /add todo/i }));

    // 3) assert we attempted to add
    expect(onAddTodo).toHaveBeenCalledTimes(1);
  });
});
