import { TodoList } from "./components/Lists/TodoList";
import { Card } from "./components/Elements/Elements";
import { useState } from "react";
import { LoginForm } from "./components/auth/LoginForm";

export default function App() {
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
    </div>
  );
}
