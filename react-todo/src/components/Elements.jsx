// Creating Elements with Data (Dynamic)

// using destructuring to get name from props
export default function WelcomeUser({ name }) {
  return <span>{name}!</span>;
}

// Usage Example:
// <WelcomeUser name="Omar" />

// Creating Lists
export function SkillsList({ skills }) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>{skill.name}</li>
      ))}
    </ul>
  );
}

// Conditional Elements
export function ConditionalGreeting({ isLoggedIn, name, todos }) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <h2> Welcome Back {name} </h2>
          <h3>My Todo</h3>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2> Please Log In</h2>
      )}
    </>
  );
}
