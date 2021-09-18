// Dado un numero, devolverlo revertido en forma de array
const digitize = (n) =>
  n
    .toString()
    .split(``)
    .reverse()
    .map((nro) => Number(nro));

console.log(digitize(23122));

// Dado un array de numeros, devolver el array en el mismo orden, con los numeros opuestos.

const invert = (a) => a.map((n) => n * -1);

console.log(invert([1, -2, 3, -4]));
