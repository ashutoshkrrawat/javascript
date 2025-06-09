{

    //* Challenge

  const myName = "Pranaw       ";

   console.log(myName.trueLength());
  //! Challenge: We want to create a method that gives us the true length of the string. This method should also work on all strings.

}

{

    
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//* Adding a method to Object prototype
//? It will be accessible to all arrays, objects, functions, string (due to prototypal inheritance, object is in the top of it)
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

//* Adding a method to Array Prototype
//? It will be only accessible to all arrays and not other objects (since array prototype mei add hua hai and not in object prototype.)
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh() //accessible. Since hitesh() is in object prototype and heroPower is also an object
myHeros.hitesh() //accessible. Since hitesh() is in object prototype and myHeros is an array (which has object prototype in it as well)
myHeros.heyHitesh() // accessible. Since heyHitesh() is in array prototype and myHeroes is array
heroPower.heyHitesh() //! Not accessbible!! Since, heyHitesh() is in array prototype, while heroPower is an object and hence has access to only object prototype

}

{

    //* Inheritance

    //* Old way

    
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //? Here prototype of "TeachingSupport" is set into "TASupport" ("TeachingSupport" inherits "TASupport")
}

 Teacher.__proto__ = User //? Here prototype of "User" is set into "Teacher" ("Teacher" inherits from "User")

console.log(Teacher.makeVideo); //Teacher can access makeVideo - since this property is inside Teacher Prototype

console.log(Teacher.name); //Teacher can access name - since User prototype was added to Teacher

console.log(User.makeVideo); //User can't access makeVideo - since User prototype didn't have Teacher Prototype

//* modern syntax

//? "Teacher" prototype is added into "TeachingSupport"
Object.setPrototypeOf(TeachingSupport, Teacher)


} 

{

    //* Solving our initial challenge (in line: 7)

    let anotherUsername = "ChaiAurCode     "

    //? Here we have injected our own method into all string prototype
    String.prototype.trueLength = function(){
        console.log(`${this}`);
        console.log(`True length is: ${this.trim().length}`);
    }
    
    anotherUsername.trueLength() // here "this" is "ChaiAurCode     " and True length is: 11
    "hitesh".trueLength() // here "this" is "hitesh"
    "iceTea".trueLength() // here "this" is "iceTea"

}
