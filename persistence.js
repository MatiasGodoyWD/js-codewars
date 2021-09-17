// Write a function, persistence, that takes in a
//  positive parameter num and returns its multiplicative persistence,
//  which is the number of times you must multiply the digits in num until you reach a single digit.

const persistence = (num) => {
  let counter = 0;
  let result = num.toString();
  while (result.length !== 1) {
    let newArr = result.split("");
    const numberArr = newArr.map((n) => parseInt(n));
    result = numberArr.reduce(function (a, b) {
      return a * b;
    });
    result = result.toString();
    counter++;
  }
  return counter;
};

console.log(persistence(999)); // === 3 because 3*9 = 27, 2*7 = 14, 1*4=4
console.log(persistence(39)); // === 3 because 3*9 = 27, 2*7 = 14, 1*4=4
console.log(persistence(4)); // === 3 because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

// persistence(999); // === 4 because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

// persistence(4); //  === 0 because 4 is already a one-digit number
