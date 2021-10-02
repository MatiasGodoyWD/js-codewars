// start: map1 = "01000000X000X011X0X"
// end:   map1 = "11111111X000X111X0X"
// total = 15
// infected = 11
// percentage = 100*11/15 = 73.33333333333333

const pandemia = (s) => {
  let dividedMap = s.split("X");
  let newMap = dividedMap.join("");
  const arr = dividedMap.map((str) => (str.includes("1") ? str.length : 0));

  return (arr.reduce((a, b) => a + b, 0) * 100) / newMap.length;
};

const infected = (s) => {
  return !s.includes("1") && !s.includes("0")
    ? 0
    : (s
        .split("X")
        .map((str) => (str.includes("1") ? str.length : 0))
        .reduce((a, b) => a + b, 0) *
        100) /
        s.split("X").join("").length;
};
