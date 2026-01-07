import PropTypes from "prop-types";
import { OldWay } from "../OldWay.jsx";
import { AboutMe, Card, ConditionalGreeting } from "../Elements/Elements.jsx";
import { SkillsList } from "../Lists/SkillsList.jsx";
import WelcomeUser from "./WelcomeUser.jsx";

export function UserProfile({ isAuthenticated, username, onLogout }) {
  const skills = useMemo(
    () => [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "React" },
      { id: 3, name: "Node.js" },
    ],
    []
  );

  // const handleLogin = ({ username, password }) => {
  //   setUser({ username });
  //   setIsAuthenticated(true);
  //   void password; // just to avoid unused variable warning
  // };

  return (
    <div id="user-profile">
      <h2>User Profile</h2>

      <ConditionalGreeting isLoggedIn={isAuthenticated} name={username} />
      <div>
        <p>
          Name:
          <WelcomeUser isAuthenticated={isAuthenticated} name={username} />
        </p>

        {/* <p>Email: omar@example.com</p> */}

        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <Card title="About Me">
        <AboutMe name={user.username} />
      </Card>
      <Card title="Skills">
        <SkillsList skills={skills} />
      </Card>
      <div id="old-way">
        <h3>Old Way of Creating React Elements: </h3>
        <OldWay />
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
