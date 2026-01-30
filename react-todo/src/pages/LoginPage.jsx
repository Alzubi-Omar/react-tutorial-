import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";

export function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    onLogin(credentials);
    navigate("/dashboard");
  };

  return <LoginForm onLogin={handleLogin} />;
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
