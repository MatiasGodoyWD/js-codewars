// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

const sumMix = (x) =>
  x.reduce((a, b) => (typeof b === "string" ? a + parseInt(b) : a + b), 0);

function NumerosPositivos(arr) {
  let positivos = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
      positivos.push(arr[i]);
    }
  }
  return positivos;
}

console.log(NumerosPositivos([1, -1, -3, 2, 3]));

function NumerosPositivosForEach(arr) {
  let positivos = [];
  arr.forEach((n) => {
    if (n >= 0) {
      positivos.push(n);
    }
  });
  return positivos;
}

console.log(NumerosPositivosForEach([1, -1, -3, 2, 3]));

function NumerosPositivosFilter(arr) {
  return arr.filter((n) => n >= 0);
}

console.log(NumerosPositivosFilter([1, -1, -3, 2, 3]));

function NumerosPositivosReduce(arr) {
  return arr.reduce((newArr, b) => (b > 0 ? [...newArr, b] : newArr), []);
}
console.log(NumerosPositivosReduce([1, -1, -3, 2, 3]));
