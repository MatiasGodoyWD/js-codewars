// Consider an array/list of sheep where some sheep may be missing from their place.
//  We need a function that counts the number of sheep present in the array (true means present).

// For example,

const countSheeps = (arr) => arr.reduce((a, b) => (b ? (a += 1) : a), 0);

console.log(countSheeps([true, false, true]));
