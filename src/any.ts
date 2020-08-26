// any- valor de ultimo reculso
let idUser: any;
idUser = 1;
idUser = "1";
// inferido
let otherId;
otherId = 2;
otherId = "2";

let surprise: any = "hello world";
const res = surprise.substring(6);
console.log(res);
