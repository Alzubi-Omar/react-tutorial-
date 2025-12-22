// Creating Elements with Data (Dynamic)

// using destructuring to get name from props
export default function WelcomeUser({ name }) {
  return <span> {name}!</span>;
}

// Usage Example:
// <WelcomeUser name="Omar" />

// Creating Lists
export function SkillsList({ skills }) {
  const skillsList = ["JavaScript", "React", "Node.js"];

  return (
    <ul>
      {skillsList.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}

// Usage Example:
// <SkillsList />
// or
// <SkillsList skills={['JavaScript', 'React', 'Node.js']} />

// Conditional Elements
export function ConditionalGreeting({ isLoggedIn, name }) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <h2> Welcome Back {name} </h2>
          <h3>My Todo</h3>
          <ul>
            <li>Learn React</li>
            <li>Build a Todo App</li>
            <li>Master JavaScript</li>
          </ul>
        </>
      ) : (
        <h2> Please Log In</h2>
      )}
    </>
  );
}
