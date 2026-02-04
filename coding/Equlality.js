/* 
* == *
- it only checks for value equality
- it does not check for type equality
 - returns true if the operands are equal
 - returns false if the operands are not equal

 * === * 
- it checks for both value and type equality
- returns true if the operands are equal in both value and type
- returns false if the operands are not equal in either value or type

*/
let x = "10";
console.log(typeof(x)) // string

let y = 10;
console.log(typeof(y)) // number

console.log(x == y) // true
console.log(x === y) // false