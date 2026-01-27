import { useUsers } from "../../hooks/useUsers";
import { Card } from "../Elements/Elements";
import PropTypes from "prop-types";

export function Collaborators({ isEnabled }) {
  const { users, loadingUsers, usersError } = useUsers(isEnabled);

  return (
    <Card title="People to Collaborate With">
      {loadingUsers && <p>Loading people...</p>}
      {usersError && <p>{usersError}</p>}

      {!loadingUsers && !usersError && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              <strong>{u.name}</strong>
              {" - "}
              {u.email}
              {" - "}
              {u.company?.name}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

Collaborators.prototype = {
  isEnabled: PropTypes.bool.isRequired,
};
