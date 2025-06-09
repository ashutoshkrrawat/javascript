{

//* Understanding scopes with nested function

function one () {
    const username = "Pranaw"

    function two() {
        const age = 18
        console.log(username); //! "username" is accessible inside, since it is inside the scope of one() function
    }
    console.log(age);  //! throws error!! "age" is not accessible, since we are outside the scope of age

    two()
}

one()


}

{

//* Understanding scopes with nested if-else

if (true) {
    const username = "Pranaw"

    if (username === 'Pranaw') {
        const website = "youtube.com"
        console.log(username + " "+ website)
    }

    console.log(website) //gives error (since website ka scope se bahar aa gye)

}

console.log(username) //gives error (since username ke scope se bahar aa gye)


}

{
    //* Function expression
  

    //! Here variable is storing the function
    var addTwo = function (num) {
        return num+2
    }

    addTwo(5) //does nothing
    console.log(addTwo(5)) //gives 7

    //Note: Function expressions are not hoisted!! (i.e. they can only be used below their definition)

    //Note: Normal functions are hoisted (i.e. they can be accessed even above their definition)

    example() //! runs even though definiton is below (since hoisted)

    function example() {
        console.log("Success!");
    }

    example2() //! ERROR, since function is not hoisted here (as we have used "let" keyword)

    let example2 = function () {
        console.log("success!");
    }

}