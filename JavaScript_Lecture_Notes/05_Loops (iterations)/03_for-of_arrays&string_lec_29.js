{
  //* for of -- used for arrays, strings, maps, sets (gives values directly)

  //for-of used with iterables

  //* Using for-of on array

  const arr = ["Pranaw", 18, true, "Kumar", 2006];

  //! Goes through each element of the array
  for (const val of arr) {
    console.log(val);
  }

  //* Using for-of on string

  const greetings = "Hello World!";

  //! Goes through all individual characters in the string
  for (const letter of greetings) {
    console.log(letter);
  }

}

{
  const obj = {
    name: "Pranaw",
    age: 18,
    greet: function () {
      console.log("Hello World!");
    },
  };

  //Note: ERRORS in both!
  /*
      
          //! error
          for (const val of obj) {
              console.log(val);
          }
      
          //! error
          for (const [key, val] of obj) {
              console.log(key, " ", val);
          }
          
          */
}
