import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" />;
  if (!user.roles.some((role) => allowedRoles.includes(role))) return <Navigate to="/not-found" />;

  return children;
}

export default ProtectedRoute;
