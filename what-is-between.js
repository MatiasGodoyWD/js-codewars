// Complete the function that takes two integers (a, b, where a < b)
// and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

const between = (a, b) => {
  let between = [];
  for (let index = a; index <= b; index++) {
    between.push(index);
  }
  return between;
};

console.log(between(1, 10));
