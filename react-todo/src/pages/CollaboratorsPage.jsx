import { Collaborators } from "../components/collaborators/Collaborators";
import { useLocation } from "react-router-dom";

export function CollaboratorsPage() {
  const { state } = useLocation();
  const isEnabled = state?.from === "todos";
  return <Collaborators isEnabled={isEnabled} />;
}
