// Creating a promise
// const p1 = new Promise((resolve, reject) => {
//     if (false) {
//         resolve("Hello");
//     } else {
//         reject("Error");
//     }
// });

// p1
//     .then(() => {
//         console.log("Promise Fulfilled");
//     })
//     .catch(() => {
//         console.log("Promise Rejected");
//     });

// Creating a promise chain
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