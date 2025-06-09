{

    //* Object literal 
    //? Creating literally an object - collection of properties and methods

    const user = {
        username : "Pranaw",
        loginCount : 8,
        signnedIn : true,

        getUserDetails : function () {
            console.log(`Got user data from details of ${this.username}`); //this prints the username of current object

            console.log(this); //this prints the current object (context)
        }

        
    }

    console.log(user.username);
    console.log(user["loginCount"]);
    user.getUserDetails()

    //! in global context, this keyword gives an empty pbject in node environment whereas it gives window object in browser

    console.log(this); 
}


{

    //* Constructor function
    //? A constructor function in JavaScript is a regular function used to create and initialize objects. It's typically used with the new keyword to create multiple instances of similar objects.

    //* Using constructor function (new) on a function

    function User (username, age, isLoggedIn) {
        this.username = username,
        this.age = age,
        this.isLoggedIn = isLoggedIn

        this.greeting = function () {
            console.log(`Welcome! ${this.username}`);
        }

        return this; //! this is optional

        //! Here this.() refers to the current context in which function is
        //! The other argument is what is actually passed in the constructor function
    }

    //* Creating an instance ('new' keyword)

    const userOne = new User ("Pranaw", 18, true)
    const userTwo = new User ("W", 19, false)

    console.log(userOne);
    console.log(typeof userTwo); //object
    console.log(typeof User); // function
  

    console.log(userOne.constructor); //it is a reference to itself

}

{
    // HW

    // instanceof read 

}