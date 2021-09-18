// In this simple assignment you are given a number and have to make it negative.
//  But maybe the number is already negative?

const makeNegative = (n) => (n < 0 ? n : n * -1);

console.log(makeNegative(2));
console.log(makeNegative(-2));
console.log(makeNegative(-4));
console.log(makeNegative(3));
