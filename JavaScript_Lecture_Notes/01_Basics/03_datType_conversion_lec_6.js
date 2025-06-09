//* Conversion from one data-type to others

//* Converting to number

let score = "33"

let scoreInNumber = Number (score) //This converts the string into a number

//Hence, we can similarly convert to any data-type by simple using its name with first letter as capital, like- String, Number, Boolean etc

console.log(typeof score) //string
console.log(typeof scoreInNumber) //number 

//What if, if the string has letters as well??

let x = "33abc"
let convertToNumber = Number (x)

console.log(convertToNumber) //NaN (it means not a number- since we encountered letters in the variable x)
console.log(typeof convertToNumber) //number

/* 

Summary (for dataType conversion- from other data-type to a Number)

"33" => 33
"33abc" => NaN
"abc" => NaN
true => 1; false => 0
null => 0
undefined => NaN


*/

//* Conversion to boolean

let loggedIn = 1;
let logged = Boolean (loggedIn)

console.log(logged) //true
console.log(typeof logged) //boolean


/*

Summary (from any data-type to a boolean)

1 => true; 0 => false
"" => false
"abc" => true

*/


//Other data-type to string

let num = 23
let numToString = String (num)

console.log(numToString)
console.log(typeof numToString) //string