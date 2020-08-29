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
enum photoOrientation {
  landscape = 10,
  portraid,
  square,
  panorama,
}

const landscape: photoOrientation = photoOrientation.landscape;
console.log("landscape", landscape);
// con valores en cadena

enum Country {
  Mexico = "mex",
  Colombia = "col",
}
const country: Country = Country.Mexico;
console.log(country);
