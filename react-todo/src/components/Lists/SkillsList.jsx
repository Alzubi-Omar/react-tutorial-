import PropTypes from "prop-types";
import styles from "../Elements/Elements.module.css";

// Creating Lists
export function SkillsList({ skills }) {
  return (
    <ul className={styles.skillsList}>
      {skills.map((skill) => (
        <li key={skill.id} className={styles.skillItem}>
          {skill.name}
        </li>
      ))}
    </ul>
  );
}

SkillsList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
