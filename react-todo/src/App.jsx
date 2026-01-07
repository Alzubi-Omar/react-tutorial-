import { TodoList } from "./components/Lists/TodoList";
import { Card } from "./components/Elements/Elements";
import { useState } from "react";
import { LoginForm } from "./components/auth/LoginForm";

export default function App() {
  // Authentication State Management
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // const todos = [
  //   {
  //     id: 1,
  //     text: "Learn React",
  //     //   completed: false, (later use)
  //   },
  //   {
  //     id: 2,
  //     text: "Build a Todo App",
  //   },
  //   {
  //     id: 3,
  //     text: "Master JavaScript",
  //   },
  // ];

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }
  return <div>Welcome to the Todo App!</div>;
  // <div>
  //   <h1>Todo App</h1>
  //   <Card title="My Todo">
  //     <TodoList todos={todos} />
  //   </Card>
  // </div>
  // );
}
