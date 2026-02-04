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
