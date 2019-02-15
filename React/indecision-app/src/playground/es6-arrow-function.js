// const square = function (x){
//     return x*x;
// };

// // const squareArrow = (x) => {
// //     return x*x;
// // }
// const squareArrow = (x) => x*x;

// console.log(squareArrow(8))


//arrow functions
//getFirstName
// const fullName = 'Missy Gearen';
// let firstName;
// if (fullName){
//     firstName = fullName.split(' ')[0];
//     console.log(firstName);
    
// }

// console.log(firstName);

// const getFirstName = (fullName) => {
//     let firstName;
//     if(fullName){
//         firstName = fullName.split(' ')[0];
//         console.log(firstName)
//     }
// }
const getFirstName = (fullName) => fullName ? console.log(fullName.split(' ')[0]) : null;

getFirstName('Liem Gearen');