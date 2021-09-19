// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

const find_average = (arr) =>
  arr.length === 0 ? 0 : arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(find_average([1, 2, 3]));
console.log(find_average([]));

var arrayNumeros = [1, 2, 3, 4, 5, 6];
let totalNumeros = 0;

arrayNumeros.forEach((numero) => {
  return (totalNumeros += numero);
});

console.log(totalNumeros / arrayNumeros.length);
