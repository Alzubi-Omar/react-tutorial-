import PropTypes from "prop-types";
import { Card } from "../components/Elements/Elements";
import { TodoList } from "../components/Lists/TodoList";
import { UserProfile } from "../components/user/UserProfile";
import { Collaborators } from "../components/collaborators/Collaborators";

export function DashboardPage({
  username,
  onLogout,
  todos,
  loadingTodos,
  todoError,
  newTodoText,
  setNewTodoText,
  addingTodo,
  onAddTodo,
}) {
  return (
    <>
      <h1>Welcome to the Todo App!</h1>

      <UserProfile isAuthenticated username={username} onLogout={onLogout} />

      <Collaborators isEnabled />

      <Card title="My Todo List">
        <div>
          <input
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new todo"
          />
          <button type="button" onClick={onAddTodo} disabled={addingTodo}>
            {addingTodo ? "Adding..." : "Add Todo"}
          </button>
        </div>

        {loadingTodos && <p>Loading todos...</p>}
        {todoError && <p>{todoError}</p>}
        {!loadingTodos && !todoError && <TodoList todos={todos} />}
      </Card>
    </>
  );
}

DashboardPage.prototype = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  loadingTodos: PropTypes.bool.isRequired,
  todoError: PropTypes.string.isRequired,
  newTodoText: PropTypes.string.isRequired,
  setNewTodoText: PropTypes.func.isRequired,
  addingTodo: PropTypes.bool.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};
