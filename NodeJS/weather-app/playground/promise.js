let asyncAdd = (a, b) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }else{
        reject('Invalid arguments passed in.')
      }
    }, 1500);
  });
};

asyncAdd(2,'5').then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('Should be 40', (res === 40));
}).catch((errorMessage) => {
  console.log(errorMessage);
});

// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('it worked');
//     reject('It failed.');
//   }, 2500);
// });
//
//
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });
