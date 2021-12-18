//ES11 Features
//Optional Chaining
//Nullish Coalescing(0,null,nsn,undefined)
//Private Fields
//Static Fields
//BigInt
//promises.allSettled()

//--------------------------------------------Optional Chaining
//returns undefined as o/p instead of typeerror when "not defined or null value".

const user = {
  name: "Aryclenio Barros",
  age: 22,
  alive: true,
  address: {
    street: "Hyrule street",
    number: 24,
  },
};

// Without optional chaining
//const number = user.address && user.address.number

// With optional chaining
const number = user.address?.number;

//2. Nullish Coalescing
//if assigning a number to a variable, or default it to 5 if the initial value is not a number.
// The right-hand side value will only be assigned if the left-hand side value is equal to undefined or null
let theNumber = 0;
let number = theNumber || 5;
console.log(number); // output is: 5
let number = theNumber ?? 5;
console.log(number); // output is: 0

//-------------------------------------------Private Fields
//To define a private property in JavaScript, it should have the hashtag symbol in the prefix.

class Something {
  #property;

  constructor() {
    this.#property = "test";
  }

  #privateMethod() {
    return "hello world";
  }

  getPrivateMessage() {
    return this.#property;
  }
}

const instance = new Something();
console.log(instance.property); //=> undefined
console.log(instance.#property); //=> Syntax error
console.log(instance.privateMethod); //=> undefined
console.log(instance.getPrivateMessage()); //=> test

//-----------------------------------------Static Fields
//declare a class method using static keyword and call it from outside of a class.

class Smartphone {
  add_color() {
    console.log("Adding Colors");
  }
}
const apple = new Smartphone();
apple.add_color(); // output is: Adding Colors
Smartphone.add_color(); // TypeError: Smartphone.add_color is not a function

class Smartphone {
  static add_color() {
    console.log("Adding Colors");
  }
}
const apple = new Smartphone();
apple.add_color(); // error,not a function
Smartphone.add_color(); // output is: Adding Colors

// -------------------------------------------BigInt
//2^53 – 1 is the maximum number you can represent in JavaScript.
//But with JavaScript ES11 update, BigInt will support the creation of numbers that are bigger than that.
// You can view the maximum number that can be represented in JavaScript for yourself by executing the below code.

console.log(Number.MAX_SAFE_INTEGER); // output is: 9007199254740991

// Case (i): When you add 1 to this number:
const maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum + 1); // output is: 9007199254740992

// Case (ii): When you add 10 to this number:
const maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum + 10); // output is: 9007199254741000 which is wrong.
//Please Note: The right output is 9007199254741001.

//Hence, when you implement BigInt by adding the alphabet ‘n’ at the end of your number,
// you will get the correct output/result.

const maxNum = 9007199254740991n;

// Case (i): When you add 1 to this number:
const maxNum = 9007199254740991n;
console.log(maxNum + 1n); // output is: 9007199254740992n

// Case (ii): When you add 10 to this number:
const maxNum = 9007199254740991n;
console.log(maxNum + 10n); // output  is: 9007199254741001n

//Also, it is important to not mix BigInt with other types:
const maxNum = 9007199254740991n;
console.log(maxNum + 10); // output is: Cannot mix BigInt and other types, use explicit conversions

//---------------------------------------globalThis
// in browsers  global object is available under the window variable;
//in Node.js, it is an object called global.
//globalThis, it is now easy to use a global object regardless of the environment in which the code is running.

// In a browser
window == globalThis; // true

// In node.js
global == globalThis; // true

//--------------------------------------------MatchAll
//match
// returns only the items that were matched.
const regex = /\b(iPhone)+\b/g;
const smartphones =
  "S series, iPhone, note series, iPhone, A series, iPhone, moto phones";

for (const match of smartphones.match(regex)) {
  console.log(match);
}
//// ‘iPhone’‘iPhone’‘iPhone’

//matchall
const regex = /\b(iPhone)+\b/g;
const smartphones =
  "S series, iPhone, note series, iPhone, A series, iPhone, moto phones";
for (const match of smartphones.matchAll(regex)) {
  console.log(match);
}
/* [
  'iPhone',
  'iPhone',
  index: 10,
  input: 'S series, iPhone, note series, iPhone, A series, iPhone, moto phones',
  groups: undefined
]
[
  'iPhone',
  'iPhone',
  index: 31,
  input: 'S series, iPhone, note series, iPhone, A series, iPhone, moto phones',
  groups: undefined
]
[
  'iPhone',
  'iPhone',
  index: 49,
  input: 'S series, iPhone, note series, iPhone, A series, iPhone, moto phones',
  groups: undefined
] */

//-----------------------------------Promise.AllSettled
//The Promise.AllSettled attribute allows you to perform a conditional that 
//observes whether all promises in an array have been resolved.
const myArrayOfPromises = [
    Promise.resolve(myPromise),
    Promise.reject(0),
    Promise.resolve(anotherPromise)
]

Promise.AllSettled(myArrayOfPromises).then ((result) => {
   // Do your stuff
})