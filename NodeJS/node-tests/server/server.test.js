const request = require('supertest');
const expect = require('expect');
//can compbine both for super flexible testing


//import express app from server.js
let app = require('./server.js').app;
//server
  //GET /
    //test case
  //GET /users
    //test case
//reformatted below test with describe output
describe('Server', () => {
  describe('GET /', () =>{
    it('should return hello world response', (done) => {
      //supertest for app
      request(app)
      //route
        .get('/')
        //expect certain status code
        .expect(404)
        //assert certain things from response with arrow function
        .expect((res)=>{
          expect(res.body).toInclude({
              error: 'Page not found.'
          });
        })
        .end(done);
    });
  });
  describe('GET /users', () => {
    //new test to assert response of 200 and that i exist in users array
    it('should assert I exist in users array', (done) =>{
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Liem',
            age: 22
          });
        })
        .end(done);
    });
  });
});
/* Base testing with mocha
it('should return hello world response', (done) => {
  //supertest for app
  request(app)
  //route
    .get('/')
    //expect certain status code
    .expect(404)
    //assert certain things from response with arrow function
    .expect((res)=>{
      expect(res.body).toInclude({
          error: 'Page not found.'
      });
    })
    .end(done);
});

//new test to assert response of 200 and that i exist in users array
it('should assert I exist in users array', (done) =>{
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Liem',
        age: 22
      });
    })
    .end(done);
})*/
