import { useState, useEffect } from "react";
import { TodoList } from "./components/Lists/TodoList";
import { Card } from "./components/Elements/Elements";
import { UserProfile } from "./components/user/UserProfile";
import { LoginForm } from "./components/auth/LoginForm";

const INITIAL_TODOS = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a Todo App" },
  { id: 3, text: "Master JavaScript" },
];

export default function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [loadingTodos, setLoadingTodos] = useState(false);
  const [todoError, setTodoError] = useState("");

  // Authentication State Management
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
  });

  // handle login
  const handleLogin = ({ username }) => {
    setAuth({
      isAuthenticated: true,
      user: { username },
    });
  };

  // handle logout
  const handleLogout = () => {
    setAuth({ isAuthenticated: false, user: null });
    setTodos(INITIAL_TODOS);
    setTodoError("");
    setLoadingTodos(false);
  };

  useEffect(() => {
    if (!auth.isAuthenticated) return;

    setLoadingTodos(true);
    setTodoError("");

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch todos");
        return res.json();
      })
      .then((data) => {
        const mapped = data.map((t) => ({ id: `api-${t.id}`, text: t.title }));
        setTodos((prev) => {
          const existing = new Set(prev.map((t) => t.id));
          const uniqueNew = mapped.filter((t) => !existing.has(t.id));
          return [...prev, ...uniqueNew];
        });
      })
      .catch(() => {
        setTodoError("Could not load todos");
      })
      .finally(() => {
        setLoadingTodos(false);
      });
  }, [auth.isAuthenticated]);

  return (
    <div>
      {!auth.isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <h1>Welcome to the Todo App!</h1>
          <UserProfile
            isAuthenticated={auth.isAuthenticated}
            username={auth.user?.username || ""}
            onLogout={handleLogout}
          />
          <Card title="My Todo List">
            {loadingTodos && <p> Loading todos...</p>}
            {todoError && <p>{todoError}</p>}
            {!loadingTodos && !todoError && <TodoList todos={todos} />}
          </Card>
        </>
      )}
    </div>
  );
}
