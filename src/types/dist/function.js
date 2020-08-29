"use strict";
function createPhotograph(title, date, size) {
    console.log(title, date, size);
}
createPhotograph("betty", "30-10-97", "100*100");
createPhotograph("betty", "30-10-97");
// flat array
var createPic = function (title, date, size) {
    return { title: title, date: date, size: size };
};
console.log(createPic("bet", "30-10-97", "100*100"));
function handleError(code, msg) {
    // procesamiento del codigo o mensaje
    // NVER LANA UN ERROR, NO RETORNA UN ERROR VALIDO
    if (msg === "ERROR") {
        throw new Error(msg + " Code " + code);
    }
    else {
        return "An error has ocurred";
    }
}
try {
    var results = handleError(200, "hola");
    console.log(results);
}
catch (error) { }
