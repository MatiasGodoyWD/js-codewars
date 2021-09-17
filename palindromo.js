// Write function isPalindrom that checks if a given string (case insensitive) is a palindrom.
//Una palabra es un palindromo cuando se lee igual de izquierda a derecha y de derecha a izquierda.

const isPalindrome = (word) => {
  return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
};

/* 1-Paso ambas palabras a minuscula para evitar errores en el checkeo entre mayusculas y minusculas.
   2- Separo la palabra con split,que me devuelve un array con las letras
   3- Doy vuelta el array con reverse
   4- Junto las letras del array
*/

console.log(isPalindrome("ada"));
console.log(isPalindrome("Ada"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("bob"));
console.log(isPalindrome("hello"));

// Forma mas limpia alternativa
