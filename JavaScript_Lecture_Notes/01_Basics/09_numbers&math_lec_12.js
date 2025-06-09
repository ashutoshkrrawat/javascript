{ 

    //* NUMBERS

let x = Number (50) //! Simply a number (primitve)
console.log(typeof x) //number

let y = new Number (50) //! Number Object made
console.log(typeof y) //object

//By using Number object, we can use several built-in methods; but even if we have primtive number, we can still use those mthods in them. But why???  Because, When you use a method on a primitive number in languages like JavaScript, the language automatically "boxes" that primitive value into a temporary wrapper object of the corresponding type (like Number) to allow you to access methods on it, even though the primitive itself isn't technically an object; this process is called "autoboxing" and happens behind the scenes, making it appear as if the primitive has methods directly.

//This same applies for strings in the previous lectures.


//Some Methods

//* .toString()

let balance = new Number (100)
console.log(balance.toString())
console.log(typeof balance.toString()) //string--hnce we can use string methods on it like .length, .toUpperCase() etc


//* .toFixed() -- Rounds off the output according to the number of places in decimal as we give input (Note: It converts into string)

console.log(balance.toFixed(3)) //100.000
balance = 100.5697856
console.log(balance.toFixed(2)); //100.57
console.log("Type of .tofixed(): ", typeof balance.toFixed(3))

//* .toPrecision -- Rounds off the output accoridng to the significant digits we gave input as (NOTE: It converts into string)

let num = 23.8966
console.log(num.toPrecision(3)) //23.9

num = 123.8966
console.log(num.toPrecision(3)) //12
console.log(num.toPrecision(5)) //123.90
console.log(typeof num.toPrecision(5)) //converts into string

num = 1123.8955
console.log(num.toPrecision(3)) //1.12e+3 (we got 3 significant figures)



//* .toLocaleString (to add commas for better readiblity of a number) (NOTE: This also gets converted into a string)

let money = 1446589;
console.log(money.toLocaleString()) //can be either US system or Indian system
console.log(money.toLocaleString('en-IN')) //To use the indian system (1,446,589)


//Other properties

//* .MAX_VALUE

console.log(Number.MAX_VALUE) //gives max value of a number

}

{

    //* MATH - Math is a object

    //Various methods (functions)

    //* .abs() - To find the absolute value of a number

    console.log(Math.abs(-5))

    //* .round() - Rounds off a number
    console.log(Math.round(5.56)) //6
    console.log(Math.round(5.26)) //5

    //* .floor()
    console.log(Math.floor(4.89)) //4

    //* .ceil() - gives the upper value (opposite of .floor())

    console.log(Math.ceil(4.0005)) //5

    //* .min() - Finds the minimum value in a set of numbers

    console.log(Math.min(5, 4, 6, 0, -56, 8)) //-56

    //* .max() - Same function

    console.log(Math.max (5, 89, 2, 0, -9)) //89


    //* .random()

    console.log(Math.random()) //! gives a random value between 0 (inclusive) and 1 (exclusive) i.e. [0, 1)

    //To get random values according to our needs, we can use arithemtic on it

    console.log((Math.random() * 10) + 1) //Output: [1, 11)

    console.log(Math.floor((Math.random() * 10) + 1)) //To get only integer values as output

    //Math.floor((Math.random() * (max-min+1)) + min) //if we have a max and min value and want to get numbers between them (min - inclusive) and (max - exclusive)

}
