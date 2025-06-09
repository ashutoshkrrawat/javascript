{

    //Note: JS by default is prototype-based language

    //* Prototypal Inheritance

    /*
    
    Prototypal inheritance is a way for objects to inherit properties and methods from other objects. It is based on the concept of prototypes, which are objects that serve as blueprints for other objects.   

    In prototypal inheritance, an object can inherit from another object by setting its prototype to that object. When an object tries to access a property or method that it doesn't have, it will look for that property or method in its prototype. If the prototype has the property or method, the object will use it. If the prototype doesn't have the property or method, the object will look in the prototype's prototype, and so on. This process continues until the object finds the property or method or reaches the end of the prototype chain. 

    Example:

    Array -> Object -> null 
    String -> Object -> null
    Function -> object -> null
    
    */


}

{

    //* Notes

    /*
    
    
Here's what happens behind the scenes when the "new" keyword is used:

A new object is created:

The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
    
    
    */
}


{

    function multiplyBy5 (num) {
        return num*5;
    }

    multiplyBy5.power = 2

    console.log(multiplyBy5(6));
    console.log(multiplyBy5.power);
    console.log(multiplyBy5.prototype); 

}
{
    //* Constructor function

    function createUser (username, score) {
        this.username = username
        this.score = score

    }

    //* injecting our own function (method) inside the prototype

    createUser.prototype.increment = function () {
        this.score++
    }

    createUser.prototype.printMe = function () {
        console.log(`Score is ${this.score}`);
    }


    //* Importance of new keyword
    const chai = createUser ("chai", 10) 

    const tea = new createUser ("tea", 30) //! "new" keyword is much necessary because then only we can acess the newly created methods

    chai.printMe() //error (since can't read and access .printMe(), our created function, as "new" keyword was not used)

    tea.printMe() //runs (since it can read and access .printME(), as we used "new" keyword)

}

