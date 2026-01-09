import PropTypes from "prop-types";
import styles from "../Elements/Elements.module.css";

// Creating Lists
export function SkillsList({ skills, onEdit, onRemove }) {
  return (
    <ul className={styles.skillsList}>
      {skills.map((skill) => (
        <li key={skill.id} className={styles.skillItem}>
          <span>{skill.name}</span>

          {(onEdit || onRemove) && (
            <span>
              {onEdit && (
                <button type="button" onClick={() => onEdit(skill.id)}>
                  Edit
                </button>
              )}
              {onRemove && (
                <button type="button" onClick={() => onRemove(skill.id)}>
                  Remove
                </button>
              )}
            </span>
          )}
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

  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};
