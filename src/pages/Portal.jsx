import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Portal() {
  return (
    <div className="screen active">

  <header className="portal-top">
    <div className="portal-brand">UNAH</div>
    <nav className="portal-nav"><span>Portal UNAH</span><span>Oferta académica</span><span>Estudiantes</span><span>Servicios</span><span>Transparencia</span><span className="active">UNAH Virtual</span></nav>
  </header>
  <div className="hero-title"><small>Portal de la UNAH</small><h1>SISTEMA DE REGISTRO</h1><small>DIPP</small></div>
  <div className="portal-welcome">
    <h2>Bienvenido(a) al Sistema de Registro de la<br />Universidad Nacional Autónoma de Honduras</h2>
    <p>Aquí puedes realizar tu matrícula y realizar otros trámites relacionados.</p>
    <Link to="/login"><button className="btn-blue" >Ingresa a tu cuenta de estudiante</button></Link>
    <br /><br /><button className="btn-yellow">Ver tablón de avisos</button>
  </div>
  <div className="split-banners"><div><b>Creación de Expediente II PAC 2026</b><br /><br /><button className="btn-yellow">Crear Expediente</button></div><div><b>CALENDARIO DE PREMATRÍCULA II PAC 2026</b><br /><small>CARRERAS DE DOS PERIODOS</small><br /><br /><button className="btn-yellow">Ver Calendario</button></div></div>
  <div className="ranking"><h2>Ranking de cupos II-PAC 2026</h2><p>Listado de cupos disponibles para el Primer Periodo Académico del año 2026</p><button className="btn-blue">Ver Ranking</button></div>
  <div className="payment"><h3>Realiza tu pago de matrícula en línea</h3><p>Ingresa con tu cuenta y contraseña</p><button className="btn-yellow">Pagar ahora</button></div>
  <div className="notices"><h2 style={{"textAlign":"center"}}>Tablón de avisos</h2><p style={{"textAlign":"center","color":"#999"}}>Avisos recientes del sistema de registro</p>
    <div className="notice"><b>Pasos para reactivar expediente inactivo</b><button className="btn-blue">Ver Pasos</button></div>
    <div className="notice"><b>Pasos para crear expediente estudiantil - Primer Ingreso</b><button className="btn-blue">Ver Pasos</button></div>
    <div className="notice"><b>Calendario de Pre-Matrícula III PAC - Carreras de 3 Periodos</b><button className="btn-blue">Ver Aviso</button></div>
  </div>
  <div className="support"><h2 style={{"textAlign":"center"}}>Sistemas de Apoyo Educativo</h2><div className="support-grid">
    <div className="support-card"><b>Lumina</b><p>Banco de Objetos Virtuales de Aprendizaje</p></div><div className="support-card"><b>Tzibal naah</b><p>Ofrece servicios de consulta en línea de documentos digitales.</p></div><div className="support-card"><b>Campus Virtual</b><p>Portal de actividades académicas y recursos pedagógicos.</p></div><div className="support-card"><b>Biblioteca Virtual</b><p>Acceso a bases de datos y revistas académicas.</p></div><div className="support-card"><b>Sistema Bibliotecario</b><p>Servicios de información de acuerdo a normas y estándares.</p></div>
  </div></div>
  <footer className="site-footer">DIRECCIÓN DE INGRESO PERMANENCIA Y PROMOCIÓN<br /><br /><b style={{"fontSize":"24px"}}>UNAH</b><br /><small>Derechos reservados Universidad Nacional Autónoma de Honduras 2026</small></footer>

    </div>
  );
}
