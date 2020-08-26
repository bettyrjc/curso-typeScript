console.log("hola betty r");

// number

// explicita
let phone: number;
phone = 665550;

// inferido
let phone_2 = 1451144;

let hex: number = 0xf00f;
// 0b para especificar que es bianrio
let binary: number = 0b1010;
// 0o valores octal
let octal: number = 0o01234567;

////////////////
// boolean
let isPro: boolean;
isPro = true;

let isNoPro = false;

let last_name: string;
last_name = "bety";
let info: string;
info = `
  user info:
  Telfono: ${phone}
  nombre: ${"betty" + last_name}
  is pro: ${isPro}
`;
