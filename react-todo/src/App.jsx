import { ConditionalGreeting } from "./components/Elements";

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
      <ConditionalGreeting isLoggedIn={true} name="Omar" todos={todos} />
    </div>
  );
}
