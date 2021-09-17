// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// FUNDAMENTALS

// Mi solucion
const findOdd = (array) => {
  let storage = 0;
  array.forEach((element) => {
    const result = array.filter((n) => n === element);
    result.length % 2 !== 0 ? (storage = result[0]) : result;
  });
  return storage;
};

const findOdd1 = (xs) => xs.reduce((a, b) => a ^ b); // Esta solucion es con XOR ( Ni por asomo la pensaba)

console.log(findOdd1([5, 5, 4, 3, 3]));
