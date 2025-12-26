// Creating Elements with Data (Dynamic)

// Props Valdiation and Usage
import PropTypes, { func } from "prop-types";

// styles
import styles from "./Elements.module.css";

// using destructuring to get name from props
export default function WelcomeUser({ name }) {
  return <span className={styles.welcomeUser}>{name}!</span>;
}

// Creating Lists
export function SkillsList({ skills }) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id} className={styles.skillsList}>
          {skill.name}
        </li>
      ))}
    </ul>
  );
}

// Conditional Elements
export function ConditionalGreeting({ isLoggedIn, name, todos }) {
  return isLoggedIn ? (
    <>
      <h2 className={styles.greetingTitle}>Welcome Back {name}</h2>
      <h3 className={styles.todoTitle}>My Todo</h3>
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.todoItem}>
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h2>Please Log In</h2>
  );
}

// using props to pass data
export function AboutMe(props) {
  return (
    <p className={styles.aboutText}>
      Hello! I'm {props.name}, a software developer with a passion for building
      web applications.
    </p>
  );
}

// Child component
export function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

// Prop Types Validation
WelcomeUser.propTypes = {
  name: PropTypes.string.isRequired,
};

SkillsList.propTypes = {
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
