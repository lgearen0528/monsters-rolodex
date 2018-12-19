const utils = require('./utils.js');
const expect = require('expect');
//mjackson expect library filled with
//different assertions!

//behavior test driven
it('Should add two numbers', () => {
  let res = utils.add(33, 11);
  expect(res).toBe(44).toBeA('number');
});

it('Should square a number', () =>{
  let res = utils.square(3);
  expect(res).toBe(9).toBeA('number');
});

it('should asyncAdd two numbers', (done) =>{
  utils.asyncAdd(4, 3, (sum) =>{
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (result) =>{
    expect(result).toBe(25).toBeA('number');
    done();
  });
});

// it('Should expect some values', () =>{
//   // expect(12).toNotBe(11);
//   // expect({name: 'Liam'}).toNotEqual({name: 'Liem'});
//   // expect([2,3,4]).toExclude(39);
//   expect({
//     name: 'Liem',
//     age: 22,
//     location: 'Davenport'
//   }).toExclude({
//     age: 23
//   });
// });

//it should verify first and last names are setName
it('Should set firstName and lastName', ()=>{
  let user = {
    location: 'Davenport',
    age: 22
  };
  let res = utils.setName(user, 'Liem Gearen');
  expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Liem',
    lastName: 'Gearen'
  });
});
