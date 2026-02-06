// Callbacks are functions passed as arguments to other functions to be executed once an event or task is complete.
// function fecthData(callback) {
//     setTimeout(() => {
//         const data = "Fetching data...";
//         callback(data);
//     }, 1000);
// }

// function callBackData(data) {
//     console.log(data);
// }

// fecthData(callBackData);


// -------------------------------------------------------------------------------

// Higher-order functions -> A higher-order function is a function that takes another function as an argument OR returns a function.

function higherOrderFunction(callback) {
    console.log("Higher-order function");
    return callback();
}

function callBackData() {
    console.log("Callback data paased in higher-order function");
}

higherOrderFunction(callBackData);