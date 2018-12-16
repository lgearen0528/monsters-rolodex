console.log('Starting app');

setTimeout(() => {
  console.log('in callback');
}, 2000);

setTimeout(() => {
  console.log('second callback');
}, 0);

console.log('Finishin up');
