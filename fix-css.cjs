const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');

const updatedCss = `
/* NEW ID CARD REDESIGN */
.id-card-new {
  position: relative;
  background-color: #fbd634;
  background-image: 
    linear-gradient(to right, #f6c023 1px, transparent 1px),
    linear-gradient(to bottom, #f6c023 1px, transparent 1px);
  background-size: 35px 35px;
  background-position: center;
  border-radius: 18px;
  width: 520px;
  max-width: 100%;
  height: 320px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  margin-bottom: 24px;
}
.id-card-new::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #fbd634;
  background-image: 
    linear-gradient(to right, #f6c023 1px, transparent 1px),
    linear-gradient(to bottom, #f6c023 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: 20px 20px;
  mask-image: radial-gradient(circle at 10px 10px, transparent 0, transparent 8px, black 9px);
  -webkit-mask-image: radial-gradient(circle at 20px 20px, transparent 0, transparent 18px, black 19px);
  z-index: 0;
  pointer-events: none;
}
/* For the actual pluses */
.id-card-new {
  background: #f8c92a;
}
.id-bg-crosses {
  position: absolute;
  top:0; left:0; right:0; bottom:0;
  background-image: radial-gradient(#dfa212 1px, transparent 1px), radial-gradient(#dfa212 1px, transparent 1px);
  background-position: 0 0, 20px 20px;
  background-size: 40px 40px;
  opacity: 0.6;
}
.id-bg-crosses::after {
  content: '';
  position: absolute;
  top:0; left:0; right:0; bottom:0;
  background-image: 
    linear-gradient(90deg, transparent 48%, #dfa212 48%, #dfa212 52%, transparent 52%),
    linear-gradient(0deg, transparent 48%, #dfa212 48%, #dfa212 52%, transparent 52%);
  background-size: 40px 40px;
  opacity: 0.2;
}
.id-bg-shapes {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ef9a16' opacity='0.8' transform='rotate(20 100 100)'%3E%3Crect x='120' y='0' width='30' height='100' rx='15' /%3E%3Crect x='70' y='-20' width='30' height='120' rx='15' /%3E%3Crect x='170' y='20' width='30' height='80' rx='15' /%3E%3C/g%3E%3C/svg%3E") no-repeat top right;
  background-size: 250px 250px;
  background-position: calc(100% + 50px) -50px;
  pointer-events: none;
  z-index: 1;
}
.id-card-new .id-brand {
  position: absolute;
  top: 35px;
  left: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 2;
}
.id-card-new .id-photo {
  position: absolute;
  top: 35px;
  right: 35px;
  width: 120px;
  height: 160px;
  background: #fff;
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  z-index: 2;
}
.id-card-new .id-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.id-card-new .id-info {
  position: absolute;
  bottom: 35px;
  left: 40px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.id-card-new .id-group {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.id-card-new .id-label {
  font-size: 11px;
  color: #7b6d3b;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.id-card-new .id-value {
  font-size: 24px;
  font-weight: 900;
  color: #1a1a1a;
  line-height: 1;
}
.id-card-new .id-value.name {
  font-size: 19px;
  font-weight: 800;
}
@media(max-width: 600px) {
  .id-card-new {
    width: 100%;
    height: auto;
    min-height: 280px;
  }
  .id-card-new .id-brand { top: 25px; left: 25px; }
  .id-card-new .id-photo { top: 25px; right: 25px; width: 95px; height: 130px; }
  .id-card-new .id-info { left: 25px; bottom: 25px; gap: 8px; }
  .id-card-new .id-value { font-size: 20px; }
  .id-card-new .id-value.name { font-size: 16px; }
}
`;

// Remove the old .id-card-new css block
css = css.replace(/\/\* NEW ID CARD REDESIGN \*\/[\s\S]*?(?=\/\*|\Z)/, updatedCss);
fs.writeFileSync('src/index.css', css);

let dash = fs.readFileSync('src/pages/Dashboard.jsx', 'utf8');

const htmlToReplace = `<div className="id-card-new">
        <div className="id-bg-shapes"></div>
        <div className="id-brand">
          <div className="id-seal">
            <svg viewBox="0 0 100 120" fill="#174c79" width="65">
              <ellipse cx="50" cy="60" rx="45" ry="55" fill="none" stroke="#174c79" strokeWidth="2"/>
              <ellipse cx="50" cy="60" rx="40" ry="50" fill="none" stroke="#174c79" strokeWidth="1"/>
              <path d="M25 60 h50 M50 20 v20 M40 40 h20 M35 70 h30 v10 h-30 z" stroke="#174c79" strokeWidth="2"/>
              <text x="50" y="30" fontSize="10" textAnchor="middle" fill="#174c79" fontFamily="sans-serif">LUCEM ASPICIO</text>
              <text x="50" y="105" fontSize="12" textAnchor="middle" fill="#174c79" fontFamily="sans-serif">1847</text>
            </svg>
          </div>
          <div className="id-divider"></div>
          <div className="id-brand-copy">
            <strong>UNAH</strong>
            <small>UNIVERSIDAD NACIONAL<br />AUTÓNOMA DE HONDURAS</small>
          </div>
        </div>
        
        <div className="id-photo">
          <img src={currentUser.photo} alt="Foto" />
        </div>
        
        <div className="id-info">
          <div className="id-label">CUENTA</div>
          <div className="id-value">{currentUser.account}</div>
          <div className="id-label">NOMBRE</div>
          <div className="id-value name">{currentUser.name}</div>
          <div className="id-label">ID</div>
          <div className="id-value">{currentUser.idNumber}</div>
        </div>
      </div>`;

const htmlNew = `<div className="id-card-new">
        <div className="id-bg-crosses"></div>
        <div className="id-bg-shapes"></div>
        
        <div className="id-brand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Logo_UNAH.png/320px-Logo_UNAH.png" alt="UNAH" style={{height: '75px', mixBlendMode: 'multiply'}} />
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
      </div>`;

dash = dash.replace(htmlToReplace, htmlNew);
fs.writeFileSync('src/pages/Dashboard.jsx', dash);
