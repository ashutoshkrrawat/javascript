 {

//* Object constructor -- Singleton object

let tinderUser = new Object() //! This is second method for declaring an object

//Adding datas
tinderUser.id = "123abc"
tinderUser.name= "Pranaw"
tinderUser.isLoggedIn = false

console.log(tinderUser)

//* Object.keys()

console.log(Object.keys (tinderUser)) //prints all the keys in the object
//Note: It returns an array

//* Object.values()

console.log(Object.values(tinderUser)) //prints all the values in the object
//Note: This as well returns an array


//* Object.entries()
//! This returns an array whose elements are also arrays (consisting of key and value in each inner array)

console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Pranaw' ], [ 'isLoggedIn', false ] ]

//* .hasOwnProperty()
//! returns true or false, depending on wheater the input paramater property exists or not

console.log(tinderUser.hasOwnProperty('id')) //true
console.log(tinderUser.hasOwnProperty('email')) //false


}

{

    //* Adding objects inside object

const regularUser = {

    email : "pramadhu.kumar@gmail.com",

    //object (object inside object)
    fullname : {

        //another object (object inside object inside object)
        username : {
            firstName : "Pranaw",
            lastName : "Kumar"
        },

        dob : 2006
    },

    phone : 123456789

}

console.log(regularUser)
console.log(regularUser.fullname.username.firstName)



let obj1 = {1 : "a", 2 : "b"}
let obj2 = {3 : "c", 4 : "d"}

let obj3 = {obj1, obj2} //Note: this directly joins both the object (object inside object) -- therefore, we can't use this to merge two or more objects into one

console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//* Merging two objects into one 

//* Method -I : Object.assign()

let ob1 = {1 : "a", 2 : "b"}
let ob2 = {3 : "c", 4 : "d"}
let ob3 = {5 : "e"}

let objFinal = Object.assign ({}, ob1, ob2, ob3) //Note: The first argument acts an the target, while the rest folowing are merged into it

console.log(objFinal) //The changes are copied in objFinal (since target was {})

//! To merge all the elements into a single object in ob1 itself
Object.assign (ob1, ob2, ob3)
console.log(ob1) //All the changes reflected in ob1 directly

//* Method - II : Spread operator (...)
//? Analogy: Glass ko throw kar diya. Glass broken and all water spread

let b1 = {1 : "a", 2 : "b"}
let b2 = {3 : "c", 4 : "d"}

let d = {...b1, ...b2}
console.log(d)

}

{

    //* Array of objects (usually data comes like this from databases)

    const users = [

        {
            id : "abc",
            email : "xyz@mail"
        },

        {
            id : "fgh",
            email : "abc@gmail"
        },

        {
            id : "iop",
            email : "qwe@mail"
        }

    ]

    console.log(users[1].id) //Accesing any properties of the object in the array

}

