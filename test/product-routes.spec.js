const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

const app = require('../server');

describe('GET product smoke test', function name(params) {
  
  it('should return "product smoke test" text', function (done) {
    request(app)
      .get('/products')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end(done)
  })
});