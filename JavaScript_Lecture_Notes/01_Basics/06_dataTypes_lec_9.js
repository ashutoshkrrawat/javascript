//Check notes in notebook- Primitive and Non-Primitive (reference type)

//* Symbol discussion (Primitve data type)

const id1 = Symbol ('123')
const id2 = Symbol ('123')

console.log(id1 == id2) //false. becuase even though values passed in both are same, but the symbol becomes different, since both symbols are unique

let example = function() {
    console.log("Hi");
};

//* Typeof different types of data

let a = typeof example //function
let b = typeof null //object
let c = typeof undefined //undefined
let d = typeof id1 //symbol

console.table([a, b, c, d])
