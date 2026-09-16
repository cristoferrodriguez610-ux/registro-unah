import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';

import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { currentUser } = useAuth();
  if (!currentUser) return <Navigate to="/login" replace />;
  return (
    <div className="screen active">

  <header className="dipp-header"><div className="dipp-logo"><span className="logo-box">◆</span><span>UNAH<br /><small style={{"fontWeight":"400","color":"#8795a0"}}>DIRECCIÓN DE INGRESO PERMANENCIA Y PROMOCIÓN</small></span></div><div className="header-actions"><span className="header-profile"><img id="dyn-header-photo" src={currentUser.photo} alt="Foto de perfil" style={{"width":"32px","height":"32px","borderRadius":"50%","objectFit":"cover","border":"2px solid #fff","boxShadow":"0 1px 5px #0002"}} /> <span>{currentUser.name.split(' ').slice(0, 2).join(' ')}...</span></span><b>UNAH</b> ◐</div></header>
  <main className="dash-main">
    <div className="profile-hero">
      
      <div className="id-card-new">
        <div className="id-bg-crosses"></div>
        <div className="id-bg-shapes"></div>
        
        <div className="id-brand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo_UNAH.png" alt="UNAH" style={{height: '70px', mixBlendMode: 'multiply'}} />
        </div>
        
        <div className="id-photo">
          <img src={currentUser.photo} alt="Foto" />
        </div>
        
        <div className="id-info">
          <div className="id-group">
            <div className="id-label">CUENTA</div>
            <div className="id-value">{currentUser.account}</div>
          </div>
          <div className="id-group">
            <div className="id-label">NOMBRE</div>
            <div className="id-value name">{currentUser.name}</div>
          </div>
          <div className="id-group">
            <div className="id-label">ID</div>
            <div className="id-value">{currentUser.idNumber}</div>
          </div>
        </div>
      </div>

      <div className="google-wallet-btn" style={{"background":"#1362b6","borderRadius":"12px","padding":"15px 20px","marginBottom":"24px","display":"flex","alignItems":"center","justifyContent":"space-between","cursor":"pointer","color":"#fff"}}>
        <div style={{"display":"flex","alignItems":"center","gap":"15px"}}>
          <div style={{"width":"38px","height":"38px","borderRadius":"10px","background":"#2986e0","display":"grid","placeItems":"center"}}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
               <rect x="2" y="5" width="20" height="14" rx="2"></rect>
               <line x1="2" y1="10" x2="22" y2="10"></line>
             </svg>
          </div>
          <div>
            <div style={{"fontSize":"11px","color":"#a2cbf7","marginBottom":"3px"}}>Agrega tu carné virtual a</div>
            <div style={{"fontSize":"15px","fontWeight":"700"}}>Google Wallet</div>
          </div>
        </div>
        <div style={{"fontWeight":"700","color":"#a2cbf7"}}>&gt;</div>
      </div>
      <div className="welcome"><small>BIENVENIDO DE VUELTA</small><h2><span id="dyn-name1">{currentUser.name}</span></h2>
        <div className="chips"><span className="chip">⌁ <span id="dyn-career1">{currentUser.career}</span></span><span className="chip">⌂ <span id="dyn-campus1">{currentUser.campus}</span></span><span className="chip">✉ <span id="dyn-email">{currentUser.email}</span></span><span className="chip">↗ Campus Virtual</span></div>
        <div className="indices"><div className="index"><b id="dyn-period">{currentUser.periodIndex}</b><span>ÍNDICE DEL PERÍODO</span></div><div className="index"><b id="dyn-global">{currentUser.globalIndex}</b><span>ÍNDICE GLOBAL</span></div><div className="index"><b id="dyn-admission">{currentUser.admissionIndex}</b><span>ÍNDICE ADMISIÓN</span></div></div>
      </div>
    </div>

    <div className="section-title"><span className="dot"></span>Académico</div>
    <div className="cards">
      <Link to="/history" style={{textDecoration:'none', color:'inherit'}}><div className="service" ><div className="icon green">▣</div><h3>Historial académico</h3><p>Consulta tu historial completo</p></div></Link>
      <div className="service" ><div className="icon cyan">▥</div><h3>Ver calificaciones del período</h3><p>Notas del período actual</p></div>
      <div className="service"><div className="icon purple">□</div><h3>Ver planificación académica</h3><p>Revisa las secciones creadas para el proceso de matrícula</p></div>
      <div className="service"><div className="icon black">▤</div><h3>Evaluación Docente</h3><p>Evalúa a tus docentes del período</p></div>
    </div>

    <div className="section-title"><span className="dot blue"></span>Matrícula</div>
    <div className="cards three">
      <Link to="/matricula" style={{textDecoration:'none', color:'inherit'}}><div className="service" ><div className="icon green">▣</div><h3>Matrícula</h3><p>Realice su Matrícula del período</p></div></Link>
      <div className="service"><div className="icon orange">♧</div><h3>Censo de Matrícula</h3><p>Censo del período académico</p></div>
      <div className="service"><div className="icon teal">✓</div><h3>Suficiencias</h3><p>Inscripción de suficiencias</p></div>
    </div>

    <div className="section-title"><span className="dot purple"></span>Trámites y Servicios</div>
    <div className="cards three">
      <div className="service"><div className="icon purple">▧</div><h3>Solicitudes</h3><p>Cambio de centro, carrera, activación de pago</p></div>
      <div className="service"><div className="icon orange">◷</div><h3>Horas Artículo 140</h3><p>Gestiona tus horas del Art. 140</p></div>
      <div className="service"><div className="icon black">▤</div><h3>Estado de cuenta</h3><p>Revisa y gestiona tu estado de cuenta</p></div>
    </div>

    <div className="section-title"><span className="dot red"></span>Cuenta y Seguridad</div>
    <div className="cards three">
      <div className="service"><div className="icon pink">✉</div><h3>Correo institucional</h3><p>Gestiona tu correo @unah.hn</p></div>
      <div className="service"><div className="icon redbg">⚿</div><h3>Cambio de contraseña</h3><p>Actualiza tu contraseña de acceso</p></div>
      <Link to="/login" style={{textDecoration:'none', color:'inherit'}}><div className="service" ><div className="icon black">↪</div><h3>Cerrar Sesión</h3><p>Cierra tu sesión actual</p></div></Link>
    </div>
  </main>
  <footer className="dash-footer"><b style={{"fontSize":"18px"}}>◆ UNAH-DIPP</b><p>Dirección de Ingreso, Permanencia y Promoción — Universidad Nacional Autónoma de Honduras.</p><div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"30px","marginTop":"35px","color":"#b7c9dc","fontSize":"12px"}}><div>ACCESOS RÁPIDOS<br /><br />Sistema de pregrado<br /><br />Sistema de posgrado<br /><br />Campus Virtual<br /><br />Administración DIPP<br /><br />Políticas de privacidad</div><div>CONTACTO<br /><br />⌖ Ciudad Universitaria<br />Tegucigalpa, M.D.C. Honduras<br /><br />☎ ASESORÍA Y ATENCIÓN<br />soportematriculadipp@unah.edu.hn<br />2216-3002<br /><br />✉ CALIFICACIONES<br />calificacionesdipp@unah.edu.hn</div></div></footer>

    </div>
  );
}
