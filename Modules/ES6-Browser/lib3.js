// ECMAScript modules are the official standard format to package JavaScript code for reuse. 
// Modules are defined using a variety of import and export statements.

export const sqrt = Math.sqrt;
export function square (x) {
    return x * x;
}
export function diag(x , y) {
    return sqrt(square(x) + square(y));
}