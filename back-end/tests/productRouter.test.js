import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('Product Routes', function() {
  let productId = null;

  it('should get all products', function(done) {
    chai.request(app)
      .get('/api/product')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;

        productId = res._body.payload.products[0]._id;

        done();
      });
  });

  it('should get product by id', function(done) {
    chai.request(app)
      .get(`/api/product/${productId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;

        done();
      });
  });
});
