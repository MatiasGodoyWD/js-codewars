// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element
//  is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const countPositivesSumNegatives = (i) => {
  let pCount = 0;
  let nSum = 0;
  if (i === null || i.length === 0) {
    return [];
  } else {
    i.forEach((n) => (n < 0 ? (nSum += n) : n > 0 ? pCount++ : pCount));
    return [pCount, nSum];
  }
};

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
