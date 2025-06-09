{

const course = {
    courseName : "JavaScript_Full_Course",
    price : 999,
    isCompleted : false
}

//* To access a property of an object

//* Method-I
console.log(course.price) //! Using dot operator

//We can also access the property using object destructuring

//* Method-II: Object Destructuring

const {price} = course //using this, we can easily access price (property) of the object without using couse.price again and again

console.log(price) //999

//! Using our custom name

const {courseName : naam} = course //! Here, we can acess course.courseName directly by using naam

console.log(naam) //this works
console.log(courseName) //Note: This doesn't work now!!!! (since we have used custom name here for our course.courseName)

}



{

    /*

    //? Usually API comes in the form of JSON file

    {

        "name" : "Pranaw",
        "age" : 18,
        "isOnline" : true


    }

    //? API can also give us array of several objects

    [

        {},

        {},

        {}

    ]

    //? API can come in other forms as well

*/
}

