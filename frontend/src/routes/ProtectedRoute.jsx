import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ role, children }) {
  const { user } = useAuth();
  if (!user || !user.role) return <Navigate to="/unauthorized" replace />;
  return user.role === role ? children : <Navigate to="/unauthorized" replace />;
}
