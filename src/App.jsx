import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Portal from './pages/Portal';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Matricula from './pages/Matricula';
import Forma03 from './pages/Forma03';
import History from './pages/History';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/matricula" element={<Matricula />} />
          <Route path="/forma03" element={<Forma03 />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
