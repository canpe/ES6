(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
//------ mainA.js ------
var square = require('./lib.js').square;
var diag = require('./lib.js').diag;
console.log(square(11)); // 121
console.log(diag(3, 4)); // 5


//------ mainB.js ------
var lib = require('./lib.js')
console.log(lib.square(11)); // 121
console.log(lib.diag(3, 4)); // 5
console.log(lib.sqrt(49)); // 7

},{"./lib.js":1}]},{},[2]);
