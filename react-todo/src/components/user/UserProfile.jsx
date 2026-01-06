import { useState } from "react";
import { OldWay } from "../OldWay.jsx";
import { AboutMe, Card } from "../Elements/Elements.jsx";
import { SkillsList } from "../Lists/SkillsList.jsx";
import WelcomeUser from "./WelcomeUser.jsx";

export function UserProfile() {
  // const isAuthenticated = true;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const skills = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
    { id: 3, name: "Node.js" },
  ];

  // Event handler for login/logout toggle
  const toggleAuth = () => {
    setIsAuthenticated((prevAuth) => !prevAuth);
  };

  return (
    <div id="user-profile">
      <h2>User Profile</h2>
      <div>
        <p>
          Name: <WelcomeUser isAuthenticated={isAuthenticated} name="Omar" />
        </p>

        <p>Email: omar@example.com</p>

        <button type="button" onClick={toggleAuth}>
          {isAuthenticated ? "Logout" : " Login"}
        </button>
      </div>

      <Card title="About Me">
        <AboutMe name="Omar" />
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
