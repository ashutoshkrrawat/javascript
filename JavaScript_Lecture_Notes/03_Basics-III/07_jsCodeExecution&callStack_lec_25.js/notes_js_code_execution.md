The working of the JavaScript works on three phases:

1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

🔵Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

🔵Phase 2: Memory Creation phase (creation phase)
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc. For variables they are 'undefined' and for functions they are set to their function definition

🔵Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 

After the function execution context ends, it deletes the function context

📝The return value of the 'Function Execution' context is passed to the Global Execution Context

Example:

let val1 = 10
let val2 = 5

function sum (num1, num2) {

    let result = num1 + num2
    return result

}

let r1 = sum (val1, val2)
let r2 = sum (5, 2)

Note: Understand call stack by:

Inspect -> Sources -> Adding a code snippet -> Adding break-points -> Save -> Run each time and check call stack
