import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server.js';

chai.use(chaiHttp);
const {expect} = chai;

async function pauseFor10Seconds() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 10000);
  });
}

before(async function() {
  await pauseFor10Seconds();
});

describe('User Routes', function() {
  it('should get all users', function(done) {
    chai.request(app)
      .get('/api/user/all')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;

        done();
      });
  });
});
