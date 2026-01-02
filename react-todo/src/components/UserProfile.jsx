import { OldWay } from "./OldWay.jsx";
import { AboutMe } from "./Elements/Elements.jsx";
import { Card } from "./Elements/Elements.jsx";
import { SkillsList } from "./Lists/SkillsList.jsx";
import WelcomeUser from "./user/WelcomeUser.jsx";

export function UserProfile() {
  const isAuthenticated = true;

  const skills = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
    { id: 3, name: "Node.js" },
  ];

  return (
    <div id="user-profile">
      <h2>User Profile</h2>
      <div>
        <p>
          Name: <WelcomeUser isAuthenticated name="Omar" />
        </p>

        <p>Email: omar@example.com</p>
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
