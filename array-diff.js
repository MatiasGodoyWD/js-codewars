//Ejercicio de mierda!!!! recorro el array2 y si el array 1 contiene incluye al elemento actualmente recorrido, lo saca
const arrayDiff = (arr, arr0) => {
  arr0.forEach((element) => {
    if (arr.includes(element)) {
      arr = arr.filter((el) => el !== element);
    }
  });
  return arr;
};

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e)); // va a filtrar todos los elementos de a que no esten incluidos en b
}

console.log(array_diff([2, 3, 4], [4, 5]));
