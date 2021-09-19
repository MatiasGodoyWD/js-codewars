const fakeBin = (s) => {
  let str = s.split("");
  let newStr = [];
  str.forEach((n) => (n < 5 ? newStr.push(0) : newStr.push(1)));
  return newStr.join("");
};

console.log(fakeBin("650"));

// OTRA
function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}
