// You are given an unsorted array containing all the integers from 0 to 100 inclusively.
// However, one number is missing. Write a function to find and return this number.
// What are the time and space complexities of your solution?

const missingNo = (arr) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    }
  }
};
