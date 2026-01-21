import { TodoList } from "./components/Lists/TodoList";
import { Card } from "./components/Elements/Elements";
import { UserProfile } from "./components/user/UserProfile";
import { LoginForm } from "./components/auth/LoginForm";
import { useAuth } from "./hooks/useAuth";
import { useTodos } from "./hooks/useTodos";

const INITIAL_TODOS = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a Todo App" },
  { id: 3, text: "Master JavaScript" },
];

export default function App() {
  const { auth, login, logout } = useAuth();

  const {
    todos,
    loadingTodos,
    todoError,
    newTodoText,
    setNewTodoText,
    addingTodo,
    addTodo,
    resetTodos,
  } = useTodos(auth.isAuthenticated);

  const handleLogout = () => {
    logout();
    resetTodos();
  };
  return (
    <div>
      {!auth.isAuthenticated ? (
        <LoginForm onLogin={login} />
      ) : (
        <>
          <h1>Welcome to the Todo App!</h1>
          <UserProfile
            isAuthenticated={auth.isAuthenticated}
            username={auth.user?.username || ""}
            onLogout={handleLogout}
          />

          <Card title="My Todo List">
            <div>
              <input
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Add a new todo"
              />
              <button type="button" onClick={addTodo} disabled={addingTodo}>
                {addingTodo ? "Adding..." : "Add Todo"}
              </button>
            </div>

            {loadingTodos && <p> Loading todos...</p>}
            {todoError && <p>{todoError}</p>}
            {!loadingTodos && !todoError && <TodoList todos={todos} />}
          </Card>
        </>
      )}
    </div>
  );
}
