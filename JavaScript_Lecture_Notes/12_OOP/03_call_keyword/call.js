{

    function setUsername (userName) {
        this.userName = userName
        console.log("Inside setUsername");
    }

    function createUser (userName, age, isLoggedIn) {

        setUsername (userName) //we are outsourcing our setting userName step

        this.age = age
        this.isLoggedIn = isLoggedIn
    }

    const userOne = new createUser ("Pranaw Kumar", 18, true)

    console.log(userOne); //! We see that even though we went inside "setUsername" function, we still can't set our userName. Why though?? See call.excalidraw last

      //* "call" keyword

    //? "call" keyword tranfers current execution-context to other function


    function createUser2 (userName, age, isLoggedIn) {

        setUsername.call (this, userName) //! We need to also pass "this" to tell the execution context we want to transfer
        
        this.age = age
        this.isLoggedIn = isLoggedIn
    }

    const userTwo = new createUser2 ("xyz", 20, false)

    console.log(userTwo);
}
