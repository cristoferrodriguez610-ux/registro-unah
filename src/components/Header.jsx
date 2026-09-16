import { Link } from 'react-router-dom';

export default function Header({ children }) {
  return (
    <header className="dipp-header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="dipp-logo">
          <span className="logo-box">◆</span>
          <span>UNAH<br /><small style={{ fontWeight: 400, color: '#8795a0' }}>DIRECCIÓN DE INGRESO PERMANENCIA Y PROMOCIÓN</small></span>
        </div>
      </Link>
      <div className="header-actions">
        {children}
      </div>
    </header>
  );
}
