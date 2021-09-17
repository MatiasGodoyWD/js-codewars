const twiceAsOld = (dyo, syo) => {
  let counter = 0;
  if (dyo < syo * 2) {
    while (dyo < syo * 2) {
      counter++;
      dyo++;
    }
  } else {
    while (dyo > syo * 2) {
      counter++;
      dyo--;
    }
  }
  return counter;
};

console.log(twiceAsOld(50, 25));
console.log(twiceAsOld(55, 35));
console.log(twiceAsOld(60, 25));

//Alternativa
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);
// Me devuelve la diferencia entre la edad del hijo y del padre
