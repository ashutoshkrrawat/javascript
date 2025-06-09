//Lecture notes

{
  console.log("BLOCK 1: ");

  const name = "Pranaw";
  const repoCount = 10;

  console.log(name + repoCount + " Value"); //! This type of concatenations is not at all reccomended in modern times.

  //Another way to print multiple datas using a single console.log
  console.log(name, repoCount, "Value"); //! Also, not reccomended

  //! Recommended method -- String Interpolation (modern method)- This can also be used for concatenation

  //This syntax is much more recommended due to readiblity
  console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Use backticks. ${data_name}

}

//Self notes

{
  console.log("BLOCK 2: ");

  //Strings

  //There are two types by which string can be declared

  //* I - Primitive String

  let s = "Hello";
  console.log(typeof s); //string

  //* II - String object

  let s2 = new String("Hello");
  console.log(typeof s2); //object

  //* Comparisions

  console.log(s === "Hello"); // true (compares value)
  console.log(s2 === "Hello"); // false (compares object with string)
  console.log(s2 == "Hello"); // true (value is coerced for comparison)

  //* When accessing methods like (.toUpperCase()) in either of the type, the change happens in a copy of the string or object (as strings are immutable in JavaScript)

  //ex-

  s.toUpperCase();
  console.log(s); //still give "Hello" because no change in the 's' memory block, change happend in a copy of the s

  s2.toUpperCase();
  console.log(s2); //no change. same reason.

  //To change we can redefine the data

  s = s.toUpperCase();
  s2 = s2.toUpperCase();

  //in the above two examples, the change (which happend in a copy) is copied in the original data thus refelcting the change now!!

  console.log(s2); //'HELLO'
  console.log(s); //'HELLO'

  console.log(typeof s2); //NOTE: now the string object is changed into just string (primitive)

  /*

CHAT-GPT


Why s2 Doesn't Change:

The String object (s2) is a wrapper around a primitive string value. Even though s2 is an object and objects are typically mutable, the internal string value ([[StringData]]) stored in the String object remains immutable. When you call .toUpperCase(), it works on the internal string value and returns a new string without modifying the original value.

Here’s the breakdown:

s2.toUpperCase() internally accesses the primitive string value ('Hello').
It creates a new string with all characters converted to uppercase ('HELLO').
It returns this new string without modifying the original s2.

*/

}

//Lecture notes

{
  console.log("BLOCK 3: ");

  let gameName = new String("Pranaw");

  /*
  
  String acts as an object (key-value pairs) here

    0 : 'P'
    1 : 'r'
    2 : 'a'
    3 : 'n'
    4 : 'a'
    5 : 'w'

    property: length
    methods: ex- toUpperCase(), etc
  
  */

  //To access a particular value from key
  console.log(gameName[2]); //'a'

  //Methods (function)

  //* .length
  console.log(gameName.length);

  //* .toUpperCase()
  console.log(gameName.toUpperCase); //original value not changed

  //* .charAt()
  console.log(gameName.charAt(5)); //input the index and get char as an output

  //* .indexOf()
  console.log(gameName.indexOf("n")); //gives index as an output

  //HW. Read about some other string methods

  //* .slice() --extracts a part of the string
  let newString = gameName.slice(1, 3); //1 index se 2 tak (last wala excluded)
  console.log(newString);

  //* .substring() --extracts a part of the string
  let anotherString = gameName.substring(1, 3); //yaha bhi last wala excluded
  console.log(anotherString);

  /*
    
    //* Difference between .slice() and .substring()

    .slice() can take negative indexes as well, while if .subtring() encounters a negative treats it as 0. (therefore, negative doesn't work in substring)


    0, -6 : 'P' 
    1, -5 : 'r'
    2, -4 : 'a'
    3, -3 : 'n'
    4, -2 : 'a'
    5, -1 : 'w'

    */

  //ex
  let temp = gameName.slice(-6, 4); //yaha bhi last wala excluded (start < end)
  console.log("Slice with single neg. index: ", temp);
  temp = gameName.slice(-5, -2);
  console.log("Slice with both neg. index: ", temp);

  //* .trim()
  let newStringOne = "       Pra      na     w    ";
  console.log(newStringOne);
  console.log(newStringOne.trim()); //it deletes the leading and trailing (endling) white spaces and new-line terminator

  //* .replace()
  let url = "https://quizzzards.vercel.com";
  url.replace("zzz", "tt");
  console.log(url); //NOTE: It does nothing!! since change toh original mei hua hi nahi

  url = url.replace("zzz", "tt"); //Ek dusre copy mei change hua, which we copied to our original string
  console.log(url);

  //* .includes()
  console.log(url.includes("qui")); //true or false depending on if the substring is present or not

  let t = "Pra-Na-W-Kum-Ar  27/02/2006-18";

  //* .split() - return an array
  let tNew = t.split("-"); //converts into a string by splitting on the basis of "-"
  console.log(tNew);

  let tNew2 = t.split(""); //! this converts the entire string in array charcter-wise
  console.log(tNew2);
}
