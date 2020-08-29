"use strict";
// angle <tipo>
var username;
username = "bettyrjc";
// en este ambito nuestra variable siempre sera de tipo any.
// asuminos una cadena y que TS CONFIE EN NOSOTROS
var message = username.length > 5
    ? "Welcome " + username
    : "username is too short";
console.log(message);
// AS
var msg = username.length > 5
    ? "Welcome " + username
    : "username is too short";
console.log(msg);
