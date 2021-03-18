
// The first argument is an array of paths to modules that it depends on. 
// The second argument is a function representing the module’s definition.

// In RequireJS all the code is written under requirejs() or define() functions.

// Load a file with async and then call anonymous function which takes an object 
// that is used to call the functions inside the dependent file.
require(['message'], function(message) {
    message.consoleLog('Hello World!');
    message.warningLog('Hello World!');
});


// Load AMD (Asynchronous module definition) module 
 require(['lib'], function(lib){
    console.log(lib.square(11));    // 121
    console.log(lib.diag(3, 4));    // 5
    console.log(lib.sqrt(49));      // 7
});