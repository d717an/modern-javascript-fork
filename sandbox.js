// strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';

console.log(email);

// string concatenation
let firstName = 'brandon';
let lastName = 'sanderson';
let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting characters
console.log(fullName[4]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());

let index = email.indexOf('@');
console.log(index);

// common string methods

// let result = fullName.toLowerCase();

// let result = email.lastIndexOf('n');

// let result = email.slice(0,5); // slice from char 0 to char 5

// let result = email.substring(4,10); // substring of 10 char starting at char 4

// let result = email.replace('m','w');

// let result = email.replace('n', 'w');

// console.log(result)

let radius = 10;
const pi = 3.14;

// console.log(radius,pi);

// math operators +, -, *, /, **, %

// console.log(10/2);

// let result = radius % 3; // mod
// let result = pi * radius**2;

// order of operation - BIDMAS - Brackets, Indices, Div, Mult, Add, Subt

// let result = 5 * (10-3)**2;

// console.log(result);

let likes = 10;
// likes = likes +1;
// likes++;
// likes--;
// likes+=10;
// likes-=5;
// likes*=2;
// likes/=4;
// likes**=3;
// console.log(likes);

// NaN - not a number - result for calcs that don't produce a number
console.log(5/'hello');

// Concatenating Numbers
// let result = 'the blog has ' + likes + ' likes';

// template strings (aka "template literal")
const title = 'Best reads of 2019';
const author = 'Mario';
const likes2 = 30;

let result = `The blog called ${title} by ${author} has ${likes2} likes` // use back ticks, not quotes / apostrophes

console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);


let ninjas = ['shaun',`ryu`, 'chun-li'];

console.log(ninjas);

ninjas[1] = 'ken';

console.log(ninjas);

console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

// Array methods
// let out = ninjas.join(',');
// let out = ninjas.indexOf('chun-li');
// let out = ninjas.concat(['ken', 'crystal']);
let out = ninjas.push('ken'); // example of a method that alters the original value, aka "destructive method"
out = ninjas.pop();

console.log(ninjas);

// Undefined and Null

let age;

console.log(age, age+3, `the age is ${age}`);

let ageN = null; // useful for clearing values

console.log(ageN, ageN+3, `the age is ${ageN}`);


// Booleans

console.log(true, false, 'true', 'false');

// methods can return booleans
console.log(email.includes('@'));

let names = ['mario', 'luigi', 'toad'];
console.log(names.includes('luigi'));


// comparison operators
let age2 = 25;
console.log(age2 == 50);
console.log(age2 != 50);
console.log(age2 <= 50);
console.log(age2 >= 50);
console.log(age2 > 25);

let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal'); // compares first letter of each, later letters in alphabet are greater
console.log(name > 'Shaun'); // lowercase letters are greater than upper


// "==" is known as a loose comparison, meaning different types can be equal
console.log(age2 == 25);
console.log(age2 == '25'); // JS is converting the str to a number behind the scenes

// strict comparison (diff types cannot be equal)
console.log(age2 === 25);
console.log(age2 === '25'); 
console.log(age2 !== '25'); 


// type conversion
let score = '100';
console.log(typeof score);
console.log(score + 1); // concatenates, does not give 101

score = Number(score);
console.log(score + 1);

// can check the type of something with typeof
console.log(typeof score);


let testStr = Number('hello');
console.log(testStr); // NaN

let testNum = 50;
console.log(String(testNum), typeof String(testNum));

// Boolean type conversions... 
// Boolean("truthy value") = true, Boolean("falsey value" = false)
console.log(Boolean(100)); //positive, neg numbers are truthy
console.log(Boolean(0)); //zero is falsely
console.log(Boolean('0')); //strings or any length are truthy
console.log(Boolean('')); //strings of no length are falsey


// ^ explicit type conversion, we're asking for it
// there is also implicit type conversion that happens behind the scenes






