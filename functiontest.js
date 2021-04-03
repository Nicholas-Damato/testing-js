// Declaration
// function createVar() {
//    let myName = 'Joe';
// }

// Expression 
//let createVar = function() {
//    let myName = 'Joe';
// }

// Arrow
// let createVar = () => {
//    let myName = 'Joe';
// }

function returnName() {
    return 'Joe';
}
var result = returnName();
console.log(result)

// ^^^^^^^^^ Declaration ^^^^^^^^^^^^

function returnFour() {
    return 2+2;
}
let four = returnFour();
console.log(four)

// ^^^^^^^^^^^^ Declaration ^^^^^^^^^^^^

let createHello = function() {
    return 'Hello';
}
let str = createHello();
console.log(str)

// ^^^^^^^^^^^^ Expression ^^^^^^^^^^^^^

let returnTrue = () => {
    return true;
}
let result2 = returnTrue();
console.log(result2)

// ^^^^^^^^^^^^ Arrow ^^^^^^^^^^^^^^^^^

let returnFalse = () => false;
let result3 = returnFalse();
console.log(result3)

// ^^^^^^^^^^^^ One line arrow function where the return value is IMPLIED ^^^^^^^^^^^^^