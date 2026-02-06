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