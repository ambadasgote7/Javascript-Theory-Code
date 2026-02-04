/*
*Object :*
- The object data type is a collection of properties.
- It stores the data in key-value pairs.
*/

// let person = {
//     name : "Ambadas",
//     age : 25,
//     city : "Dudhani"
// }

// console.log(person);

// // Accessing properties
// console.log(person.name); // Dot notation
// console.log(person["name"]); // Bracket notation

// person.isStudent = true; // Adding properties
// person.name = "Ambadas Gote" // Modifying properties
// delete person.age; // Deleting properties
// console.log(person);

// -------------------------------------------------------------------------------
/* 
*Array :*
- The array data type is an ordered list of values.
- It stores the data in a contiguous block of memory.
- It can store multiple values of same type or different types.
*/

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// numbers[0] = 10; // Modifying elements

// numbers.push(6); // Adding elements to the end of the array
// numbers.unshift(20); // Adding elements to the beginning of the array

// console.log(numbers);

// numbers.pop(); // Removing elements from the end of the array
// numbers.shift(); // Removing elements from the beginning of the array
// console.log(numbers);

// -------------------------------------------------------------------------------
/* 
*Functions :*
- The function data type is a block of code that performs a specific task.
- It can take input parameters and return a value.
- It can be called multiple times with different inputs.
*/

// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 20)); // Calling the function

// // Anonymous functions
// let anonymousFunction = function(a, b) {
//     return a + b;
// }

// console.log(anonymousFunction(40, 20)); // Calling the anonymous function

// // function as expression and arrow function
// const mul = (a, b) => a * b;

// console.log(mul(10, 20)); // Calling the function as expression


// -------------------------------------------------------------------------------
/* 
*String :*
- The string is a sequence of characters.
- It is used to represent text in JavaScript.
- It can be enclosed in single quotes ('') or double quotes ("").
*/

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