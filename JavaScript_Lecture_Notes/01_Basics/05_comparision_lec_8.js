console.log(2 > 1) //true
console.log(5 < 1) //false

//* Comparing different data types

console.log("2" >= 1) //true. since here string treated as a number while comparing

console.log(5 == "5") //true. same reason

//* Strict check (===) - checks both data-type and value (no conversion here)

console.log("2" === 2) //false- since type is not same
console.log("2" > 1) //true
