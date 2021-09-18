// Write a program that finds the summation of every number from 1 to num.
//  The number will always be a positive integer greater than 0.

const summation = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// alt
const summation1 = (n) => (n * (n + 1)) / 2;

console.log(summation(8));
