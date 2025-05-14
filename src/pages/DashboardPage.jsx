import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function DashboardPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>Your role: <strong>{user.roles}</strong></p>
    </div>
  );
}
