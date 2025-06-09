{
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

  //* Promise
  //? an object that represents eventual completion or failure of an asynchronous operation
  //! Promise has two part- creation and consumption 

  //* Promise creation (and storing in variable)

  //here we are holding the reference of the Promise object
  const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task - DataBase call, cryptography, network calls, setTimeout, setInterval etc

    setTimeout(function () {
      console.log("Async task 1");
      resolve();
    }, 1000);
  });

  //* Promise consumption 

  //* .then()

  //! .then() is directly related to the resolve of the Promise
  //Note: When resolve() is encountered inside the Promise call-back function, .then() is also triggered

  promiseOne.then(function () {
    console.log("Promise is consumed!");
  });
}

{
  //* Promise without adding it to any variable

  //* Promise creation and consumsion

  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async task 2");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("Async task is resolved!");
  });

  //! The .then() runs if resolve() is triggered
}

{
  //* Passing paramters through resolve()

  const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ username: "Chai", email: "chai@example.com" }); //here we have passed a parameter in the resolve(). //! Parameter can be anything
    }, 1000);
  });

  //! here we are using a parameter, which will be the parmaeter passed in the resolve()
  promiseThree.then(function (user) {
    console.log(user);
  });

}

{

    //* using reject() and .catch()
    // this is similar to resolve(). We used .then() when something was resolved. Similarly, we use .catch() when something is rejected

    const promiseMe = new Promise (function (resolve, reject) {
        setTimeout (function(){
            let error = true //by default, there is an error

            if (!error) {
                resolve({ username: "Chai", email: "chai@example.com" })
            }

            else {
                reject('Error occured! Kindly check...')
            }
        }, 1000)
    })


    //! here if resolved, .then() is triggered else if rejected, .catch() is triggered

   promiseMe
   .then((user) => {
    console.log(user);
   })
   .catch((error) => {
    console.log(error);
   })

   
}

{

    //* .then() chaining (a.k.a. "Thenable" or "Denibal")
    //? this is used to come out of the call-back hell

    const promiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (!error) {
                resolve({username: "hitesh", password: "123"})
            } else {
                reject('ERROR: Something went wrong')
            }
        }, 1000)
    })
    
     promiseFour
     .then((user) => { //! here the argument will be the parameter in resolve()
        console.log(user);
        return user.username //! this is returned to below
    })
    .then((username) => {//! here the argument is the returned data from above
        console.log(username);
    })
    .catch((error) => { //! here the argument is the paramter in reject()
        console.log(error);
    })    

}

{

    //* .finally()
    //? the .finally() is triggered wheteher Promise is resolved or not!

    const promiseFour = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (!error) {
                resolve({username: "hitesh", password: "123"})
            } else {
                reject('ERROR: Something went wrong')
            }
        }, 1000)
    })
    
     promiseFour
     .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {
        console.log(username);
    }).catch((error) => {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))
       
 
}



