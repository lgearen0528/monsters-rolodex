var nameVar = 'Andrew';
var nameVar = 'Liem';
console.log('nameVar', nameVar);

let nameLet = 'Missy';
nameLet = 'Katie';
console.log('nameLet', nameLet);

const nameConst = 'Mark';
console.log('nameConst', nameConst);

//block scoping -> let and const ONLY accessible in declared code block (if, functions, loop)

const fullName = 'Missy Gearen';
let firstName;
if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
    
}

console.log(firstName);
