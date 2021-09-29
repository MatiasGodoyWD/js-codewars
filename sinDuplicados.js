// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

const distinct = (arr) => {
  return arr.reduce((a, b) => (!a.includes(b) ? [...a, b] : a), []);
};
