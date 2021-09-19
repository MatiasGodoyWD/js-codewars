// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (a, b) =>
  a === b
    ? "Draw!"
    : a === "rock" && b === "scissors"
    ? "Player 1 won!"
    : a === "rock" && b === "paper"
    ? "Player 2 won!"
    : a === "scissors" && b === "rock"
    ? "Player 2 won!"
    : a === "scissors" && b === "paper"
    ? "Player 1 won!"
    : a === "paper" && b === "rock"
    ? "Player 1 won!"
    : "Player 2 won!";

console.log(rps("scissors", "paper"));
console.log(rps("scissors", "rock"));
console.log(rps("paper", "paper"));

// Solucion alternativa

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
/*Utiliza destructuring, dandole los valores a los que le ganan los posibles parametros*/
