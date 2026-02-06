// Map - Transform each element of an array and returns a new array of the same length
let fruits = ["apple", "banana", "orange", "mango"];
let fruitsUpper = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitsUpper); // ["APPLE", "BANANA", "ORANGE", "MANGO"]

// Filter - Select elements from an array based on a condition and returns a new array with fewer or equal elements
let numbers = [1, 2, 3, 4, 5];
let oddNumbers = numbers.filter(num => num % 2 === 1);
console.log(oddNumbers); // [1, 3, 5]

// Reduce - Reduce an array to a single value like a number, object, or array by accumulating results
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15