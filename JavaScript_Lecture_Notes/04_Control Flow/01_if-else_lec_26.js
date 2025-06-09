{
  //only executed when condition is true
  if (condition) {
  }

  //else-ifs are optional
  else if (condition2) {
  }

  //else-ifs are optional
  else if (condition3) {
  }

  //... (multiple else-if statements)

  //else is optional
  else {
  }

  //* Condition operator

  // < , > , <=, >=, ==, ===, !=, !==

  console.log(2 == "2"); //true (since value is same and type isn't compared here)

  console.log(3 === "3"); //false (since type is not same)

  console.log(2 != "2"); //false (since their value are considered equal)

  console.log(3 !== "3"); //true (since their type are indeed not equal, so they are ultimately not equal)
}

{
  
  //*Short-hand notation (implicit scope)
  //! VVVV.Imp (; is necessary in this short-notation, to tell that our scope has ended)

  const balance = 100;

  if (balance > 50) console.log("I am inside if-block"); //Note: Here ; is necessary!!!! (to tell that our scope has ended!!!)
  //! Here we didn't used curly braces, since only a single line code. Here, scope is implicitely defined

  console.log("I am outside if-block");



  if (balance > 50) console.log("Inside if"), console.log("still inside"); //! this is also acceptable. but not reccomaned at all!!

  console.log("Now outside");
}

{
  //* var

  if (2 > 1) {
    var power = "fly"; //Note: Since var is used, it's scope here is completely global!
    console.log(`Power insinde if-block: ${power}`);
  }

  console.log(`Power outside if-block: ${power}`); //power is accessible outside if-block, becuase var keyword was used to define the power variable.
  //! If 'let' or 'const' keyword had been used, then it would have thrown error...
}

{
  //* Using && and ||

  const userLoggedIn = true;
  const debitCard = true;
  const loggedInFromGoogle = false;
  const loggedInFromEmail = true;

  //executed when all the conditions are true simultaneously
  if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
  }

  //exceuted immediately when a conditon becomes true (from left to right)
  if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
  }
}
