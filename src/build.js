import fs from 'fs';
import app from './app.js';
import request from 'supertest'

// Construye la app y genera el HTML (artefacto final)
(async () => {
    const res = await request(app).get('/');
    fs.mkdirSync('public', { recursive: true });
    fs.writeFileSync('public/index.html', res.text);
    console.log('Static HTML generated!');
})();