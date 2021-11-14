//<<<  JS CLASS SYNTAX>>>
//<<< JS CLASS METHOD>>>

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let myCar = new Car('Gentra', 2019);

// console.log(`My car is: ${myCar.age()} years old.`); => My car is: 2 years old.


//<<<< SENDING PARAMETERS TO CLASS METHODS>>>

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age(x) {
//         return x - this.year;
//     }
// }

// let date = new Date();
// let year = date.getFullYear();

// let myCar = new Car("Gentra", 2019);

// console.log(`My car is: ${myCar.age(year)} years old`);  => My car is 2 years old.


//<<<< JS CLASS INHERITANCE>>>

// TO CREATE CLASS INHERITANCE WE SHOULD USE 'extends' keyword!

// A class created with a class inheritance inherits all the methods from another class:


// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return `I have a ${this.carname}`;
//   }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return `${this.present()}, it is a ${this.model}`;
//     }
// }

// let myCar = new Model('Gentra', 'GM');

// console.log(myCar.show()); => I have a Gentra, it is a GM.


//<<< JS CLASS GETTERS AND SETTERS>>>

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     get cnam() {
//         return this.carname;
//     }
//     set cnam(x) {
//         this.carname = x;
//     }
// }


// let myCar = new Car('Gentra');

// console.log(myCar.cnam); => Gentra.


//<<< JS CALLBACK FUNCTION>>>

// Do a calculation and then display the result
// REGULAR FUNCTION

// function myDisplayer(some) {
//     console.log(some);
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum
// }


// let result = myCalculator(5, 5);
// myDisplayer(result); => 10


// CALLBACK FUNCTION

// Using a callback, you could call the calculator function (myCalculator) with a callback, and let the calculator function run the callback after the calculation is finished:

// function myDisplayer(some) {
//     console.log(some)
// }

// function myCalculator(num1, num2, call) {
//     let sum = num1 + num2;
//     call(sum);
// }

// myCalculator(5, 5, myDisplayer);
// myCalculator(5, 5, myDisplayer()) !Wrong.


// In the example above, muDisplayer is the name of a function.
// It is passed to myCalculator() as an argument.


// <<<<< ASYNCHRONOUS JAVASCRIPT>>>

/*FUNCTIONS RUNNING IN PARALLEL WITH OTHER FUNCTIONS ARE CALLED ASYNCHRONOUS A GOOD EXAMPLE
IS JS setTimeout()
*/


// setTimeout

// setTimeout(myFunction, 3000);

// function myFunction() {
//     console.log('I love You!!!')
// };

// In the example above, myFunction is used as a callback!



//<<<<< Call Stack  >>


// const multiply = (x, y) => {
//    return x * y
// };

// const square = (x) => {
//   return  multiply(x, x);
// };

// const isRightTriangle = (a, b, c) => {
//     return square(a) + square(b) === square(c);
// };

// console.log(isRightTriangle(3, 4, 5));



//<<< JS PROMISE>>>>


// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2
//     if (a == 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// });


// 2- Example

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User left',
                message: ':('
            })
        } else if ('User Watching cat meme,') {
            reject({
                name: 'User Watching cat meme',
                message: 'WebDevSimplified < Cat'
          })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}


watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
});



























