// angle <tipo>
let username: any;
username = "bettyrjc";
// en este ambito nuestra variable siempre sera de tipo any.
// asuminos una cadena y que TS CONFIE EN NOSOTROS

let message: string =
  (<string>username).length > 5
    ? `Welcome ${username}`
    : "username is too short";

console.log(message);

// AS
let msg =
  (username as string).length > 5
    ? `Welcome ${username}`
    : "username is too short";
console.log(msg);
