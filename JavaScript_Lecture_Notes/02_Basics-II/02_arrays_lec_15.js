//Various methods of arrays

{

//* .push() 

//! This changes the original array

let marvel = ["Spiderman", "Thor"]
let dc = ["Batman", "Joker"]

marvel.push(dc) //here dc taken as an array data and pushed entirely into a single element (array type)

//? What happens??
console.log(marvel) //[ 'Spiderman', 'Thor', [ 'Batman', 'Joker' ] ]
//NOTE: Here the array don't gets joined directly!!! The dc array gets pushed as a whole (array) into the array (check console.log for understanding)

//To access Joker
console.log(marvel[2][1])

//* .concat ()

//! This doesn't changes the orginal array. Rather it returns a new array (it helps in joining the elements (merging) two arrays)

let a1 = ["Pranaw", "Kumar", true]
let a2 = ["name", 20]

let b = a1.concat(a2)

console.log(b) //[ 'Pranaw', 'Kumar', true, 'name', 20 ]

//* Spread operator (... arr_name) 
//! This is generally preffed over concat (to join the two arrays)

let b1 = ["Pranaw", "Kumar", true]
let b2 = ["name", 20]

let d = [...b1, ...b2] //? The spread operator spreads the elements indivisually
console.log(d)

//* .flat ()
//! This returns a new array
//! This is used to flatten an array (which has several depths of array inside it). The method takes depth as an input parameter. It defines to what depth we want to flattent the array. To flatten the array completely, we can use 'Infinity'

let arr = [1, 2, 3, [4, 5, [6, 7]], 8, [9, 10, [11, 12, [13, 14, [15], 16], 17]]] //many depths in the array

let anotherArr = arr.flat (Infinity)
console.log(anotherArr)

let anotherArr2 = arr.flat(2) //flatens till depth two
console.log(anotherArr2)

}

{
///* Array.isArray()
//! returns true or false and tells whether the input paramenter is an array or not

var x = "Pranaw"
console.log(Array.isArray(x)) //false

x = ["Pranaw", 26]
console.log(Array.isArray(x)) //true

//* Array.from()
//! Used to make a array from an array-like object (string, NodeList, HTMLCollection)

console.log(Array.from("Pranaw")) //[ 'P', 'r', 'a', 'n', 'a', 'w' ]
console.log(Array.from ({age : 18})) //does nothing, since we have to mention ki kiska array banana hai object mei- key ka ya value ka

//* Array.of()
//! Returns a new array from a set of elements (any type)

let s1 = 100
let s2 = 200
let s3 = 300
let nam = "Pranaw"

console.log(Array.of (s1, s2, s3, nam))
// console.log(Array.from (s1, s2, s3, nam)); //! error

}