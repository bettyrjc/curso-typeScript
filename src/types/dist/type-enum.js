"use strict";
// orientacion para fotografia
// const landscape = 0;
// const portraid = 1;
// const square = 2;
// const panorama = 3;
// saber la ubicacion
// puede empezar desde el cero, o si uno quiere otra enumeracion se coloca en el primero y sigue la secuencia
// enum photoOrientation {
//   landscape = 10,
//   portraid,
//   square,
//   panorama,
// }
var photoOrientation;
(function (photoOrientation) {
    photoOrientation[photoOrientation["landscape"] = 10] = "landscape";
    photoOrientation[photoOrientation["portraid"] = 11] = "portraid";
    photoOrientation[photoOrientation["square"] = 12] = "square";
    photoOrientation[photoOrientation["panorama"] = 13] = "panorama";
})(photoOrientation || (photoOrientation = {}));
var landscape = photoOrientation.landscape;
console.log("landscape", landscape);
// con valores en cadena
var Country;
(function (Country) {
    Country["Mexico"] = "mex";
    Country["Colombia"] = "col";
})(Country || (Country = {}));
var country = Country.Mexico;
console.log(country);
