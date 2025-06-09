//* Immediately Invoked Function Expressions (IIFE)

//* Uses of IIFE - These are immediately executed

/*

1. Avoiding Global Scope Pollution:

JavaScript has a single global scope in browsers. Declaring variables in the global scope can cause name collisions or unintended overwrites.

IIFE creates a local scope for variables, ensuring they don’t interfere with other parts of the code.
javascript

2. Encapsulation:

IIFE helps in encapsulating logic. Any variables or functions declared inside an IIFE cannot be accessed from outside, keeping the implementation details private.

3. Initialization Code:

IIFEs are useful for running initialization code that needs to execute once and not leave variables hanging around in the global scope.

4. Avoiding Hoisting Issues:

IIFEs ensure variables are not accessible before their declaration, which can happen due to JavaScript's hoisting behavior.

*/

//* Declaring IIFE

// ()();

//! The first () contains the definition of the fucntion (inside it lies the main function definiton). The second () is used for execution (just like we added () after function name during function call). ; is used to tell that IIFE has ended. The second () contains the arguments (if any)

//* Named IIFE

(function chai() {
    console.log('Named IIFE!');
})();

//* Unnamed IIFE

//! With function keyword

(function () {
    console.log('Unnamed IIFE with function keyword (without arguments');
})();

//! With arrow function

(() => {
    console.log('IIFE using arrow function');
})();

//! Using arguments

((nam) => {
    console.log(`${nam} is a good programmer`);
})("Pranaw");

