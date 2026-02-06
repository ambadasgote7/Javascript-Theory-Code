### JS Theory

---

## What is JavaScript?

- JavaScript is a high-level, interpreted, dynamic, and open-source programming language.
- It is a prototype-based, multi-paradigm, and strongly-typed language.
- It is object-oriented, imperative, and functional.
- It is a scripting language.

---

## What is ECMAScript?
- ECMAScript is a standardized version of JavaScript.
- It is a specification that defines the syntax, semantics, and execution environment of JavaScript.

## What is JavaScript Engine?
- JavaScript Engine is a program that executes JavaScript code.
- It is a runtime environment that interprets and executes JavaScript code.

**Example:**
- V8 - Google Chrome's JavaScript Engine
- SpiderMonkey - Mozilla's JavaScript Engine
- Chakra - Microsoft's JavaScript Engine
- JavaScriptCore - Apple's JavaScript Engine

---

## Variables

**Var :** 
- Variable declaration using var keyword is the function scoped or global scoped
- You can redeclare a variable in the same scope
- You can reassign a variable in the same scope
```js
var a = 10;

if (a === 10) {
    var b = 20;
    console.log(a);
}

function test() {
    var fa = 20;
    console.log(fa);
}

Reassignment of a variable is allowed using the var keyword
b = 200;
console.log(b);

Redeclaration of a variable is allowed using the var keyword
var a = "Hello World";
console.log(a);

console.log(b);
console.log(fa); // this will throw an error because fa is not defined in the global scope is in the function scope
```

---

**Let :** 
- Variable declaration using let keyword is the block scoped
- You can redeclare a variable in the same scope
- You can't reassign a variable in the same scope
```js
let a = 10;

if (a === 10) {
    let b = 20;
    console.log(a);
}

function test() {
    let fa = 20;
    console.log(fa);
}

Reassignment of a variable is allowed using the let keyword
a = "Hello World";
console.log(a);

Redecalration of a variable is not allowed using the let keyword
let a = "Hello World"; // this will throw an error Identifier 'a' has already been declared
console.log(a);

test();

console.log(b); // this will throw an error because b is not defined in the global scope is in the block scope
```

---

**Const :** 
- Variable declaration using const keyword is the block scoped
- You can't redeclare a variable in the same scope
- You can't reassign a variable in the same scope
```js
const a = 10;

if (a === 10) {
    const b = 20;
    console.log(a);
}

const a = "Hello World"; // this will throw an error Identifier 'a' has already been declared
console.log(a);

a = 20; // this will throw an error because Assignment to constant variable.
console.log(a); 

console.log(b); // this will throw an error because b is not defined in the global scope is in the block scope
```

---

## == vs ===

**== :**
- It only checks for value equality
- It does not check for type equality
- Returns true if the operands are equal
- Returns false if the operands are not equal

**=== :**
- It checks for both value and type equality
- Returns true if the operands are equal in both value and type
- Returns false if the operands are not equal in either value or type

```js
let x = "10";
console.log(typeof(x)) // string

let y = 10;
console.log(typeof(y)) // number

console.log(x == y) // true
console.log(x === y) // false
```

---

## Undefined and Null 

**Undefined :** 
- It is a primitive data type in JavaScript.
- It represents a variable that has been declared but has not been assigned a value.
```js 
let a;
console.log(a); // undefined
```

**Null :**
- It is a primitive data type in JavaScript.
- It represents the absence of any object value.
- It is a special value that is returned when a function does not explicitly return a value.
```js
let a = null;
console.log(a); // null
```

---

## Common Data Types
- Primitive Data Types
    - String
    - Number
    - Boolean
    - Undefined
    - Null
- Complex Data Types
    - Object
    - Array
    - Function

**String :**
- The string is a sequence of characters.
- It is used to represent text in JavaScript.
- It can be enclosed in single quotes ('') or double quotes ("").
```js
let name = "Ambadas";
console.log(name);

let fullName = name + " Gote"; // Conatenating strings using "+" operator
console.log(fullName);

let s = "THis   is a      string";
let arr = s.trim().split(/\s+/); // Trimming and splitting strings
console.log(arr);

let arr1 = ["a", "b", "c"];
let str = arr1.join(""); // Joining array elements into a string
console.log(str);
let str1 = arr1.join(" "); // Joining array elements into a string with a separator " " space
console.log(str1);
let str2 = arr1.join(", "); // Joining array elements into a string with no separator then it use by default a comma
console.log(str2);
```

**Object :**
- The object data type is a collection of properties.
- It stores the data in key-value pairs.
```js
let person = {
    name : "Ambadas",
    age : 25,
    city : "Dudhani"
}

console.log(person);

// Accessing properties
console.log(person.name); // Dot notation
console.log(person["name"]); // Bracket notation

person.isStudent = true; // Adding properties
person.name = "Ambadas Gote" // Modifying properties
delete person.age; // Deleting properties
console.log(person);
```

**Array :**
- The array data type is an ordered list of values.
- It stores the data in a contiguous block of memory.
- It can store multiple values of same type or different types.
```js
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers[0] = 10; // Modifying elements

numbers.push(6); // Adding elements to the end of the array
numbers.unshift(20); // Adding elements to the beginning of the array

console.log(numbers);

numbers.pop(); // Removing elements from the end of the array
numbers.shift(); // Removing elements from the beginning of the array
console.log(numbers);
```

**Function :**
- The function data type is a block of code that performs a specific task.
- It can take input parameters and return a value.
- It can be called multiple times with different inputs.
```js
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // Calling the function

// Anonymous functions
let anonymousFunction = function(a, b) {
    return a + b;
}

console.log(anonymousFunction(40, 20)); // Calling the anonymous function

// function as expression and arrow function
const mul = (a, b) => a * b;

console.log(mul(10, 20)); // Calling the function as expression
```

---

## Map, Filter, Reduce

**Map :**
- map() is used to transform each element of an array and returns a new array of the same length. 
- It does not modify the original array.

```js
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers); // [2, 4, 6, 8, 10]
```
**Filter :**
- filter() is used to select elements from an array based on a condition and returns a new array with fewer or equal elements.
- It does not modify the original array.

```js 
let numbers = [1, 3, 5,8,2,4,3];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 8]
```

**Reduce :**
- reduce() is used to reduce an array to a single value like a number, object, or array by accumulating results.

```js
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

---

## Static vs Dynamic Typing

**Static Typing :**
- Static typing is a type system that checks the types of variables at compile time.
- Programming languages that support static typing include Java, C++, C.
```js
int x = 10;
String name = "Ambadas";
```

**Dynamic Typing :**
- Dynamic typing is a type system that checks the types of variables at runtime.
- Programming languages that support dynamic typing include JavaScript.
```js
let x = 10;
let name = "Ambadas";
```
---

## Garbage Collection
- The garbage collection is the automatic memory management process in Js which idntifies and deallocates the memory of the varaibles that are 
no longer used in the program.
- The garbage collection process is performed by the Js engine.

---

## Math Object
- The Math object is a built-in object that provides mathematical functions.
```js
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-10)); // 10
console.log(Math.round(3.7)); // 4
console.log(Math.floor(3.7)); // 3
console.log(Math.ceil(3.7)); // 4
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.random()); // 0.12345678901234568
```

---

## DOM and BOM

**Browser Object Model (BOM) :**
- The BOM is a set of web standards that define how web browsers should interact with each other and with the web pages that they display.

**Document Object Model (DOM) :**
- The DOM is a programming interface for HTML and XML documents.
- It represents the page as a tree-like structure, where each node in the tree represents an element, attribute, or piece of text in the document.

---

## Hoisting
- Hoisting is JavaScript’s behavior where variable and function declarations are processed before code execution, making them available at the top of their scope.

**What Gets Hoisted and How It’s Hoisted**

**1. var Hoisting**
- Declaration is hoisted
- Initialization is NOT hoisted
- Default value is undefined
```js 
console.log(a); // undefined
var a = 10;

above code is equivalent to
var a;
console.log(a);
a = 10;
```

**2. let and const**
- Hoisted ❌ but not accessible
- Stay in Temporal Dead Zone (TDZ)
- Access before declaration → error
```js
console.log(b); // ReferenceError
let b = 20;
```

**3. Function Hoisting (Function Declaration)**
- Fully hoisted
- Can be called before definition
```js
hello();

function hello() {
  console.log("Hello");
}
```

**4. Function Expression Hoisting**
- Treated like a variable
- Depends on var, let, or const
```js
sayHi(); // TypeError

var sayHi = function () {
  console.log("Hi");
};

Reason:

var sayHi; // hoisted
sayHi();   // undefined()
```
----

## Closures
- Closures are function that remebers and access the variables of the outer function even after the outer function has finished its execution.
```js 
function outer() {
    var name = "Ambadas";
    function inner() {
        console.log(name);
    }
    return inner;
}

let closure = outer();
closure(); // Ambadas
outer()(); // outer()() calls the outer function first, which returns the inner function, and then immediately calls that returned function.
```

---

## Event Loop 

**Event :**
- An event is an action or occurrence (like a click, timer, or network response) that is handled asynchronously by JavaScript.

**Points to remember :**
- JavaScript is single-threaded (one call stack).
- JavaScript executes code synchronously by default.
- JavaScript can handle asynchronous operations using the Event Loop.
- Everything in JavaScript runs inside an Execution Context.
- Each execution context has two phases:
    - Memory Creation Phase
    - Code Execution Phase
- Execution contexts are managed using the Call Stack.
- The Global Execution Context is created first.
- Every function call creates a new execution context.


**Event Loop :**
- The Event Loop continuously monitors the Call Stack and the Task Queues, and when the Call Stack is empty, it pushes waiting 
callbacks into the stack for execution.

**Components Involved :**

1. Call Stack
Executes synchronous code
2. Web APIs
setTimeout, DOM events, fetch, etc.
3. Callback / Task Queue (Macrotask Queue)
setTimeout, setInterval
4. Microtask Queue
Promises, MutationObserver
5. Event Loop
Coordinates everything


```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

Output : A D C B
```
---

## setTimeout and clearTimeout
- setTimeout() is used to execute a function or code after a specified delay.
- clearTimeout() is used to clear the timeout.
```js
let timeout = setTimeout(() => {
    console.log("Hello");
}, 1000);
```
```js
let timeout = setTimeout(() => {
    console.log("Hello");
}, 1000);

clearTimeout(timeout);
```

---

## setInterval and clearInterval
- setInterval() is used to execute a function or code repeatedly after a specified delay.
- clearInterval() is used to clear the interval.
```js
let interval = setInterval(() => {
    console.log("Hello");
}, 1000);
```
```js
let interval = setInterval(() => {
    console.log("Hello");
}, 1000);

clearInterval(interval);
```

---

## Promise
- Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

**State of a promise**
- pending --> The initial state of a promise neither fulfilled nor rejected.
- fulfilled --> The promise has been fulfilled.
- rejected --> The promise has been rejected.

```js
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Hello");
    } else {
        reject("Error");
    }
});

promise
.then(() => {
    console.log("Promise Fulfilled");
})
.catch(() => {
    console.log("Promise Rejected");
});
```

## Promise Chaining
- Promise chaining is the process of executing multiple asynchronous operations in sequence, where each .then() waits for the 
previous promise to settle by returning a value or another promise.

```js
const p1 = new Promise((resolve, reject) => {
    if (true) {
        resolve("Hello P1");
    } else {
        reject("Error P1");
    }
});

const p2 = new Promise((resolve, reject) => {
    if (false) {
        resolve("Hello P2");
    } else {
        reject("Error P2");
    }
});

p1
    .then(result => {
        console.log(result);
        return p2; // chain waits for p2 to resolve
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
```
**Promises — Points to Remember**
- A Promise represents the result of an asynchronous operation.
- Promise states: pending, fulfilled, rejected.
- .then() runs when a promise is fulfilled.
- .catch() runs when a promise is rejected.
- .then() always returns a new promise.
- Promise callbacks run in the microtask queue.
- A rejected promise skips .then() blocks until a .catch() is found.

**Promise Chaining — Points to Remember**
- Promise chaining executes async tasks in sequence.
- Chaining is done by returning a promise inside .then().
- Returning a promise makes the chain wait.
- Not returning a promise means the chain does not wait.
- Returning nothing from .then() resolves with undefined.
- .catch() can catch any error above it in the chain.
- Waiting is good only when the next step depends on the previous one.
- Unnecessary waiting causes performance issues.

---

## Methods of Promise

**1. Promise.all() Method**
Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.

```js
Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));
```

**2.  Promise.allSettled() Method**
Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.

```js
Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results));
```

**3. Promise.race() Method**
Promise.race() Method resolves or rejects as soon as the first promise settles.

```js
Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 500)),
]).then((result) =>
    console.log(result));
```

**4. Promise.any() Method**
Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.

```js
Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
```

**5. Promise.resolve() Method**
Promise.resolve() Method returns a promise that resolves with the given value.

```js
Promise.resolve("Immediate success")
    .then((value) => console.log(value));
```

**6. Promise.reject() Method**
Promise.reject() Method returns a promise that immediately rejects with a given reason.

```js
Promise.reject("Immediate failure")
    .catch((error) => console.error(error));
```

**7. Promise.finally() Method**
Promise.finally() Method runs a cleanup or final code block regardless of the promise’s result (fulfilled or rejected).

```js
Promise.resolve("Task completed")
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup completed"));

```

---

## Callbacks
- Callbacks are functions passed as arguments to other functions to be executed once an event or task is complete.

```js
function fecthData(callback) {
    setTimeout(() => {
        const data = "Fetching data...";
        callback(data);
    }, 1000);
}

function callBackData(data) {
    console.log(data);
}

fecthData(callBackData);
```

---

## Callbacks vs Promises
- Promises are used to handle asynchronous operations.
- Callbacks are used to handle synchronous operations.

--- 

## Higher-order functions
- A higher-order function is a function that takes another function as an argument OR returns a function.
```js
function higherOrderFunction(callback) {
    console.log("Higher-order function");
    return callback();
}

function callBackData() {
    console.log("Callback data paased in higher-order function");
}

higherOrderFunction(callBackData);
```

---
