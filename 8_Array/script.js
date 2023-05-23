// const months = ['January', 'February', 'March', 'April'];

// for (let i = 0 ; i < months.length ; i++ ) {
//     console.log(months[i]);
// }

const names = ['Jon', 'Bob', 'David', 'Mark'];

// Array Push --> insert element at the end
// return value of push --> new array length

// const length = names.push('Dean');
// console.log(length);

// Array pop --> Delete the last element of an array
// names.pop();



// Array shift --> Deletes the first element of an array
// names.shift();
// console.log(names);


// Array unshift --> Add a new value to the start of an array
// names.unshift('Dean');
// console.log(names);


// ******************** Array Splice ************************* //

// names.splice(2, 0, 'Jenny', 'Jonny');
// start index=2 and remove 0 element and then add 'Jenny', 'Jonny'
// console.log(names);


// names.splice(0, 2, 'Jenny', 'Jonny');
// start index=0 and remove 2 element and then add 'Jenny', 'Jonny'
// console.log(names);


// ********************* Array Slice ************************** //

// const noOneLikesJon = names.slice(1); // start index=1 to end
// console.log(noOneLikesJon);



//********************** Array For Each ************************ *//

const names2 = ['Jon', 'Jenny', 'Johnny'];

// names2.forEach((name ,i)=> {
//     console.log(name ,i);
// });


// names2.forEach((name) => {
//     console.log(name);
// } );


// const logTheName = (name , i) => {console.log(name,i)};
// names2.forEach(logTheName);

// names2.forEach((name, i) => { console.log(name, i) });


// USE When
// You want to do something with each element of an array

// Don't use when
// You want to stop or break the loop when some condition is true
// You are working with async code

// Return value of forEach is undefined always

// let sum = 0;

// const numbers = [65, 44, 12, 4];

// const returnValue = numbers.forEach((number) => {
//     sum += number;
// })

// console.log(sum);

// console.log(returnValue);




// ************************* Array MAP  *************************//

// difference b/w map and forEach

// Map method -- allocates memory for store and return value
// forEach method -- does not allocate memory that's why we get undefined return value always


// const inverntory = [
//     { price: 5, name: 'eggs' },
//     { price: 4, name: 'hen' },
//     { price: 3, name: 'mayo' },
//     { price: 5, name: 'bread' },
// ];

// const prices = inverntory.map((item) => item.price);
// const items = inverntory.map((item) => item.name);

// console.log(prices);
// console.log(items);




// ************************* Array Filter  *************************//

// const numbers = [-10, 0, -2, 15, -36, 25];

// const positiveNumbers = numbers.filter((number) => {
//     return number >= 0;
// });

// console.log(positiveNumbers);


// A start up wants to reward the employees 
// with 7 or more hours of overtime

const employeesData = [
    { name: 'Sebastian', overtime: 5 },
    { name: 'Cardi Vee', overtime: 7 },
    { name: 'George Lopez', overtime: 12 }
];

// const employeesToReward = employeesData.filter((employees) => {
//     return employees.overtime >= 7;
// })

// console.log(employeesToReward);

const employeesToReward = employeesData.filter((employeesData) => employeesData.overtime >= 7);
const employeesName = employeesToReward.map((emp) => emp.name);

// console.log(employeesName);

employeesName.forEach((name) => console.log(`${name} received a reward`));

