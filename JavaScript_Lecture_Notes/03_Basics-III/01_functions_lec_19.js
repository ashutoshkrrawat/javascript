{

//* Function definition

function example () {
    console.log("Pranaw Kumar")
    console.log("My age is 18!")
}

//* Function reference

example //! When we simply write function name, we are referencing the function

//* Function execution (call)
example() //! When we write name along with the parenthesis, we are executing (calling) the function

}

{

    //Making a basic fucntion to find the square of two numbers

    //? Here, num1 and num2 are parameters
    function addTwoNum (num1, num2) {
        console.log(num1 + num2)
    }

    //? Here 3 and 7 are arguments
    addTwoNum (3, 7)

    //* Function with a return type

    function addTwoNum2 (num1, num2) {
        let result = num1 + num2
        return result
    }

    const ans = addTwoNum2 (2, 5)
    console.log(ans) 

    //Another function

    function loginUserMessage (userName) {
        return `${userName} just loggined in!!`
    }

    console.log(loginUserMessage ("Pranaw Kumar"))  
    console.log(loginUserMessage()) //Note: We get "undefined just loggined in!!".... since no argument was passed in the function call. We get undefined value

    //* Default Parameter in function

    function greet (userName = "User") {
        console.log(`Good morning! ${userName}`)
    }

    greet() //default argument triggered
    greet("Pranaw Kumar") //default value not used




}
