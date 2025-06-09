//Notes in notebook

console.log("Hello World!")

/*


In JavaScript, stack and heap are two types of memory used to store data. Understanding them helps in optimizing performance and avoiding memory leaks.

1. Stack Memory (Primitive Data Types)
Stores: Primitive values (Number, String, Boolean, null, undefined, Symbol, BigInt) and function calls.
Structure: Works on a LIFO (Last In, First Out) principle.
Access Speed: Fast because it’s a small, organized memory.
Scope: Limited to function execution.
Example:
js
Copy
Edit
function demo() {
    let x = 10;  // Stored in stack
    let y = x;   // A copy is made in stack
    y = 20;      // Only 'y' is updated, 'x' remains the same
    console.log(x, y); // 10, 20
}
demo();
Behavior: When a function is called, a new stack frame is created. When the function returns, that frame is removed.

2. Heap Memory (Reference Data Types)
Stores: Objects, arrays, and functions (anything non-primitive).
Structure: Unstructured, large memory space.
Access Speed: Slower compared to the stack.
Scope: Data stays in memory as long as references exist.
Example:
js
Copy
Edit
let obj1 = { name: "Alice" }; // Stored in heap
let obj2 = obj1; // Both obj1 and obj2 reference the same memory location

obj2.name = "Bob"; 
console.log(obj1.name); // "Bob" (because both obj1 and obj2 point to the same object)
Behavior: Objects are stored in the heap, but their references are kept in the stack.
Key Differences
Feature	Stack	Heap
Stores	Primitive values, function calls	Objects, arrays, functions
Access	Fast (LIFO)	Slower (random access)
Memory Management	Auto-cleared when function exits	Garbage-collected when unreferenced
Example Types	let a = 10;	let obj = { key: "value" };
Memory Issues
Stack Overflow: Happens when recursion is too deep, causing excessive stack usage.
Memory Leaks in Heap: If objects are not properly dereferenced (null assigned), memory will not be freed, leading to a memory leak.
Example of a memory leak:

js
Copy
Edit
let leak = [];
setInterval(() => {
    leak.push("Memory leak!"); // This keeps growing and is never cleared
}, 1000);
Fix it by clearing references:

js
Copy
Edit
leak = null;
TL;DR
Stack = Small, Fast, and for Primitive values
Heap = Large, Flexible, and for Objects/Functions
Stack clears automatically, but Heap needs manual cleanup (garbage collection helps).
Got it? Or do you want me to throw in some more spicy JS facts? 😏







You said:
SO both stack and functions stores functions, as you mentioned?
Reasoned for 4 seconds
Not exactly, but I totally get why it might seem confusing! Let’s break it down in a chill, Gen Z kinda way:

1. The Function Object:
Where It Lives: When you write a function, it’s a first-class object in JavaScript. That means the actual function object (its code, properties, and closure data) is stored in the heap.
Analogy: Think of the function object as a dope playlist saved in your phone’s storage (the heap). It’s there even when you're not jamming to it.
2. The Function Call (Execution Context):
Where It Lives: When you call a function, JavaScript creates an execution context for that call—a fancy term for all the info about that function’s current run (like its local variables, parameters, and the whole shebang). This execution context is pushed onto the call stack.
Analogy: Imagine you’re streaming that playlist live at a party. The playlist itself is still on your phone (the heap), but the party (the active execution of the function) has its own setup at the door (the stack), managing who's in and out.
In Short:
Function Object: Lives in the heap (like an awesome saved playlist).
Function Execution Context: Lives in the stack (like the party logistics when you’re actively playing the playlist).
So while the function object itself is stored in the heap, each time you call the function, a new execution context is added to the stack. They serve different roles: one is the blueprint/code (heap), and the other is the current "work in progress" context (stack).

Does that clear things up? If you have any more questions or need another analogy (maybe one involving memes or TikTok trends), just let me know!




*/
