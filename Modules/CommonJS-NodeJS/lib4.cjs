// CommonJS modules are the original way to package JavaScript code for Node.js.

// local variable
var sqrt = Math.sqrt;

function square(x) {
    return x * x;
}

function diag(x, y) {
    return sqrt(square(x) + square(y));
}

module.exports = {
    sqrt: sqrt,
    square: square,
    diag: diag,
};