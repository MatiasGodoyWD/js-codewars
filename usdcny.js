const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;

console.log(usdcny(3));
console.log(usdcny(3.3));
console.log(usdcny(3.365656));
