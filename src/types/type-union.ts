// 10 o '10'
export {};
let idUser: number | string;
idUser = 10;
idUser = "10";

// buscar username dado un ID
function getUserNameById(id: number | string) {
  return "betty";
}
getUserNameById(1);
getUserNameById("1");

// alias de tipo
// son utiles para evitar la redundancia
type union = number | string;
type name = string;
let id_user: union;
id_user = 10;
id_user = "10";

// buscar username dado un ID
function getUserNameById_one(id: union): name {
  return "betty";
}
getUserNameById_one(1);
getUserNameById_one("1");

// tipo literales
// 100*100 500*100
type SquareSize = "100*100" | "500*100" | "1000*1000";
let smallPicture: SquareSize = "100*100";
console.log(smallPicture);
