{

//* Object Literals -- Non-Singleton object 

//? Object - Key-value pairs

//* Object creation -- This is first way of creating objects
const jsUser = {

    name : "Pranaw", //or "name" = "Pranaw" //! This (second way) is the actual process inside the system
    age : 18,
    location : "Jharkhand",
    email : "pramadhu.kumar@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"],
    "full name" : "Pranaw Kumar"

}

//* Object access

//! Method-I

console.log(jsUser.age)

//Note: We can't access full name using this method, as it has a space in between
//console.log(jsUser.full name); //error

//! Method-II

console.log(jsUser["age"]) //just like an array
console.log(jsUser["full name"]) //this method works in printing the full name


//* Changing the values of an object

jsUser.email = "lucrisile200@gmail.com"
console.log(jsUser.email);

//* Object.freeze() method

Object.freeze(jsUser) //? This prevents any further change in the given object. No change wil propagate in the object even if done

jsUser.age = 25
console.log(jsUser.age) //still  18, since no change was propagated!!
console.log(jsUser) 

}

{

    const jsUser = {

        name : "Pranaw", //or "name" = "Pranaw" //! This (second way) is the actual process inside the system
        age : 18,
        location : "Jharkhand",
        email : "pramadhu.kumar@gmail.com",
        isLoggedIn : false,
        lastLoginDays : ["Monday", "Wednesday"],
        "full name" : "Pranaw Kumar"
    
    }

    console.log(jsUser)

    //* Adding a new property

    jsUser.x = 25 
    console.log(jsUser)  //we can see a new member added (x)

    //* Adding a new method (function)

    jsUser.greet = function () {
        console.log("Hello World!")
    }

    jsUser.greet() //function is called

    console.log(jsUser.greet) //gives the reference of the function
    console.log(jsUser) //we can see a new function added (greet)

    //* Using this keyword 
    //! this keyword is used to access the members of the current object

    //declaring another function of object 'jsUser' outside the object
    jsUser.greet2 = function () {
        console.log(`Good morning! ${this.name}. Welcome to JavaScript`);
    }

    jsUser.greet2()

//Note: Functions are treated as "First Class Citizens" in JavaScript, that is there is no discrimiantion in functions and hence can be used in many places like declaring variable, passing as an argument, passing in an object etc

}

{

//* Symbol 

//! Creating symbol

const mySym = Symbol ('key1')

//! Passing as a key in the object

let obj = {

    name: "Pranaw",
    [mySym] : "mykey1" //Syntax for using symbols as a key in an object (if boxes were not used, it would have been made a string)

}

console.log(obj) // { name: 'Pranaw', [Symbol(key1)]: 'mykey1' }

//! Accessing Symbols
console.log(obj[mySym]) //Syntax for accesing symbols
console.log(typeof mySym) //Symbol

}
