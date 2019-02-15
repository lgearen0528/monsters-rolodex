//arguments object no longer bound in arrow functions
const add = (a, b) => {
    // console.log(arguments)
    return a + b;
};
console.log(add(55,1, 1001));


// this keyword - no longer bound in arrow functions

const user = {
    name: 'Liem',
    cities: ['Chicago', 'Davenport', 'North Aurora'],
    printPlacesLived(){
        return this.cities.map((city)=>this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(`${this.name} has lived in ${city}`)
        // });
        //return cityMessages;
    }
};

console.log(user.printPlacesLived());

//challenge:

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};
console.log(multiplier.multiply());