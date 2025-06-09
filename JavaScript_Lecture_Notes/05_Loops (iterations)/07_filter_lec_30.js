{
  //* Filter
  //? here the parameters are same as in forEach loop (callback function, inside which first parameter is value, second is index and third is the array itself. second and third parameters in the function are optional)

  //* explicit-return (using "return" keyword)

  const myNum = [5, 26, 29, 100, -56];

  //here values greater than 28 is filtered out into a new variable (array)
  const newNum = myNum.filter((val) => {
    return val > 28;
  });

  console.log(newNum);
  console.log(myNum); //! No change in the original array

  //* Using implicit-return (here "return" keyword are not necessary!)

  //here even numbers are filtered out
  const newArr = myNum.filter((val) => (val % 2 === 0)); //or myNum.filter ( (val) => val%2 === 0)

  console.log(newArr);
}

{
  //* Doing the above examples using forEach

  const myNum = [5, 26, 29, 100, -56];

  const newNum = []; //empty array

  myNum.forEach((val) => {
    if (val > 28) {
      newNum.push(val);
    }
  });

  console.log(newNum);
}

{
  const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
  ];

  //here all books (objects) that have genre as "Fiction is returned"
  const userBooks = books.filter((bk) => bk.genre === "Fiction");

  console.log(userBooks);

  //here all books (objects) that have publish date greater than or equal to 1990 && belongs to "History" genre gets filtered out
  const userBooks2 = books.filter((bk) => {

    return (bk.publish >= 1990 && bk.genre === "History");
    
  });
  console.log(userBooks2);
}
