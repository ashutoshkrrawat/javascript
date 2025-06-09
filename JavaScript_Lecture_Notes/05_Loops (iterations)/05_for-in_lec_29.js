{
  //* For-in -- gives the key directly

  //* For-in on objects

  const obj = {
    name: "Pranaw",
    age: 18,
    greet: function () {
      console.log("Hello World!");
    },
  };

  for (const key in obj) {
    //console.log(key); -- to get the keys
    //console.log(obj[key]); -- to get the values

    console.log(`${key} : ${obj[key]}`);
  }
}

{
  //* for-in on arrays

  const arr = [26, "Pranaw", undefined, true, "Kumar"];

  for (const x in arr) {
    //console.log(x); -- prints the keys (indexes) of the array
    console.log(arr[x]); // gives the values of the array
  }
}

{
  const mapName = new Map();

  mapName.set("IN", "India");
  mapName.set("USA", "United States of America");
  mapName.set("Fr", "France");

  //! Here nothing happens (iterartions can't be done)
  for (const key in mapName) {
   console.log(key);
  }

 
}

{
  /*

Key Differences:

Features(below)                    	for...in (keys)	                 for...of (values)

Iterates over: 	                    Keys (property names)	           Values (elements)

Works on:          	                Objects, Arrays	                 Arrays, Strings, Maps, Sets, NodeLists (Iterables)

Includes inherited properties?	    Yes	                             No

Returns index in an array?	        Yes	                             No 


When to Use What?
🔹 Use for...in when working with objects (to get property names).
🔹 Use for...of when working with arrays, strings, or other iterables (to get values).


🚀 TL;DR:

for...in → for objects (keys)
for...of → for arrays & iterables (values)



*/

}
