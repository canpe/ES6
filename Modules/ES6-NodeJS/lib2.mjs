// Node.js's original module system is CommonJS (which uses require and module.exports).
// Since Node.js was created, the ECMAScript module system (which uses import and export) has 
// become standard and Node.js has added support for it.
//
// Node.js will treat .cjs files as CommonJS modules and .mjs files as ECMAScript modules. 
// It will treat .js files as whatever the default module system for the project is 
// (which is CommonJS unless package.json says "type": "module").

export const sqrt = Math.sqrt;
export function square (x) {
    return x * x;
}
export function diag(x , y) {
    return sqrt(square(x) + square(y));
}