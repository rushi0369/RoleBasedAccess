import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const LOCAL_STORAGE_KEY = "rbac_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : { role: "guest", name: "Guest" };
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const loginAs = (role) => setUser({ role, name: role === "admin" ? "Admin" : "User" });
  const logout = () => setUser({ role: "guest", name: "Guest" });

  const value = useMemo(() => ({ user, loginAs, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
