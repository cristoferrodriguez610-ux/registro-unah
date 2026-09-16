import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Matricula() {
  return (
    <div className="screen active">

<header className="dipp-header"><div className="dipp-logo"><span className="logo-box">◆</span><span>UNAH<br /><small style={{"fontWeight":"400","color":"#8795a0"}}>DIRECCIÓN DE INGRESO PERMANENCIA Y PROMOCIÓN</small></span></div><Link to="/dashboard"><button className="header-pill" >Cerrar sesión</button></Link></header>
<main className="page-wrap">
 <div className="page-head"><div className="breadcrumb">Inicio / Matrícula</div><h1>MATRÍCULA</h1><p>Matrícula de Pregrado para la carrera Ingeniería eléctrica industrial</p></div>
 <div className="enroll-grid">
  <div className="enroll-card"><div className="icon green">＋</div><h3>Adicionar asignatura</h3><p>Agrega nuevas asignaturas a tu matrícula del período actual</p></div>
  <div className="enroll-card"><div className="icon redbg">⊗</div><h3>Cancelar asignatura</h3><p>Cancela las asignaturas de tu matrícula actual</p></div>
  <div className="enroll-card"><div className="icon purple">♙</div><h3>Laboratorios</h3><p>Realiza la matrícula de tus laboratorios</p></div>
  <Link to="/forma03" style={{textDecoration:'none', color:'inherit'}}><div className="enroll-card" ><div className="icon purple">▤</div><h3>Forma 03</h3><p>Genera e imprime la forma 03 de matrícula</p></div></Link>
  <div className="enroll-card"><div className="icon orange">▣</div><h3>Asignaturas canceladas</h3><p>Revisa el historial de asignaturas que has cancelado</p></div>
  <div className="enroll-card"><div className="icon cyan">◷</div><h3>Asignaturas en lista de espera</h3><p>Consulta las asignaturas en las que estás en lista de espera</p></div>
  <div className="enroll-card"><div className="icon cyan">▤</div><h3>Estado de cuenta</h3><p>Revisa tu estado de cuenta y pagos pendientes</p></div>
 </div>
</main>

    </div>
  );
}
