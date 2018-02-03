const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

const app = require('../server');

describe('GET empty products collection', function name(params) {
  
  it('should return an empty array', function (done) {
    request(app)
      .get('/products')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect([])
      .end(done)
  });

  it('should return a value of 1 after creating the first product', function (done) {
    request(app)
      .post('/products')
      .type('form')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ name: 'pen', price: 2, inventory: 30 })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        console.log(res.body.success);
        return res.body.success === false;
      })
      .end(done);
  })
});