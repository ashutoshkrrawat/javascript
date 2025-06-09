"use strict"; //? This is typed to treat all JS code in the file according to newer version

alert (3+3) //! gives error, since we are using node.js currently and not browser- run this in browser console

/*

//* Types of data-types

//* I- Primitive Data Type

1. number (2^53)
2. bigint 
3. string
4. boolean (true or false)
5. null (standalone type)
6. undefined 
7. symbol (unique)

//* II- Non-Primitive Data types

1. object

*/



//* To get the type of any data- use type of

let x = 5
console.log(typeof x)
console.log(typeof "Pranaw")

//or

console.log(typeof (x))

console.log(typeof null) //Note: gives object as output; a drawback in the JS language
console.log(typeof undefined) //Note: gives undefined as output; undefined is a type of itself

console.log(typeof NaN); //number
