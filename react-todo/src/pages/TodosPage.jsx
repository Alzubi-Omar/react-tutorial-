import PropTypes from "prop-types";
import { Card } from "../components/Elements/Elements";
import { TodoList } from "../components/Lists/TodoList";

export function TodosPage({
  todos,
  loadingTodos,
  todoError,
  newTodoText,
  setNewTodoText,
  addingTodo,
  onAddTodo,
}) {
  return (
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
  );
}

TodosPage.propTypes = {
  todos: PropTypes.array.isRequired,
  loadingTodos: PropTypes.bool.isRequired,
  todoError: PropTypes.string.isRequired,
  newTodoText: PropTypes.string.isRequired,
  setNewTodoText: PropTypes.func.isRequired,
  addingTodo: PropTypes.bool.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};
