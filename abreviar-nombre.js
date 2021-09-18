// Write a function to convert a name into initials.
//This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
// Devolver el nombre dado pero abreviado, tomando solo la primer letra de cada nombre
//, y en mayuscula, separados por un punto
const abbrevName = (name) =>
  name
    .split(" ")
    .map((st) => st.slice(0, 1).toUpperCase())
    .join(".");

console.log(abbrevName("Horacio Rodriguez Larreta"));
