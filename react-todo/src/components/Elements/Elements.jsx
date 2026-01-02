// Creating Elements with Data (Dynamic)

// Props Valdiation and Usage
import PropTypes from "prop-types";

// styles
import styles from "./Elements.module.css";

// Conditional Elements
export function ConditionalGreeting({ isLoggedIn, name }) {
  return isLoggedIn ? (
    <h2 className={styles.greetingTitle}>Welcome Back {name}</h2>
  ) : (
    <h2 className={styles.greetingTitle}>Please Log In!</h2>
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
ConditionalGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

AboutMe.propTypes = {
  name: PropTypes.string.isRequired,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
