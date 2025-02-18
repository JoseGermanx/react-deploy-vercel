import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Cargar usuario desde localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.get("/user-data")
        .then((response) => setUser(response.data.user))
        .catch(() => logout());
    }
  }, []);

  const login = async (email, password) => {
    const response = await api.post("/login", { email, password });
    const { token } = response.data.data;
    console.log(response)
    localStorage.setItem("token", token);
    const profile = await api.get("/user-data");
    setUser(profile.data);
    navigate("/profile");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
