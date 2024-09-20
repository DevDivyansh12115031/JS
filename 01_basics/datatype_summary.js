//  Primitive datatypes

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) datatypes

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

///// /////////// This is the way to create object
let myObj = {
    name: "hitesh",
    age: 22,
}
 
///// THis is the way to create function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// here you can learn more about datatypes

// https://262.ecma-international.org/5.1/#sec-11.4.3




//// Memories 

// Stack memory=Used in primitive type , here we get a copy of variable etc. here if we change the value so that change wil be in copy variable not in originl value

// Heap memory = Used in Non primitive type , here we get reference means original value here if we change the value so that change will be in original value.