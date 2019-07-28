const request = require('supertest');
const server = require('./server.js');

describe('Server', () => {
  describe('[GET] /users', () => {
    it('should get all users from the database', () => {
      return request(server)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect(200)
        .then((res) => {
          expect(res.body).toBeInstanceOf(Array);
        });
    });
  });

  describe('[POST] /register', () => {
    it('should add a new user to the database', () => {
      request(server)
        .post('/api/register')
        .send({
          username: 'Malik',
          password: 'infiltrate',
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .then(res => console.log(res));
    });
  });
});
