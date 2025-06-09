{
  //* Truth and falsy values

  const userEmail = "h.mail.com";

  if (userEmail) {
    console.log("Got user email");
  } else {
    console.log("Don't have user email");
  }

  //* falsy values

  // false, 0, -0, BigInt 0n, "", null, undefined, NaN

  //* truthy values

  // "0" (here, it is string), 'false' (here, it is string), " " (at least a space), [] (empty array), {} (empty object), function(){} (empty function), everything else left

  // if (userEmail.length === 0) {
  //     console.log("Array is empty");
  // }
}

{

    //* Check if array is empty

    let arr = []

    if (arr.length === 0) {
        console.log("Array is empty!");
    }

    else {
        console.log("Array is not empty!");
    }

    //* Check if object is empty

    const obj = {}

    //Note: Object.keys(obj_name) returns an array. Therfore, we used .length property to check that array's length just like in above to check whether the array is empty or not, which ultimately tells us wheter the object is empty or not

    if (Object.keys(obj).length === 0) {
        console.log("Object is empty!");
    }

    else {
        console.log("Object is not empty!");
    }

}

{
    //* Interesting comparison 

    console.log(false == 0); //! true (since both false and 0 is considered falsy, therfore they are equal)

    console.table(false == "");//! true

    console.log(0 == "");//! true
}

{
  //* Nullish Coalescing Operator (??) - used to check safety of null and undefined

  //? If a null or undefined value is encountered, then the other value is assigned, else the first

  console.log(5 ?? 10); //5
  console.log(null ?? 8); //8 (since first is null)
  console.log(6 ?? null); //6
  console.log(undefined ?? 66); //66
  console.log(7 ?? undefined); //7
  console.log(12 ?? null ?? 9); //12
  console.log(null ?? 86 ?? 25); //86
}

{
  //* Ternary Operator

  // condition ? true_statment : false_statement

  const iceTeaPrice = 100;
  iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
  
}
