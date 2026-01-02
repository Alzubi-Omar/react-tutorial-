import { ConditionalGreeting } from "./components/Elements/Elements";
import { TodoList } from "./components/Lists/TodoList";
import { Card } from "./components/Elements/Elements";

export default function App() {
  const todos = [
    {
      id: 1,
      text: "Learn React",
      //   completed: false, (later use)
    },
    {
      id: 2,
      text: "Build a Todo App",
    },
    {
      id: 3,
      text: "Master JavaScript",
    },
  ];

  return (
    <div>
      <h1>Todo App</h1>
      <ConditionalGreeting isLoggedIn name="Omar" />

      <Card title="My Todo">
        <TodoList todos={todos} />
      </Card>
    </div>
  );
}
