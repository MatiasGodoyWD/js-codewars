// Sum all the numbers of the array (in F# and Haskell you get a list)
// except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge,
//     even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

const sumArray = (arr) =>
  arr === null || arr.length === 0 || arr.length === 1 || !arr
    ? 0
    : arr
        .sort((a, b) => a - b)
        .slice(1, arr.length)
        .slice(0, -1)
        .reduce((a, b) => a + b, 0);
