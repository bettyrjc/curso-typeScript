export {};
let user: [number, string];
user = [1, "bettyrjce"];

console.log(user);
console.log(user[1]);
console.log(user[1].length);

// tuplas con varios valores
// id, usernamem ispro

let userInfo: [number, string, boolean];
userInfo = [2, "bettyrjce", true];

console.log(userInfo);
console.log(userInfo[1]);
console.log(userInfo[1].length);

// arreglos de tuplas
let array: [number, string][] = [];

array.push([1, "bettyrjce"]);
array.push([2, "betty.teck"]);

console.log(array);
console.log(array[1][1]);
console.log(array[1][1].concat("001"));
