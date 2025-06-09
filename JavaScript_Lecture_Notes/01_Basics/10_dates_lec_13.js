//* Dates - Date is an object

//! Use Temporal in future to implement dates and time. Read MDN documetation for latest method

//Using the current way

let myDate = new Date () //an instance of the object

console.log(typeof myDate) //object

//There are several methods of dates like:

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())


console.log(myDate.getTime()) //! .getTime() gives total milli-seconds from 1970 (some day) to today


//Creating our desired date

let myCreatedDate = new Date (2023, 0, 23, 5, 3, 45) //Months are 0-indexed (here)

console.log(myCreatedDate.toLocaleString())  

let tempDate = new Date ("2020-01-15") //here moths are 1-indexed

console.log(tempDate.toLocaleString()) 


//* Timestamps

let myTimeStamp = Date.now() //gives the current time (in form of milli-seconds from 1970)

let otherDate = new Date ("2020-05-14")

let otherTimeStamp = otherDate.getTime() //gives the time in milli-second from 1970 to the set date

//* To convert current time (from 1970) in seconds

let myTime = Date.now()

console.log(Math.floor(myTime/1000));


//* To get month of current year etc

let newDate = new Date();

console.log(newDate.getMonth())
console.log(newDate.getDay()) //gives the day of the week
