{
  //* .map method on array
  //? This also has parameter type like .filter() and .forEach (). Here also no change in original array

  const myNum = [5, 26, 28, 0, 9, 10];

  const newNum = myNum.map((val) => {
    return (val += 10);
  });

  //Implicit return

  const newNum2 = myNum.map((val) => (val += 10));

  console.log(newNum);
}

{
  //* Done the above by .forEach()

  const myNum = [5, 26, 28, 0, 9, 10];

  const newNum = [];

  myNum.forEach((val) => {
    newNum.push(val + 10);
  });

  console.log(newNum);

}
