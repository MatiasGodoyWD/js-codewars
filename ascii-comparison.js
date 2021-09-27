// You will be given two ASCII strings, a and b. Your task is write a
//  function to determine which one of these strings is "worth" more, and return it.

// A string's worth is determined by the sum of its ASCII codepoint indexes.
//  So, for example, the string HELLO has a value of 372: H is codepoint 72,
//   E 69, L 76, and O is 79. The sum of these values is 372.

// In the event of a tie, you should return the first string, i.e. a.

const wordCodePoint = (word) => {
  let total = 0;
  for (let i = 0; i < word.length; i++) {
    total += word.codePointAt(i);
  }
  return total;
};

const highestValue = (a, b) => (wordCodePoint(a) >= wordCodePoint(b) ? a : b);

// con reduce
function highestValue(a, b) {
  return [...a].reduce((c, d) => c + d.charCodeAt(), 0) >=
    [...b].reduce((c, d) => c + d.charCodeAt(), 0)
    ? a
    : b;
}

wordCodePoint("HELLO");
