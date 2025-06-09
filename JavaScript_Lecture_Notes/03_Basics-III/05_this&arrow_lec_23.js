{
//* What happens when we don't use "this" keyword in object 
// here we have used "this" keyword (this.property) for userName, while we hardcoded the age (used obj_name.property)

const user = {

    userName : "Pranaw Kumar",

    age : 18,

    welcome : function () {
        console.log(`My name is ${this.userName} and age is ${user.age}`);
    }
}

//Creating another object with same property (except the function)
const user2 = {

    userName : "W Kumar",

    age : 26,

    greet : user.welcome //here we have reused the function of user object
}

user2.greet() //My name is W Kumar and age is 18
//? Clearly, from the output we can see that we got the name of user2, but the age of user. Why?? Because we didn't use "this" keyword for the age property

//Note: Without "this" keyword, we would need to rewrite the method for every object, which defeats the purpose of object-oriented programming (i.e. we can't reuse our codes, without "this" keyword)

//Note: This is one of the reasons to use "this" keyword


}

{

    const user = {

        userName : "Pranaw Kumar",
        price : 999,

        //! "this" keyword refers the current context
        welcome : function () {
            console.log(`Welcome, ${this.userName} to our website!`);
            console.log("");
            console.log("This is 'this': ", this); //! This shows the current context
            console.log("");
        }
    }

    user.welcome()
    user.userName = "W Kumar"
    user.welcome()

    //! V.V.Imp!!!!!!!!!!!!!!!!!!!!!!1
    console.log(this) 
    //? For node environment, current context is none. Therefore, here it prints {} (empty object)

    //? But for browser window, it prints the "Window object", which is the global object in the browser console. This global object (Window) helps to capture us various events of Window (DOM)


}

{

    //* Using "this" keyword inside function (without objects)
    function chai() {
        console.log(this);
    }

    chai() //prints global object

    function chai2 () {
        let nam = "Pranaw Kumar"

        console.log(this.nam) //! undefined. Here, we can't access nam. Since this only works for context in objects and not functions
    }

    chai2() //undefined 

}

{

    //* Arrow function

    /*

    () => {} //? explicit return-type
    () => __ //? implicit return-type
    () => () //? implicit return-type
     
*/
    //* Using arrow functions for function declaration

    let chai = () => {
        let nam = "Pranaw"

        console.log("This is a function, made using arrow function!");

        console.log(this); //Note: here we got an empty object {} instead of a global object in previous function expression

        console.log(this.nam); //! Here as well we got undefined. Same reason as before.
    }

    chai()

    //? Therefore, the first major difference (between both types of function expression) is that printing simple "this" keyword in both types of function definition

    //* Explicit return

    const sum = (num1, num2) => {
        return num1 + num2
    }

    //*Implicit return (used for single-line statements)

    //! here no curly braces and return keyword is used
    //*Method-I

    const sumNum = (num1, num2) => num1 + num2

    console.log(sumNum (2, 8));

    //! Below is also acceptable!

    //*Method-II    
    //simply a paranthesis
    const sumMe = (num1, num2) => (num1 + num2)

    console.log(sumMe (5, 2));

    //? When we want to return object using implict return type, then second method (using parenthesis becomes necessary)

    const example = () => ({username: "W", age : 18})
    console.log(example());

}

//! Difference in 'this' keyword in regular function and arrow functions

// In regular functions, "this" refers to the object that calls the function (runtime binding). 

//In arrow functions, this is lexically inherited from the surrounding scope, not the function itself. It maintains the this value from where the arrow function is defined.