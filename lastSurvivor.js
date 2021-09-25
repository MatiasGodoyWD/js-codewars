// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order,
//  starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

const lastSurvivor = (letters, coords) => {
  let str = letters.split("");
  coords.forEach((n) => {
    str.splice(n, 1); // aca lo borra y para cuando pase al siguiente numero la variable string ya no va a tener el valor de esa posicion.
  });
  return str;
};

lastSurvivor("zbkdd", [0, 1]);

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
