import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ username: '', password: '' });
  const [err, setErr] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Clicked");
    
    try {
      await login(form);          // calls AuthContext.login
      console.log("login success");
      navigate('/', { replace: true });    
    } catch {
      setErr('Invalid credentials');
      console.log(err);
      
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
