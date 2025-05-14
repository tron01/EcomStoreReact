import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Layout({ children }) {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> {' | '}
        {user?.role === 'ADMIN' && <Link to="/admin">Admin</Link>} {' | '}
        {user
          ? <button onClick={logout}>Logout</button>
          : <Link to="/login">Login</Link>}
      </nav>
      <main>{children}</main>
    </div>
  );
}
