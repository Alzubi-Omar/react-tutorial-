import { TodoList } from "./components/Lists/TodoList";
import { Card } from "./components/Elements/Elements";
import { useState, useMemo } from "react";
import { LoginForm } from "./components/auth/LoginForm";

export default function App() {
  const todos = useMemo(
    () => [
      { id: 1, text: "Learn React" },
      { id: 2, text: "Build a Todo App" },
      { id: 3, text: "Master JavaScript" },
    ],
    []
  );
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
  };

  if (!auth.isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div>
      <h1>Welcome to the Todo App, {auth.user?.username}!</h1>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <Card title="My Todo List">
        <TodoList todos={todos} />
      </Card>
    </div>
  );
}
