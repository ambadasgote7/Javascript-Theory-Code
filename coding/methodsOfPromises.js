// Promise.all() Method -> wait all promises to fullfil and returns their results as an array
// If any promise is rejected, it immediately rejects.

// Promise.all([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 3 completed"),
//     Promise.resolve("Task 2 failed"),
// ])
//  .then((results) => console.log(results))
//  .catch((error) => console.error(error));

// -------------------------------------------------------------------------------

// Promise.allSettled() Method -> waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.
// Promise.allSettled() always resolves and returns the status and value/reason of each promise.

// Promise.allSettled([
//     Promise.resolve("Task 1 completed"),
//     Promise.reject("Task 2 failed"),
//     Promise.resolve("Task 3 completed")
// ])
// .then((results) => console.log(results))
// .catch((error) => console.error(error));

// -------------------------------------------------------------------------------

// Promise.any() Method -> Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.

// Promise.any([
//     Promise.reject("Task 1 failed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.resolve("Task 3 completed")
// ])
// .then((result) => console.log(result))
// .catch((error) => console.error(error));

// -------------------------------------------------------------------------------


// Promise.race() Method -> Promise.race() Method resolves or rejects as soon as the first promise settles.
// Promise.race() settles with the first promise that settles, whether fulfilled or rejected.

// Promise.race([
//     Promise.reject("Task 1 rejected"),
//     Promise.resolve("Task 2 finished"),
//     Promise.resolve("Task 3 finished")
// ])
// .then((result) => console.log(result))
// .catch((error) => console.error(error));


// -------------------------------------------------------------------------------

// Promise.resolve() Method -> Promise.resolve() Method returns a promise that resolves with the given value.

Promise.resolve("Immediate success")
    .then((value) => console.log(value));

// -------------------------------------------------------------------------------

// Promise.reject() Method -> Promise.reject() Method returns a promise that immediately rejects with a given reason.

Promise.reject("Immediate failure")
    .catch((error) => console.error(error));

// -------------------------------------------------------------------------------

// Promise.finally() Method -> Promise.finally() Method runs a cleanup or final code block regardless of the promise’s result (fulfilled or rejected).

Promise.resolve("Task completed")
    .then((result) => console.log(result))
    .catch((error) => console.error(error)) 
    .finally(() => console.log("Cleanup completed"));