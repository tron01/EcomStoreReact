import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider }    from './context/AuthContext';
import Layout              from './components/Layout';
import ProtectedRoute      from './components/ProtectedRoute';
import RoleRoute           from './components/RoleRoute';
import LoginPage           from './pages/LoginPage';
import DashboardPage       from './pages/DashboardPage';
import AdminPage           from './pages/AdminPage';
import UnauthorizedPage    from './pages/UnauthorizedPage';

export default function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <RoleRoute role="ADMIN">
                  <AdminPage />
                </RoleRoute>
              }
            />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}
