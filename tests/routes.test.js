const request = require('supertest');
const app = require('../index.js');

beforeAll(async () => {
    console.log('Jest starting!');
});

afterAll(() => {
    app.close();
    console.log('Server closed!');
});
describe('Basic route tests', () => {
    test('Get planets route', async () => {
        const response = await request(app).get('/planets');
        expect(response.status).toEqual(200);
    });
});
