const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app.js');
//rewire adds two functions to app.js -> app.__set__(), app.__get__()

//spies come natural with expect module
describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);


  it('should call the spy correctly', () =>{
    let spy = expect.createSpy();
    spy('Liem', 25);
    expect(spy).toHaveBeenCalledWith('Liem', 25);
  });

  it('should call saveUser with user object', () => {
    let email = 'liem@ex.com';
    let password = '123';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
