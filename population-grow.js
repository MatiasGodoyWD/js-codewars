//Solucion que a mi se me ocurrio
const nbYear = (p0, percent, aug, p) => {
  let years = 0;
  while (p0 < p) {
    p0 += (p0 * percent) / 100 + aug;
    years += 1;
  }
  return years;
};

console.log(nbYear(1000, 10, 100, 1300));
