
// Print message to console
// define([], function() {
//     console.log("'message.js' is loaded.");

//     return {
//         consoleLog: function (text) {
//             console.log(text);
//         }
//     }
// });

define(["warning"], function(warning){
    console.log("'message.js' is loaded.");

    return {
        consoleLog: function (text) {
            console.log(text);
        },               
        warningLog: warning
    };
});