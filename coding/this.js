"use strict";
// In global scope, this refers to the global object such as window, module.exports({}), etc.
//console.log(this); // the output is global object i.e module.exports({})

// --------------------------------------------------------------------------------

// In the function it behaviour is depened on the mode (strict or non-strict).
// In strict mode, this refers to the undefined value.
// In non-strict mode, this refers to the global object.

// function test() {
//     console.log(this); // the output is undefined in strict mode and global object in non-strict mode
// }
// test();

// --------------------------------------------------------------------------------

// It also depend on how the function is called.

const student = {
    name : "Ambadas",
    printName : function() {
        console.log(this.name);
    }
}

const fn = student.printName;
fn(); // the output is undefined

// student.printName(); // the output is Ambadas

// // --------------------------------------------------------------------------------

// // Call apply bind

// const student2 = {
//     name : "Babusha"
// }

// student.printName.call(student2); // the output is Babusha
// student.printName.apply(student2); // the output is Babusha

// --------------------------------------------------------------------------------

// // In arrow functions, this refers to the enclosing lexcial context.

const obj = {
    a : 100,
    x : () => {
        console.log(this);
    }
}

// obj.x(); // the output is module.exports({}) the global object

// --------------------------------------------------------------------------------

// // Nested function

// const obj = {
//     a : 200,
//     x : function() {
//         const y = () => {
//             console.log(this.a);
//         }
//         y();
//     }
// }

// obj.x(); // the output is 200

// --------------------------------------------------------------------------------

