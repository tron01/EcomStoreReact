import { createContext, useState, useEffect } from 'react';
import { api } from '../api/axios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);

  // ─── Bootstrap: verify cookie & fetch /me ────────────────────
  useEffect(() => {
    api.get('/auth/me')                     // ① GET /me with cookie
      .then(({ data }) => {
        setUser(data.user) 
        console.log("called me");
      }) 
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  // ─── Login: POST /login then GET /me ────────────────────────
  const login = async creds => {
    await api.post('/auth/login', creds);   // ② sets HTTP-only cookie
    const { data } = await api.get('/auth/me'); // ③ fetch profile
    console.log(data.username);

    setUser(data);
  };

  // ─── Logout: POST /logout then clear state ───────────────────
  const logout = async () => {
    await api.post('/auth/logout');         // clears cookie server-side
    setUser(null);
  };

  // While loading, don’t render routes
  if (loading) return <div>Loading…</div>;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
