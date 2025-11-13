import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const login = async (form) => {
    setLoading(true)
    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", form);
      const userData = {
        username: "Agakerim",
        token: res.data.token,
      };
      localStorage.setItem("token", userData.token);
      setUser(userData);
    } catch (error) {
      console.error(error);
    } finally {
        setLoading(false)
    }
  };


  const logout  = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ username: "Agakerim", token });
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, loading, setLoading, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
