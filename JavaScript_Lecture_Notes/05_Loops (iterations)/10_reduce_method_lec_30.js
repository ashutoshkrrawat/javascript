{
  //* .reduce()
  //? This is used to reduce the entire array into a single value - it has two parameters, accumulator and current value

  //! By defefault, accumulator = arr[0] and cummultor = arr[1]
  //! By using ',' we can define the initial value of accumulator, in that case initial value of current_value becomes arr[0]
  //! The result gets stored in the accumulator in each step

  const myNums = [1, 2, 3];

  const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and current Val: ${currval}`);
    return acc + currval;
  }, 0);

  console.log(myTotal);

  //! After the ',' is the initial value of accumulator and current_value's default value becomes myNums[0]


  //* Using arrow function

  const myTotal2 = myNums.reduce( (acc, curr) => acc+curr, 0)

  const myTotal3 = myNums.reduce ( (acc, curr) => {
    return acc+curr
  },0);

  console.log(myTotal3);

}

{

    //* Using .reduce() on an array of objects

    
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce((acc, cost) => acc + cost.price, 0)

console.log(priceToPay);

}
