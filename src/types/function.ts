type SquareSize = "100*100" | "500*100" | "1000*1000";

function createPhotograph(title: string, date: string, size?: SquareSize) {
  console.log(title, date, size);
}

createPhotograph("betty", "30-10-97", "100*100");
createPhotograph("betty", "30-10-97");

// flat array
let createPic = (title: string, date: string, size: SquareSize): object => {
  return { title, date, size };
};
console.log(createPic("bet", "30-10-97", "100*100"));

function handleError(code: number, msg: string): never | string {
  // procesamiento del codigo o mensaje
  // NVER LANA UN ERROR, NO RETORNA UN ERROR VALIDO
  if (msg === "ERROR") {
    throw new Error(`${msg} Code ${code}`);
  } else {
    return "An error has ocurred";
  }
}
try {
  let results = handleError(200, "hola");
  console.log(results);
} catch (error) {}
