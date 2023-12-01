// It will treat .js files as whatever the default module system for the project which is CommonJS.
// Can be explicitly set in package.json with "type": "commonjs".
//
// Can also be set in package.json with "type": "module" for enabling ES6 module.

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