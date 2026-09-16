import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
  }, []);

  const handleLogin = () => {
    if (login(account, password)) {
      setError(false);
      navigate('/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <div className="screen active">
      {error && (
        <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', background: '#333', color: '#fff', padding: '16px 24px', borderRadius: '8px', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
          <div style={{ fontSize: '13px', color: '#aaa' }}>registro-unah.vercel.app dice</div>
          <div style={{ fontSize: '15px' }}>Número de cuenta o contraseña incorrectos.</div>
          <button onClick={() => setError(false)} style={{ alignSelf: 'flex-end', background: '#fff', color: '#333', border: 'none', padding: '6px 16px', borderRadius: '4px', marginTop: '8px', fontWeight: 'bold' }}>Aceptar</button>
        </div>
      )}

      <header className="dipp-header">
        <div className="dipp-logo">
          <span className="logo-box" style={{ fontSize: '28px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.12-1.15V17h2V9L12 3z"/>
            </svg>
          </span>
          <span>UNAH<br /><small style={{"fontWeight":"400","color":"#8795a0"}}>DIRECCIÓN DE INGRESO PERMANENCIA Y PROMOCIÓN</small></span>
        </div>
        <div className="header-actions">
          <button className="header-pill">Crear expediente</button><b>UNAH</b> ◐
        </div>
      </header>

      <div className="login-wrap">
        <div className="login-card">
          <div className="login-left">
            <div className="cap-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.12-1.15V17h2V9L12 3z"/>
              </svg>
            </div>
            <h1>UNAH</h1>
            <p>DIRECCIÓN DE INGRESO<br />PERMANENCIA Y PROMOCIÓN</p>
            <span className="gold">#UNAHNuevaHistoria</span>
            <h3>Escribe tu historia.<br />Empieza hoy.</h3>
            <small>Portal estudiantil oficial de la<br />Universidad Nacional Autónoma de Honduras.</small>
          </div>

          <div className="login-right">
            <span className="badge">● PORTAL ESTUDIANTIL</span>
            <h2>Servicios al Estudiante</h2>
            <p>Ingresa tus credenciales para acceder a los servicios estudiantiles</p>

            <div className="field">
              <label>Número de Cuenta</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <svg style={{ position: 'absolute', left: '16px', color: '#8898aa' }} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input 
                  id="account" 
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  placeholder="Ingresa tu número de cuenta" 
                  style={{ paddingLeft: '48px', width: '100%', height: '52px', border: '2px solid #d7e1e7', borderRadius: '13px', outline: 'none', color: '#123f78' }} 
                />
              </div>
            </div>

            <div className="field">
              <label>Contraseña</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <svg style={{ position: 'absolute', left: '16px', color: '#8898aa' }} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input 
                  id="password" 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña" 
                  style={{ paddingLeft: '48px', paddingRight: '48px', width: '100%', height: '52px', border: '2px solid #d7e1e7', borderRadius: '13px', outline: 'none', color: '#123f78' }} 
                />
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', background: 'none', border: 'none', color: '#8898aa', cursor: 'pointer', padding: '4px' }}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <button 
              className="login-btn" 
              onClick={handleLogin}
              style={{ background: '#003b7a', marginTop: '10px' }}
            >
              Ingresar
            </button>
            <div className="recover">¿No puedes ingresar? Recupera tu contraseña</div>
          </div>
        </div>
        <div className="create-box">
          <h3>¿Aún no tienes tu número de cuenta y contraseña?</h3>
          <p>Crea tu expediente estudiantil para acceder a todos los servicios</p>
          <button style={{ background: '#ffac08', border: 0, borderRadius: '25px', padding: '15px 45px', fontWeight: 800, color: '#7a4d00' }}>
            Crear Expediente Estudiantil
          </button>
          <p style={{ marginTop: '16px' }}>¿Necesitas ayuda? Escríbenos a <b>soportematriculadipp@unah.edu.hn</b></p>
        </div>
      </div>
    </div>
  );
}
