// NODE.JS

//------ mainA.js ------
import { square, diag } from './lib2.mjs'
console.log(square(11));
console.log(diag(3, 4));


//------ mainB.js ------
import * as lib from './lib2.mjs'
console.log(lib.square(11)); // 121
console.log(lib.diag(3, 4)); // 5
console.log(lib.sqrt(49)); // 7