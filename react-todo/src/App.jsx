import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useTodos } from "./hooks/useTodos";

import { LoginPage } from "./pages/LoginPage";
import { DashboardLayout } from "./pages/Dashboard/DashboardLayout";
import { TodosPage } from "./pages/TodosPage";
import { CollaboratorsPage } from "./pages/CollaboratorsPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { useTheme } from "./context/ThemeContext";

import "./index.css";

export default function App() {
  const { theme } = useTheme();
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
    <div className="app" data-theme={theme}>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Public */}
        <Route path="login" element={<LoginPage onLogin={login} />} />

        {/* Protected + Nested */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={auth.isAuthenticated}>
              <DashboardLayout
                username={auth.user?.username || ""}
                onLogout={handleLogout}
              />
            </ProtectedRoute>
          }
        >
          {/* index route: /dashboard */}
          <Route index element={<Navigate to="todos" replace />} />

          {/* child route: /dashboard/todos */}
          <Route
            path="todos"
            element={
              <TodosPage
                todos={todos}
                loadingTodos={loadingTodos}
                todoError={todoError}
                newTodoText={newTodoText}
                setNewTodoText={setNewTodoText}
                addingTodo={addingTodo}
                onAddTodo={onAddTodo}
              />
            }
          />

          {/* child route: /dashboard/collaborators */}
          <Route path="collaborators" element={<CollaboratorsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}
