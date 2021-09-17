// Task :
// Given a year, return the century it is in.

//Esta es la version con switch y que fue lo primero que se me ocurrio.
//Desisti de seguirla xq me parecia excesiva cantidad de codigo y habia una forma mas optima de hacerlo
const century = (year) => {
  let output;
  switch (true) {
    case year >= 0 && year < 100:
      output = 1;
      break;

    case year >= 100 && year < 200:
      output = 2;
      break;
  }

  return output;
};

//Y aca una version que yo creo que es mucho mejor porque es mucho menos codigo
//** El metodo Math.ceil permite que busque el entero cercano mas grande a un numero decimal.
//** al dividir por 100 al año dado, siempre me va a dar un decimal cuyo entero mas proximo hacia arriba es el
//** siglo al que pertenece, y es por eso que de esta manera logro sacar el siglo sin tener que armar un switch largo
const century2 = (year) => Math.ceil(year / 100);

console.log(century2(100));
console.log(century2(199));
console.log(century2(299));
console.log(century2(399));
console.log(century2(499));
console.log(century2(599));
console.log(century2(2021));
