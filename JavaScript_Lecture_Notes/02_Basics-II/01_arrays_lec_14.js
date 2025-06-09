//? Array - it is also an object. Array is a collection of different data-types.

//? Array in JS is resizable. They can have different dat-types (members)

let arr = [5, true, undefined, "Pranaw", 26, false]

let brr = new Array (5, true, undefined, "Pranaw") //using constructor

console.log(arr)

console.log(arr[3]) //0-based indexed

//! Shallow copies are made while copying an array (i.e. same memory block, refernce. So, chnaging in the copied array, also changes the orignal array, since they have same memory block)


//Array methods

//* .push() - adds an element at the end
brr.push("Pushed element")
console.log(brr)

//* .pop() - delete the last element
arr.pop()
console.log(arr)

//* .unshift()- adds an element at the start
brr.unshift("Added in first")
console.log(brr)  

//* .shift() - deletes the first element
arr.shift()
console.log(arr)

//* .includes() - gives true/false depending on if the input data (element) is present or not
console.log(brr.includes("Pranaw")) //typeof => boolean

//* .indexOf() - returns index of the element (-1 if not present)
console.log(arr.indexOf(26))

//* .join() - adds all the element of an array into a string (by default joined using commas)

let arrNew = ["pranaw", 26, "hi"]
let newArr = arrNew.join()
console.log(newArr)

newArr = arrNew.join ("-") //to joing using our desired string
console.log(newArr)
console.log(typeof newArr) //string


//* .slice(i, j) - returns the copy of section of an array from i to j-1 (j is exclusive)
let a1 = [2, "Pranaw", true, 26]
let a2 = a1.slice(1, 3) // 1 index se lekar 2 index tak ka copy 
console.log(a2)
console.log(a1) //no change in the original array (since only a copy was passed)


//* .splice() - used to remove elements, add elemeents or both
let b1 = [2, 3, "Pranaw", 6, false, "Kumar"]
b1.splice (1, 3) //means index 1 par jao aur waha se 3 elements removed
console.log(b1)

let c1 = [2, 3, "Pranaw", 6, false, "Kumar"]
c1.splice(1, 2, "This is inserted") //here index 1 se 2 elements removed and an element inserted
console.log(c1)

//NOTE: Here, original array mei change hua hai!!!
