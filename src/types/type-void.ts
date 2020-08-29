// void
function shoInfo(user: any) {
  console.log(user.id, user.name);
}
shoInfo({ id: 1, name: "Betty" });

// void como tipo de dato variable

let unusable: void;
unusable = undefined; // || null

// tipo: never
function handleError(code: number, message: string): never {
  // process yout code here
  // generate a message
  throw new Error(`${message} code: ${code}`);
}
try {
  handleError(404, "not found");
} catch (error) {}

// bucle infiinito
function sumNumber(limit: number) {
  let sum = 0;
  while (true) {
    sum++;
  }
}
sumNumber(10);
