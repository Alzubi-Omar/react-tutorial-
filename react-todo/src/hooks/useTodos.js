import { useState, useEffect } from "react";

const INITIAL_TODOS = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a Todo App" },
  { id: 3, text: "Master JavaScript" },
];

export function useTodos(isAuthenticated) {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [loadingTodos, setLoadingTodos] = useState(false);
  const [todoError, setTodoError] = useState("");
  const [newTodoText, setNewTodoText] = useState("");
  const [addingTodo, setAddingTodo] = useState(false);

  // Reset todos back to initial
  const resetTodos = () => {
    setTodos(INITIAL_TODOS);
    setTodoError("");
    setLoadingTodos(false);
    setNewTodoText("");
    setAddingTodo(false);
  };

  // Get
  useEffect(() => {
    if (!isAuthenticated) return;

    const controller = new AbortController();

    const fetchTodos = async () => {
      try {
        setLoadingTodos(true);
        setTodoError("");

        // call API
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
          { signal: controller.signal },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch todos");
        }

        const data = await res.json();
        // Maps API data to { id, text } format
        const mapped = data.map((t) => ({ id: `api-${t.id}`, text: t.title }));
        // Merges new with existing ones
        setTodos((prev) => {
          const existing = new Set(prev.map((t) => t.id));
          const uniqueNew = mapped.filter((t) => !existing.has(t.id));
          return [...prev, ...uniqueNew];
        });
      } catch (err) {
        // Handles errors and updates todoError.
        if (err?.name === "AbortError") return;
        setTodoError("Could not load todos");
      } finally {
        // Finally, sets loadingTodos back to false.
        setLoadingTodos(false);
      }
    };

    fetchTodos();

    return () => {
      controller.abort();
    };
  }, [isAuthenticated]);

  // POST: add todo
  const onAddTodo = async () => {
    const text = newTodoText.trim();
    if (!text || addingTodo) return;

    try {
      setAddingTodo(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: text,
          completed: false,
          userId: 1,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create todo");
      }
      const created = await res.json();

      // update UI
      setTodos((prev) => [
        ...prev,
        {
          id: `local-${Date.now()}`,
          text: created.title,
        },
      ]);

      setNewTodoText("");
    } catch (error) {
      alert("Could not add todo");
    } finally {
      setAddingTodo(false);
    }
  };

  return {
    todos,
    loadingTodos,
    todoError,
    newTodoText,
    setNewTodoText,
    addingTodo,
    onAddTodo,
    resetTodos,
  };
}
