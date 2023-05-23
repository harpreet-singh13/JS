// creating a variable using var keyword
// var variableName = 'test';

// creating a variable using let keyword
// let variableName = 'test';

// creating a variable using const keyword
// const variableName = 'test';

// VARIABLE Naming Rule
// 1. The name should be unique
// 2. The name should not be any reserved keyword
// 3. The name must start with a character, _ , $


// console.log(variableName);





/*    ****************** String ***************** */ 

const singleQuote = 'hello!';
const doubleQuote = "hello!!";

// there is no differnce b/w single and double quote string

const name = 'Harpreet';
const backtick = `hello!!! , ${name}`;

console.log(backtick);

const tt = `${2+2}`;
console.log(tt);



/*    ****************** Number ***************** */ 

const firstNumber = 5;
const secondNumber = 10;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);


// Nan -- Not a number(full form)
// Nan type is number 😂
// it comes when we perform incorrect operation like string multiply with number



/*    ****************** Boolean ***************** */ 

// true -- yes , correct , 1
// false -- no , incorrect , 0

const age = 20;

console.log(age > 18);



/*    ****************** Null and undefined ***************** */ 

let a = null;

console.log(a);

var x;

console.log(x);

console.log(typeof x);



/*    ****************** Object ***************** */ 

const person = {
    name: 'John',
    age: 25,
}

// Dot notation
console.log(typeof person);

const arr = [1,2,3,4];
console.log(typeof arr);

const date = new Date();
console.log(date);