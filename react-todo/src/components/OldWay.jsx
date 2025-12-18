import { createElement } from "react";

export function OldWay() {
  return createElement(
    "div",
    null,
    <span>This is the old way of creating React elements.</span>,
    <ul>
      <li>Using createElement</li>
      <li>Without JSX syntax</li>
      <li>More verbose code</li>
    </ul>
  );
}
