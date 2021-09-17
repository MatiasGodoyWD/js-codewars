// Timmy & Sarah think they are in love, but around where they live,
//  they will only know once they pick a flower each.
//   If one of the flowers has an even number of petals and the other
//    has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower
//  and return true if they are in love and false if they aren't.

const isOdd = (n) => n % 2 === 0;
const isEven = (n) => n % 2 !== 0;
const lovefunc = (f1, f2) =>
  (isOdd(f1) && isEven(f2)) || (isEven(f1) && isOdd(f2));

console.log(lovefunc(2, 3));
console.log(lovefunc(2, 4));
console.log(lovefunc(3, 3));
console.log(lovefunc(2, 2));
console.log(lovefunc(6, 3));
