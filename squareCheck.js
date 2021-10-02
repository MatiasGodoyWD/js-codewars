// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
//  that checks whether the two arrays have the "same" elements, with the same multiplicities.
//   "Same" means, here, that the elements
// in b are the elements in a squared, regardless of the order.

const comp = (a, b) => {
  if (a === null || b === null) {
    return false;
  }
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] ** 2 !== b[i]) {
      return false;
    }
  }
  return true;
};
