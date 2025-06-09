{

    //* setInterval
    //? repeats a task after every interval

    //* Using function directly
    setInterval (function(){
        console.log("Pranaw");
    }, 2000)

    //* Uisng a refernce

    function myName() {
        console.log("Pranaw Kumar");
    }

    //Reference of the function was passed
    setInterval (myName, 2000) //the code inside the function gets executed after every 2 seconds

}

{

        //* The third parameter

        //? When we need to pass a parameter to the function using the second method, we need to give the third parametr

        function myName(str) {
            console.log(`Good morning! ${str}`);
        }

        setInterval (myName, 2000, "Pranaw Kumar") //the third parameter is used as an argument of the function

}

{

    //* clearInterval()

    //? This is used to stop the setInterval() and needs the reference of the setInterval() we are talking about just like in timeOut

    const myIntervalReference = setInterval (() => {
        console.log("Hello World");
    }, 3000)

    clearInterval (myIntervalReference)
}