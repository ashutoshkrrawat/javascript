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