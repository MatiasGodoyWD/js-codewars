//Mi solucion
const solution = (number) => {
  counter = 0;
  for (let index = 0; index < number; index++) {
    counter += index % 3 === 0 || index % 5 === 0 ? index : 0;
  }
  return counter;
};

console.log(solution(-3)); //0
console.log(solution(2)); //0
console.log(solution(5)); //3
console.log(solution(6)); // 8
console.log(solution(7)); // 14
