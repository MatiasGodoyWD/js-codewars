// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

const strCount = (str, letter) => {
  const strArr = str.split("");
  let counter = 0;
  strArr.forEach((lett) =>
    lett.toLowerCase() === letter.toLowerCase() ? counter++ : counter
  );
  return counter;
};

// forma alternativa
function strCount1(str, letter) {
  let newStr = str.split(letter); // esto devuelve [`hell`,'o'] o sea es un array de un length de 2
  console.log(str.split(letter).length) - 1; // Como la o aparece una sola vez, le resta 1.
  return newStr; //Tonces, va a dividir siempre a la palabra en una vez mas que las apariciones de la letra, por eso
  // el menos 1
}

console.log(strCount1("Hello", "o"));
console.log(strCount("Hello", "l"));
console.log(strCount("Hello", "h"));
