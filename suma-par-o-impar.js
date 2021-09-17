//   Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

const sum = (array) => {
  let result = 0;
  array.forEach((num) => (result += num));
  return result;
};
const oddOrEven = (array) => (sum(array) % 2 !== 0 ? "odd" : "even");

// console.log(oddOrEven([2, 4, 1]));
// console.log(oddOrEven([]));
// console.log(oddOrEven([0, 2, 1]));

// Otra version mas acotada, usando reduce
const oddOrEven1 = (arr) =>
  arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";

/* Si bien mi forma no estaba mal, con reduce me evitaba tener que hacer la funcion auxiliar de suma*/
