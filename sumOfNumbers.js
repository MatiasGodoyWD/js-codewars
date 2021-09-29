// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it.
//  If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

const getSum = (a, b) => {
  let mayor = a > b ? a : b;
  let menor = a < b ? a : b;
  let total = 0;
  for (let i = menor; i <= mayor; i++) {
    total += i;
  }
  return a === b ? a : total;
  0;
};

const GetSum2 = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

getSum(1, 0);
getSum(1, 2);
