import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';

export default function Forma03() {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/login" replace />;

  return (
    <div className="screen active">
      <header className="dipp-header"><div className="dipp-logo"><span className="logo-box">◆</span><span>UNAH<br /><small style={{"fontWeight":"400","color":"#8795a0"}}>DIRECCIÓN DE INGRESO PERMANENCIA Y PROMOCIÓN</small></span></div><Link to="/dashboard"><button className="header-pill">Cerrar sesión</button></Link></header>
      <main className="page-wrap">
       <Link to="/matricula"><button className="back" style={{border:0, background:'none', color:'#114882', cursor:'pointer', marginBottom:10}}>← Volver a Matrícula</button></Link>
       <div className="page-head"><div className="breadcrumb">Inicio / Matrícula / <b>Forma 03 - Matrícula</b></div><h1>FORMA 03 - MATRÍCULA</h1><p>Comprobante de Matrícula</p></div>
       <div className="student-box">
        <div className="student-photo"><img id="dyn-photo" src={currentUser.photo} alt="Foto de Perfil" /></div>
        <div>
         <div className="info-row"><label>♙ CUENTA:</label><div className="info-value account">{currentUser.account}</div></div>
         <div className="info-row"><label>⌂ CENTRO:</label><div className="info-value"><span id="dyn-campus2">{currentUser.campus}</span></div></div>
         <div className="info-row"><label>♙ NOMBRE COMPLETO:</label><div className="info-value"><span id="dyn-name2">{currentUser.name}</span></div></div>
         <div className="info-row"><label>♧ CARRERA:</label><div className="info-value"><span id="dyn-career2">{currentUser.career}</span></div></div>
         <div className="info-row"><label>▢ AÑO:</label><div className="info-value">2026</div></div>
        </div>
        <div className="qr"><div><b>CÓDIGO QR</b><img id="forma03Qr" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeoAAAHqAQAAAADjFjCXAAAEE0lEQVR4nO2dy23jSBCGv1oS8LEFbAAOpZWBQ5qYJgMyFAUwAHk0QKL20F1kSx7sQdRirNVfB0N8fKAE/KjqerBtzgEb/zpCg3DhwoULFy5cuPDH4latr2fHEzCaGcxm+1U7b4fnxz1d+Ivi2d3dpzibp9Xsh7sznjqH5A7p04DO3d39Gj/4dOEvhlM0lCcgT10rvWJpKRcogotPRafDU/924d8GH0/gQ1rwAfCBzn1gNR8AO//HTxf+Enj/u5NG6pw8nSBfDB8/HEi/zJkf+nThr4mH6pIDMxh0izH3C+OHw/jhWL70C8xvZTXX1pWf+rcL/1M4bW5A52UN9y9/4lat64Tfb35jA10rQiAUlm5vleqE32k1h/WlZA6Rr1KyCaBrBTekBalO+CMjbFqA5KVAUrU2dXFIVO6yh/SkOuH34+6+4MPclwIxsJqdWa0ocXxfgFI+WW3PK77Hlxf+dHjEy6lKD8Kl+VA6EltcnaKQV/yffJ3wu61G2L0FkfxLH2JrRsQFFGGFH7FIDGJJNwBVhMX1cdWl2JoWUp3w+y1yU98y1y18llgbIXVLXyOlkOqE32u7kEpKUQop05ZhNAu5ZdOkcljhh2yPsGUhl5vyHbCNNtVhlLRLVKoTfq+FpPYxuhpcS71uSO51BKq4vlj6KcIKv9++rOtKIrGJ66pVUd3hhFQn/IDVmZM81VkSgzc35r8XSBPAp5F/nrDsYOWOtHVqn/q3C/9TeJs+DGyuj70iDHvUjX6ZKifCj1jxdc4Mln0th5Z97S1PK0ZathG8CfJPw+XrhB/Dr3NYmtpwsdqRiH5Zma9LqpwIP2RRr6u1ubA2aY37ar+iTkRJdcLvtnYhxzbVtFfkyts6sNdVNOkk/CG4nencfvinmZ0A5h7GU0w61dH2tbyUzWg9dn7c04W/Gv6lXrfVi+PTl2GU6JfJ1wk/iq8WA3ULPrCandOC+6WmsO4Xs3rvvv77Jl9e+HPhzVsQ+wtg+wYAVy3Y6vXUERP+QNURzbBypX7qmvQhPKFmiYUfsurmPJr8pXzS7DhRXV/U62pJRb5O+AGLGLrnC1czdwNXJb1m5k6qE34MtzOrkS9mNa7OZnsL1uy0GvnSE5vYqXIi/JD5tdWOWPL29ZwBmo5E4RRhhd9vNXwW62KM09u59XZ3k0n1OuGPzCZign25PgcxUMxthivVCT+Ez3WrYR/munIrbbFqqzV7FW/DeN/lywt/Mvx210TLP8HH90+rGxGnpbd8eXMj/eqd+YQzd4vl4QFPF/6a+K3qfHxfevKEw3wC5j5EOL+5kRyD7kFPF/7aeNTmqpWZE7b5uro5cQ2u6dMUYYUfsJsctnkprN1OrF6NLe6Uwwo/Yqb/XidcuHDhwoULF/6/wP8BSbhvEaBylZoAAAAASUVORK5CYII=" alt="Código QR del estudiante" /><small>{currentUser.account}</small></div></div>
       </div>
       <div className="table-title">Modalidad Presencial</div>
       <table className="data-table"><thead><tr><th>Cod.</th><th>Asignatura</th><th>Sección</th><th>HI</th><th>HF</th><th>Días</th><th>Edificio</th><th>Aula</th><th>UV</th><th>Período</th><th>Modalidad</th></tr></thead>
       <tbody><tr><td>DQ101</td><td>DIBUJO I</td><td>0700</td><td>0700</td><td>1000</td><td>LuMi</td><td>D1</td><td>313(PARA DIBUJO)</td><td>2.00</td><td>2</td><td>Presencial</td></tr>
       <tr><td>FS200</td><td>FISICA GENERAL II</td><td>1000</td><td>1000</td><td>1100</td><td>LuMaMiJuVi</td><td>E1</td><td>302</td><td>5.00</td><td>2</td><td>Presencial</td></tr>
       <tr><td>MM314</td><td>PROGRAMACION</td><td>1400</td><td>1400</td><td>1500</td><td>LuMaMi</td><td>C3</td><td>314</td><td>3.00</td><td>2</td><td>Presencial</td></tr></tbody></table>
       <div className="table-title">Laboratorios</div>
       <table className="data-table lab-table"><thead><tr><th>Cod.</th><th>Asignatura</th><th>Sección</th><th>HI</th><th>HF</th><th>Días</th><th>Edificio</th><th>Aula</th></tr></thead><tbody><tr><td>FS200</td><td>FISICA GENERAL II</td><td>1500</td><td>1500</td><td>1700</td><td>Mi</td><td>E1</td><td>302</td></tr></tbody></table>
      </main>
    </div>
  );
}
