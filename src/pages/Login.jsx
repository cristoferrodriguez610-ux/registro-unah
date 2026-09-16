import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Login() {
  return (
    <div className="screen active">

  <header className="dipp-header"><div className="dipp-logo"><span className="logo-box">◆</span><span>UNAH<br /><small style={{"fontWeight":"400","color":"#8795a0"}}>DIRECCIÓN DE INGRESO PERMANENCIA Y PROMOCIÓN</small></span></div><div className="header-actions"><button className="header-pill">Crear expediente</button><b>UNAH</b> ◐</div></header>
  <div className="login-wrap">
    <div className="login-card">
      <div className="login-left"><div className="cap-icon">◆</div><h1>UNAH</h1><p>DIRECCIÓN DE INGRESO<br />PERMANENCIA Y PROMOCIÓN</p><span className="gold">#UNAHNuevaHistoria</span><h3>Escribe tu historia.<br />Empieza hoy.</h3><small>Portal estudiantil oficial de la<br />Universidad Nacional Autónoma de Honduras.</small></div>
      <div className="login-right"><span className="badge">● PORTAL ESTUDIANTIL</span><h2>Servicios al Estudiante</h2><p>Ingresa tus credenciales para acceder a los servicios estudiantiles</p>
        <div className="field"><label>Número de Cuenta</label><input id="account" placeholder="Ingresa tu número de cuenta" /></div>
        <div className="field"><label>Contraseña</label><input id="password" type="password" placeholder="Ingresa tu contraseña" /></div>
        <Link to="/dashboard"><button className="login-btn" >Ingresar</button></Link>
        <div className="recover">¿No puedes ingresar? Recupera tu contraseña</div>
      </div>
    </div>
    <div className="create-box"><h3>¿Aún no tienes tu número de cuenta y contraseña?</h3><p>Crea tu expediente estudiantil para acceder a todos los servicios</p><button>Crear Expediente Estudiantil</button><p>¿Necesitas ayuda? Escríbenos a <b>soportematriculadipp@unah.edu.hn</b></p></div>
  </div>

    </div>
  );
}
