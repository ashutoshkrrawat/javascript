{

//* Rest operator (...)
//? This is used in parameter in function definiton when we don't know how many arguments we might get

function calculateCartPrice (... num) {
    return num
}

console.log(calculateCartPrice(5)) // [ 5 ]
console.log(calculateCartPrice(8, 9, 10)) // [ 8, 9, 10 ]
console.log(calculateCartPrice(5, 26, 58, true)) // [ 5, 26, 58, true ]

function example (val1, val2, ...num) {
    return num
}

console.log(example(5, 20, 56, 7, 66, "hi, 25")) //[ 56, 7, 66, 'hi, 25' ]
//here, val1 and val2 takes the first two numbers, the rest is taken by num

{

    //* Adding numbers where we don't know the number of input

    //? Here num is the array of arguments passed into the function, this array is then operatedc with .reduce() to find the sum of the input 

    function addMe (...num) {
        return num.reduce ((total, curr) => {
            return total+curr
        }, 0)
    }

    console.log(`Sum is : ${addMe (2, 5, 8, 5, 6)}`);
}

}

{

    //* Passing object as an argument in a function

    function user (anyObject) {
        console.log(`Username is ${anyObject.userName} and id number is ${anyObject.id}`)
    }

    const obj = {
        userName : "Pranaw Kumar",
        id : "2024UGEE029"
    }

    //Function call
    user(obj) //by passing another object

    user({
        userName : "W",
        id : "76"

    })

}


{

    //* Passing arrays in function

    function retSecondVal (arr) {
        return arr[1]
    }

    const myArray = [100, 200, 520]

    //Function call
    console.log(retSecondVal(myArray))

    console.log(retSecondVal([59, 26, 48, -89]))

}

