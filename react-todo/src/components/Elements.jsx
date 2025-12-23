// Creating Elements with Data (Dynamic)

// Props Valdiation and Usage
import PropTypes from "prop-types";

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

// using props to pass data
export function AboutMe(props) {
  return (
    <p>
      Hello! I'm {props.name}, a software developer with a passion for building
      web applications.
    </p>
  );
}

// Prop Types Validation
WelcomeUser.PropTypes = {
  name: PropTypes.string.isRequired,
};

SkillsList.PropTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

ConditionalGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

AboutMe.propTypes = {
  name: PropTypes.string.isRequired,
};
