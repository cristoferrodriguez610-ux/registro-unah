const fs = require('fs');
const html = fs.readFileSync('c:/Users/Bceu/Downloads/registo/index.html', 'utf-8');

const photos = html.split('photo: `');
if (photos.length > 2) {
    const karolB64 = photos[1].split('`')[0].split(',')[1];
    const luzB64 = photos[2].split('`')[0].split(',')[1];

    fs.writeFileSync('c:/Users/Bceu/Downloads/registo/karol.png', Buffer.from(karolB64, 'base64'));
    fs.writeFileSync('c:/Users/Bceu/Downloads/registo/luz.jpg', Buffer.from(luzB64, 'base64'));
    console.log('Saved both images');
}
