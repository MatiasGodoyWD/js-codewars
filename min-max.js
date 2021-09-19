const min = (l) => Math.min(...l);
const max = (l) => Math.max(...l);

console.log(max([1, 2, 3, 4]));
console.log(max([1, 2, -3, 4]));
console.log(max([1]));
console.log(min([2]));

console.log(min([-110, 1, 2, 3, 4, -1100]));
