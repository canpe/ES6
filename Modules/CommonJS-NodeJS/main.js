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


//------ mainC.js ------
var square = require('./lib4.cjs').square;
var diag = require('./lib4.cjs').diag;
console.log(square(11)); // 121
console.log(diag(3, 4)); // 5


//------ mainD.js ------
var lib = require('./lib4.cjs')
console.log(lib.square(11)); // 121
console.log(lib.diag(3, 4)); // 5
console.log(lib.sqrt(49)); // 7

