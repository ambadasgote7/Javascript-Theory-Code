 /* 
 - var keyword --> Variable declaration using var keyword is the function scoped or global scoped 
 - you can redeclare a variable in the same scope
 - you can reassign a variable in the same scope 
 */

// var a = 10;

// // if is block so b can be accessed outside the if block
// if (a === 10) {
//     var b = 20;
//     console.log(a);
// }
// // test is function so fa is not accessible outside the function
// function test() {
//     var fa = 20;
//     console.log(fa);
// }

// Reassignment of a variable is allowed using the var keyword
// b = 200;
// console.log(b);

// // Redeclaration of a variable is allowed using the var keyword
// var a = "Hello World";
// console.log(a);

// console.log(b);
// console.log(fa); // this will throw an error because fa is not defined in the global scope is in the function scope

// -------------------------------------------------------------------------------

/*
 - let keyword --> Variable declaration using let keyword is the block scoped
 - you can redeclare a variable in the same scope
 - you can't reassign a variable in the same scope

 */

// let a = 10;

// if (a === 10) {
//     let b = 20;
//     console.log(a);
// }

// function test() {
//     let fa = 20;
//     console.log(fa);
// }

// // Reassignment of a variable is allowed using the let keyword
// a = "Hello World";
// console.log(a);

// // Redecalration of a variable is not allowed using the let keyword
// // let a = "Hello World";
// // console.log(a);


// test();

// //console.log(b); // this will throw an error because b is not defined in the global scope is in the block scope


//-------------------------------------------------------------------------------
/*
 - const keyword --> Variable declaration using const keyword is the block scoped
 - you can't redeclare a variable in the same scope
 - you can't reassign a variable in the same scope
*/ 
// const a = 10;

// if (a === 10) {
//     const b = 20;
//     console.log(a);
// }

// const a = "Hello World"; // this will throw an error Identifier 'a' has already been declared
// console.log(a);

//a = 20; // this will throw an error because Assignment to constant variable.
//console.log(a); 

// console.log(b); // this will throw an error because b is not defined in the global scope is in the block scope