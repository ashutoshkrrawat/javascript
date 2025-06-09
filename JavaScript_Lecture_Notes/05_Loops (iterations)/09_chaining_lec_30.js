{
  //* Chaining (takes place left to right)

  const myNum = [5, 26, 28, 0, 9, 10];

  const newNums = myNum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);

    //first .map() executed, all values gets multiplied by 10, then again second .map() is used, all values get added by 1. Then at last .filter() is used to filter our values that are >= 40

    //const newNums = myNumers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40);

  console.log(newNums);

}
