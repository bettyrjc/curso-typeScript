"use strict";
// void
function shoInfo(user) {
    console.log(user.id, user.name);
}
shoInfo({ id: 1, name: "Betty" });
// void como tipo de dato variable
var unusable;
unusable = undefined; // || null
// tipo: never
function handleError(code, message) {
    // process yout code here
    // generate a message
    throw new Error(message + " code: " + code);
}
try {
    handleError(404, "not found");
}
catch (error) { }
// bucle infiinito
function sumNumber(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumber(10);
