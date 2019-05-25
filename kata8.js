const multiplicationTable = function(maxValue) {
  let arr = [];
  for (let i = 1; i <= maxValue; i++) {
    for (let e = 1; e <= maxValue; e++) {
      if (e == maxValue) {
        arr.push(i * e + '\n');
      }
      else {
        arr.push(i * e + ' ');
      }
    }
  }
  arr = arr.join('');
  return arr;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));