// try-catch
try {
    const data = 10 / 0;
    console.log(data);
} catch (error) {
    console.error(error);
} finally {
    console.log("Finally block");
}

// -------------------------------------------------------------------------------

// finally
function finallyBlock() {
    console.log("Finally block");
}

finallyBlock();

// -------------------------------------------------------------------------------

// throw
function throwError() {
    throw new Error("Error thrown");
}

throwError();