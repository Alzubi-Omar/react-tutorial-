import PropTypes from "prop-types";

import styles from "../Elements/Elements.module.css";

export default function WelcomeUser({ name, isAuthenticated }) {
  if (!isAuthenticated) {
    return <span className={styles.welcomeUser}>Guest!</span>;
  }
  return <span className={styles.welcomeUser}>{name}!</span>;
}

WelcomeUser.propTypes = {
  name: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
