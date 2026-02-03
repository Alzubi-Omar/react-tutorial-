import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { OldWay } from "../OldWay.jsx";
import { AboutMe, Card, ConditionalGreeting } from "../Elements/Elements.jsx";
import { SkillsList } from "../Lists/SkillsList.jsx";
import WelcomeUser from "./WelcomeUser.jsx";

const INITIAL_SKILLS = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "React" },
  { id: 3, name: "Node.js" },
];

export function UserProfile({ isAuthenticated, username, onLogout }) {
  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem("skills");
    return saved ? JSON.parse(saved) : INITIAL_SKILLS;
  });

  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    const name = newSkill.trim();

    if (!name) return;

    setSkills((prev) => [...prev, { id: Date.now(), name }]);
    setNewSkill("");
  };

  const handleRemoveSkill = (id) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  const handleEditSkill = (id) => {
    const current = skills.find((s) => s.id === id);
    const updateName = window.prompt("Edit skill name:", current?.name ?? "");
    if (!updateName) return;

    const clean = updateName.trim();
    if (!clean) return;

    setSkills((prev) =>
      prev.map((s) => (s.id === id ? { ...s, name: clean } : s)),
    );
  };

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

        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>

      <Card title="About Me">
        <AboutMe name={username} />
      </Card>
      <Card title="Skills">
        {/* Add skill */}
        <div>
          <input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
          />
          <button type="button" onClick={handleAddSkill}>
            Add
          </button>
        </div>
        <SkillsList
          skills={skills}
          onEdit={handleEditSkill}
          onRemove={handleRemoveSkill}
        />
      </Card>
      <div id="old-way">
        <h3>Old Way of Creating React Elements:</h3>
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
