// I'm new to coding and now I want to get the sum of two arrays...
// actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (arr1, arr2) => {
  let totArr1 = arr1.reduce((a, b) => a + b, 0);
  return arr2.reduce((a, b) => a + b, totArr1);
};

console.log(arrayPlusArray([1, 2], [3, 4]));

// Otra manera buena
function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}
