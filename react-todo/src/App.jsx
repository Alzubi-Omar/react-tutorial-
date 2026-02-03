import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useTodos } from "./hooks/useTodos";

import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import "./index.css";

export default function App() {
  const { auth, login, logout } = useAuth();

  const {
    todos,
    loadingTodos,
    todoError,
    newTodoText,
    setNewTodoText,
    addingTodo,
    onAddTodo,
    resetTodos,
  } = useTodos(auth.isAuthenticated);

  const handleLogout = () => {
    logout();
    resetTodos();
  };
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Public */}
      <Route path="login" element={<LoginPage onLogin={login} />} />

      {/* Protected */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={auth.isAuthenticated}>
            <DashboardPage
              username={auth.user?.username || ""}
              onLogout={handleLogout}
              todos={todos}
              loadingTodos={loadingTodos}
              todoError={todoError}
              newTodoText={newTodoText}
              setNewTodoText={setNewTodoText}
              addingTodo={addingTodo}
              onAddTodo={onAddTodo}
            />
          </ProtectedRoute>
        }
      />
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
