//Basic operaions

console.table([3+2, 3-2, 3*2, 3/2, 3**2, 3%2])

/*

1. ** is used for a^b
2. % is used for modulo (remainder when a divided by b)

*/


//Concatenation of a string

let str1 = "Hello"
let str2 = " Pranaw"

let finalString = str1 + str2

console.log(finalString)

//* Complex cases of number and string

//! All outputs are of string

console.log("1" + "2") // "12"
console.log("1" + 2) // "12"
console.log(1 + "2") // "12"

console.log("1" + 3 + 2) // "132" 
console.log(1 + 3 + "2") // "42" (since left to right execution)

//* Assigning same value to multiple variables

let num1, num2, num3;

num1 = num2 = num3 = 2; //This works because assignment operator moves from right to left

//Prefix and Postfix operators- Read about it (research about it in MDN docs)
