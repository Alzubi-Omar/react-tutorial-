import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { UserProfile } from "../../components/user/UserProfile";
import { useTheme } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";
import styles from "./DashboardLayout.module.css";

export function DashboardLayout({ username, onLogout }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <header className={styles.header}>
        <h1>Welcome to the Todo App!</h1>
        <button type="button" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>

      <nav className={styles.nav}>
        <NavLink
          to="todos"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Todos
        </NavLink>

        <NavLink
          to="collaborators"
          state={{ from: "todos" }}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Collaborators
        </NavLink>
      </nav>

      <UserProfile isAuthenticated username={username} onLogout={onLogout} />

      {/* Child routes render HERE */}
      <Outlet />
    </>
  );
}

DashboardLayout.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
