// Task
// Tranform of input array of zeros and ones to array in which counts
// number of continuous ones. If there is none, return an empty array

// Example
// [1, 1, 1, 0, 1] -> [3,1]
// [1, 1, 1, 1, 1] -> [5]
// [0, 0, 0, 0, 0] -> []

// Recorro hasta que no sea un uno,pusheo el counter y lo reseteo.
// Tengo que eliminar los elementos ya vistos

const onesCounter = (arr) => {
  let largo = arr.length;
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < largo; i++) {
    if (arr[i] === 1) {
      counter++;
      if (arr[i + 1] !== 1) {
        newArr.push(counter);
      }
    } else {
      counter = 0;
    }
  }
  return newArr;
};

//Alternativa construida con metodos de array
const onesCounter = (arr) =>
  arr
    .join("")
    .split(0)
    .map((e) => e.length)
    .filter((e) => e !== 0);

onesCounter([1, 1, 1, 0, 1]);
onesCounter([1, 1, 1, 1, 1]);
onesCounter([0, 0, 0, 0, 0]);

onesCounter([1, 1, 1, 0, 1]);
onesCounter([1, 1, 1, 1, 1]);
onesCounter([0, 0, 0, 0, 0]);

// [1, 1, 1, 0, 1] -> [3,1]
// [1, 1, 1, 1, 1] -> [5]
// [0, 0, 0, 0, 0] -> []
