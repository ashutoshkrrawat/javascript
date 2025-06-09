{

    //* setTimeout()
    //? This is a method (function) and it also calls an API. It does a particular thing after a given time and that's it!

    //! first parameter is a function and second is time in milli-seconds

    //* Using function directly

    setTimeout (function(){
        console.log("Pranaw");
    }, 2000)

    //* Using a reference

    const myName = () => {
        console.log("Pranaw Kumar");
    }

    //Note: Only the reference of the function is passed and not the execution
    setTimeout (myName, 3000)

}

{

    //* clearTimeout()
    
    //? This stops the timeout and prevents it from running
    //! This required the refernce of the setTimeout as a parameter

    const changeText = () => {
        document.querySelector('h1').innerHTML = "This text was changed!"
    }

    //! Below will change the text after 5 seconds
    const timeoutReference = setTimeout(changeText, 5000) //we stored the refernce of the setTimeout to pass as an argument in clearTimeout later

    // Now we want to prevent the above from being done by clicking the button. That is if the user clicks the button, the text will not be changed.

    document.querySelector ('#stop').addEventListener ('click', (e) => {
        clearTimeout (timeoutReference)
        console.log("Stopped the timeout!");
    })

}


