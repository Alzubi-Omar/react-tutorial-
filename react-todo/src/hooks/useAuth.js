import { useState } from "react";

export function useAuth() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
  });

  const login = ({ username }) => {
    setAuth({ isAuthenticated: true, user: { username } });
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, user: null });
  };

  return { auth, login, logout };
}
