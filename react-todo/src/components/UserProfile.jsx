import { OldWay } from "./OldWay.jsx";

export function UserProfile() {
  return (
    <div id="user-profile">
      <h2>User Profile</h2>
      <div>
        <p>Name: John Doe</p>
        <p>Email: omar.venturez@example.com</p>
      </div>
      <section>
        <h3>About Me</h3>
        <p>
          Hello! I'm Omar, a software developer with a passion for building web
          applications.
        </p>
        <ul>
          <h3>Skills</h3>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </section>
      <div id="old-way">
        <h3>Old Way of Creating React Elements: </h3>
        <OldWay />
      </div>
    </div>
  );
}
