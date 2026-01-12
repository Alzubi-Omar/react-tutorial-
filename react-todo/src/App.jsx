import { useState, useMemo, useEffect } from "react";
import { TodoList } from "./components/Lists/TodoList";
import { Card } from "./components/Elements/Elements";
import { UserProfile } from "./components/user/UserProfile";
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

  useEffect(() => {
    if (auth.isAuthenticated) {
      console.log("User logged in:", auth.user?.username);
    } else {
      console.log("User logged out");
    }
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
            <TodoList todos={todos} />
          </Card>
        </>
      )}
    </div>
  );
}
