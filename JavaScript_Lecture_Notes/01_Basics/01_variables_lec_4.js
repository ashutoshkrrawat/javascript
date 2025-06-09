//There are multiple types of keyword for declaring datas. 

//const for constants
//let, var for variables

const accountId = 5
//accountId = 2 //! Not allowed (since const can't be redefinded!!!)

let accountCity = "Delhi"
accountCity = "Jharkhand" //Allowed (since let allows redefinition)

var accountName = "Pranaw" //var keyword not recommended!!!! 
accountName = "ABC" //Allowed (since var allows redifintion)

accountPass = 5 //declared without any keyword (not at all recommneded!!!)

console.table([accountId, accountCity, accountName, accountPass]) //Used to display multiple variables in a tabular manner

//if variable is declared but not initialised, then its value becomes undefined by default

let x;
console.log("Value of x:", x);