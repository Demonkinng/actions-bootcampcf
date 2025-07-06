import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
    it('should return HTML', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Bootcamp de GitHub Actions en Codigo Facilito')
    });
});