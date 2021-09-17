// Create a function that returns the sum of the two lowest positive numbers
// given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

const nums = [-2, 19, 5, -8, 42, 2, 77];

const sumTwoSmallestNumbers = (array) => {
  let min = [];
  let positivos = array.filter((num) => num >= 0); //[19 5 42 2 77]
  min.push(positivos.find((num) => num === Math.min.apply(Math, positivos)));
  positivos = positivos.filter(
    (num) => num !== Math.min.apply(Math, positivos)
  );
  min.push(positivos.find((num) => num === Math.min.apply(Math, positivos)));
  return sum(min);
};

// console.log(sumTwoSmallestNumbers(nums));

//Solucion mejor optimizada1
function sumTwoSmallestNumbers1(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b; // Acomoda el array de menor a mayor con sort y despues devuelve la suma de los dos primeros del array
  });
  return numbers[0] + numbers[1];
}

//Solucion mejor optimizada2
function sumTwoSmallestNumbers2(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b); // Lo mismo pero con destructuring
  return a + b;
}

// Ninguna de las dos sirven con numeros negativos a diferencia de la mia
// ACA LA OPTIMIZO PARA QUE ELIMINE LOS NEGATIVOS
function sumTwoSmallestNumbers3(numbers) {
  let positivos = numbers.filter((num) => num >= 0);
  var [a, b] = positivos.sort((a, b) => a - b); // Lo mismo pero con destructuring
  return a + b;
}
console.log(sumTwoSmallestNumbers3(nums));
