// Your job is to implement a function which returns
//  the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
const lastDigit = (n, d) =>
  d > n.toString().length
    ? n
        .toString()
        .split("")
        .map((n) => Number(n))
    : d <= 0
    ? []
    : n.toString().length === d
    ? n
        .toString()
        .split("")
        .map((n) => Number(n))
    : n
        .toString()
        .slice(n.toString().length - d)
        .split("")
        .map((n) => Number(n));

// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]

// Trabajando con splice
function lastDigits(n, d) {
  return n.split("").splice(0, d);
}

lastDigits("flauta", 2); //['f','l']

function lastDigits(n, d) {
  return n.split("").splice(d, d);
}

lastDigits("flauta", 2); //['a','u']

function lastDigits(n, d) {
  return n.split("").splice(-d, d);
}

lastDigits("flauta", 2); //['t','a']
