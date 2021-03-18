// local variable
var sqrt = Math.sqrt;

function square(x) {
    return x * x;
}

function diag(x, y) {
    return sqrt(square(x) + square(y));
}

// The problem is that requireJS doesn't support CommonJS modules only AMD. 
// So if the third party library doesn't support AMD then we'll have to jump 
// through some hoops to get it to work.
//
// module.exports = {
//     sqrt: sqrt,
//     square: square,
//     diag: diag,
// };

define(function (require, exports, module) {
    module.exports = {
        sqrt: sqrt,
        square: square,
        diag: diag,  
    };  
});

// If we want to convert it as part of a build process, we can use r.js to 
// perform the conversion for you.