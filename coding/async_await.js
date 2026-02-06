// Async/Await is a syntax that allows you to write asynchronous code in a synchronous style.
// It is used to handle asynchronous operations in a more readable and maintainable way.

const fectchData = async () => {
    try {
        const res = await fetch(" https://api.github.com/users/ambadasgote7");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fectchData();