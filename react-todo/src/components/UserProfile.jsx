import { OldWay } from "./OldWay.jsx";
import WelcomeUser, { SkillsList } from "./Elements.jsx";

export function UserProfile() {
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
          Name: <WelcomeUser name="Omar" />
        </p>

        <p>Email: omar.venturez@example.com</p>
      </div>
      <section>
        <h3>About Me</h3>
        <p>
          Hello! I'm Omar, a software developer with a passion for building web
          applications.
        </p>
        <h3>Skills</h3>
        <SkillsList skills={skills} />
      </section>
      <div id="old-way">
        <h3>Old Way of Creating React Elements: </h3>
        <OldWay />
      </div>
    </div>
  );
}
