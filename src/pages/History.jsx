import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';

import { useAuth } from '../context/AuthContext';
import { HISTORY_BY_STUDENT } from '../data/historyData';

export default function History() {
  const { currentUser } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (!currentUser) return <Navigate to="/login" replace />;

  const studentHistory = HISTORY_BY_STUDENT[currentUser.account] || [];
  const totalPages = Math.ceil(studentHistory.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = studentHistory.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="screen active">

<header className="dipp-header">
  <div className="dipp-logo"><span className="logo-box">◆</span><span>UNAH<br /><small style={{"fontWeight":"400","color":"#8795a0"}}>DIRECCIÓN DE INGRESO PERMANENCIA Y PROMOCIÓN</small></span></div>
  <Link to="/dashboard"><button className="header-pill">Cerrar sesión</button></Link>
</header>

<main className="page-wrap history-page">
  <div className="page-head">
    <div className="breadcrumb"><Link to="/dashboard" style={{textDecoration:'none'}}><button className="breadcrumb-home" style={{background:'none', border:0, cursor:'pointer', color:'#114882', padding:0}}>Inicio</button></Link> / <b>Historial Académico</b></div>
    <h1>HISTORIAL ACADÉMICO</h1>
    <p>Consulte su historial de calificaciones y equivalencias</p>
  </div>

  <div className="history-official">
    <div className="official-row">
      <div className="official-icon">▧</div>
      <div>
        <h3>¿Necesitas tu historial académico oficial?</h3>
        <p>Este es tu historial de consulta. Si necesitas el documento oficial certificado para trámites, puedes solicitarlo aquí.</p>
        <button>▧ &nbsp;Solicitar documento oficial</button>
      </div>
    </div>
  </div>

  <div className="student-history-card">
    <div className="student-history-title">♙ &nbsp; Información del Estudiante</div>
    <div className="student-history-body">
      <img className="history-student-photo" id="dyn-history-photo" src={currentUser.photo} alt="Foto del estudiante" />

      <div className="student-history-info">
        <div className="h-info">
          <label>♙ &nbsp; NO. CUENTA</label>
          <div className="h-value" id="dyn-account-num1">{currentUser.account}</div>
        </div>
        <div className="h-info">
          <label>⌂ &nbsp; CENTRO</label>
          <div className="h-value"><span id="dyn-campus3">{currentUser.campus}</span></div>
        </div>
        <div className="h-info full">
          <label>♙ &nbsp; NOMBRE COMPLETO</label>
          <div className="h-value"><span id="dyn-name3">{currentUser.name}</span></div>
        </div>
        <div className="h-info full">
          <label>♧ &nbsp; CARRERA</label>
          <div className="h-value"><span id="dyn-career3">{currentUser.career}</span></div>
        </div>
      </div>

      <div className="history-indexes">
        <div className="history-index">
          <span>ÍNDICE GLOBAL</span><strong id="dyn-global">{currentUser.globalIndex}</strong>
        </div>
        <div className="history-index period">
          <span>ÍNDICE PERÍODO</span><strong id="dyn-period">{currentUser.periodIndex}</strong>
        </div>
      </div>
    </div>
  </div>

  <div className="history-tabs">
    <button className="history-tab active" >▧ &nbsp; Historial Académico</button>
    <button className="history-tab" >‹› &nbsp; Equivalencias</button>
  </div>

  <div className="history-table-card">
    <div className="history-table-heading">〽 &nbsp; Historial Académico</div>
    <div style={{"overflowX":"auto"}}>
      <table className="history-reference-table">
        <thead>
          <tr>
            <th>CODIGO</th><th>ASIGNATURA</th><th>UV</th><th>SECCION</th>
            <th>AÑO</th><th>PERIODO</th><th>CALIFICACION</th><th>OBS</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, idx) => (
            <tr key={idx}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.uv}</td>
              <td>{item.section}</td>
              <td>{item.year}</td>
              <td>{item.period}</td>
              <td>{item.grade}</td>
              <td>{item.obs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="history-pagination" id="historyPagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button 
          key={page} 
          className={currentPage === page ? 'active' : ''} 
          onClick={() => setCurrentPage(page)}
          style={{
            margin: '0 2px',
            padding: '5px 12px',
            border: '1px solid #ddd',
            background: currentPage === page ? '#0066cc' : '#fff',
            color: currentPage === page ? '#fff' : '#333',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          {page}
        </button>
      ))}
    </div>
  </div>

  <footer className="history-footer">
    <div className="footer-brand">◆ &nbsp; UNAH·DIPP</div>
    <p>Dirección de Ingreso, Permanencia y Promoción — Universidad Nacional Autónoma de Honduras.</p>
    <div className="history-footer-grid">
      <div>
        <strong>ACCESOS RÁPIDOS</strong>
        Sistema de pregrado<br />
        Sistema de posgrado<br />
        Campus Virtual<br />
        Administración DIPP<br />
        Políticas de privacidad
      </div>
      <div>
        <strong>CONTACTO</strong>
        ⌖ &nbsp; Ciudad Universitaria<br />
        Tegucigalpa, M.D.C. Honduras<br /><br />
        <strong>ASESORÍA Y ATENCIÓN</strong>
        <span className="gold">soportematriculadipp@unah.edu.hn<br />2216–3002</span><br /><br />
        <strong>CALIFICACIONES</strong>
        <span className="gold">calificacionesdipp@unah.edu.hn</span><br /><br />
        <strong>ARCHIVO</strong>
        <span className="gold">archivo.cu5@unah.edu.hn</span>
      </div>
    </div>
    <div className="history-footer-bottom">
      <span>◉ UNAH</span><span>© 2026 Universidad Nacional Autónoma de Honduras</span>
    </div>
  </footer>
</main>

    </div>
  );
}
