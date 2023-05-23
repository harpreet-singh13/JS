const single = 'This is String';
const double = "This is String";

const doubleTick = `This is String`;






//****************** Searching for a Substring ******************* */

// const hobbies = 'I love HTML, CSS and JavaScript JavaScript.';

// // indexof
// const firstindex = hobbies.indexOf('JavaScript'); // return the first letter of occurence of substring "Javascript"
// const firstindex2 = hobbies.indexOf('JavaScript' , 22); // start searching on the 6th index
// console.log(firstindex);


// // lastindexof
// const lastindex = hobbies.lastIndexOf('JavaScript'); 
// console.log(lastindex);


// // includes
// const inc= hobbies.includes('HTML');
// const inc1 = hobbies.includes('React');

// console.log(inc);
// console.log(inc1);


// // startsWith
// console.log(hobbies.startsWith('I love'));

// // endsWith
// console.log(hobbies.endsWith('.'));




//****************** Getting a Substring ******************* */

// const exampleString = 'hotdog';

// // slice

// dog = exampleString.slice(3);
// console.log(dog);



//****************** Splitting a Substring ******************* */


// const exampleString = 'The quick brown fox jump over the lazy dog';

// const word = exampleString.split(' ');

// console.log(word);

//*************** Reverse, Repeat and Trim a String ************** */

// Reverse()


// const exampleString = 'test';

// const reverseString = exampleString.split('').reverse().join('');

// console.log(reverseString);


// repeat()

// const dogSays = 'woof ';

// console.log(dogSays.repeat(5));


// trim()

// const exampleString = '   Hello, World!   ';
// const email = '  contact@javascriptmastery.com  ';
// console.log(email.trim());



//********************* Assignment ******************* */

const guestList = 'Our guests are: emma, jacob, isabella, ethan';

const length = guestList.length;
console.log(length);

const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList);

const isEthanOnTheList = uppercasedGuestList.includes('ETHAN');
console.log(isEthanOnTheList);

const substringGuests = uppercasedGuestList.slice(uppercasedGuestList.lastIndexOf('EMMA'));
console.log(substringGuests);


const guest = substringGuests.split(',');
console.log(guest);



