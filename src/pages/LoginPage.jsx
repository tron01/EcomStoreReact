import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { login, user } = useContext(AuthContext);
  const [form, setForm] = useState({ username: '', password: '' });
  const [err, setErr] = useState('');
  const navigate = useNavigate(); 

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(form);
      navigate('/', { replace: true });
    } catch {
      setErr('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {err && <p style={{ color: 'red' }}>{err}</p>}
      <input
        placeholder="Username"
        value={form.username}
        onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
