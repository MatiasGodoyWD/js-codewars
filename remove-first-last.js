// Remove First and Last Character

const removeChar = (s) => s.substring(1, s.length - 1);

console.log(removeChar("Pikachu"));

// forma mejor

const removeChar2 = (str) => str.slice(1, -1);
