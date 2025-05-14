import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function RoleRoute({ role, children }) {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" replace />;

  const roles = user.roles || [];

  if (!roles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
